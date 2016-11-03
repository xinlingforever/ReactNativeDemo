import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  PanResponder,
  Dimensions,
  Animated,
  Image
} from 'react-native';

// class MoveEventDemo extends Component {  
//   constructor(props) {
//     super(props); 
//     this.state = {
//       bg: 'black',
//     };
//   }
//   componentWillMount() {  
//     this._gestureHandlers = {  
//       onStartShouldSetResponder: () => true,  
//       onMoveShouldSetResponder: ()=> true,  
//       onResponderGrant: ()=>{  
//         console.log('onResponderGrant');
//       },  
//       onResponderMove: ()=>{  
//         console.log('onResponderMove'); 
//       },  
//       onResponderRelease: ()=>{  
//         console.log('onResponderRelease'); 
//       }  
//     }  
//   } 
  
//   render() {  
//     return(  
//       <View style={styles.container}>  
//         <View {...this._gestureHandlers} style={[styles.rect, {backgroundColor:this.state.bg}]}></View>  
//       </View>  
//     );  
//   }  
// };

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const ctrWidth = 30;
const runWidth = 50;
const limit = 50;
const oriY = height/2 + height/4;
const oriX = width/2 - ctrWidth/2;
const oriRunY = height/4;
const oriRunX = width/2 - runWidth/2;

class MoveEventDemo2 extends Component {  
  constructor(props) {
     super(props);
   
     this.state = {
      bg: 'black',  
      top:   oriY,
      left:  oriX,
      runTop: oriRunY,
      runLeft: oriRunX,
      translateValue: new Animated.ValueXY({x:oriRunX, y:oriRunY}),
     };
  } 
  sayHello(){
    console.log('hello');
  }
  startAnimation(dx, dy) {
    //this.state.translateValue.setValue({x:0, y:0});
    var moveX = dx > 0 ? this.state.runLeft + 10 : this.state.runLeft - 10;
    var moveY = dy > 0 ? this.state.runTop + 10 : this.state.runTop - 10;
    if (dx == 0){
      moveX = this.state.runLeft;
    }
    if (dy == 0){
      moveY = this.state.runTop;
    }
    if (moveX <= 0) {
      moveX = 0;
    }
    if (moveY <= 0) {
      moveY = 0;
    }
    if (moveX >= width-runWidth){
      moveX = width-runWidth;
    }
    if (moveY >= height-runWidth-100) {
      moveY = height-runWidth-100;
    }

    console.log('startAnimation, moveX:'+moveX+' moveY:'+moveY+' w:'+width+' h:'+height);
    Animated.sequence([ 
      Animated.timing( 
        this.state.translateValue,
        {
          toValue: {x: moveX, y: moveY},
          duration: 0,
        }
      ),
    ]).start();
    // ValueXY
    // this.state.translateValue.addListener((value) => {
    //   console.log("translateValue=>x:" + value.x + " y:" + value.y);
    // });
    this.setState({
      runTop: moveY,
      runLeft: moveX,
    });


  } 
  componentWillMount() {  
    this._panResponder = PanResponder.create({  
      onStartShouldSetPanResponder: () => true,  
      onMoveShouldSetPanResponder: ()=> true,  
      onPanResponderGrant: ()=>{  
        //滑动开始时，获取矩形的左上坐标，并设置背景为红色  
        this._top = this.state.top  
        this._left = this.state.left  
        this.setState({bg: 'gray'})  
      },  
      onPanResponderMove: (evt,gs)=>{  
        //console.log(gs.dx+' '+gs.dy)  
        //随着手势滑动，相应的改变矩形的位置  
        var chaX = gs.dx;
        var chaY = gs.dy;
        if (Math.abs(gs.dx) > limit){
          chaX = gs.dx > 0 ? limit : limit*(-1);
        }
        if (Math.abs(gs.dy) > limit){
          chaY = gs.dy > 0 ? limit : limit*(-1);
        }
        this.setState({  
          top: this._top + chaY,  
          left: this._left + chaX  
        })
        //console.log('before animated');
        this.startAnimation(gs.dx, gs.dy);
        //this.startAnimation.bind(this);
        //console.log('end animated');
      },  
      onPanResponderRelease: (evt,gs)=>{  
        //活动结束后，还原背景为白色  
        this.setState({  
          bg: 'black',
          top: oriY,  
          left: oriX 
        })}  
    })  
  } 


  render() {  
    return (  
      <View style={styles.container}>   
        <Animated.View                         // 可选的基本组件类型: Image, Text, View(可以包裹任意子View)
        style={styles.runRect , {
              transform: [  // scale, scaleX, scaleY, translateX, translateY, rotate, rotateX, rotateY, rotateZ
                {translateX: this.state.translateValue.x}, // x轴移动
                {translateY: this.state.translateValue.y}, // y轴移动
              ],
            }}>
          <Image
            style={{width: runWidth, height: runWidth}}
            source={require('./img/locale_setting_download.png')}
          />
        </Animated.View>
        <View{...this._panResponder.panHandlers} style={[styles.rect,{  
            "backgroundColor": this.state.bg,  
            "top": this.state.top,  
            "left": this.state.left}]}>  
        </View>  
      </View>  
    );  
  }  
};  

var styles = StyleSheet.create({  
    container: {
      flex: 1,  
    },
    rect: {
      width: ctrWidth,
      height: ctrWidth,
    },
    runRect: {
      width: 50,
      height: 50,
      backgroundColor: 'red',
      top: height/4,
      left: width/2
    }
});  


module.exports = MoveEventDemo2; 