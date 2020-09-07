import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'
import { add, minus, asyncAdd } from '../../actions/counter'
import { AtButton } from 'taro-ui'
import util from '@utils/util';
import common from '@utils/util';
import './index.scss'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    console.log(common.query())
    return (
      <View className='index'>
        <AtButton type='primary' onClick={() => util.setTitle('a')}>a</AtButton>
        <AtButton className='add_btn' onClick={this.props.add}>+</AtButton>
        <AtButton className='dec_btn' onClick={this.props.dec}>-</AtButton>
        <AtButton className='dec_btn' onClick={this.props.asyncAdd}>async</AtButton>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
      </View>
    )
  }
}

export default Index

