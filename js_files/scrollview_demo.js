'use strict';
var React = require('react');
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

var NUM_ITEMS = 20;

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
    // items[4] = (
    //   <ScrollView key={'scrollView'} horizontal={true}>
    //     {this.makeItems(NUM_ITEMS, [styles.itemWrapper, styles.horizontalItemWrapper])}
    //   </ScrollView>
    // );

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
    padding: 10,
    margin: 5,
  },
  horizontalItemWrapper: {
    padding: 20
  }
});
module.exports = ScrollViewSimpleExample;