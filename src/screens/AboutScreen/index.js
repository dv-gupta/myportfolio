import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');

const AboutScreen = () => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const bgColor = isDarkMode ? '#121212' : '#f9f9f9';
  const textColor = isDarkMode ? '#fff' : '#000';
  const cardColor = isDarkMode ? '#1e1e1e' : '#fff';

  const openURL = url => Linking.openURL(url);

  return (
    <ScrollView style={{backgroundColor: bgColor}} contentContainerStyle={styles.container}>
      {/* Profile Section */}
      <View style={[styles.card, {backgroundColor: cardColor, alignItems: 'center'}]}>
        <Image
          source={require('../../assets/images/profileicon.jpg')}
          style={styles.avatar}
        />
        <Text style={[styles.name, {color: textColor}]}>Bittu Kumar</Text>
        <Text style={[styles.role, {color: textColor}]}>React Native Developer</Text>
      </View>

      {/* Contact Section */}
      <View style={[styles.card, {backgroundColor: cardColor}]}>
        <Text style={[styles.sectionTitle, {color: textColor}]}>📬 Contact</Text>
        <Text style={[styles.text, {color: textColor}]}>📧 bittukumar85212@gmail.com</Text>
        <Text style={[styles.text, {color: textColor}]}>📞 8521288007</Text>
        <Text style={[styles.text, {color: textColor}]}>📍 Ahmedabad, India</Text>

        <View style={styles.iconRow}>
          <TouchableOpacity onPress={() => openURL('https://linkedin.com/in/bittu-kumar-085125157')}>
            <Icon name="linkedin" size={24} color="#0077b5" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openURL('https://github.com/dv-gupta')}>
            <Icon name="github" size={24} color={textColor} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile Summary */}
      <View style={[styles.card, {backgroundColor: cardColor}]}>
        <Text style={[styles.sectionTitle, {color: textColor}]}>👨‍💻 Profile</Text>
        <Text style={[styles.text, {color: textColor}]}>
          React Native Developer with 3 years of experience building scalable apps using Redux, Firebase, and REST APIs. Deployed 7+ apps across platforms.
        </Text>
      </View>

      {/* Experience */}
      <View style={[styles.card, {backgroundColor: cardColor}]}>
        <Text style={[styles.sectionTitle, {color: textColor}]}>💼 Experience</Text>
        <Text style={[styles.text, {color: textColor}]}>⭐ Starline Solution Pvt. Ltd. (2022–Present)</Text>
        <Text style={[styles.text, {color: textColor}]}>• Bullion, Terminal, Jewellery apps</Text>
        <Text style={[styles.text, {color: textColor}]}>⭐ B2C Info Solution (2021–2022)</Text>
        <Text style={[styles.text, {color: textColor}]}>• E-commerce & Healthcare apps</Text>
      </View>

      {/* Our Services */}
      <View style={[styles.card, {backgroundColor: cardColor}]}>
        <Text style={[styles.sectionTitle, {color: textColor}]}>🧰 Our Services</Text>
        <Text style={[styles.serviceText, {color: textColor}]}>📱 Mobile App Development (iOS & Android)</Text>
        <Text style={[styles.serviceText, {color: textColor}]}>💡 Custom UI/UX Design Integration</Text>
        <Text style={[styles.serviceText, {color: textColor}]}>🔄 Redux, Redux Toolkit, Context API Setup</Text>
        <Text style={[styles.serviceText, {color: textColor}]}>🔌 REST API / Firebase Integration</Text>
        <Text style={[styles.serviceText, {color: textColor}]}>🚀 Play Store & App Store Deployment</Text>
        <Text style={[styles.serviceText, {color: textColor}]}>🛠️ App Maintenance & Version Updates</Text>
      </View>

     

     
     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 32,
  },
  card: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 4,
  },
  avatar: {
    width: width * 0.28,
    height: width * 0.28,
    borderRadius: (width * 0.28) / 2,
    marginBottom: height * 0.015,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  role: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    marginBottom: 4,
  },
  link: {
    fontSize: 14,
    marginBottom: 6,
  },
  serviceText: {
    fontSize: 14,
    marginBottom: 6,
    paddingLeft: 4,
  },
  techBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    margin: 4,
  },
  techText: {
    fontSize: 12,
  },
  skillsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  hireMeButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
  },
  hireMeText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  iconRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  icon: {
    marginRight: 16,
  },
});

export default AboutScreen;
