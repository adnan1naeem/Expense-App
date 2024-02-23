import React from 'react';
import { View, Modal, ActivityIndicator, StyleSheet } from 'react-native';

const Index = (props: any) => {
  const { loading } = props;

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {
        console.log('close modal');
      }}>
      {/* Background overlay */}
      <View style={styles.modalBackground}>
        {/* Container for the activity indicator */}
        <View style={styles.activityIndicatorWrapper}>
          {/* Loading spinner */}
          <ActivityIndicator
            animating={true}
            color="#000000" // Customize the color if needed
            size="large"    // Adjust the size if needed
            style={styles.activityIndicator}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Index;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040', // Semi-transparent black background overlay
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF', // Background color for the container
    height: 100,                // Container height
    width: 100,                 // Container width
    borderRadius: 10,           // Border radius for a rounded appearance
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80, // Adjust the height of the activity indicator
  },
});