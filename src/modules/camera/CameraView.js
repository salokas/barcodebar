'use strict';
import React from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';

class CameraView extends React.Component {
  static displayName = 'CounterView';

  static navigationOptions = {
    title: 'Camera',
    tabBar: () => ({
      icon: (props) => (
        <Icon name='plus-one' size={24} color={props.tintColor} />
      )
    })
  }

  onComponenDidMount() {
    this.startCameraCaptureLoop();
  }

  constructor() {
    super();
    this.state = {
      imagesTaken: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture}>aim at code ({this.state.imagesTaken})</Text>
        </Camera>
      </View>
    );
  }

  startCameraCaptureLoop() {
    this.takePicture();
    this.state.set("imagesTaken", this.state.imagesTaken + 1);
    this.captureLoopInterval = setInterval(() => {
      this.takePicture();
    }, 333);
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
        .then((data) => console.log(data))
        .catch(err => console.error(err));
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

AppRegistry.registerComponent('BadInstagramCloneApp', () => BadInstagramCloneApp);

export default CameraView;
