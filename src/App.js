import React, {useEffect, useState} from 'react';
import {SafeAreaView, BackHandler, StyleSheet, Alert,NativeAppEventEmitter,Linking} from 'react-native';
import NavigationUtil from './NavigationUtil';
import {ApiUtils} from './Common/constant';
import NetInfo from '@react-native-community/netinfo';
import ModalComponent from './Components/ModalComponent';
import messaging from '@react-native-firebase/messaging';
import notifee, {EventType} from '@notifee/react-native';
import {ToastGreenTester, ToastRedTester, ToastTester} from './Components/ToastTester';
import { navigationRef } from './utils/RootNavigation';
import SocketIOClient from 'socket.io-client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getVersionAndroid, getVersionApple } from "./utils/API";
import { getVersion } from 'react-native-device-info';
import DraggableBox from './Components/DraggableBox';
import { AppTour, AppTourSequence } from "imokhles-react-native-app-tour";

import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

const appTourTargets = [];
async function onDisplayNotification(notifi) {
  // Request permissions (required for iOS)
  await notifee.requestPermission();

  var noti = notifi.data;
  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  // Display a notification
  await notifee.displayNotification({
    title: noti.title,
    body: "",
    data: {bit: noti.bit},
    android: {
      channelId,
      //smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
      // pressAction is needed if you want the notification to open the app when pressed
      pressAction: {
        id: 'default',
      },
    },
  });
}

function onMessageReceivedBackground(message) {
  notifee.displayNotification(message.data);
}

function onMessageReceivedFore(message) {
  onDisplayNotification(message);
}

messaging().onMessage(onMessageReceivedFore);
messaging().setBackgroundMessageHandler(onMessageReceivedBackground);

const App = () => {
  const [isOffline, setOfflineStatus] = useState(false);
  const [pupUpVisible, setPupUpVisible] = useState(false);
  const [dragablePopup, setDragablePopup] = useState(false);
  const [checkUpdatePopUpVisible, setCheckUpdatePopUpVisible] = useState(false);
  const [count, setCount] = useState(1);
  const [notificationBody, setNotificationBody] = useState('');
  const [notificationTitle, setNotificationTitle] = useState('');
  const [userData, setUserData] = useState('');
  const [singleClientkey, setSingleClientkey] = useState('');
  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  useEffect(() => {
    const socket = SocketIOClient(ApiUtils.SocketUrl, {
      transports: ['websocket'],
    });
    syncMethodGetData();
    homeSocket(socket);
    checkApplicationPermission();
    firebaseNotification();
    BackHandler.addEventListener('hardwareBackPress', backAction);
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const offline = !(state.isConnected && state.isInternetReachable);
    //   setOfflineStatus(offline);
    // });

    console.log('here is isOPffline 01 ', isOffline);
      if(!offline){
 setCount(0)
      }
      setOfflineStatus(offline);
    });

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
      removeNetInfoSubscription();
    };
  }, []);
  useEffect(() => {
    console.log('here is isOPffline ', isOffline);
    console.log('here is count ', count);
    // if (isOffline) {
    //   ToastRedTester('Your device is not connected to the Internet.');
    // } else {
      if (isOffline && count == 0) {
        setCount(1)
        ToastRedTester('Your device is not connected to the Internet.');
      } else {

      console.log('Back Online');
      toCheckNewUpdates();
    }
  }, [isOffline]);

  const toCheckNewUpdates = async () => {
    if (Platform.OS == "android") {
      let checkVersionAndroid = await getVersionAndroid();
      console.log("checkAndroid Version ", checkVersionAndroid)
      try {
        if (checkVersionAndroid !== undefined) {
        const {status} = checkVersionAndroid;
        if (status == 200) {
          const convertJsonAndroid = await checkVersionAndroid.json();
         
          if(parseFloat(convertJsonAndroid.d) > parseFloat(getVersion())){
            setCheckUpdatePopUpVisible(true)
          }
        }else{
          ToastTester('Something went wrong else');
        }
        }else{
          ToastTester('Something went wrong undefined');
        }
      } catch (error) {
        console.log("Error on check version ", error)
        ToastTester('Something went wrong c');
      }
    } else if (Platform.OS == "ios") {
      let checkVersionIOS = await getVersionApple();
      console.log("checkVersionIOS Version ", checkVersionIOS)
      try {
        if (checkVersionIOS !== undefined) {
        const {status} = checkVersionIOS;
        if (status == 200) {
          const convertJsonAndroid = await checkVersionIOS.json();
          console.log("convertJsonAndroid", convertJsonAndroid)
          console.log("convertJsonAndroid", getVersion())
          if(parseFloat(convertJsonAndroid.d) > parseFloat(getVersion())){
            setCheckUpdatePopUpVisible(true)
          }
        }else{
          ToastTester('Something went wrong else');
        }
        }else{
          ToastTester('Something went wrong undefined');
        }
      } catch (error) {
        console.log("Error on check version ", error)
        ToastTester('Something went wrong c');
      }
    }
  };

  const firebaseNotification = async () => {
    messaging().subscribeToTopic(ApiUtils.TopicFCM_Name);

    const authorizationStatus = await messaging().requestPermission();

    if (authorizationStatus) {
    }

    messaging().onNotificationOpenedApp(remoteMessage => {
      const {bit} = remoteMessage.data;
      console.log('remoteMessage Notification ', remoteMessage.data);
      if (bit == '1') {
        navigationRef.current.navigate('drawerStack',{index:0});
      } else if (bit == '2') {
        navigationRef.current.navigate('drawerStack',{index:1});
      } else if(bit == '3') {
         navigationRef.current.navigate('drawerStack',{index:2});
      }else if(bit =='4'){
          navigationRef.current.navigate('drawerStack',{ screen: 'News'});
      }
    });

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          const {bit} = remoteMessage.data;
          if (bit == '1') {
            navigationRef.current.navigate('drawerStack',{ screen: 'message',params:{index:0}});
          } else if (bit == '2') {
            navigationRef.current.navigate('drawerStack',{ screen: 'message',params:{index:1}});
          } else if(bit == '3') {
             navigationRef.current.navigate('drawerStack',{ screen: 'message',params:{index:2}});
          }else if(bit =='4'){
              navigationRef.current.navigate('drawerStack',{ screen: 'News'});
          }
        }
      });

    notifee.onForegroundEvent(({type, detail}) => {
      switch (type) {
        case EventType.DISMISSED:
          break;
        case EventType.PRESS:
          console.log(' Press ', detail.notification);
          var {bit} = detail.notification.data;
          if (bit == '1') {
            navigationRef.current.navigate('drawerStack',{ screen: 'message',params:{index:0} });
          } else if (bit == '2') {
            navigationRef.current.navigate('drawerStack',{ screen: 'message',params:{index:1} });
          } else if(bit == '3') {
             navigationRef.current.navigate('drawerStack',{ screen: 'message',params:{index:2} });
          }else if(bit =='4'){
              navigationRef.current.navigate('drawerStack',{ screen: 'News'});
          }
          break;
        case EventType.DELIVERED:
          var {bit} = detail.notification.data;
          console.log(' Notification ', detail.notification);
          console.log(' Notification ', detail.notification.body);
          if (bit == '1') {
            setPupUpVisible(true);
            setNotificationBody(detail.notification.body);
            setNotificationTitle(detail.notification.title);
          }
          break;
      }
    });
    notifee.onBackgroundEvent(async ({ type, detail }) => {
      const { notification, pressAction } = detail;
    
      // Check if the user pressed the "Mark as read" action
      if (type === EventType.ACTION_PRESS && pressAction.id === 'mark-as-read') {
        // Update external API
        await fetch(`https://my-api.com/chat/${notification.data.chatId}/read`, {
          method: 'POST',
        });
    
        // Remove the notification
        await notifee.cancelNotification(notification.id);
      }
    });
  };

  const checkApplicationPermission = (s = async () => {
    const authorizationStatus = await messaging().requestPermission();

    if (authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED) {
      console.log('User has notification permissions enabled.');
    } else if (
      authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL
    ) {
      console.log('User has provisional notification permissions.');
    } else {
      console.log('User has notification permissions disabled');
    }
  });
  const syncMethodGetData = async () => {
    await AsyncStorage.getItem('@loginData').then(value => {
      const userData_ = JSON.parse(value);
      // console.log("userData ", userData)
      setSingleClientkey(
        `${userData_[0]?.UserName + '_' + userData_[0]?.Mobile}`,
      );
      setUserData(userData_);
    });
  };
  const homeSocket = socket => {
    // setIsLoading(true);

    socket.on('connect', function () {
      console.log('connection');
      console.log('client id_ mobile ', `${singleClientkey}`);
      socket.emit('client', ApiUtils.ClientName);
      // socket.emit(`clientid_${userData[0].Mobile}`, ApiUtils.ClientId);
      socket.emit(
        'endClient',
        userData[0]?.UserName + '_' + userData[0]?.Mobile,
      );
    });

    socket.on('refDetails', data => {
      try {
        if (data != '') {
          NativeAppEventEmitter.emit('refDetails', data);
        }
      } catch (e) {
        console.log('refDetails error ', e);
      }
    });

    socket.on('singleLogin', data => {
      try {
        if (data != '') {
          console.log('data singleLogin ', data);
          // NativeAppEventEmitter.emit('singleLogin', data);
          if (userData[0].MAC != data[0].MAC) {
            Alert.alert(
              ' App ',
              'Your account has been already loggedin from another devices.',
              [
                {
                  text: 'Cancel',
                  onPress: () => null,
                  style: 'cancel',
                },
                {
                  text: 'YES',
                  onPress: () => {
                    if (userData[0].MAC != data[0].MAC) {
                      AsyncStorage.clear();
                      navigationRef.current.navigate('login');
                    }
                  },
                },
              ],
            );
          }
         
        }
      } catch (e) {
        console.log('singleLogin error ', e);
      }
    });
  };

  const onClickEvent=(Platform)=>{
    console.log("Selected plat form ", Platform)
    if (Platform == 'ios') {
      Linking.openURL(
        ApiUtils.iOSAppURL,
        ).catch(err => console.error('An error occurred', err));
        setCheckUpdatePopUpVisible(false);
    } else if (Platform == 'android') {
      Linking.openURL(
        ApiUtils.AndroidAppURL,
      ).catch(err => console.error('An error occurred', err));
      setCheckUpdatePopUpVisible(false);
    }
  }
  // useEffect(()=>{
  //   console.log("draG ", dragablePopup)
  // },[dragablePopup])
  const handleClickContactCall = () => {
    setDragablePopup(!dragablePopup)
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <NavigationUtil />
      {pupUpVisible && (
        <ModalComponent
          modalVisible={pupUpVisible}
          hideUpdateModal={() => {
            setPupUpVisible(false);
          }}
          notificationBody={notificationBody}
          notificationTitle={notificationTitle}
          btnTitle="OK"
        />
      )}
      {
        checkUpdatePopUpVisible && 
        <ModalComponent
          modalVisible={checkUpdatePopUpVisible}
          hideUpdateModal={() => {
            onClickEvent(Platform.OS)
          }}
          notificationBody={`New version is available, please update now for exploring best features of `+ApiUtils.ClientName}
          notificationTitle={""}
          btnTitle="UPDATE NOW"
        />
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default App;
