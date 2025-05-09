import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Linking,
  FlatList,
  Dimensions,
  Platform,
  ScrollView,
} from 'react-native';
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';
// import MarqueeBottom from '../../components/MarqueeBottom';
// import MarqueeTop from '../../components/MarqueeTop';
import CustomLoader from '../../components/CustomeLoader';
import {useSelector, useDispatch} from 'react-redux';
import {toggleDarkMode} from '../../reduxToolkit/themeSlice';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('window');

const sliderImages = [
  require('../../assets/images/Otr.png'),
  require('../../assets/images/Otr1.png'),
  require('../../assets/images/Otr2.png'),
  require('../../assets/images/Otr3.png'),
  require('../../assets/images/Otr4.png'),
  require('../../assets/images/Otr5.png'),

  
];

const HomeScreen = () => {
  const flatListRef = useRef(null);
  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const bgColor = isDarkMode ? '#000' : '#fff';
  const textColor = isDarkMode ? '#fff' : '#000';
  const secondaryText = isDarkMode ? '#aaa' : '#444';

  useEffect(() => {
    const intervalId = setInterval(() => {
      let nextIndex = (currentIndex + 1) % sliderImages.length;
      setCurrentIndex(nextIndex);
      flatListRef.current?.scrollToIndex({animated: true, index: nextIndex});
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const downloadPDF = async () => {
    try {
      const fileUrl =
        'https://www.dropbox.com/scl/fi/jaij208bs214rsna4qogx/BITTU-KUMAR-FlowCV-Resume-20250329.pdf?rlkey=nry3jns5y0ef2apejbjl1ou0d&st=gnw9qj0x&dl=1';
      const fileName = 'BittuResume.pdf';
      const localFile = `${RNFS.DocumentDirectoryPath}/${fileName}`;

      const options = {fromUrl: fileUrl, toFile: localFile};
      await RNFS.downloadFile(options).promise;

      Alert.alert('Download Complete', 'PDF has been downloaded.');
      await FileViewer.open(localFile);
    } catch (error) {
      console.log('Download error:', error);
      Alert.alert('Error', 'Failed to download the PDF.');
    }
  };

  const onCallPress = () => {
    Linking.openURL('tel:8521288007');
  };

  const onWhatsAppPress = () => {
    const phoneNumber = '+918521288007';
    const message = 'Hello Bittu!';
    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
      message,
    )}`;
    Linking.openURL(url).catch(() =>
      Alert.alert('WhatsApp not installed', 'Please install WhatsApp first.'),
    );
  };

  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <ScrollView contentContainerStyle={{paddingBottom: height * 0.05}}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>BITTU KUMAR</Text>
        </View>

       
          <CustomLoader visible={loading} />

          {/* Toggle Button */}
          <TouchableOpacity
  style={[
    styles.toggleButton,
    {backgroundColor: isDarkMode ? '#444' : '#ddd'},
  ]}
  onPress={() => dispatch(toggleDarkMode())}>
  <Icon
    name={isDarkMode ? 'white-balance-sunny' : 'weather-night'}
    size={24}
    color={isDarkMode ? '#fff' : '#000'}
  />
</TouchableOpacity>


          {/* <MarqueeTop /> */}
     

        {/* Image Slider */}
        <FlatList
  ref={flatListRef}
  data={sliderImages}
  horizontal
  pagingEnabled
  showsHorizontalScrollIndicator={false}
  keyExtractor={(_, index) => index.toString()}
  renderItem={({item}) => (
    <Image source={item} style={styles.sliderImage} />
  )}
  style={{marginVertical: height * 0.02}}
  contentContainerStyle={{paddingHorizontal: width * 0.05}} // optional padding
  onMomentumScrollEnd={event => {
    const index = Math.floor(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  }}
/>

        <View style={styles.pagination}>
          {sliderImages.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentIndex === index ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>

        {/* Profile */}
        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/images/profileicon.jpg')}
            style={styles.avatar}
          />
          <Text style={styles.name}>Bittu Kumar</Text>
          <Text style={styles.title}>Mobile App Developer</Text>
        </View>

        {/* Skills */}
        <View style={styles.section}>
  <Text style={styles.sectionTitle}>Skills</Text>
  <Text style={styles.sectionContent}>
    <Text style={{fontWeight: 'bold',color:"#2b8482"}}>Languages: </Text>
    JavaScript (ES6+), TypeScript, HTML5, CSS3{'\n\n'}

    <Text style={{fontWeight: 'bold',color:"#2b8482"}}>Frameworks & Libraries: </Text>
    React Native, React.js, Redux, Context API, Node.js{'\n\n'}

    <Text style={{fontWeight: 'bold',color:"#2b8482"}}>UI Components: </Text>
    NativeBase, React Native Paper, TailwindCSS{'\n\n'}

    <Text style={{fontWeight: 'bold',color:"#2b8482"}}>APIs: </Text>
    RESTful APIs, Firebase, Axios{'\n\n'}

    <Text style={{fontWeight: 'bold',color:"#2b8482"}}>State Management: </Text>
    Redux Toolkit{'\n\n'}

    <Text style={{fontWeight: 'bold',color:"#2b8482"}}>Version Control: </Text>
    Git, GitHub, GitLab{'\n\n'}

    <Text style={{fontWeight: 'bold',color:"#2b8482"}}>Platforms: </Text>
    Android, iOS
  </Text>
</View>


        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          <Text style={styles.sectionContent}>3 years</Text>
        </View>

        {/* CV Download Button */}
        <View style={styles.downloadButtonContainer}>
          <TouchableOpacity
            style={styles.cvButton}
            activeOpacity={0.7}
            onPress={downloadPDF}>
            <Text style={styles.cvText}>CV</Text>
            <Image
              source={require('../../assets/images/download.png')}
              style={styles.downloadIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Contact Buttons */}
        <View style={styles.contactButtons}>
          <TouchableOpacity
            style={styles.callButton}
            onPress={onCallPress}
            activeOpacity={0.7}>
            <Image
              source={require('../../assets/images/ic_call.png')}
              style={styles.floatingIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.whatsappButton}
            onPress={onWhatsAppPress}
            activeOpacity={0.7}>
            <Image
              source={require('../../assets/images/whatsAppNew.png')}
              style={styles.floatingIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Bottom Marquee */}
        {/* <View style={styles.bottomMarquee}>
          <MarqueeBottom />
        </View> */}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: width * 0.05,
    paddingTop: Platform.OS === 'android' ? height * 0.02 : height * 0.05,
  },
  header: {
    height: height * 0.08,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#2b8482',
    marginBottom: height * 0.015,
  },
  headerText: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#000',
    textTransform: 'uppercase',
  },
  sliderImage: {
    width: width * 0.9,
    height: height * 0.25,
    borderRadius: 10,
    resizeMode: "contain",
    marginHorizontal: width * 0.02,
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: height * 0.03,
  },
  toggleButton: {
    alignSelf: 'flex-end',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  avatar: {
    width: width * 0.28,
    height: width * 0.28,
    borderRadius: (width * 0.28) / 2,
    marginBottom: height * 0.015,
  },
  name: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    color: '#2b8482',
  },
  title: {
    fontSize: width * 0.045,
    color: '#777',
  },
  section: {
    marginVertical: height * 0.015,
  },
  sectionTitle: {
    fontSize: width * 0.055,
    fontWeight: 'bold',
    color: '#2b8482',
    marginBottom: height * 0.008,
  },
  sectionContent: {
    fontSize: width * 0.04,
    color: '#555',
    lineHeight: height * 0.03,
  },
  downloadButtonContainer: {
    alignItems: 'flex-end',
    marginVertical: height * 0.02,
  },
  cvButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2b8482',
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.05,
    borderRadius: 10,
  },
  cvText: {
    color: '#fff',
    fontSize: width * 0.045,
    marginRight: width * 0.02,
  },
  downloadIcon: {
    width: width * 0.06,
    height: width * 0.06,
    resizeMode: 'contain',
    tintColor: '#fff',
  },
  contactButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: height * 0.02,
  },
  callButton: {
    height: width * 0.15,
    width: width * 0.15,
    backgroundColor: '#2b8482',
    borderRadius: (width * 0.15) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whatsappButton: {
    height: width * 0.15,
    width: width * 0.15,
    backgroundColor: '#2b8482',
    borderRadius: (width * 0.15) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingIcon: {
    width: width * 0.08,
    height: width * 0.08,
    resizeMode: 'contain',
  },
  marqueeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: height * 0.015,
    backgroundColor: '#2b8482',
    paddingHorizontal: width * 0.05,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#2b8482',
  },
  inactiveDot: {
    backgroundColor: '#ccc',
  },
  bottomMarquee: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#2b8482',
    paddingHorizontal: width * 0.05,
  },
});
