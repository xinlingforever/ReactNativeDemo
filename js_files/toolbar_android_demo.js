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
  TouchableHighlight,
} from 'react-native';

import DrawerLayoutDemo from './drawer_layout_android';

var ToolbarAndroid = require('ToolbarAndroid');

var iconDrawerClosed = require('./img/single_choice_checked.png');
var iconDrawerOpened = require('./img/icon_switch_blue_off_to_on_normal.png');
var iconCreate = require('./img/locale_setting_download.png');
var iconSettings = require('./img/side_bar_setting.png');

class ToolBarAndroidDemo extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      iconDrawer: iconDrawerClosed,
    };
  }
  openDrawer() {
    console.log('toolbar_android_demo in openDrawer()');
    this.refs.DEMO.openDrawer();
  }

  closeDrawer() {
    console.log('toolbar_android_demo in closeDrawer()');
    this.refs.DEMO.closeDrawer();
  }
  handleIconClicked() {
    console.log('toolbar_android_demo in handleIconClicked()');
    if (this.refs.DEMO.getDrawerStatus()) {
      this.closeDrawer();
      this.setState({
        iconDrawer: iconDrawerClosed
      });
    }else{
      this.openDrawer();
      this.setState({
        iconDrawer: iconDrawerOpened
      });
    }
  }

  render() {
    return (
      <View style={styles.flex}>
        <ToolbarAndroid
            actions={toolbarActions}
            navIcon={this.state.iconDrawer}
            style={styles.toolbar}
            subtitle="TITLE"
            title="subtitle" 
            onIconClicked={() => this.handleIconClicked()}>
        </ToolbarAndroid>
        <DrawerLayoutDemo 
          ref='DEMO'
          hasTitle={false}>
        </DrawerLayoutDemo>
      </View>
    );
  }
}
var toolbarActions = [
  {title: 'Create', icon: iconCreate, show: 'always'},
  {title: 'Filter'},
  {title: 'Settings', icon: iconSettings, show: 'always'},
];
const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  },
    naviContainer: {
    flex: 1, 
    backgroundColor: 'blue'
  },
    flex: {
    flex: 1
  }
});

module.exports = ToolBarAndroidDemo;