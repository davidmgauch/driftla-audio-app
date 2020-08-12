'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroScene,
  ViroText,
  Viro360Image,
  ViroSoundField,
  ViroSound,
} from 'react-viro';

export default class HelloWorldScene extends Component {

  constructor() {
    super();

    this.state = {
      // playToggle: false,
    }
  }

  componentDidMount () {
    console.log('VR Player');
    // console.log(this.props.sharedProps);
    // this.setState({playToggle: this.props.sceneNavigator.viroAppProps.playToggle})
  }

  // componentDidUpdate () {
  //   // console.log('VR Player');
  //   // console.log(this.props.sharedProps);
  //   this.setState({playToggle: this.props.sceneNavigator.viroAppProps.playToggle})
  // }

  render() {
    const playInfo = this.props.sceneNavigator.viroAppProps[0].playToggle;
    const chapterTitle = this.props.sceneNavigator.viroAppProps[1];
    const audioSources = {
      oceans: {
        title: 'Oceans End',
        uri: require('./res/oceans.wav')
      },
      sleepless: {
        title: 'Sleepless',
        uri: require('./res/sound2.wav')
      }
    }
    if (chapterTitle === 'oceans') {
      var sourceName = audioSources.oceans.uri
    } else if (chapterTitle === 'sleepless') {
      var sourceName = audioSources.sleepless.uri
    }


    // var currentAudioSource = audioSources.+{chapterTitle}
    console.log('sourceName', sourceName);


      

    // console.log(this.props.sceneNavigator.viroAppProps.playToggle);
    console.log(this.props.sceneNavigator.viroAppProps[1]);
    // this.setState({playToggle: this.props.sceneNavigator.viroAppProps.playToggle})
    console.log(playInfo);
    
    
    return (
      <ViroScene>
        <ViroSoundField
            paused={playInfo}
            muted={false}
            source={sourceName}
            // source={{uri:"https://davidgauch.com/spatialaudioplayer/sound.mp3"}}
            loop={true}
            volume={1.0}
            onFinish={this.onFinishSound}
            onError={this.onErrorSound}/>
        {/* <Viro360Image source={require('./res/guadalupe_360.jpg')} /> */}
        {/* <ViroText text="Hello World!" width={2} height={2} position={[0, 0, -2]} style={styles.helloWorldTextStyle} /> */}
      </ViroScene>
    );
  }

}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 60,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

module.exports = HelloWorldScene;
