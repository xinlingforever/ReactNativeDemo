import React, {
	Component
} from 'react';
import {
	AppRegistry,
	StyleSheet,
	TextInput,
	View,
	Text,
	PixelRatio
} from 'react-native';

var onePT = 1 / PixelRatio.get();
export default class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			text: ''
		};
	}
	getValue(text) {
		var value = text;
		this.setState({
			show: true,
			text: value
		});
	}
	hide(val) {
		this.setState({
			show: false,
			text: val
		});
	}
	render() {
		return (
			<View style={styles.flex}>
		    <View style={[styles.flexDirection, styles.inputHeight]}>
          <View style={styles.flex}>
            <TextInput 
              style={styles.input} 
              returnKeyType='search'
              placeholder='please input key words'
              onEndEditing={this.hide.bind(this, this.state.text)} //after lose forcus
              value={this.state.text}
              onChangeText={this.getValue.bind(this)} />
          </View>
          <View style={styles.btn}>
            <Text 
              style={styles.search}
              onPress={this.hide.bind(this, this.state.text)}>
              Search
            </Text>
          </View>
        </View>
        {this.state.show?
        	<View style={styles.result}>
        	  <Text 
        	    onPress={this.hide.bind(this, this.state.text + ' A')}
        	    style={styles.item}
        	    numberOfLines={1}>
        	    {this.state.text} A
        	  </Text>
        	</View>
        	: null
        }
      </View>
		);
	}
}

const styles = StyleSheet.create({
	flex: {
		flex: 1
	},
	flexDirection: {
		flexDirection: 'row'
	},
	topStatus: {
		marginTop: 25
	},
	input: {
		height: 45,
		borderWidth: 1,
		marginLeft: 5,
		paddingLeft: 5,
		borderColor: '#ccc',
		borderRadius: 5
	},
	btn: {
		width: 55,
		marginLeft: 5,
		marginRight: 5,
		backgroundColor: '#23BEFF',
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5
	},
	search: {
		color: '#fff',
		fontSize: 15,
		fontWeight: 'bold'
	},
	result: {
		marginTop: onePT,
		marginLeft: 5,
		marginRight: 5,
		height: 200,
		borderColor: '#ccc',
		borderTopWidth: onePT
	},
	item: {
		fontSize: 16,
		padding: 5,
		paddingTop: 10,
		paddingBottom: 10,
		borderWidth: onePT,
		borderColor: '#ddd',
		borderTopWidth: 0
	}
});