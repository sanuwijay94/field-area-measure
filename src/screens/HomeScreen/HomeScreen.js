import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Button } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import Modal from "react-native-modal";

export default function HomeScreen(props, {navigation}) {

    
    const [cropName, setCropName] = useState('')
    const [area, setArea] = useState('')
    const [fields, setfields] = useState([])

    const fieldRef = firebase.firestore().collection('fields')
    const userID = props.extraData.id

    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    const onLogoutPress = async() => {
      
        try {
            await firebase
            .auth()
            .signOut()
            
             console.log('User signed out!');
             navigation.navigate('Login')
            
        }catch(error){
                alert(error)
        } 
    }

    useEffect(() => {
        fieldRef
            .where("authorID", "==", userID)
            .orderBy('createdAt', 'desc')
            .onSnapshot(
                querySnapshot => {
                    const newFields = []
                    querySnapshot.forEach(doc => {
                        const field = doc.data()
                        field.id = doc.id
                        newFields.push(field)
                    });
                    setfields(newFields)
                },
                error => {
                    console.log(error)
                }
            )
    }, [])

    const onAddButtonPress = () => {
        if (cropName && cropName.length > 0) {
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                crop: cropName,
                area: area,
                authorID: userID,
                createdAt: timestamp,
            };
            fieldRef
                .add(data)
                .then(_doc => {
                    setCropName('')
                    setArea('')
                    Keyboard.dismiss()
                    handleModal()
                })
                .catch((error) => {
                    alert(error)
                });
        }
    }

    const onfieldItemPress = (field) => {}

    const renderField = ({item}) => {
        return (
            <View style={styles.fieldContainer}>
                <TouchableOpacity
                    style={styles.fieldBox}
                    onPress={() => onfieldItemPress(item)}>
                    <Text style={styles.buttonText}>
                        {item.crop}
                    </Text>
                    <Text style={styles.buttonText}>
                        {item.area}ft
                    </Text>
                </TouchableOpacity>
                
            </View>
        
        )
    } 

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.logoutButton}
                onPress={() => onLogoutPress()}>
                <Text style={styles.buttonText}>Log out</Text>
            </TouchableOpacity>
            {/* <View style={styles.formContainer}> */}
             {/*    <TextInput
                    style={styles.input}
                    placeholder='Add new field'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setCropName(text)}
                    value={cropName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                /> */}
                
            {/* </View> */}
            { fields && (
                <View style={styles.listContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleModal}>
                        <Text style={styles.buttonText1}>+</Text>
                    </TouchableOpacity>
                    <Modal isVisible={isModalVisible}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.buttonText2}>Crop Name</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Add Crop Name'
                                placeholderTextColor="#aaaaaa"
                                onChangeText={(crop) => setCropName(crop)}
                                value={cropName}
                                underlineColorAndroid="transparent"
                                autoCapitalize="none"
                            />
                            <Text style={styles.buttonText2}>Area</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Add Area'
                                placeholderTextColor="#aaaaaa"
                                onChangeText={(area) => setArea(area)}
                                value={area}
                                underlineColorAndroid="transparent"
                                autoCapitalize="none"
                            />
                            <View style={styles.formContainer}>
                                <TouchableOpacity style={styles.savebutton} onPress={() => onAddButtonPress()}>
                                    <Text style={styles.buttonText}>Save</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.cancelbutton} onPress={handleModal}>
                                    <Text style={styles.buttonText}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                    <FlatList
                        data={fields}
                        renderItem={renderField}
                        keyExtractor={(item) => item.id}
                        removeClippedSubviews={true}
                    />
                </View>
            )}
        </View>
    )
}