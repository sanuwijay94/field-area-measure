import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    formContainer: {
        flexDirection: 'row',
        height: 20,
        marginTop: 40,
        marginBottom: 50,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer1: {
        flexDirection: 'row',
        width: 600,
    },
    input: {
        height: 50,
        borderRadius: 50,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 38,
        marginTop: 10
    },
    input1: {
        height: 50,
        width: 330,
        borderRadius: 50,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 38,
        marginTop: 10
    },
    button: {
        height: 60,
        borderRadius: 80,
        backgroundColor: '#D8A339',
        width: 250,
        marginBottom: 30,
        alignItems: "center",
        justifyContent: 'center',
        alignSelf: 'center',
        right: 0,
        
    },
    savebutton: {
        height: 60,
        borderRadius: 80,
        backgroundColor: '#D8A339',
        width: 120,
        marginRight: 30,
        marginLeft: 30,
        alignItems: "center",
        justifyContent: 'center',
        alignSelf: 'flex-start',
        
        
    },
    cancelbutton: {
        height: 60,
        borderRadius: 80,
        backgroundColor: '#D8A339',
        width: 120,
        marginRight: 30,
        marginLeft: 30,
        alignItems: "center",
        justifyContent: 'center',
        alignSelf: 'flex-start',
        
        
    },
    logoutButton: {
        flexDirection: 'row',
        height: 50,
        borderRadius: 100,
        marginTop: 10,
        marginRight: 10,
        backgroundColor: '#D8A339',
        width: 50,
        alignItems: "center",
        justifyContent: 'center',
        alignSelf: 'flex-end'
    },
    fieldBox: {
        height: 150,
        borderRadius: 20,
        backgroundColor: '#998566',
        width: 250,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20
    },
    buttonText1: {
        color: 'white',
        fontSize: 20
    },
    buttonText2: {
        color: 'white',
        fontSize: 28
    },
    buttonText3: {
        color: 'black',
        marginTop: 150,
        marginBottom: 50,
        fontSize: 28,
        alignSelf: "center",
    },
    listContainer: {
        marginTop: 20,
        color: 'black',
        padding: 20,
    },
    fieldContainer: {
        marginTop: 16,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingBottom: 16
    },
    setCropName: {
        fontSize: 20,
        color: '#333333'
    },
    logoutLogo: {
        height: 25,
        width: 25,
        alignSelf: "center",
        marginBottom: 4,
    },
    logoutLogo1: {
        height: 36,
        width: 25,
        alignSelf: "center",
        marginBottom: 4,
    },
    settingsLogo: {
        height: 25,
        width: 25,
        alignSelf: "center",
    },
    modal: {
        flex: 1,
        height: 20,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 20,
        alignSelf: "center",
        marginTop: 150,
        marginBottom: 300,
     },

})