'use strict';

import React, {
  Component
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Switch,
} from 'react-native';

export default class SwitchDemo extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	switchValue: false,
	  };
	}
	onValueChanged() {
		this.setState({
      switchValue: !this.state.switchValue
		});
	}
	render() {
		return (
			<View style={styles.flex}>
			  <Text>TEST</Text>
			  <Switch
			    style={styles.switch}
			    disabled={false}
			    onValueChange={() => this.onValueChanged()}
			    value={this.state.switchValue}>
			   </Switch>
			   <Text>current value is {this.state.switchValue? 'true' : 'false'}</Text>
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
	switch: {
		marginTop: 10,
		marginBottom: 10
	}
});