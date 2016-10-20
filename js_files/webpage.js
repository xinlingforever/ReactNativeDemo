import React, {
	Component
} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	WebView,
	//Dimensions
} from 'react-native';

// var width = Dimensions.get('window').width;
// var height = Dimensions.get('window').height;

export default class WebPage extends Component {
	render() {
		//console.log('webview:'+width+"|"+height);
		return (
			<View style={styles.container}>
        <WebView 
          //injectedJavaScript = "alert('hello')"
          bounces = {false}
          source = {{uri: this.props.uri}}>
        </WebView>
      </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	// webview: {
	// 	width: width,
	// 	height: height
	// }
});