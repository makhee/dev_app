/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';

import Goods from "../components/common/Goods";

var REQUEST_URL =
  'http://m.netpx.co.kr/app/api/ranking/get_list';

class RankingView extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      data: null,
      loaded: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log("rakingview data: "+responseJSON.data);

        this.setState({
          data: responseJSON.data.goods_list,
          loaded: true
        });
      })
      .done();
  }

  /**
   * render
   */
  _renderItem = ({ item }) => (
    <Goods
      reg_dm={item.reg_dm}
      goods_no={item.goods_no}
      goods_nm={item.goods_nm}
      price={item.price}
    />
  );

  render() {

    if (!this.state.data) {
      return this.renderLoadingView();
    }

    return (
      <View style={styles.container}>
      <FlatList
        data={this.state.data}
        renderItem={this._renderItem}
        style={styles.listView}
      />
      </View>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  item: {
    paddingTop: 20,
    backgroundColor: '#fff'
  }
});

export default RankingView;