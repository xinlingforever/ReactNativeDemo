import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';

var start = new Date();

class PressEventDemo extends Component {  
  show(text) {  
    console.log('in function show(), text:' + text); 
  }  
  //手势相关事件的实现  
  onPressIn(){  
    start = new Date();
    console.log("press in");
  }  
  onPressOut(){  
    console.log("press out");
  }  
  onPress(text){  
    console.log("press, text:" + text);
  }  
  onLonePress(){ 
    console.log("long press "+((new Date) - start));
  }  
  render() {  
    return(  
      <View style={styles.container}> 
        <TouchableOpacity 
          style={styles.touchable} 
          onPressIn={this.onPressIn} 
          onPressOut={this.onPressOut}  
          onPress={this.onPress.bind(this,'short click')} 
          onLongPress={this.onLonePress}>  
          <View style={styles.button}></View>  
        </TouchableOpacity>  
      </View>  
    )  
  };  
}  

class PressEventDemo2 extends Component {  
  constructor(props) {
    super(props);
  
    this.state = {
      bg: 'white',  
      bg2: 'white' 
    };
  }
  componentWillMount(){  
    this._gestureHandlers = {  
      //外部正方形在“捕获期”阻止底层时间成为响应者  
      //onStartShouldSetResponderCapture: () => true,  
     // onMoveShouldSetResponderCapture: ()=> true,  
      onResponderGrant: ()=>{this.setState({bg: 'red'})},  
      onResponderMove: ()=>{console.log(11111111)},  
      onResponderRelease: ()=>{this.setState({bg: 'white'})},  
    }  
    this._gestureHandlers2 = {  
      //内部正方形在即时实现了on*ShouldSetResponder也无法成为响应者  
      onStartShouldSetResponder: () => true,  
      onMoveShouldSetResponder: ()=> true,  
      onResponderGrant: ()=>{this.setState({bg2: 'green'})},  
      onResponderMove: ()=>{console.log(22222222)},  
      onResponderRelease: ()=>{this.setState({bg2: 'white'})}  
    }  
  } 
  render() {  
    return (  
      <View style={styles.container}>  
        <View {...this._gestureHandlers} style={[styles.rect,{"backgroundColor": this.state.bg}]}>  
          <View {...this._gestureHandlers2} style={[styles.rect2,{"backgroundColor": this.state.bg2}]}>  
          </View>  
        </View>  
      </View>  
    );  
  }  
};  
var styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: '#F5FCFF',  
  },  
  button:{  
    width: 200,  
    height: 200,  
    borderRadius: 100,  
    backgroundColor: 'red'  
  },  
  touchable: {  
    borderRadius: 100  
  }, 
  rect: {
    width: 200,
    height: 200,
  } ,
  rect2: {
    width: 100,
    height: 100,
  }
});  


module.exports = PressEventDemo2;