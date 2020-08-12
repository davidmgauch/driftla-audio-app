/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
} from 'react-native';

import {
  ViroVRSceneNavigator,
  ViroARSceneNavigator,
  Viro3DSceneNavigator,
} from 'react-viro';

/*
 TODO: Insert your API key below
 */
var sharedProps = {
  apiKey:"D55ED560-F148-4F9C-9F4F-F4C363483A81",
}

// Sets the default scene you want for AR and VR
var InitialARScene = require('./HelloWorldSceneAR');
var InitialVRScene = require('./HelloWorldScene');

var UNSET = "UNSET";
var VR_NAVIGATOR_TYPE = "VR";
var AR_NAVIGATOR_TYPE = "AR";

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
var defaultNavigatorType = VR_NAVIGATOR_TYPE;

export default class Player extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType : defaultNavigatorType,
      sharedProps : sharedProps,
      viroAppProps: {
        playToggle: false,
        chapterTitle: null,
      },
      playText: "Pause"
    }
    // this._playPauseButtonOnPress = this._playPauseButtonOnPress.bind(this);
    // this._getExperienceSelector = this._getExperienceSelector.bind(this);
    // this._getARNavigator = this._getARNavigator.bind(this);
    this._getVRNavigator = this._getVRNavigator.bind(this);
    // this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(this);
    // this._exitViro = this._exitViro.bind(this);
  }

  _playPauseButtonOnPress () {
    console.log("pause button pressed");
    if(this.state.viroAppProps.playToggle == true) {
      this.setState({ viroAppProps: { ...this.state.viroAppProps, playToggle: false}, playText: "Pause" })
    } else if (this.state.viroAppProps.playToggle == false) {
      this.setState({ viroAppProps: { ...this.state.viroAppProps, playToggle: true}, playText: "Play" })
    }
    console.log('Player Paused', this.state.viroAppProps.playToggle)
    
  }


  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
    // console.log(this.props.navigation.state.params.chapterTitle);
    // console.log('chapterTitle', this.state.viroAppProps.chapterTitle);
    const chapterTitle = this.props.navigation.state.params.chapterTitle
    // this.setState({viroAppProps: {chapterTitle: chapterTitle}})
    // console.log('chapterTitle', this.state.viroAppProps.chapterTitle);

    if (this.state.navigatorType == UNSET) {
      return this._getExperienceSelector();
    } else if (this.state.navigatorType == VR_NAVIGATOR_TYPE) {
      return this._getVRNavigator(chapterTitle);
    } else if (this.state.navigatorType == AR_NAVIGATOR_TYPE) {
      return this._getARNavigator();
    }
  }


  // Returns the ViroARSceneNavigator which will start the AR experience
  // _getARNavigator() {
  //   return (
  //     <View style={localStyles.arContainer}> 
  //       <ViroARSceneNavigator {...this.state.sharedProps} {...this.state.playToggle}
  //       initialScene={{scene: InitialARScene}} onExitViro={this._exitViro}/>
  //       <TouchableHighlight style={localStyles.buttonPlay}
  //           onPress={null}
  //           underlayColor={'#DDD'} >

  //           <Text style={localStyles.buttonText}>Pause</Text>
  //       </TouchableHighlight>
  //     </View>
      
  //   );
  // }
  
  // Returns the ViroSceneNavigator which will start the VR experience
  _getVRNavigator(chapterTitle) {
    // console.log('_getVRNavigator', chapterTitle);
    return (
      <View style={localStyles.arContainer}> 
        <ViroVRSceneNavigator {...this.state.sharedProps} chapterInfo={chapterTitle} viroAppProps={[this.state.viroAppProps, chapterTitle]}
        initialScene={{scene: InitialVRScene}} vrModeEnabled={false} />
        <Text style={localStyles.titleText}>{chapterTitle}</Text>
        <TouchableHighlight style={localStyles.buttonPlay}
            onPress={() => this._playPauseButtonOnPress()}
            underlayColor={'#DDD'} >

            <Text style={localStyles.buttonText}>{this.state.playText}</Text>
        </TouchableHighlight>
        
      </View>
    );
  }

  // This function returns an anonymous/lambda function to be used
  // by the experience selector buttons
  // _getExperienceButtonOnPress(navigatorType) {
  //   return () => {
  //     this.setState({
  //       navigatorType : navigatorType
  //     })
  //   }
  // }

  // // This function "exits" Viro by setting the navigatorType to UNSET.
  // _exitViro() {
  //   this.setState({
  //     navigatorType : UNSET
  //   })
  // }
}

var localStyles = StyleSheet.create({
  viroContainer :{
    flex : 1,
    backgroundColor: "#F2F2F2",
  },
  arContainer: {
    flex : 1,
    // backgroundColor: "blue",
  },
  overlayView: {
    position: "absolute",
    bottom: 0,
    height: 40,
    width: 400,
    backgroundColor: "red",
  },
  outer : {
    flex : 1,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: "#F2F2F2",
  },
  inner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: "#F2F2F2",
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 160,
    color:'#222',
    textAlign:'center',
    fontSize : 50,
    fontWeight: '700'
  },
  buttonText: {
    color:'#222',
    textAlign:'center',
    fontSize : 22,
    fontWeight: '600'
  },
  buttons : {
    height: 60,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor:'#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },
  buttonPlay : {
    position: 'absolute',
    bottom: 40,
    height: 60,
    width: '20%',
    marginHorizontal: 165,
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 20,
    backgroundColor:'#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },
  exitButton : {
    height: 50,
    width: 100,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  }
});

module.exports = Player
