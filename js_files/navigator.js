import React, {
	Component
} from 'react';

import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Navigator,
	TouchableOpacity
} from 'react-native'; 

import WebPage from './webpage';

const firstPageUri = 'http://mobimagic.com';
const secondPageuri = 'http://baidu.com';
const thirdPageuri = 'http://163.com';
const MAX_PAGE_NUMS = 3;

class FirstPage extends Component {
	gotoNext(name, type = 'Normal') {
		this.props.navigator.push({
			component: SecondPage,
			passProps: {
				id: name,
			},
		})
	}

	render() {
		return (
			<View style={styles.container}>
			  <View style={styles.webpage}>
			    <WebPage uri={firstPageUri}></WebPage>
			  </View>
			  <View style={styles.bottomBtn}>
          <TouchableOpacity
            onPress={()=>this.gotoNext('FIRST PAGE')}>
            <Text style={styles.buttonText}>
              {'GOTO NEXT PAGE'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
		);
	}
}

class SecondPage extends Component {
	gotoNext(name, type = 'Normal') {
		this.props.navigator.push({
			component: ThirdPage,
			passProps: {
				id: name
			},
		});
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.webpage}>
			    <WebPage uri={secondPageuri}></WebPage>
			  </View>
			  <View style={styles.bottomBtn}>
          <TouchableOpacity
            onPress={()=> this.gotoNext('Second Page')}>
            <Text style={styles.buttonText}>
              Prev, from: {this.props.id}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
		);
	}
}

class ThirdPage extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.webpage}>
			    <WebPage uri={thirdPageuri}></WebPage>
			  </View>
			  {/*<View style={styles.bottomBtn}>
          <TouchableOpacity
            onPress={()=>this.props.navigator.pop()}>
            <Text style={styles.buttonText}>
              Prev, from: {this.props.id}
            </Text>
          </TouchableOpacity>
        </View>*/}
      </View>
		);
	}
}

var NavigationBarRouteMapper = {
	LeftButton(route, navigator, index, navState) {
		if (index > 0) {
			return (
				<View style={styles.navTitle}>
          <TouchableOpacity
            underlayColor='transparent'
            onPress={() => {if (index > 0) {navigator.pop()}}}>
            <Text style={styles.leftNavButtonText}>BACK</Text>
          </TouchableOpacity>
        </View>
			);
		} else {
			return null;
		}
	},
	RightButton(route, navigator, index, navState) {
		// if (index == (MAX_PAGE_NUMS-1))
		// 	return (
		// 		<View style={styles.navTitle}>
  //         <TouchableOpacity
  //           onPress={() => route.onPress()}>
  //           <Text style={styles.rightNavButtonText}>
  //             {route.rightText || 'RIGHT KEY'}
  //           </Text>
  //         </TouchableOpacity>
  //       </View>
		// 	);
	},
	Title(route, navigator, index, navState) {
    return (
      <View style={styles.navTitle}>
        <Text style={styles.titleText}>PAGE {index}</Text>
      </View>
    );
	}
};

export default class UniformView extends Component {

	renderScene(route, navigator) {
		return <route.component navigator={navigator}  {...route.passProps} />;
	}

	configureScene(route, routeStack) {
		return Navigator.SceneConfigs.PushFromRight;
	}

	render() {
		return ( 
			<Navigator 
			  style = {{flex: 1}}
			  initialRoute = {{
					name: 'FirstPage',
					component: FirstPage
			  }}
			  configureScene = {
				  this.configureScene
			  }
			  renderScene = {
				  this.renderScene
			  }
			  navigationBar = {
				  <Navigator.NavigationBar
				    navigationStyles={Navigator.NavigationBar.StylesIOS}
            style={styles.navContainer}
			      routeMapper = {NavigationBarRouteMapper}>
			    </Navigator.NavigationBar>
			  }>
			</Navigator>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 60,
		flexDirection: 'column'
	},
	navContainer: {
		backgroundColor: '#81c04d',
		justifyContent: 'center',
		alignItems: 'center'
	},
	webpage: {
		flex: 1,
	},
	bottomBtn: {
		flex: 0,
		height: 60,
		justifyContent: 'center',
		backgroundColor: '#ff1049',
		alignItems: 'center'
	},
	buttonText: {
		fontSize: 18,
		color: '#ffffff'
	},
	leftNavButtonText: {
		color: '#ffffff',
		fontSize: 18,
		marginLeft: 12,
	},
	rightNavButtonText: {
		color: '#ffffff',
		fontSize: 18,
		marginRight: 12,
	},
	navTitle: {
		flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
	},
	titleText: {
		color: '#ffffff',
		fontSize: 18,
	}
});