/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import RankingGoodsList from "../components/ranking/RankingGoodsList"
// import Goods from "../components/common/Goods";
import RankingAPI from "../network/RankingAPI";

class RankingView extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      goods_list: null,
      loaded: false
    }
  }

  componentDidMount() {
    RankingAPI.fetchGetList().then(data => {
        this.setState({
            goods_list: data.goods_list,
            loaded: true
        })
    });
}

/**
 * render
 */
  render() {

    return (
      <View style={styles.container}>
        <RankingGoodsList list={this.state.goods_list}/>
      </View>
    )
  }
}

RankingGoodsList.propTypes = {
  list: PropTypes.any.isRequired
}

/**
 * StyleSheet
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

export default RankingView;