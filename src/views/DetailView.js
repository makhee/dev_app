import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

// import GoodsList from '../components/common/GoodsList';
// import SaleAPI from '../network/SaleAPI';

class DetailView extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      goods_info: {brand:'브랜드명', name:'엘리트서바이벌 상품엘리트서바이벌 상품', price:'160,000', img:'http://www.netpx.co.kr/images/goods_img/20171219/118833/118833_a_160.jpg'},
      loaded: true
    }
  }

  componentDidMount() {
    // SaleAPI.fetchGetList().then(data => {
    //     this.setState({
    //         goods_info: data.goods_info,
    //         loaded: true
    //     })
    // });
}

/** render */
  render() {
    return (
      <ScrollView>
        <View style={styles.imgWrap}>
          <Image 
            source={{uri:this.state.goods_info.img}}
            style={ styles.img }
            resizeMode='contain'
          />
        </View>  
        <View style={styles.infoWrap}>
          <Text style={styles.brandText}>{this.state.goods_info.brand}</Text>
          <Text style={styles.nameText}>[{this.state.goods_info.brand}] {this.state.goods_info.name}</Text>
          <Text style={styles.priceText}>{this.state.goods_info.price}<Text style={{color:'#000000', fontSize: 12}}> 원</Text></Text>
        </View>
        <View style={styles.detailWrap}>
          <Text style={styles.title}>상품상세정보</Text>
          <Image 
            source={{uri:this.state.goods_info.img}}
            style={ styles.img }
            resizeMode='contain'
          />
          <Text style={{ padding: 20, color:'#000000'}}>상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명</Text>
        </View>
      </ScrollView>
    )
  }
}

// GoodsInfo.propTypes = {
//   goods_info: PropTypes.any.isRequired
// }

/**
 * StyleSheet
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  imgWrap: {
    width: '100%',
    height: 410,
    borderBottomWidth: 1,
    borderColor: '#ECECEC'
  },
  img: {
    width: '100%',
    height: 400
  },
  infoWrap: {
    width: '100%',
    height: 150,
    paddingLeft:30,
    paddingRight:30,
    paddingTop: 15,
    paddingBottom: 15
  },
  brandText: {
    flex:1,
    color: '#000000'
  },
  nameText: {
    flex:4,
    color: '#000000',
    fontSize: 20
  },
  priceText: {
    flex:1,
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold'
  },
  detailWrap: {
    width: '100%',
    height: 800,
    borderWidth: 1,
    borderColor: '#ECECEC',
  },
  title: {
    paddingTop: 15,
    paddingLeft: 30,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000'
  }
});

export default DetailView;