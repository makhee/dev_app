import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

/**
 * props.reg_dm //등록날짜
 * props.goods_no //상품id
 * props.goods_nm //상품이름
 * props.price //가격
 * //상품이미지
 */

let host = "http://m.netpx.co.kr"

class Product extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={{url: "http://www.netpx.co.kr/images/goods_img/"+this.props.reg_dm+"/"+this.props.goods_no+"/"+this.props.goods_no+"_a_500.jpg"}} 
                    style={styles.thumbnail} />
                <Text>{this.props.goods_nm}</Text>
                <Text>{this.props.price} 원</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: { 
        height: 100, 
        justifyContent: "center",
        borderWidth: 1, 
        borderColor: "#DDDDDD" },
    thumbnail: { width: 50, height: 50 }
});

export default Product;