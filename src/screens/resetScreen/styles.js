import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 40,
      backgroundColor: '#E6EDF3',
      paddingHorizontal: 30,
      paddingVertical: 40,
    },
    toastContainer: {
      backgroundColor: 'red',
      padding: 15,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      marginBottom: 20,

      width: 345,
      height: 52,


      position: 'absolute',
      //padding: 15,
      //justifyContent: 'center',

      paddingLeft: 30,
      marginTop: 35,
      marginHorizontal: 25,
      zIndex: 2,
    },
    toastIcon: {
      width: 20,
      height: 20,
      marginRight: 10,
    },
    toastMessage: {
      color: '#fff',
      fontSize: 14,
      fontWeight: '500',
    },
    logo: {
      width: 83,
      height: 55,
      marginBottom: 30,
    },
    headerText: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#0B1721',
      marginBottom: 10,
    },
    subText: {
      fontSize: 16,
      fontWeight: '400',
      color: '#4F5F72',
      marginBottom: 20,
    },
    inputContainer: {
      width: '100%',
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      paddingHorizontal: 10,
      marginBottom: 10,
      elevation: 2,
    },
    input: {
      flex: 1,
      paddingVertical: 10,
      paddingHorizontal: 10,
      fontSize: 16,
      color: '#000',
    },
    icon: {
      width: 24,
      height: 24,
      resizeMode: 'contain',
      marginRight: 10,
    },
    errorBorder: {
      borderColor: 'red',
      borderWidth: 1,
    },
    errorIcon: {
      tintColor: 'red',
    },
    validationContainer: {
      marginBottom: 20,
    },
    validationItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    validationIcon: {
      width: 20,
      height: 20,
      marginRight: 10,
    },
    validationText: {
      fontSize: 14,
    },
    valid: {
      color: 'green',
    },
    invalid: {
      color: 'red',
    },
    errorMessage: {
      color: 'red',
      marginBottom: 20,
    },
    submitButton: {
      backgroundColor: '#148fcd',
      paddingVertical: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 20,
    },
    submitText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: '600',
    },
    disabledButton: {
      backgroundColor: '#A9C6D9',
    },
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
      width: 349,
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
    },
    modalIcon: {
      width: 40,
      height: 40,
      marginBottom: 20,
    },
    modalTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#0B1721',
      marginBottom: 10,
    },
    modalMessage: {
      fontSize: 16,
      color: '#4F5F72',
      textAlign: 'center',
      marginBottom: 20,
    },
    modalButton: {
      backgroundColor: '#148fcd',
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderRadius: 10,
    },
    modalButtonText: {
      color: '#fff',
      fontSize: 16,
    },
  });