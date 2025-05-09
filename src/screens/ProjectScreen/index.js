import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Modal,
  Pressable,
  Linking,
} from 'react-native';
import {useSelector} from 'react-redux';

const projectLive = [
  {
    id: '1',
    title: 'Ritika Jewellers',
    description:
      'Ritika Jewellers is one of the biggest bullion dealers in Varanasi.',
    devName: 'Developer - Bittu Kumar',
    Timeduration: 'Time - 2 Months',
    TeamSize: 'Team Size - 1',
    img1: require('../../assets/images/OtrLogo.png'),
    iOSAppURL: 'https://apps.apple.com/in/app/com-ritikajewellers/id6743384780',
    AndroidAppURL:
      'https://play.google.com/store/apps/details?id=com.ritikajewellers&hl=en',
  },
  {
    id: '2',
    title: 'Darshan Gold',
    description:
      'Darshan Gold is a leading provider of Gold & Silver bullion. This company has grown leaps and bounds with satisfied customers and competitive pricing.',
    devName: 'Developer - Bittu Kumar',
    Timeduration: 'Time - 1 Months',
    TeamSize: 'Team Size - 1',
    img1: require('../../assets/images/Otr.png'),
    iOSAppURL: 'https://apps.apple.com/us/app/darshan-bullion/6450350075',
    AndroidAppURL:
      'https://play.google.com/store/apps/details?id=com.darshangold&hl=en',
  },
  {
    id: '3',
    title: 'Kerala Bullion',
    description:
      'We are the best live rate provider of Bullion and commodities in South India,Serving our clients since 2007 with high accurate live rates without any delay,Our service is offered by a group of highly qualified IT professionals supported by one of the best technical software in the world....',
    Timeduration: 'Time - 2 Months',
    TeamSize: 'Team Size - 3',
    img1: require('../../assets/images/Otr1.png'),
    iOSAppURL: 'https://apps.apple.com/in/app/kerala-bullion/id1317726637',
    AndroidAppURL:
      'https://play.google.com/store/apps/details?id=com.keralabullion',
  },
  {
    id: '4',
    title: 'Trendz Calicut',
    description:
      'Trendz Calicut is one of the best ways to buy and sell gold – Its easy and inexpensive and you have the convenience of transacting online,We take this opportunity to express our gratitude for the overwhelming response we have received in all the year in physical trading with our esteemed customers.',
    Timeduration: 'Time - 2 Months',
    TeamSize: 'Team Size - 2',
    img1: require('../../assets/images/Otr2.png'),
    iOSAppURL: 'https://apps.apple.com/us/app/trendz-calicut/id1467890396',
    AndroidAppURL:
      'https://play.google.com/store/apps/details?id=com.trendzbullion',
  },
  {
    id: '5',
    title: 'RNB Spot',
    description:
      'RNB Spot is one of the biggest bullion dealers in Mumbai. We deal with gold and silver. In addition, RNB Spot is a direct importer of precious metals. We focus mainly on purity and commitment. The company’s continuous desire to serve its customers in excellent possible way makes it stand out among the rest. We have developed immense customer faith and value through our excellent service and high-quality products. We strive hard for constant development to enhance our customer service, and this long-term bond we share with our customers has helped us reach new heights',
    Timeduration: 'Time - 1 Month',
    TeamSize: 'Team Size - 4',
    img1: require('../../assets/images/Otr3.png'),
    iOSAppURL: 'https://apps.apple.com/in/app/rnb-spot/id6741463493',
    AndroidAppURL:
      'https://play.google.com/store/apps/details?id=com.rnbullionandjewels',
  },
  {
    id: '6',
    title: 'Right Gold',
    description:
      'Right Gold is reputed and renowned bullion dealers and jewellers at Delhi,Right Gold app is very useful to the jewellers and bullion retailers for following up the fast changing gold and silver market rates. The rates in our app are updated on real time basis,Our App is developed to give a unique facility to its users of calculate valuation of any jewellery they have chosen. The user',
    devName: 'Developer - Bittu Kumar',
    Timeduration: 'Time - 1 Month',
    TeamSize: 'Team Size - 1',
    img1: require('../../assets/images/Otr4.png'),
    iOSAppURL: 'https://apps.apple.com/in/app/right-gold/id6745315516',
    AndroidAppURL:
      'https://play.google.com/store/apps/details?id=com.chawlajewellers&hl=en',
  },
];

const projectUpcoming = [
  {
    id: '1',
    title: "Jalaan's",
    description: 'Not Decleared',
    devName: 'Developer - Bittu Kumar',
    Timeduration: 'Time - OnProcess',
    TeamSize: 'Team Size - 1',
    img1: require('../../assets/images/Otr5.png'),
    iOSAppURL: 'https://apps.apple.com/us/app/jalaan-bullion/6744968911',
    AndroidAppURL:
      'https://play.google.com/store/apps/details?id=com.jalaan&hl=en',
  },
  {
    id: '1',
    title: 'RARA',
    description: 'Not Decleared',
    Timeduration: 'Time - OnProcess',
    TeamSize: 'Team Size - 4',
  },
];

const ProjectsScreen = () => {
  const [selectedTab, setSelectedTab] = useState('live');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const bgColor = isDarkMode ? '#121212' : '#f0f4f8';
  const cardBg = isDarkMode ? '#1e1e1e' : '#fff';
  const textColor = isDarkMode ? '#fff' : '#000';

  const openProjectModal = project => {
    setSelectedProject(project);
    setModalVisible(true);
  };

  const openURL = url => {
    Linking.openURL(url).catch(err =>
      console.error('Failed to open URL:', err),
    );
  };

  const renderProject = ({item}) => (
    <TouchableOpacity
      style={[
        styles.projectCard,
        {backgroundColor: cardBg, borderColor: '#ccc'},
      ]}
      activeOpacity={0.7}
      onPress={() => openProjectModal(item)}>
      <View style={styles.projectImagePlaceholder}>
        {item.img1 && (
          <Image
            source={item.img1}
            style={styles.projectImage}
            resizeMode="contain"
          />
        )}
      </View>
      <View style={{flex: 1, paddingLeft: 10}}>
        <Text style={[styles.projectTitle, {color: textColor}]}>
          {item.title}
        </Text>
        <Text style={[styles.projectDescription, {color: textColor}]}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const activeData = selectedTab === 'live' ? projectLive : projectUpcoming;

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: bgColor}]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Our Projects</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'live' && styles.activeTabGreen,
          ]}
          onPress={() => setSelectedTab('live')}>
          <Text
            style={[
              styles.tabText,
              {color: selectedTab === 'live' ? '#fff' : '#333'},
            ]}>
            Live
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'upcoming' && styles.activeTabOrange,
          ]}
          onPress={() => setSelectedTab('upcoming')}>
          <Text
            style={[
              styles.tabText,
              {color: selectedTab === 'upcoming' ? '#fff' : '#333'},
            ]}>
            Upcoming
          </Text>
        </TouchableOpacity>
      </View>

      {/* Project List */}
      <FlatList
        data={activeData}
        keyExtractor={item => item.id}
        renderItem={renderProject}
        contentContainerStyle={styles.listContent}
      />

      {/* Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {selectedProject?.title || 'Project Detail'}
            </Text>
            <Text style={styles.modalDescription}>
              {selectedProject?.description}
            </Text>
            <Text style={styles.modalDescription}>
              {selectedProject?.devName}
            </Text>
            <Text style={styles.modalDescription}>
              {selectedProject?.TeamSize}
            </Text>
            <Text style={styles.modalDescription}>
              {selectedProject?.Timeduration}
            </Text>

            {selectedProject?.img1 && (
              <Image
                source={selectedProject.img1}
                style={styles.modalImage}
                resizeMode="contain"
              />
            )}

            {/* App Store Buttons */}
            {(selectedProject?.AndroidAppURL || selectedProject?.iOSAppURL) && (
              <View style={styles.storeButtonsContainer}>
                {selectedProject?.AndroidAppURL && (
                  <TouchableOpacity
                    style={styles.storeButton}
                    onPress={() => openURL(selectedProject.AndroidAppURL)}>
                    <Image
                      source={require('../../assets/images/google-play.png')}
                      style={styles.storeIcon}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                )}
                {selectedProject?.iOSAppURL && (
                  <TouchableOpacity
                    style={styles.storeButton}
                    onPress={() => openURL(selectedProject.iOSAppURL)}>
                    <Image
                      source={require('../../assets/images/app-store.png')}
                      style={styles.storeIcon}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                )}
              </View>
            )}

            <Pressable
              style={styles.modalCloseButton}
              onPress={() => setModalVisible(false)}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ProjectsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#2b8482',
    margin: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    alignSelf: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
  },
  activeTabGreen: {
    backgroundColor: '#2b8482',
  },
  activeTabOrange: {
    backgroundColor: '#2b8482',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  listContent: {
    padding: 16,
    paddingBottom: 80,
  },
  projectCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    elevation: 2,
  },
  projectImagePlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: '#000',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  projectImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  projectDescription: {
    fontSize: 14,
    color: '#555',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2b8482',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 8,
    color: '#444',
  },
  modalImage: {
    width: 100,
    height: 100,
    marginVertical: 12,
  },
  modalCloseButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: '#2b8482',
    borderRadius: 8,
  },
  storeButtonsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  storeButton: {
    marginHorizontal: 10,
  },
  storeIcon: {
    width: 140,
    height: 50,
  },
});
