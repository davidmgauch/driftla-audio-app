'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroSoundField,
  ViroSound,
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing Audio"
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
    // this._exitViro = this._exitViro.bind(this);
  }

  render() {
    return (
      // <View style={styles.container}>
          <ViroARScene onTrackingUpdated={this._onInitialized} >
            <ViroSoundField
                paused={false}
                muted={false}
                source={require('./res/sound2.wav')}
                // source={require('./res/sound.mp3')}
                loop={true}
                volume={1.0}
                onFinish={this.onFinishSound}
                onError={this.onErrorSound}/>
            <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />
        </ViroARScene>
      // </View>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Playing Audio"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

module.exports = HelloWorldSceneAR;
