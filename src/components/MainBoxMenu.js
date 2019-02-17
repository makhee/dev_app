import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Image } from 'react-native-elements';

const styles = StyleSheet.create({
    mainProductList: {
    //   flex:1.7,
      height:160,  
      backgroundColor: '#fff'
    },
    listWrap: {
      flex:1,
      flexDirection:'row',
      flexWrap:'wrap',
      backgroundColor: '#fff'
    },
    itemWrap: {
      width:'25%',
      padding: 10,
      fontSize: 18,
      height: 80,
      backgroundColor: '#fff',
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 0.5,
      borderColor: '#ececec',
      borderBottomWidth: 1,
      borderTopWidth: 0
    },
    listText: {
        paddingTop: 5,
        color: '#000'
    },
    listImage: {
        height:40,
    }
});

class MainBoxMenu extends React.Component {
  render() {
    return (
        <View style={ styles.mainProductList }>
          <View style={ styles.listWrap }>
            <View style={styles.itemWrap}>
                <Image 
                    source={require('../img/boxMenu/s_menu01.png')}
                    style={ styles.listImage }
                    resizeMode='contain'
                />
                <Text style={ styles.listText }>쿠폰</Text>
            </View>
            <View style={styles.itemWrap}>
                <Image 
                    source={require('../img/boxMenu/s_menu02.png')}
                    style={ styles.listImage }
                    resizeMode='contain'
                />
                <Text style={ styles.listText }>기획전</Text>
            </View>
            <View style={styles.itemWrap}>
                <Image 
                    source={require('../img/boxMenu/s_menu03.png')}
                    style={ styles.listImage }
                    resizeMode='contain'
                />
                <Text style={ styles.listText }>넷또</Text>
            </View>
            <View style={styles.itemWrap}>
                <Image 
                    source={require('../img/boxMenu/s_menu04.png')}
                    style={ styles.listImage }
                    resizeMode='contain'
                />
                <Text style={ styles.listText }>사은품</Text>
            </View>
            <View style={styles.itemWrap}>
                <Image 
                    source={require('../img/boxMenu/s_menu05.png')}
                    style={ styles.listImage }
                    resizeMode='contain'
                />
                <Text style={ styles.listText }>브랜드</Text>
            </View>
            <View style={styles.itemWrap}>
                <Image 
                    source={require('../img/boxMenu/s_menu06.png')}
                    style={ styles.listImage }
                    resizeMode='contain'
                />
                <Text style={ styles.listText }>테마</Text>
            </View>
            <View style={styles.itemWrap}>
                <Image 
                    source={require('../img/boxMenu/s_menu07.png')}
                    style={ styles.listImage }
                    resizeMode='contain'
                />
                <Text style={ styles.listText }>넷툰</Text>
            </View>
            <View style={styles.itemWrap}>
                <Image 
                    source={require('../img/boxMenu/s_menu08.png')}
                    style={ styles.listImage }
                    resizeMode='contain'
                />
                <Text style={ styles.listText }>웹진</Text>
            </View>
          </View>
      </View>
    );

  }
}

export default MainBoxMenu;