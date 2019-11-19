import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default class RobotController extends Component {
  constructor() {
    super();
    this.state = {
        open: false,
    };
    this.socket = null;
  }
  
  emit(message) {
    var timestamp = new Date(Date.now());
    var obj = {
      message: message,
      time: timestamp
    }
    this.socket.send(JSON.stringify(obj));
  }
  componentDidMount() {
    // This address will need to change depending on the laptop (server) IP
    this.socket = new WebSocket('ws://192.168.1.204:1234'); 
    this.socket.onopen = () => {
      this.setState(prevState => ({
        open: true
      }))
      this.socket.send('Hello from the client');
    }
    this.socket.onmessage = ({data}) => console.log(data);
  }
  render() {
    return (
      <>
      <View style={styles.container}>
        <Text style={{color: 'white', fontSize:30}}>Robot Controller</Text>
      </View>
      <View style={styles.container}>
        <View style={{alignItems: "center"}}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.emit.bind(this, '1')}
            underlayColor='#fff'>
            <Text style={styles.buttonText}>⬆</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.button}
              onPress={this.emit.bind(this, '3')}
              underlayColor='#fff'>
              <Text style={styles.buttonText}>⬅</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={this.emit.bind(this, '4')}
              underlayColor='#fff'>
              <Text style={styles.buttonText}>➡</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={this.emit.bind(this, '2')}
            underlayColor='#fff'>
            <Text style={styles.buttonText}>⬇</Text>
          </TouchableOpacity>
        </View>
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#838383',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60
  },
  button:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#1E6738',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    height: 50,
    width: 50
  },
  buttonText:{
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10,
    fontSize: 25
  }
});
