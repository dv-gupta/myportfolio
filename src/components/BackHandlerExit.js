// import {useEffect} from 'react';
// import {BackHandler, Alert, Image} from 'react-native';

// export const useBackHandlerWithExit = () => {
//   useEffect(() => {
//     const backAction = () => {
//       Alert.alert(
//         'Hold on!',
//         'Are you sure you want to exit the app?',
//         [
//           {
//             text: 'No',
//             onPress: () => null,
//             style: 'cancel',
//           },
//           {
//             text: 'YES',
//             onPress: () => BackHandler.exitApp(),
//           },
//         ],
//         {cancelable: true},
//       );
//       return true;
//     };

//     const backHandler = BackHandler.addEventListener(
//       'hardwareBackPress',
//       backAction,
//     );

//     return () => backHandler.remove();
//   }, []);
// };

import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const CustomExitModal = ({visible, onConfirm, onCancel}) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.dialog}>
          <View style={styles.header}>
            <Image
              source={require('../assets/images/electricalengineer.png')}
              s
              style={styles.icon}
            />
            <Text style={styles.title}>Hold on!</Text>
          </View>
          <Text style={styles.message}>
            Are you sure you want to exit the app?
          </Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.noButton} onPress={onCancel}>
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.yesButton} onPress={onConfirm}>
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomExitModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialog: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
    marginVertical: 20,
    color: '#444',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  noButton: {
    marginRight: 10,
    padding: 10,
  },
  yesButton: {
    backgroundColor: '#d9534f',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
});
