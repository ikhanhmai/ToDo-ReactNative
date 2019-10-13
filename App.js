import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import ListView from './App/components/ListView';
import {Provider} from 'react-redux';
import store from './App/store';
export default class TodoApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ListView />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 2,
    paddingRight: 2,
    backgroundColor: '#F8F8F8',
  },
});
