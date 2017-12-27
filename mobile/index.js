// import { AppRegistry } from 'react-native';
// import App from './App';

import React, { Component } from 'react';
import { AppRegistry, View, Text, Button } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Doing from './app/Doing';
import WhatToDo from './app/WhatToDo';
import People from './app/People';
import MaizeScreen from './app/MaizeScreen';
import Stats from './app/Stats';
import BlackScreen from './app/BlackScreen';

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

const App = () => {
  return (
    
      <Router>
        <Scene key="root">
          {/* Tab Container */}
          <Scene
            key="tabbar"
            title="On Do"
            tabs={true}
            tabBarPosition={'bottom'}
            tabBarStyle={{ backgroundColor: '#FFFFFF' }}
          >
            {/* Tab and it's scenes */}
            <Scene key="doing" title="Doing" icon={TabIcon}>
              <Scene 
                key="doingTimeLine"
                component={Doing}
              />
              <Scene
                key="whatToDo"
                component={WhatToDo}
              />
            </Scene>

            {/* Tab and it's scenes */}
            <Scene key="people" title="People" icon={TabIcon}>
              <Scene
                key="contatPeople"
                component={People}
              />
              <Scene
                key="maize"
                component={MaizeScreen}
              />
            </Scene>

            {/* Tab and it's scenes */}
            <Scene key="stats" title="Stats" icon={TabIcon}>
              <Scene
                key="onDostats"
                component={Stats}
              />
              <Scene
                key="black"
                component={BlackScreen}
              />
            </Scene>
          </Scene>
        </Scene>
      </Router>
  );
}

AppRegistry.registerComponent('OnDo', () => App);
