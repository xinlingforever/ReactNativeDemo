import React, {
	Component
} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity
} from 'react-native';

var imgs = [
	'http://www.ituring.com.cn/bookcover/1442.796.jpg',
	'http://www.ituring.com.cn/bookcover/1668.553.jpg',
	'http://www.ituring.com.cn/bookcover/1521.260.jpg'
];

var imgsLocal = require('./img/ball.jpg');

export default class ImageViewer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgs: imgs,
			count: 0,
		};
	}
	goNext() {
		var count = this.state.count;
		count++;
		if (count < this.state.imgs.length + 1) {
			this.setState({
				count: count
			});
		}
	}
	goPrev() {
		var count = this.state.count;
		count--;
		if (count >= 0) {
			this.setState({
				count: count
			});
		}
	}
	render() {
		var imgSelected = this.state.count > (this.state.imgs.length - 1) ? imgsLocal : {
			uri: this.state.imgs[this.state.count]
		};
		return (
			<View style={styles.flex}>
			  <View style={styles.image}>
			    <Image 
			      style={styles.img}
            source={imgSelected}
            resizeMode='contain'>
          </Image>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity onPress={this.goPrev.bind(this)}>
            <View style={styles.btn}>
              <Text>Prev</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goNext.bind(this)}>
            <View style={styles.btn}>
              <Text>Next</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
		);
	}
}

const styles = StyleSheet.create({
	flex: {
		flex: 1,
		alignItems: 'center'
	},
	image: {
		borderWidth: 1,
		width: 300,
		height: 200,
		borderRadius: 5,
		borderColor: '#ccc',
		justifyContent: 'center',
		alignItems: 'center'
	},
	img: {
		width: 200,
		height: 150
	},
	btns: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 20
	},
	btn: {
		width: 60,
		height: 30,
		borderColor: '#0089FF',
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 3,
		marginRight: 20
	}

});