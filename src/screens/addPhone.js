import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Modal, KeyboardAvoidingView } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { useNavigation } from '@react-navigation/native';

const AddPhoneNumberScreen = () => {
  const navigation = useNavigation();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('US');
  const [callingCode, setCallingCode] = useState('+1');
  const [errorMessage, setErrorMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false); 

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]+$/;
    if (!phone) {
      return 'Phone number is required';
    } else if (!phoneRegex.test(phone)) {
      return 'Phone number must contain only numbers';
    } else if (phone.length < 10) {
      return 'Phone number must be at least 10 digits long';
    }
    return '';
  };

  const handleCountrySelect = (country) => {
    setCountryCode(country.cca2);
    setCallingCode(`+${country.callingCode[0]}`);
  };

  const handleSendCode = () => {
    const validationError = validatePhoneNumber(phoneNumber);
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    if (phoneNumber === '8433224160') {
      setShowToast(true);
      return;
    }

    alert(`Sending code to ${callingCode} ${phoneNumber}`);
    setErrorMessage('');
    navigation.navigate('VerifyAccountAccessScreen');
  };

  const handleExit = () => {
    setShowExitModal(true);
  };

  const closeExitModal = () => {
    setShowExitModal(false);
  };

  const confirmExit = () => {
    setShowExitModal(false);
    navigation.navigate('HomeScreen'); 
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        {showToast && (
          <View style={styles.toastContainer}>
            <Image source={require('../assets/icons/error.png')} style={styles.toastIcon} />
            <Text style={styles.toastMessage}>User exists. Try a different number.</Text>
          </View>
        )}

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={require('../assets/icons/back.png')} style={styles.backIcon} />
        </TouchableOpacity>

        <Text style={styles.headerText}>Add Phone Number</Text>
        <Text style={styles.subText}>To initiate the two-factor authentication, provide your phone number below.</Text>

        <View style={styles.inputContainer}>
          <View style={styles.flagContainer}>
            <CountryPicker
              countryCode={countryCode}
              withCallingCode
              withFlag
              withFilter
              withCallingCodeButton
              onSelect={handleCountrySelect}
              containerButtonStyle={styles.countryPickerButton}
            />
          </View>
          <Text style={styles.callingCodeText}>{callingCode}</Text>
          <TextInput
            style={styles.phoneInput}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={(text) => {
              setPhoneNumber(text);
              setErrorMessage('');
            }}
          />
        </View>

        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

        <TouchableOpacity style={styles.exitButton} onPress={handleExit}>
          <Text style={styles.exitText}>Exit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.sendCodeButton, !phoneNumber && styles.disabledButton]}
          onPress={handleSendCode}
          disabled={!phoneNumber}
        >
          <Text style={styles.sendCodeText}>Send Code</Text>
        </TouchableOpacity>

        <Modal visible={showExitModal} transparent={true} animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image source={require('../assets/icons/exit.png')} style={styles.modalIcon} />
              <Text style={styles.modalTitle}>Exit 2FA?</Text>
              <Text style={styles.modalSubText}>
                Are you sure you want to exit 2FA, You will need to redo it again.
              </Text>
              <View style={styles.modalButtonContainer}>
                <TouchableOpacity style={styles.modalCancelButton} onPress={closeExitModal}>
                  <Text style={styles.modalCancelText}>No, Continue</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalExitButton} onPress={confirmExit}>
                  <Text style={styles.modalExitText}>Yes, Exit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </View>
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
    marginTop: 10,
    marginBottom: 30,
  },
  toastContainer: {
    width: 335,
    height: 52,
    flexDirection: 'row',
    backgroundColor: 'red',
    position: 'absolute',
    alignItems: 'center',
    paddingLeft: 30,
    marginTop: 25,
    zIndex: 2,
    borderRadius: 10,
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
  backIcon: {
    width: 48,
    height: 48,
    marginTop: 40,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0B1721',
    marginTop: 50,
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#4F5F72',
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    elevation: 2,
  },
  flagContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countryPickerButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  callingCodeText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#4F5F72',
  },
  phoneInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    color: '#000',
    marginLeft: 10,
  },
  exitButton: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  exitText: {
    color: '#0B1721',
    fontSize: 14,
    fontWeight: '600',
  },
  sendCodeButton: {
    backgroundColor: '#148fcd',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 90,
  },
  sendCodeText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  disabledButton: {
    backgroundColor: '#A9C6D9',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalIcon: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0B1721',
    marginBottom: 10,
  },
  modalSubText: {
    fontSize: 16,
    color: '#4F5F72',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalCancelButton: {
    backgroundColor: '#E6EDF3',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  modalCancelText: {
    color: '#0B1721',
    fontSize: 16,
    fontWeight: '600',
  },
  modalExitButton: {
    backgroundColor: '#148fcd',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  modalExitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AddPhoneNumberScreen;
