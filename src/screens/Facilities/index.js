import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Switch,
  Alert,
  Modal,
} from 'react-native';
import {useSelector} from 'react-redux';
import Share from 'react-native-share';

const TABS = ['Current Company', 'Your Company'];

const FACILITIES = [
  'Work From Home / Work From Office',
  'Health Insurance',
  'Paid Leaves (Sick, Casual, Earned)',
  'Flexible Working Hours',
  'Company Guest Hourse',
  'Food Cooking Mad',
  'Cab Facility',
  'Team Outings / Annual Trips',
  'Internet / Mobile Bill Reimbursement',
  'Laptop & Accessories',
  'Mental Health Support',
];

const CATEGORIZED_FACILITIES = [
  {
    title: '🏢 Work Environment',
    items: [
      'Work From Home / Hybrid / Onsite Options',
      'Flexible Working Hours',
      'Ergonomic Workstations',
      'Quiet Zones & Collaboration Areas',
      'Open-Door Management Policy',
    ],
  },
  {
    title: '🧑‍⚕️ Health & Well-being',
    items: [
      'Comprehensive Health Insurance (Self & Family)',
      'Mental Health Support / Counseling Services',
      'Annual Health Checkups',
      'Gym Memberships / Fitness Subsidy',
      'Wellness Programs / Meditation Sessions',
    ],
  },
  {
    title: '🏖️ Time Off',
    items: [
      'Paid Time Off (Sick, Casual, Earned Leaves)',
      'Maternity & Paternity Leave',
      'Bereavement Leave',
      'Compensatory Offs',
      'Unlimited Vacation (in select companies)',
    ],
  },
  {
    title: '💼 Financial Benefits',
    items: [
      'Provident Fund (PF)',
      'Gratuity',
      'Employee Stock Ownership Plan (ESOP)',
      'Performance Bonuses / Annual Increments',
      'Insurance Coverage (Accidental & Life)',
    ],
  },
  {
    title: '🍽️ Office Amenities',
    items: [
      'Free Meals / Snacks / Beverages',
      'Food Court or Subsidized Cafeteria',
      'Company Guest House',
      'In-House Medical Assistance',
      'Resting / Nap Pods',
    ],
  },
  {
    title: '🚗 Transport & Infrastructure',
    items: [
      'Cab Facility / Shuttle Services',
      'Reserved Parking',
      'Bike or Car Leasing Options',
      'Travel Allowances or Reimbursements',
    ],
  },
  {
    title: '💻 Work Resources',
    items: [
      'Company Laptop & Accessories',
      'Internet / Mobile Bill Reimbursement',
      'Software Licenses & Subscriptions',
      'IT Support Desk',
      'Work-from-Home Setup Assistance',
    ],
  },
  {
    title: '👨‍👩‍👧‍👦 Family & Life Support',
    items: [
      'Childcare Assistance / Creche Facility',
      'Educational Reimbursements',
      'Family Day / Events',
      'Marriage & Birthday Gifts',
      'Elderly Care Support (in some companies)',
    ],
  },
  {
    title: '🎉 Culture & Events',
    items: [
      'Team Outings / Annual Retreats',
      'Celebrations & Festivals',
      'Hackathons / Innovation Days',
      'Clubs (e.g., Book, Fitness, Gaming)',
      'Recognition & Rewards Program',
    ],
  },
  {
    title: '📚 Learning & Growth',
    items: [
      'Learning & Development Budget',
      'Online Course Subscriptions (e.g., Udemy, Coursera)',
      'Certifications Reimbursement',
      'Internal Tech Talks & Knowledge Sharing',
      'Career Pathing & Mentorship',
    ],
  },
];

const Facilities = () => {
  const [activeTab, setActiveTab] = useState('Current Company');
  const [responses, setResponses] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  const bgColor = isDarkMode ? '#000' : '#fff';
  const textColor = isDarkMode ? '#fff' : '#000';
  const tabBg = isDarkMode ? '#1a1a1a' : '#f2f2f2';
  const highlightColor = isDarkMode ? '#333' : '#ddd';
  const cardColor = isDarkMode ? '#1e1e1e' : '#fff';

  const handleSwitch = (itemKey, value) => {
    setResponses(prev => ({...prev, [itemKey]: value}));
  };

  const handleShare = () => {
    const selected = [];

    CATEGORIZED_FACILITIES.forEach(category => {
      category.items.forEach(item => {
        const key = `${category.title}-${item}`;
        if (responses[key]) {
          selected.push(`• ${item}`);
        }
      });
    });

    if (selected.length === 0) {
      Alert.alert('Portfolio', 'Please fill at least some field before sending.');
      return;
    }

    setSelectedFacilities(selected);
    setModalVisible(true);
  };

  const confirmShare = async () => {
    const message = `Facilities Provided by My Company:\n\n${selectedFacilities.join(
      '\n',
    )}`;

    try {
      await Share.open({message});
    } catch (error) {
      console.log('Share error:', error);
    } finally {
      setModalVisible(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, {backgroundColor: bgColor}]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Facilities</Text>
      </View>

      <View style={[styles.tabContainer, {backgroundColor: tabBg}]}>
        {TABS.map(tab => {
          const isActive = activeTab === tab;
          return (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tabButton,
                isActive && {
                  backgroundColor: '#2b8482',
                  borderRadius: 5,
                },
              ]}
              onPress={() => setActiveTab(tab)}>
              <Text
                style={[
                  styles.tabText,
                  {
                    color: isActive ? '#fff' : textColor,
                  },
                ]}>
                {tab}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {activeTab === 'Current Company' ? (
        <FlatList
          data={FACILITIES}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View
              style={[
                styles.itemBox,
                {borderColor: highlightColor, backgroundColor: cardColor},
              ]}>
              <Text style={[styles.itemText, {color: textColor}]}>
                {'\u2022'} {item}
              </Text>
            </View>
          )}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <>
          <FlatList
            data={CATEGORIZED_FACILITIES}
            keyExtractor={item => item.title}
            contentContainerStyle={{padding: 16}}
            renderItem={({item}) => (
              <View>
                <Text style={[styles.categoryTitle, {color: textColor}]}>
                  {item.title}
                </Text>
                {item.items.map((facility, index) => {
                  const key = `${item.title}-${facility}`;
                  return (
                    <View
                      key={index}
                      style={[
                        styles.itemBox,
                        {
                          borderColor: highlightColor,
                          backgroundColor: cardColor,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        },
                      ]}>
                      <Text
                        style={[styles.itemText, {color: textColor, flex: 1}]}>
                        {facility}
                      </Text>
                      <Switch
                        value={responses[key] || false}
                        onValueChange={val => handleSwitch(key, val)}
                      />
                    </View>
                  );
                })}
              </View>
            )}
          />

          <TouchableOpacity
            style={styles.shareButton}
            onPress={handleShare}
            activeOpacity={0.8}>
            <Text style={styles.shareButtonText}>Share Details</Text>
          </TouchableOpacity>
        </>
      )}

      {/* MODAL */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Thank you for sharing your company facilities!
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, {backgroundColor: '#ccc'}]}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, {backgroundColor: '#2b8482'}]}
                onPress={confirmShare}>
                <Text style={[styles.modalButtonText, {color: '#fff'}]}>
                  OK
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default Facilities;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    backgroundColor: '#2b8482',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 8,
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
    justifyContent: 'space-around',
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 5,
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
  },
  list: {
    padding: 16,
  },
  itemBox: {
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 15,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  shareButton: {
    backgroundColor: '#2b8482',
    paddingVertical: 12,
    margin: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  shareButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    elevation: 5,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 6,
    alignItems: 'center',
  },
  modalButtonText: {
    fontSize: 16,
  },
});
