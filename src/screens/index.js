import React from 'react';
import {StatusBar, TouchableOpacity, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Styles from './styles';

import BottomSheet from '../components/BottomSheet';

const BottomSheetScreen = () => {
  const onPressHandler = () => {
    //
  };
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={Styles.container}>
        <StatusBar backgroundColor={'white'} barStyle="dark-content" />
        <TouchableOpacity style={Styles.button} onPress={onPressHandler} />
        <BottomSheet />
      </View>
    </GestureHandlerRootView>
  );
};

export default BottomSheetScreen;
