import React, {useState} from 'react';
import {Modal, View, ActivityIndicator, StyleSheet} from 'react-native';

const CustomLoader = ({visible}) => {
  return (
    <Modal transparent={true} visible={visible}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#2b8482" />
      </View>
    </Modal>
  );
};

export default CustomLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
