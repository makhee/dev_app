import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Image } from 'react-native-elements';

const styles = StyleSheet.create({
    mainProductList: {
      // flex:2,
      height: 200,
      backgroundColor: '#fff'
    },
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
                  {brand:'엘리트서바이벌12', name:'엘리트서바이벌 상품', price:'16000', img:'http://www.netpx.co.kr/images/goods_img/20171219/118833/118833_a_160.jpg'}
                ];     

class MainProductList extends React.Component {

  renderButtons() {
      return listData.map((item) => {
          return (
              <View style={styles.itemWrap} key={item}>
                  <Image 
                    source={{uri:item.img}}
                    style={ styles.listImage }
                    resizeMode='contain'
                  />
                  <Text style={styles.brandText}>{item.brand}</Text>
                  <Text style={styles.nameText}>{item.name}</Text>
                  <Text style={styles.priceText}>{item.price}</Text>
              </View>
          );
      });
  }

  render() {

    return (
        <View style={ styles.mainProductList }>
          <View style= { styles.listTitleWrap }>
            <Image
              source={require('../img/title/title_mdpick.png')}
              style={ styles.listTitle }
            /> 
          </View>
          <View style={ styles.listWrap }>
            {this.renderButtons()}
          </View>
      </View>
    );

  }
}

export default MainProductList;