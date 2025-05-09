import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  Share,
  Modal,
} from 'react-native';
import {useSelector} from 'react-redux';

const ContactScreen = () => {
  const [form, setForm] = useState({
    orgName: '',
    orgLocation: '',
    employeeCount: '',
    hiringProfile: '',
    budget: '',
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isModalVisible, setModalVisible] = useState(false);

  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const bgColor = isDarkMode ? '#000' : '#fff';
  const textColor = isDarkMode ? '#fff' : '#000';

  const handleChange = (key, value) => {
    setForm(prev => ({...prev, [key]: value}));
  };

  const isAnyFieldFilled = () => {
    return Object.values(form).some(value => value.trim() !== '');
  };

  const handleSubmit = () => {
    if (!isAnyFieldFilled()) {
      Alert.alert('Portfolio', 'Please fill at least Some field before sending.');
      return;
    }
    setModalVisible(true);
  };

  const confirmSubmit = async () => {
    const content = `
Organization Name: ${form.orgName}
Location: ${form.orgLocation}
Number of Employees: ${form.employeeCount}
Hiring Profile: ${form.hiringProfile}
Budget: ${form.budget}

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}

Message:
${form.message}
    `;

    try {
      await Share.share({
        title: 'Hiring Inquiry Details',
        message: content,
      });

      setModalVisible(false);
      Alert.alert('Submitted!', `Thank you, ${form.orgName || 'User'}!`);
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: bgColor}]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>HIRING DETAILS FORM</Text>
        </View>

        <View style={[styles.container, {backgroundColor: bgColor}]}>
          {/* Organization Details */}
          <Text style={[styles.sectionLabel, {color: textColor}]}>🏢 Organization Info</Text>
          <TextInput
            style={[styles.input, {backgroundColor: bgColor, color: textColor}]}
            placeholder="Organization Name *"
            placeholderTextColor={textColor}
            value={form.orgName}
            onChangeText={text => handleChange('orgName', text)}
          />
          <TextInput
            style={[styles.input, {backgroundColor: bgColor, color: textColor}]}
            placeholder="Organization Location *"
            placeholderTextColor={textColor}
            value={form.orgLocation}
            onChangeText={text => handleChange('orgLocation', text)}
          />
          <TextInput
            style={[styles.input, {backgroundColor: bgColor, color: textColor}]}
            placeholder="Number of Employees *"
            placeholderTextColor={textColor}
            keyboardType="numeric"
            value={form.employeeCount}
            onChangeText={text => handleChange('employeeCount', text)}
          />
          <TextInput
            style={[styles.input, {backgroundColor: bgColor, color: textColor}]}
            placeholder="Which Profile Are You Hiring? *"
            placeholderTextColor={textColor}
            value={form.hiringProfile}
            onChangeText={text => handleChange('hiringProfile', text)}
          />
          <Text style={[styles.sectionLabel, {color: textColor}]}>
            💰 Company Budget for Hiring
          </Text>
          <TextInput
            style={[styles.input, {backgroundColor: bgColor, color: textColor}]}
            placeholder="Budget"
            placeholderTextColor={textColor}
            value={form.budget}
            onChangeText={text => handleChange('budget', text)}
          />

          {/* Personal Info */}
          <Text style={[styles.sectionLabel, {color: textColor}]}>🙋‍♂️ Your Info</Text>
          <TextInput
            style={[styles.input, {backgroundColor: bgColor, color: textColor}]}
            placeholder="Your Name *"
            placeholderTextColor={textColor}
            value={form.name}
            onChangeText={text => handleChange('name', text)}
          />
          <TextInput
            style={[styles.input, {backgroundColor: bgColor, color: textColor}]}
            placeholder="Your Mobile Number *"
            placeholderTextColor={textColor}
            keyboardType="phone-pad"
            value={form.phone}
            onChangeText={text => handleChange('phone', text)}
          />
          <TextInput
            style={[styles.input, {backgroundColor: bgColor, color: textColor}]}
            placeholder="Your Email Address *"
            placeholderTextColor={textColor}
            keyboardType="email-address"
            value={form.email}
            onChangeText={text => handleChange('email', text)}
          />

          {/* Message */}
          <Text style={[styles.sectionLabel, {color: textColor}]}>📝 Message</Text>
          <TextInput
            style={[
              styles.input,
              {
                height: 100,
                textAlignVertical: 'top',
                backgroundColor: bgColor,
                color: textColor,
              },
            ]}
            multiline
            numberOfLines={4}
            placeholder="Message for me *"
            placeholderTextColor={textColor}
            value={form.message}
            onChangeText={text => handleChange('message', text)}
          />

          {/* Submit */}
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={handleSubmit}
            activeOpacity={0.8}>
            <Text style={styles.submitText}>Send Details</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Modal */}
      <Modal
        transparent
        visible={isModalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>
             Thank You For Sharing Your Details:
              {'\n'}
              <Text style={{fontWeight: 'bold'}}>{form.orgName || 'Thank You'}</Text>
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalBtn} onPress={confirmSubmit}>
                <Text style={styles.modalBtnText}>OK</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalBtn, {backgroundColor: '#ccc'}]}
                onPress={() => setModalVisible(false)}>
                <Text style={[styles.modalBtnText, {color: '#000'}]}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    padding: 16,
    paddingBottom: 100,
  },
  header: {
    backgroundColor: '#2b8482',
    padding: 16,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  sectionLabel: {
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginBottom: 12,
  },
  submitBtn: {
    marginTop: 16,
    backgroundColor: '#2b8482',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  modalBox: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    elevation: 5,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
   
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalBtn: {
    backgroundColor: '#2b8482',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  modalBtnText: {
    color: '#fff',
    fontWeight: '600',
  },
});
