import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VerifyAccountAccessScreen = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputs = useRef([]);
  const [resendTimer, setResendTimer] = useState(60);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [attemptsRemaining, setAttemptsRemaining] = useState(3);
  const [borderColor, setBorderColor] = useState('#C7CFD7');
  const [textColor, setTextColor] = useState('#0B1721');
  const [showLockModal, setShowLockModal] = useState(false);
  const [showVerifiedModal, setShowVerifiedModal] = useState(false);

  useEffect(() => {
    let timer;
    if (resendDisabled && resendTimer > 0) {
      timer = setTimeout(() => {
        setResendTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (resendTimer === 0) {
      setResendDisabled(false);
    }
    return () => clearTimeout(timer);
  }, [resendDisabled, resendTimer]);

  const handleConfirmCode = () => {
    const enteredCode = code.join('');
    if (enteredCode.length === 6) {
      if (enteredCode === '123456') {
        setBorderColor('#C7CFD7');
        setTextColor('#0B1721');
        setErrorMessage('');
        setShowVerifiedModal(true);
      } else {
        setAttemptsRemaining(attemptsRemaining - 1);
        setErrorMessage(`The code you entered is incorrect, you have ${attemptsRemaining - 1} attempts remaining.`);
        setBorderColor('red');
        setTextColor('red');
        if (attemptsRemaining - 1 === 0) {
          setShowLockModal(true);
        }
      }
    } else {
      setErrorMessage('Please enter a valid 6-digit code.');
    }
  };

  const handleResendCode = () => {
    setResendDisabled(true);
    setResendTimer(60);
    alert('Resending code...');
  };

  const handleChangeText = (text, index) => {
    let newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && code[index] === '' && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleBackToLogin = () => {
    setShowLockModal(false);
    navigation.navigate('SignInScreen');
  };

  const handleCloseVerifiedModal = () => {
    setShowVerifiedModal(false);
    navigation.navigate('BottomStack');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={require('../assets/icons/back.png')} style={styles.backIcon} />
        </TouchableOpacity>

        <Text style={styles.headerText}>Verify Account Access</Text>
        <Text style={styles.subText}>Enter the verification code sent to</Text>
        <Text style={styles.phoneText}>+1-788-895-5435.</Text>

        <View style={[styles.otpContainer, { borderColor: borderColor }]}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputs.current[index] = ref)}
              style={[styles.otpInput, { color: textColor }]}
              value={digit}
              onChangeText={(text) => handleChangeText(text, index)}
              keyboardType="number-pad"
              maxLength={1}
              onKeyPress={(e) => handleKeyPress(e, index)}
            />
          ))}
        </View>

        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

        {resendDisabled ? (
          <Text style={styles.resendTimerText}>Resend in 00:{resendTimer < 10 ? `0${resendTimer}` : resendTimer}</Text>
        ) : (
          <TouchableOpacity onPress={handleResendCode} style={styles.resendButton}>
            <Text style={styles.resendText}>Resend</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[styles.confirmButton, code.join('').length !== 6 && styles.disabledButton]}
          onPress={handleConfirmCode}
          disabled={code.join('').length !== 6}
        >
          <Text style={styles.confirmText}>Confirm Code</Text>
        </TouchableOpacity>


        <Modal
          visible={showLockModal}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setShowLockModal(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image source={require('../assets/icons/lock.png')} style={styles.lockIcon} />
              <Text style={styles.modalTitle}>Too many failed attempts</Text>
              <Text style={styles.modalSubText}>Your account has been locked, please try again in one hour.</Text>
              <TouchableOpacity onPress={handleBackToLogin} style={styles.backToLoginButton}>
                <Text style={styles.backToLoginText}>Back to Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>


        <Modal
          visible={showVerifiedModal}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setShowVerifiedModal(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image source={require('../assets/icons/verified.png')} style={styles.verifiedIcon} />
              <Text style={styles.modalTitle}>Account Verified!</Text>
              <Text style={styles.modalSubText}>Your account has been verified successfully.</Text>
              <TouchableOpacity onPress={handleCloseVerifiedModal} style={styles.backToLoginButton}>
                <Text style={styles.backToLoginText}>Back to Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

      </View>
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
    marginTop:30,
    marginBottom: 30,
  },
  backIcon: {
    width: 48,
    height: 48,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0B1721',
    marginTop: 20,
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#4F5F72',
  },
  phoneText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0B1721',
    marginBottom: 40,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  otpInput: {
    width: 30,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: '#0B1721',
    borderRightWidth: 1,
    borderRightColor: '#C7CFD7',
  },
  resendButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  resendText: {
    color: '#0B1721',
    fontSize: 14,
    fontWeight: '600',
  },
  resendTimerText: {
    color: '#0B1721',
    fontSize: 14,
    fontWeight: '600',
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  confirmButton: {
    backgroundColor: '#148fcd',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 70,
  },
  confirmText: {
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
    justifyContent: 'center',
  },
  lockIcon: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0B1721',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalSubText: {
    fontSize: 16,
    color: '#4F5F72',
    textAlign: 'center',
    marginBottom: 20,
  },
  backToLoginButton: {
    backgroundColor: '#148fcd',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  backToLoginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  verifiedIcon: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
});

export default VerifyAccountAccessScreen;
