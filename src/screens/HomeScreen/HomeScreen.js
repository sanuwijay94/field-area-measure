import React, { useEffect, useState } from 'react'
import { Image, FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Button} from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import Modal from "react-native-modal";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function HomeScreen(props, {navigation}) {

    
    const [cropName, setCropName] = useState('')
    const [area, setArea] = useState('')
    const [fields, setfields] = useState([])

    const fieldRef = firebase.firestore().collection('fields')
    const userID = props.extraData.id

    const [isAddModalVisible, setIsAddModalVisible] = React.useState(false);
    const handleAddModal = () => setIsAddModalVisible(() => !isAddModalVisible);

    const [isEditModalVisible, setIsEditModalVisible] = React.useState(false);
    const handleEditModal = () => setIsEditModalVisible(() => !isEditModalVisible);

    const [isConfirmModalVisible, setIsConfirmModalVisible] = React.useState(false);
    const handleConfirmModal = () => setIsConfirmModalVisible(() => !isConfirmModalVisible);

    const [isMapModalVisible, setIsMapModalVisible] = React.useState(false);
    const handleMapModal = () => setIsMapModalVisible(() => !isMapModalVisible);

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
                    handleAddModal()
                })
                .catch((error) => {
                    alert(error)
                });
        }
    }

    const onEditButtonPress = () => {
        /* if (cropName && cropName.length > 0) {
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                crop: field.crop,
                area: field.area,
                authorID: userID,
                createdAt: timestamp,
            };
            fieldRef
                .add(data)
                .then(_doc => {
                    setCropName('')
                    setArea('')
                    Keyboard.dismiss()
                    handleAddModal()
                })
                .catch((error) => {
                    alert(error)
                });
        } */
    }

    const renderField = ({item}) => {
        return (
            <View style={styles.fieldContainer}>
                <TouchableOpacity
                    onPress={() => {handleEditModal}}
                    style={styles.fieldBox}
                    onPress={() => {handleEditModal}}>
                    <Text style={styles.buttonText}>
                        {item.crop}
                    </Text>
                    <Text style={styles.buttonText}>
                        {item.area} m²
                    </Text>
                </TouchableOpacity>
            </View>
        
        )
    } 

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.logoutButton}
                onPress= {handleConfirmModal}>
                
                <Image
                    style={styles.logoutLogo}
                    source={require('../../../assets/logout-icon-png-3.jpg')}
                />
            </TouchableOpacity>
            
            <Modal style ={styles.modal}transparent = {false} isVisible={isConfirmModalVisible} >
                <View style={{ flex: 1 }}>
                    <Text style={styles.buttonText3}>Do you want to logout?</Text>
                    <View style={styles.formContainer}>
                        <TouchableOpacity style={styles.savebutton} onPress={() => onLogoutPress()}>
                            <Text style={styles.buttonText}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelbutton} onPress={handleConfirmModal}>
                            <Text style={styles.buttonText}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal transparent = {false} isVisible={isMapModalVisible} >
                <MapView
                    style={{ flex: 1 }}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation
                    initialRegion={{
                    latitude: 6.923099,
                    longitude: 79.964965,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421}}
                />
            </Modal>
            { fields && (
                <View style={styles.listContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleAddModal}>
                        <Text style={styles.buttonText1}>Add New Field</Text>
                    </TouchableOpacity>
                    <Modal isVisible={isAddModalVisible}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.buttonText2}>Crop</Text>
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
                            <View style={styles.formContainer1}>
                                <TextInput
                                    style={styles.input1}
                                    placeholder='Add Area'
                                    placeholderTextColor="#aaaaaa"
                                    onChangeText={(area) => setArea(area)}
                                    value={area}
                                    underlineColorAndroid="white"
                                    autoCapitalize="none"
                                />
                                <TouchableOpacity 
                                    style={styles.logoutButton}
                                    onPress= {handleMapModal}>
                                    
                                    <Image
                                        style={styles.logoutLogo1}
                                        source={require('../../../assets/map.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.formContainer}>
                                <TouchableOpacity style={styles.savebutton} onPress={() => onAddButtonPress()}>
                                    <Text style={styles.buttonText}>Save</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.cancelbutton} onPress={handleAddModal}>
                                    <Text style={styles.buttonText}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                    <Modal isVisible={isEditModalVisible}>
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
                                <TouchableOpacity style={styles.savebutton} onPress={() => onEditButtonPress()}>
                                    <Text style={styles.buttonText}>Edit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.cancelbutton} onPress={handleEditModal}>
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