import React, { Component } from "react";

import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight,
 } from "react-native";


class Home extends Component {

    _onPressButton(name) {
        // console.log('button pressed')
        console.log('Audio Name', name)
        // console.log(this.props.navigation)
        this.props.navigation.navigate("Player", {
            chapterTitle: name,
        });
    }


    static navigationOptions = {
        title: 'Home',
    };

  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>

            <Text style={styles.titleText}>Drift LA{"\n"}Audio</Text>

            <TouchableHighlight style={styles.openPlayerButton}
                // onPress={() => navigate('Audio')}
                onPress={() => this._onPressButton('oceans')}
                underlayColor={'#DDD'} >
                <Text style={styles.openPlayerButtonText}>Play Oceans End</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.openPlayerButton}
                // onPress={() => navigate('Audio')}
                onPress={() => this._onPressButton('sleepless')}
                underlayColor={'#DDD'} >
                <Text style={styles.openPlayerButtonText}>Play Sleepless</Text>
          </TouchableHighlight>

        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        paddingTop: 30,
        paddingBottom: 160,
        color:'#222',
        textAlign:'center',
        fontSize : 50,
        fontWeight: '700'
    },
    openPlayerButton: {
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
    openPlayerButtonText: {
        color:'#222',
        textAlign:'center',
        fontSize : 22,
        fontWeight: '600'
    },
});

export default Home;
