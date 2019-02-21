import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import { Image } from 'react-native-elements';

const numColumns = 2;
const size = Dimensions.get('window').width/numColumns;

const styles = StyleSheet.create({
    listWrap: {
      flex:1,
      flexDirection:'row',
      flexWrap:'wrap',
      backgroundColor: '#fff'
    },
    itemWrap: {
      width:'48%',
      margin: '1%',
      fontSize: 18,
      height: 300,
      alignItems: "center",
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#ececec',
    },
    listTitle: {
      width: 84,
      height: 17
    },
    listTitleWrap: {
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
      borderBottomWidth: 1,
      borderColor: '#ececec'
    },
    brandText: {
      color: 'green',
      fontSize:20,
    },
    nameText: {
      color: '#000'
    },
    priceText: {
      color: '#000'
    },
    listImage: {
      width: 195,
      height:200,
      borderBottomWidth:1,
      borderColor: '#ececec'
    },
    itemContainer: {
      width: size,
      height: size,
    }
});

const listData = [
                  {brand:'엘리트서바이벌1', name:'엘리트서바이벌 상품', price:'16000', img:'http://www.netpx.co.kr/images/goods_img/20171219/118833/118833_a_160.jpg' },
                  {brand:'엘리트서바이벌2', name:'엘리트서바이벌 상품', price:'16000', img:'http://www.netpx.co.kr/images/goods_img/20171219/118833/118833_a_160.jpg'},
                  {brand:'엘리트서바이벌3', name:'엘리트서바이벌 상품', price:'16000', img:'http://www.netpx.co.kr/images/goods_img/20171219/118833/118833_a_160.jpg'},
                  {brand:'엘리트서바이벌4', name:'엘리트서바이벌 상품', price:'16000', img:'http://www.netpx.co.kr/images/goods_img/20171219/118833/118833_a_160.jpg'},
                  {brand:'엘리트서바이벌5', name:'엘리트서바이벌 상품', price:'16000', img:'http://www.netpx.co.kr/images/goods_img/20171219/118833/118833_a_160.jpg'},
                  {brand:'엘리트서바이벌6', name:'엘리트서바이벌 상품', price:'16000', img:'http://www.netpx.co.kr/images/goods_img/20171219/118833/118833_a_160.jpg'},
                  {brand:'엘리트서바이벌7', name:'엘리트서바이벌 상품', price:'16000', img:'http://www.netpx.co.kr/images/goods_img/20171219/118833/118833_a_160.jpg'},
                  {brand:'엘리트서바이벌8', name:'엘리트서바이벌 상품', price:'16000', img:'http://www.netpx.co.kr/images/goods_img/20171219/118833/118833_a_160.jpg'},
                  {brand:'엘리트서바이벌9', name:'엘리트서바이벌 상품', price:'16000', img:'http://www.netpx.co.kr/images/goods_img/20171219/118833/118833_a_160.jpg'},
                  {brand:'엘리트서바이벌10', name:'엘리트서바이벌 상품', price:'16000', img:'http://www.netpx.co.kr/images/goods_img/20171219/118833/118833_a_160.jpg'},
                  {brand:'엘리트서바이벌11', name:'엘리트서바이벌 상품', price:'16000', img:'http://www.netpx.co.kr/images/goods_img/20171219/118833/118833_a_160.jpg'},
                  {brand:'엘리트서바이벌12', name:'엘리트서바이벌 상품', price:'16000', img:'http://www.netpx.co.kr/images/goods_img/20171219/118833/118833_a_160.jpg'},
                  {brand:'엘리트서바이벌7', name:'엘리트서바이벌 상품', price:'16000', img:'http://www.netpx.co.kr/images/goods_img/20171219/118833/118833_a_160.jpg'},
                  {brand:'엘리트서바이벌8', name:'엘리트서바이벌 상품', price:'16000', img:'http://www.netpx.co.kr/images/goods_img/20171219/118833/118833_a_160.jpg'},
                  {brand:'엘리트서바이벌9', name:'엘리트서바이벌 상품', price:'16000', img:'http://www.netpx.co.kr/images/goods_img/20171219/118833/118833_a_160.jpg'},
                  {brand:'엘리트서바이벌10', name:'엘리트서바이벌 상품', price:'16000', img:'http://www.netpx.co.kr/images/goods_img/20171219/118833/118833_a_160.jpg'},
                  {brand:'엘리트서바이벌11', name:'엘리트서바이벌 상품', price:'16000', img:'http://www.netpx.co.kr/images/goods_img/20171219/118833/118833_a_160.jpg'},
                  {brand:'엘리트서바이벌12', name:'엘리트서바이벌 상품', price:'16000', img:'http://www.netpx.co.kr/images/goods_img/20171219/118833/118833_a_160.jpg'}
                ];     

class MainProductList extends React.Component {
    
  render() {
    return (
      <FlatList
      data={listData}
      renderItem={({item}) => (
        <View style={styles.itemWrap}>
          <Image 
            source={{uri:item.img}}
            style={ styles.listImage }
            resizeMode='contain'
          />
          <Text style={styles.brandText}>{item.brand}</Text>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.priceText}>{item.price}원</Text>
        </View>
      )}
      keyExtractor={item => item.brand}
      numColumns={numColumns} />
    )
  }   
}

export default MainProductList;