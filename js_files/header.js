import React, {
	Component
} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	PixelRatio,
	BackAndroid,
	Touch,
	TouchableOpacity,
	Dimensions
} from 'react-native';

import ToastCustomModule from './toast_android';
import CallbackTestDemo from './callback_android_native';


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class Header extends Component {
	componentDidMount() {
		console.log('PixelRatio.get():'+PixelRatio.get()
			+' screenpxwidth:'+PixelRatio.getPixelSizeForLayoutSize(width)
			+' screenpxheight:'+PixelRatio.getPixelSizeForLayoutSize(height));
	  BackAndroid.addEventListener('hardwareBackPress', () => {
        alert('really?');
        return true;
	  });	
	}
	onPressed() {
		//ToastCustomModule.show('native toast', ToastCustomModule.SHORT);
		CallbackTestDemo.getSuccOrError(
			0,
			1,
			(arg1, arg2, arg3, arg4) => {
				alert(arg1+' '+arg2+' '+arg3+' '+arg4);
			},
			(errMsg) => {
				alert(errMsg);
			}
		); 
	}
	render() {
		return (
			<View style={styles.flex}>
        <Text style={styles.font}>
          <Text style={styles.font_1}>WANGWANG </Text>
          <Text style={styles.font_2}>NEWS</Text>
          <Text> END</Text>
        </Text>
        <TouchableOpacity 
          style={{width: 100, height: 100, marginTop: 100}}
          onPress={() => this.onPressed()}>
          <Text>click</Text>
        </TouchableOpacity>

      </View>
		);
	}
}

const styles = StyleSheet.create({
	flex: {
		marginTop: 25,
		height: 500,
		borderBottomWidth: 3 / PixelRatio.get(),
		borderBottomColor: '#EF2D36',
		alignItems: 'center'
	},
	font: {
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	font_1: {
		color: '#CD1D1C'
	},
	font_2: {
		color: '#fff',
		backgroundColor: '#CD1D1C'
	}
});