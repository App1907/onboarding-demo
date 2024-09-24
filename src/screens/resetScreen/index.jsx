import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform, ScrollView, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

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
              <Image source={require('../../assets/icons/error.png')} style={styles.toastIcon} />
              <Text style={styles.toastMessage}>Your password doesn’t match</Text>
            </View>
          )}

          <Image source={require('../../assets/icons/quivio-logo1.png')} style={styles.logo} />

          <Text style={styles.headerText}>Reset Password</Text>
          <Text style={styles.subText}>Enter in your new password.</Text>

          <View style={[styles.inputContainer, confirmPasswordError && styles.errorBorder]}>
            <Image source={require('../../assets/icons/lock.png')} style={[styles.icon, confirmPasswordError && styles.errorIcon]} />
            <TextInput
              placeholder="New Password"
              style={styles.input}
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry={!passwordVisible}
              autoCapitalize="none"
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <Image source={require('../../assets/icons/eye.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>

          <View style={styles.validationContainer}>
            <ValidationItem isValid={passwordValidation.isLengthValid} label="8 characters or above" />
            <ValidationItem isValid={passwordValidation.hasSpecialChar} label="1 or more special characters" />
            <ValidationItem isValid={passwordValidation.hasNumber} label="1 or more numbers" />
            <ValidationItem isValid={passwordValidation.hasUppercase && passwordValidation.hasLowercase} label="Upper and lowercase" />
          </View>

          <View style={[styles.inputContainer, confirmPasswordError && styles.errorBorder]}>
            <Image source={require('../../assets/icons/lock.png')} style={[styles.icon, confirmPasswordError && styles.errorIcon]} />
            <TextInput
              placeholder="Confirm Password"
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!confirmPasswordVisible}
              autoCapitalize="none"
            />
            <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
              <Image source={require('../../assets/icons/eye.png')} style={styles.icon} />
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
                <Image source={require('../../assets/icons/key.png')} style={styles.modalIcon} />
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
      source={isValid ? require('../../assets/icons/right.png') : require('../../assets/icons/cross.png')}
      style={styles.validationIcon}
    />
    <Text style={[styles.validationText, isValid ? styles.valid : styles.invalid]}>{label}</Text>
  </View>
);



export default ResetPasswordScreen;
