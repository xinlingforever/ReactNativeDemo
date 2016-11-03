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
import NavigatorView from './js_files/navigator';
import NavigatorView2 from './js_files/navigator2';
import ProgressBarAndroidExample from './fb_examples/ProgressBarAndroidExample.android';
import DrawerLayoutDemo from './js_files/drawer_layout_android';
import ScrollViewSimpleExample from './js_files/scrollview_demo';
import ToolBarAndroidDemo from './js_files/toolbar_android_demo';
import SwitchDemo from './js_files/switcher_demo';
import PickerDemo from './js_files/picker_demo';
import ViewPagerAndroidExample from './js_files/view_pager_demo';
import PullToRefreshDemo from './js_files/pull_to_refresh';
import ClipboardExample from './js_files/clipborad_demo';
import DatePickerAndroidExample from './js_files/date_picker_demo';
import NetInfoDemo from './js_files/net_info_demo';
import LayoutAnimatedDemo from './js_files/layout_animated_demo';
import AnimatedDemo from './js_files/animated_demo';
import PressEventDemo from './js_files/press_event_demo';
import PressEventDemo2 from './js_files/press_event_demo';
import MoveEventDemo from './js_files/move_event_demo';
import MoveEventDemo2 from './js_files/move_event_demo';

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
            <Header></Header>

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