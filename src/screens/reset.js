import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform, ScrollView, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ResetPasswordScreen = () => {
    const navigation = useNavigation();

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [passwordUpdatedModalVisible, setPasswordUpdatedModalVisible] = useState(false);


  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000); 

      return () => clearTimeout(timer); 
    }
  }, [showToast]);


  const validatePassword = () => {
    const hasUppercase = /[A-Z]/.test(newPassword);
    const hasLowercase = /[a-z]/.test(newPassword);
    const hasNumber = /[0-9]/.test(newPassword);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);
    const isLengthValid = newPassword.length >= 8;
    return {
      hasUppercase,
      hasLowercase,
      hasNumber,
      hasSpecialChar,
      isLengthValid,
    };
  };

  const passwordValidation = validatePassword();

  const handleSubmit = () => {
    setConfirmPasswordError(false);
    setShowToast(false);

    if (confirmPassword !== newPassword) {
      setConfirmPasswordError(true);
      setShowToast(true);
    } else {
      setPasswordUpdatedModalVisible(true);
    }
  };

  const closePasswordUpdatedModal = () => {
    setPasswordUpdatedModalVisible(false);
    navigation.navigate('SignInScreen');

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
              <Image source={require('../assets/icons/error.png')} style={styles.toastIcon} />
              <Text style={styles.toastMessage}>Your password doesn’t match</Text>
            </View>
          )}

          <Image source={require('../assets/icons/quivio-logo1.png')} style={styles.logo} />

          <Text style={styles.headerText}>Reset Password</Text>
          <Text style={styles.subText}>Enter in your new password.</Text>

          <View style={[styles.inputContainer, confirmPasswordError && styles.errorBorder]}>
            <Image source={require('../assets/icons/lock.png')} style={[styles.icon, confirmPasswordError && styles.errorIcon]} />
            <TextInput
              placeholder="New Password"
              style={styles.input}
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry={!passwordVisible}
              autoCapitalize="none"
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <Image source={require('../assets/icons/eye.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>

          <View style={styles.validationContainer}>
            <ValidationItem isValid={passwordValidation.isLengthValid} label="8 characters or above" />
            <ValidationItem isValid={passwordValidation.hasSpecialChar} label="1 or more special characters" />
            <ValidationItem isValid={passwordValidation.hasNumber} label="1 or more numbers" />
            <ValidationItem isValid={passwordValidation.hasUppercase && passwordValidation.hasLowercase} label="Upper and lowercase" />
          </View>

          <View style={[styles.inputContainer, confirmPasswordError && styles.errorBorder]}>
            <Image source={require('../assets/icons/lock.png')} style={[styles.icon, confirmPasswordError && styles.errorIcon]} />
            <TextInput
              placeholder="Confirm Password"
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!confirmPasswordVisible}
              autoCapitalize="none"
            />
            <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
              <Image source={require('../assets/icons/eye.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
          {confirmPasswordError && (
            <Text style={styles.errorMessage}>Passwords do not match.</Text>
          )}

          <TouchableOpacity
            style={[styles.submitButton, (!newPassword || !confirmPassword) && styles.disabledButton]}
            onPress={handleSubmit}
            disabled={!newPassword || !confirmPassword}
          >
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>


          <Modal visible={passwordUpdatedModalVisible} transparent={true} animationType="fade">
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Image source={require('../assets/icons/key.png')} style={styles.modalIcon} />
                <Text style={styles.modalTitle}>Password Updated!</Text>
                <Text style={styles.modalMessage}>Your new password has been updated successfully.</Text>
                <TouchableOpacity style={styles.modalButton} onPress={closePasswordUpdatedModal}>
                  <Text style={styles.modalButtonText}>Back to Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const ValidationItem = ({ isValid, label }) => (
  <View style={styles.validationItem}>
    <Image
      source={isValid ? require('../assets/icons/right.png') : require('../assets/icons/cross.png')}
      style={styles.validationIcon}
    />
    <Text style={[styles.validationText, isValid ? styles.valid : styles.invalid]}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
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

export default ResetPasswordScreen;
