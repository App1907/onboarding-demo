import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerTop: {
    flex: 1,
    backgroundColor: '#E6EDF3',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    marginBottom: 80,
  },
  scrollViewContent: {
    //paddingHorizontal: 15,
  },
  box: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 50,
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  item: {
    alignItems: 'center',
    //marginHorizontal: 25,
    flexDirection: 'row',
  },
  image: {
    width: 16,
    height: 16,
    marginTop: 10,
    marginRight: 10,
  },
  text: {
    color: 'white',
    fontSize: 14,
  },
  container: {
    flex: 1,
    backgroundColor: '#E6EDF3', //#E6EDF3
    paddingHorizontal: 30,
  },
  logoContainer: {
    backgroundColor: '#148fcd',
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  logo: {
    marginTop: 30,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  tagHeader: {
    color: '#F8F9F9',
    fontFamily: 'Montserrat',
    fontSize: 28,
    fontWeight: '800',
    marginTop: 10,
  },
  tagline: {
    color: '#F8F9F9',
    fontFamily: 'Montserrat',
    fontSize: 17,
    fontWeight: '400',
    marginTop: 5,
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '80%',
    right: 28,
    marginTop: 20,
  },
  flat: {
    width: 393,
    height: 34,
  },
  featureText: {
    color: '#fff',
    fontSize: 12,
  },
  formContainer: {
    marginTop: 40,
    //paddingHorizontal: 30,
  },
  signInText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0B1721',
  },
  subText: {
    marginTop: 7,
    fontSize: 15,
    fontWeight: '400',
    color: '#4F5F72',
    marginBottom: 20,
  },
  inputContainer: {
    width: 335,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7f9fa',
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
  forgotPassword: {
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    color: '#081017',
    fontSize: 14,
    fontWeight: '600',
  },
  signInButton: {
    backgroundColor: '#148fcd',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  errorBorder: {
    borderColor: 'red',
    borderWidth: 2,
  },
  errorIcon: {
    tintColor: 'red',
  },
  errorText: {
    color: 'red',
  },
  errorMessage: {
    color: '#122336',
    marginBottom: 20,
  },
  toastContainer: {
    width: 345,
    height: 52,
    flexDirection: 'row',
    backgroundColor: 'red',
    padding: 15,
    //justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 30,
    marginHorizontal: 25,
    marginBottom: 15,
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
  errorContainer: {
    width: 345,
    height: 44,
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  errorImage: {
    width: 17,
    height: 17,
    marginBottom: 19,
    borderColor: 'red',
    borderWidth: 1.5,
    borderRadius: 8,
  },
  errorMessage: {
    color: '#122636',
    marginLeft: 10,
    fontSize: 13,
    fontWeight: '400',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 346,
    height: 300,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    alignItems: 'center',
  },
  lockIcon: {
    width: 50,
    height: 50,
    marginBottom: 20,
    tintColor: '#ff0000',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#122336',
  },
  modalMessage: {
    width: 269,
    height: 60,
    fontSize: 16,
    textAlign: 'center',
    color: '#60707D',
    marginBottom: 20,
  },
  modalButton: {
    width: 126,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2A7BBB',
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