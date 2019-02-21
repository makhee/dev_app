import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

/**
 * Goods.js
 * props.goods_no //상품id
 * props.goods_nm //상품이름
 * props.brand_nm //브랜드이름
 * props.price //가격
 * props.reg_dm //등록날짜
 */

let host = 'http://m.netpx.co.kr';

class Product extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.thumbnail}
                    source={{ url: host + '/images/goods_img/' + this.props.reg_dm + '/' + this.props.goods_no + '/' + this.props.goods_no + '_a_500.jpg' }}
                />
                <Text style={styles.brandText}>{this.props.brand_nm}</Text>
                <Text style={styles.nameText}>{this.props.goods_nm}</Text>
                <Text style={styles.priceText}>{this.props.price} 원</Text>
            </View>
        )
    }
}

/**
 * StyleSheet
 */
const styles = StyleSheet.create({
    container: {
        width:'48%',
        margin: '1%',
        padding: 10,
        fontSize: 18,
        height: 300,
        alignItems: "center",
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ececec',
    },
    thumbnail: {
        width: 150,
        height: 200,
        resizeMode: 'contain',
        borderBottomWidth: 1,
        borderColor: '#ECECEC'
    },
    brandText: {
        color: 'green',
        fontSize: 20,
    },
    nameText: {
        color: '#000000'
    },
    priceText: {
        color: '#000000',
        fontWeight: 'bold'
    },

});

export default Product;