import React, {useEffect} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import Sound from 'react-native-sound';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    // Enable playback
    Sound.setCategory('Playback');

    // Load and play sound
    const welcomeSound = new Sound('welcome.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (!error) {
        welcomeSound.play();
      } else {
        console.log('Failed to load the sound', error);
      }
    });

    const timeout = setTimeout(() => {
      welcomeSound.release(); // Free resources
      navigation.replace('Home');
    }, 3000); // slightly longer to let audio play

    return () => {
      clearTimeout(timeout);
      welcomeSound.release();
    };
  }, []);

  return (
    <ImageBackground
      source={require('../../Images/splashlogo.png')}
      style={styles.background}
      resizeMode="cover"
    />
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
