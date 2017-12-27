import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { Actions } from 'react-native-router-flux'; 

const Doing = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {/* <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        /> */}
        <Text
          style={styles.timeline}
        >
          My Doing Timeline
        </Text>
      </View>
      <View
        style={styles.whatToDo}
      >
        <Button
          title="What do you want to do...?"
          onPress={() => Actions.whatToDo()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  whatToDo: {
    margin: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  timeline: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default Doing;
