import React from 'react'
import {Animated} from 'react-native'

class EnlargeShrink extends React.Component {

constructor(props){
  super(props)
  this.state = {
    ViewSize: new Animated.Value(this._getSize())
  }
}

_getSize() { if (this.props.shouldEnlarge){
  return 80
} return 40 }

componentDidUpdate(){
  Animated.spring(
    this.state.ViewSize,
    {
      toValue: this._getSize()
    }
  ).start()
}

render(){
  return(
    <Animated.View style={{height:this.state.ViewSize, width:this.state.ViewSize}}>
      {this.props.children}
    </Animated.View>
    )
  }
}

export default EnlargeShrink
