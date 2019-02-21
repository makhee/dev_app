import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Goods from "../../components/common/Goods";
// import RankingAPI from "../../network/RankingAPI";

class RankingGoodsList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            goods_list: null,
            loaded: false
        };
    }

    // componentDidMount() {
    //     RankingAPI.fetchGetList().then(data => {
    //         this.setState({
    //             goods_list: data.goods_list,
    //             loaded: true
    //         })
    //     });
    // }

    _renderItem = ({ item }) => (
        <Goods style={styles.item}
            reg_dm={item.reg_dm}
            goods_no={item.goods_no}
            goods_nm={item.goods_nm}
            price={item.price}
        />
    );

    render() {
        if (!this.props.list) {
            return this.renderLoadingView();
        }

        return (
            <FlatList
                data={this.props.list}
                renderItem={this._renderItem}
                style={styles.listView}
                numColumns={2}
            />
        )
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading goods...
                </Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    item: {
      width: '48%',
      paddingTop: 20,
      backgroundColor: '#FFFFFF'
    }
  });

export default RankingGoodsList;