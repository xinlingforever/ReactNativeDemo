/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './js_files/header';
import ListItem from './js_files/list_item';
import ImportantNews from './js_files/impr_news';
import Search from './js_files/search';
import TouchAble from './js_files/touchable';
import ImageViewer from './js_files/image_viewer';
import WebPage from './js_files/webpage';
import UniformView from './js_files/navigator'
import UniformView2 from './js_files/navigator_uniform'


export default class ReactNativeDemo extends Component {
  render() {
    return (
      <View style={styles.flex}>
                {/*<Header></Header>
                <ListItem title='Test line 1'></ListItem>
                <ListItem title='Test line 2'></ListItem>
                <ListItem title='Test line 3'></ListItem>
                <ListItem title='Test line 4'></ListItem>
                <ImportantNews news={[
                  'import news list 1',
                  'import news list 2',
                  'import news list 3',
                  'import news list 4',
                ]}></ImportantNews>
          <Search></Search> 
          <TouchAble></TouchAble>

            <ImageViewer></ImageViewer>
            <NavigatorItem></NavigatorItem> */}
            <UniformView></UniformView>

          </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  }
});

AppRegistry.registerComponent('ReactNativeDemo', () => ReactNativeDemo);