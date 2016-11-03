'use strict';

import React, {
  Component
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Picker,
} from 'react-native';

export default class PickerDemo extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	language: 'Java',
	  };
	}
	setValue(val) {
		this.setState({
      language: val
		});
	}
	render() {
  return (
    <View style={styles.flex}>
			<Text>TEST</Text>
      <Picker
        style={styles.picker}
        selectedValue={this.state.language}
        onValueChange={(lang) => this.setValue(lang)}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
			<Text>current value is {this.state.language}</Text>
	  </View>

  );
}

}

const styles = StyleSheet.create({
	flex: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	picker: {
		width: 150,
		marginTop: 10,
		marginBottom: 10
	}
});