import {createSlice} from '@reduxjs/toolkit';
import {defaultLang, supportedLangs} from '../utils/i18nConfig';
const initialState = {
  lang: defaultLang, // "en" when app loads
  supportedLangs: {...supportedLangs},
  translations: {
    en: {
      tagline: 'Continuous improvement',
      ratings: 'Ratings',
      mobileno: 'Mobile number',
      sendotp: 'Send OTP',
      signWithMobileNumber: 'Sign in with Mobile number',
      verifyOtp: 'Verify OTP',
      selectLang: 'Please Select your Language',
      chooseyourfild:'Choose Your Fild',
      agencies: 'Agencies',
      materials: 'Materials',
      equipment: 'Equipment',
      users: 'Users',
      email: 'Email Address',
      enteryouragency:'Enter your agency name',
      whichtypofmaterial:'Which type of  materials you have?',
      next:'Next',
      rent :'Rent',
      sell:'Sell',
      both:'Both',
      chooseplan:'Choose a Subscription Plan',
      sendto:'Send To',

    },
    hi: {
      tagline: 'निरंतर सुधार',
      ratings: 'रेटिंग',
      mobileno: 'मोबाइल नंबर',
      sendotp: 'ओटीपी भेजें',
      email:'ईमेल पता',
      signWithMobileNumber: 'मोबाइल नंबर से साइन इन करें',
      verifyOtp: 'ओटीपी सत्यापित करें',
      selectLang: 'कृपया अपनी भाषा चुनें',
      chooseyourfild:'अपना क्षेत्र चुनें',
      agencies: 'एजन्‌सि',
      materials: 'सामग्री',
      equipment: 'उपकरण',
      users: 'उपयोगकर्ता',
      enteryouragency:'अपना एजेंसी का नाम दर्ज करें',
      whichtypofmaterial:'आपके पास किस प्रकार के सामग्री हैं?' ,
      next:'किराया',
      rent :'Rent',
      sell:'बेचना',
      both:'दोनों',
      chooseplan:'सदस्यता योजना चुनें',
      sendto:'भेजना',

    },
    gj: {
      tagline: 'સતત સુધારો',
      ratings: 'રેટિંગ',
      mobileno: 'મોબાઇલ નંબર',
      email:'ઇમેઇલ સરનામું',
      sendotp: 'ઓટીપી મોકલો',
      signWithMobileNumber: 'મોબાઇલ નંબર વડે સાઇન ઇન કરો',
      verifyOtp: 'ઓટીપી ચકાસો',
      selectLang: 'કૃપા કરીને તમારી ભાષા પસંદ કરો',
      chooseyourfild:'Choose Your Fild',
      agencies: 'એજન્સીઓ',
      materials: 'સામગ્રી',
      equipment: 'સાધનસામગ્રી',
      users: 'વપરાશકર્તા',
      enteryouragency:'તમારું એજન્સી નામ દાખલ કરો',
      whichtypofmaterial:'તમારી પાસે કેવી પ્રકારની સામગ્રી છે?',
      next:'આગામી',
      rent :'ભાડે પર',
      sell:'વેચવા પર',
      both:'બેવું',
      chooseplan:'ગોઠવણી યોજના પસંદ કરો',
      sendto:'ને મોકલવું',

    },
  },
};

export const LanguageSlice = createSlice({
  name: 'i18n',
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const {setLang} = LanguageSlice.actions;

export const selectTranslations = state =>
  state.i18n.translations[state.i18n.lang];

export default LanguageSlice.reducer;
