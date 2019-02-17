import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Image } from 'react-native-elements';

const styles = StyleSheet.create({
    mainProductList: {
        flex:3.5,
        backgroundColor: '#fff'
    },
    listWrap: {
      flex:1,
      flexDirection:'row',
      flexWrap:'wrap',
      backgroundColor: 'skyblue'
    },
    itemWrap: {
       width:'50%',
       padding: 10,
       fontSize: 18,
       height: 60,
       backgroundColor: '#000'
     },
});

class MainProductList extends React.Component {
  render() {

    return (
        <View style={ styles.mainProductList }>
          <View style={ styles.listWrap}>
            <View style={styles.itemWrap}>
              <Text>test</Text>
            </View>
            <View style={styles.itemWrap}>
              <Text>test</Text>
            </View>
            <View style={styles.itemWrap}>
              <Text>test</Text>
            </View>
            <View style={styles.itemWrap}>
              <Text>test</Text>
            </View>
            <View style={styles.itemWrap}>
              <Text>test</Text>
            </View>
            <View style={styles.itemWrap}>
              <Text>test</Text>
            </View>
            <View style={styles.itemWrap}>
              <Text>test</Text>
            </View>
          </View>
      </View>
    );

  }
}

export default MainProductList;