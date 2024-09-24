import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform, ScrollView, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isLinkSent, setIsLinkSent] = useState(false); 

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000); 

      return () => clearTimeout(timer); 
    }
  }, [showToast]);

  const handleSendLink = () => {
    if (email !== 'ay@gmail.com') {
      setEmailError(true);
      setShowToast(true);
    } else {
      setEmailError(false);
      setShowToast(false);
      setIsLinkSent(true); 
    }
  };

  const closeModal = () => {
    setIsLinkSent(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      //keyboardVerticalOffset={100}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>

          {showToast && (
            <View style={styles.toastContainer}>
                <Image source={require('../assets/icons/error.png')} style={styles.toastImage} />
              <Text style={styles.toastMessage}>Email not found. Contact admin.</Text>
            </View>
          )}

          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Image source={require('../assets/icons/back.png')} style={styles.backIcon} />
          </TouchableOpacity>

          <Text style={styles.headerText}>Forgot Password</Text>
          <Text style={styles.subText}>Reset your password with just a few clicks</Text>

          <View style={[styles.inputContainer, emailError && styles.errorBorder]}>
            <Image source={require('../assets/icons/mail.png')} style={styles.icon} />
            <TextInput
              placeholder="Email Address"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          {/* {emailError && (
            <Text style={styles.errorMessage}>Invalid email address entered.</Text>
          )} */}

          <TouchableOpacity style={styles.sendLinkButton} onPress={handleSendLink}>
            <Text style={styles.sendLinkText}>Send Link</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>


      <Modal visible={isLinkSent} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={require('../assets/icons/link-sent.png')} style={styles.linkIcon} />
            <Text style={styles.modalTitle}>Link Sent!</Text>
            <Text style={styles.modalMessage}>
              The link to reset your password has been sent to your email address.
            </Text>
            <TouchableOpacity style={styles.modalButton} onPress={() => { 
                closeModal();
                navigation.navigate('ResetPasswordScreen');
                }} >
              <Text style={styles.modalButtonText}>Reset Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
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
    //padding: 15,
    //justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 30,
    marginTop: 20,
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

export default ForgotPasswordScreen;
