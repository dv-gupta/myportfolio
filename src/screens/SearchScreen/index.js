// import React from 'react';
// import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

// const AboutScreen = () => {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Top Icon */}
//       <View style={styles.iconContainer}>
//         <MaterialIcons name="check-circle-outline" size={60} color="#000" />
//       </View>

//       {/* Title */}
//       <Text style={styles.mainTitle}>Simplify Your Life</Text>

//       {/* About Section */}
//       <View style={styles.aboutCard}>
//         <Text style={styles.sectionTitle}>Who We Are</Text>
//         <Text style={styles.description}>
//           We are a passionate team dedicated to creating solutions that make
//           life easier. Our goal is to deliver high-quality, user-friendly
//           products that improve everyday experiences.
//         </Text>

//         {/* Mission/Vision/Values */}
//         <View style={styles.iconRow}>
//           <View style={styles.iconBox}>
//             <MaterialIcons name="star-border" size={30} color="#000" />
//             <Text style={styles.iconTitle}>Mission</Text>
//             <Text style={styles.iconDesc}>To simplify your daily life</Text>
//           </View>
//           <View style={styles.iconBox}>
//             <MaterialIcons name="emoji-objects" size={30} color="#000" />
//             <Text style={styles.iconTitle}>Vision</Text>
//             <Text style={styles.iconDesc}>
//               Innovating for a better tomorrow
//             </Text>
//           </View>
//           <View style={styles.iconBox}>
//             <MaterialIcons name="favorite-border" size={30} color="#000" />
//             <Text style={styles.iconTitle}>Values</Text>
//             <Text style={styles.iconDesc}>
//               User-first, Integrity, Creativity
//             </Text>
//           </View>
//         </View>

//         {/* Team Members */}
//         <View style={styles.teamRow}>
//           <View style={styles.person}>
//             <Image
//               style={styles.avatar}
//               source={{uri: 'https://randomuser.me/api/portraits/women/1.jpg'}}
//             />
//             <Text style={styles.name}>Julia</Text>
//             <Text style={styles.role}>CEO</Text>
//           </View>
//           <View style={styles.person}>
//             <Image
//               style={styles.avatar}
//               source={{uri: 'https://randomuser.me/api/portraits/men/2.jpg'}}
//             />
//             <Text style={styles.name}>Mark</Text>
//             <Text style={styles.role}>CTO</Text>
//           </View>
//           <View style={styles.person}>
//             <Image
//               style={styles.avatar}
//               source={{uri: 'https://randomuser.me/api/portraits/women/3.jpg'}}
//             />
//             <Text style={styles.name}>Emily</Text>
//             <Text style={styles.role}>Designer</Text>
//           </View>
//         </View>
//       </View>

//       {/* Bottom Icons */}
//       <View style={styles.socialIcons}>
//         <Icon name="mail-outline" size={24} color="#000" />
//         <Icon name="call-outline" size={24} color="#000" />
//         <FontAwesome name="twitter" size={24} color="#000" />
//         <FontAwesome name="linkedin-square" size={24} color="#000" />
//       </View>
//     </ScrollView>
//   );
// };

// export default AboutScreen;

// const styles = StyleSheet.create({
//   container: {
//     paddingVertical: 30,
//     paddingHorizontal: 20,
//     backgroundColor: '#fff',
//   },
//   iconContainer: {
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   mainTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//     color: '#2b8482',
//   },
//   aboutCard: {
//     backgroundColor: '#f9f9f9',
//     borderRadius: 15,
//     padding: 20,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#2b8482',
//   },
//   description: {
//     color: '#333',
//     fontSize: 15,
//     lineHeight: 22,
//     marginBottom: 20,
//   },
//   iconRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 25,
//   },
//   iconBox: {
//     alignItems: 'center',
//     width: '30%',
//   },
//   iconTitle: {
//     fontWeight: 'bold',
//     marginTop: 10,
//     fontSize: 16,
//     color: '#2b8482',
//   },
//   iconDesc: {
//     textAlign: 'center',
//     fontSize: 13,
//     color: '#333',
//     marginTop: 5,
//   },
//   teamRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 10,
//   },
//   person: {
//     alignItems: 'center',
//   },
//   avatar: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     marginBottom: 6,
//   },
//   name: {
//     fontWeight: 'bold',
//     fontSize: 15,
//     color: '#2b8482',
//   },
//   role: {
//     fontSize: 13,
//     color: '#444',
//   },
//   socialIcons: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 30,
//   },
// });

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const AboutScreen = () => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const bgColor = isDarkMode ? '#000' : '#fff';
  const textColor = isDarkMode ? '#fff' : '#000';

  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <Text style={{color: textColor}}>AboutScreen</Text>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
