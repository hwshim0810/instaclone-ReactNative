import React from 'react';
import { View, StatusBar } from 'react-native';
import AddPhotoNavigation from '../../navigations/AddPhotoNavigation';

const TakePhotoScreen = props => (
  <View style={{ flex: 1 }}>
    <AddPhotoNavigation />
    <StatusBar hidden={true} />
  </View>
);

export default TakePhotoScreen;
