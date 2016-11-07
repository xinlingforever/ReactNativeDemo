'use strict';
var React = require('react');
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import SimpleViewPagerDemo from './simple_viewpager_demo';
import Header from './header';
import Search from './search';

var NUM_ITEMS = 10;

var ScrollViewSimpleExample = React.createClass({
  statics: {
    title: '<ScrollView>',
    description: 'Component that enables scrolling through child components.'
  },
  makeItems: function(nItems, styles) {
    var items = [];
    for (var i = 0; i < nItems; i++) {
       items[i] = (
         <TouchableOpacity key={i} style={styles}>
           <Text>{'item' + i}</Text>
         </TouchableOpacity>
       );
    }
    return items;
  },

  render: function() {
    // One of the items is a horizontal scroll view
    var items = []; //this.makeItems(NUM_ITEMS, styles.itemWrapper);
    for (var i=0; i<NUM_ITEMS; i++){
      items[i] = (
        <ScrollView key={'child'+i} horizontal={true}>
          {this.makeItems(NUM_ITEMS, [styles.itemWrapper, styles.horizontalItemWrapper])}
        </ScrollView>
      );
    }
    items[0] = (
      <View style={{height: 100}} key={'title'}>
        <Header />
      </View>
    );
    items[1] = (
      <View style={{height: 100}} key={'search'}>
        <Search />
      </View>
    );
    items[2] = (
      <View style={{
        height: 300,
      }} key={'viewpager'}>
        <SimpleViewPagerDemo />
      </View>
    );

    items[6] = (
      <View style={{
        height: 300,
      }} key={'viewpager2'}>
        <SimpleViewPagerDemo></SimpleViewPagerDemo>
      </View>
    );

    var verticalScrollView = (
      <ScrollView style={styles.verticalScrollView}>
        {items}
      </ScrollView>
    );

    return verticalScrollView;
  }
});

var styles = StyleSheet.create({
  verticalScrollView: {
    margin: 10,
  },
  itemWrapper: {
    backgroundColor: '#dddddd',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 5,
    borderColor: '#a52a2a',
    padding: 30,
    margin: 5,
  },
  horizontalItemWrapper: {
    padding: 30
  }
});
module.exports = ScrollViewSimpleExample;