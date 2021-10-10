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
    input: {
        height: 50,
        borderRadius: 50,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 38,
        marginTop: 10
    },
    button: {
        height: 80,
        borderRadius: 100,
        backgroundColor: 'black',
        width: 120,
        alignItems: "center",
        justifyContent: 'center',
        alignSelf: 'center',
        right: 0,
        
    },
    savebutton: {
        height: 60,
        borderRadius: 80,
        backgroundColor: 'black',
        width: 120,
        marginRight: 30,
        alignItems: "center",
        justifyContent: 'center',
        alignSelf: 'flex-start',
        
        
    },
    cancelbutton: {
        height: 60,
        borderRadius: 80,
        backgroundColor: 'black',
        width: 120,
        marginLeft: 30,
        alignItems: "center",
        justifyContent: 'center',
        alignSelf: 'flex-start',
        
        
    },
    logoutButton: {
        height: 55,
        borderRadius: 50,
        backgroundColor: 'black',
        width: 500,
        alignItems: "center",
        justifyContent: 'center'
    },
    fieldBox: {
        height: 150,
        borderRadius: 20,
        backgroundColor: '#808080',
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
        fontSize: 34
    },
    buttonText2: {
        color: 'white',
        fontSize: 28
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
    }
})