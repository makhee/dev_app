import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import Goods from "./Goods";

/**
 * GoodsList.js
 * props.goods_list //상품리스트
 */

const numColumns = 2;
const size = Dimensions.get('window').width/numColumns;

class GoodsList extends Component {

    constructor(props) {
        super(props);
    }

    _keyExtractor = (item, index) => item.goods_no;

    _renderItem = ({ item }) => (
        <Goods
            goods_no={item.goods_no}
            goods_nm={item.goods_nm}
            brand_nm={item.brand_nm}
            price={item.price}
            reg_dm={item.reg_dm}
        />
    );

    /** render */
    render() {
        if (!this.props.goods_list) {
            return this.renderLoadingView();
        }

        return (
            <FlatList
                data={this.props.goods_list}
                renderItem={this._renderItem}
                numColumns={numColumns}
            />
        )
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading ...
                </Text>
            </View>
        );
    }
}

GoodsList.propTypes = {
  goods_list: PropTypes.any.isRequired
}

/**
 * StyleSheet
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }
})

export default GoodsList;