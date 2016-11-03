/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  Component
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
} from 'react-native';

export default class DrawerLayoutDemo extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isDrawOpen: false
    };
  }
  static defaultProps = {
    hasTitle: true,
  }
  static propTypes = {
    hasTitle: React.PropTypes.bool,
    myRef: React.PropTypes.string,
  }
  openDrawer() {
    this.refs.DRAWER.openDrawer();
  }

  closeDrawer() {
    this.refs.DRAWER.closeDrawer();
  }

  getDrawerStatus() {
    console.log('drawer_layout_android in getDrawerStatus isDrawOpen:' + this.state.isDrawOpen);
    return this.state.isDrawOpen;
  }
  setDrawerState(_state) {
    this.setState({
      isDrawOpen: _state
    });
  }
  render() {
  var navigationView = (
    <View style={styles.naviContainer}>
      <Text style={styles.naviTitle}>NAVI TITLE</Text>
      <Text style={styles.naviFunc1}>1.function1</Text>
      <Text style={styles.naviFunc2}>2.function2</Text>
    </View>
  );
  return (
    <DrawerLayoutAndroid
      ref= 'DRAWER'
      drawerWidth={150}
      drawerPosition={DrawerLayoutAndroid.positions.left}
      renderNavigationView={() => navigationView}
      onDrawerClose={this.setDrawerState.bind(this, false)} 
      onDrawerOpen={this.setDrawerState.bind(this, true)}>
      { this.props.hasTitle == true ? (
          <View style={styles.drawerContainer}>
            <Text style={styles.drawerTitle}>IM TITLE OF DRAWER</Text>
          </View>
      ) : null}
    </DrawerLayoutAndroid>
   );
  }
}

const styles = StyleSheet.create({
  naviContainer: {
    flex: 1, 
    backgroundColor: 'blue'
  },
  naviTitle: {
    margin: 10,
    color:'#fff',
    fontSize: 15, 
    textAlign: 'center'
  },
  naviFunc1: {
    marginTop: 10,
    marginLeft:20,
    color:'#fff',
    fontSize: 15, 
    textAlign: 'left'
  },
  naviFunc2: {
    marginTop: 10,
    marginLeft:20,
    color:'#fff',
    fontSize: 15, 
    textAlign: 'left'
  },
  drawerContainer: {
    flex: 1, 
    alignItems: 'center'
  },
  drawerTitle: {
    margin: 10, 
    fontSize: 15, 
    textAlign: 'right'
  }
});
