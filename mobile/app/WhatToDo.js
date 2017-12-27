import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const WhatToDo = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Write here what to do..."
      />
      <Button
        title="On"
        onPress={() => null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
});

export default WhatToDo;
