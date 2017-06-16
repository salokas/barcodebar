import React, {PropTypes, Component} from 'react';
import {
  Button,
  View,
  StyleSheet,
  Text
} from 'react-native';

class CommentView extends React.Component {
  static displayName = 'Comments';

  static navigationOptions = {
    title: 'Comments for...',
    // TODO: move this into global config?
    header: {
      tintColor: 'white',
      style: {
        backgroundColor: '#39babd'
      }
    }
  }
  render() {
    return (
      <View style={{ backgroundColor: '#0cacca' }}>
        <Text>Hello wurld!!</Text>
      </View>
    );
  }
}

export default CommentView
