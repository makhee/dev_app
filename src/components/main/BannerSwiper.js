import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Dimensions } from 'react-native';
import { Image } from 'react-native-elements';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {
      // flex: 1
      height: 130
  },
  slide1: {
    // flex: 1,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  slide2: {
    // flex: 1,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
})

class BannerSwiper extends React.Component {
  render(){
    const windowWidth = Dimensions.get('window').width;
    return (
      <View style={{ width:'100%',height: 130 }}>
      <Swiper containerStyle={styles.wrapper} 
        showsButtons={true}
        loop={false}
        paginationStyle={{bottom:0}}>
        <View style={styles.slide1}>
            <Image
                source={require('../../img/banner/netpx_banner_01.png')}
                style={{ width:windowWidth }}
                resizeMode='contain'
            /> 
        </View>
        <View style={styles.slide2}>
            <Image
                source={require('../../img/banner/netpx_banner_02.png')}
                style={{ width:windowWidth }}
                resizeMode='contain'
            /> 
        </View>
      </Swiper>
      </View>
    );
  }
}

export default BannerSwiper;