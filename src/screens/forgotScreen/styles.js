import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E6EDF3',
      paddingHorizontal: 30,
      paddingVertical: 40,
    },
    backButton: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      marginBottom: 30,
    },
    backIcon: {
      width: 48,
      height: 48,
    },
    headerText: {
      marginTop: 25,
      fontSize: 28,
      fontWeight: 'bold',
      color: '#0B1721',
      marginBottom: 10,
    },
    subText: {
      fontSize: 16,
      fontWeight: '400',
      color: '#4F5F72',
      marginBottom: 40,
    },
    inputContainer: {
      width: '100%',
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      paddingHorizontal: 10,
      marginBottom: 20,
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
    errorMessage: {
      color: 'red',
      marginBottom: 20,
    },
    sendLinkButton: {
      backgroundColor: '#148fcd',
      paddingVertical: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 80,
    },
    sendLinkText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: '600',
    },
    toastContainer: {
      width: 345,
      height: 52,
      flexDirection: 'row',
      backgroundColor: 'red',
      position: 'absolute',
      //padding: 15,
      //justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 30,
      marginTop: 65,
      marginHorizontal: 25,
      zIndex: 2,
      borderRadius: 10,
    },
    toastImage: {
      width: 28,
      height: 28,
    },
    toastMessage: {
      color: '#FFFFFF',
      marginLeft: 10,
      fontSize: 13,
      fontWeight: '500',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: 300,
      padding: 20,
      backgroundColor: '#fff',
      borderRadius: 15,
      alignItems: 'center',
    },
    linkIcon: {
      width: 50,
      height: 50,
      marginBottom: 20,
    },
    modalTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#122336',
    },
    modalMessage: {
      fontSize: 16,
      textAlign: 'center',
      color: '#4F5F72',
      marginBottom: 20,
    },
    modalButton: {
      backgroundColor: '#148fcd',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
    },
    modalButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
  });