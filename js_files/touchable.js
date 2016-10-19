import React, {
	Component
} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	TouchableOpacity
} from 'react-native';


export default class TouchAble extends Component {
	show(text) {
		alert(text);
	}
	render() {
		return (
			<View style={styles.flex}>
        <View>
          <TouchableHighlight
            onPress={this.show.bind(this, 'hello')}
            underlayColor='#E1F6FF'>
            <Text style={styles.item}>Say Hello</Text>
          </TouchableHighlight>
          <TouchableOpacity
            onPress={this.show.bind(this, 'baby')}>
            <Text style={styles.item}>baby</Text>
          </TouchableOpacity>
        </View>
      </View>
		);
	}
}

const styles = StyleSheet.create({
	flex: {
		flex: 1,
		marginTop: 25
	},
	item: {
		fontSize: 18,
		marginLeft: 5,
		color: '#434343'
	}

});