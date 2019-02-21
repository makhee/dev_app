import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import GoodsList from '../components/common/GoodsList';
import SaleAPI from '../network/SaleAPI';

class RankingView extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      goods_list: null,
      loaded: false
    }
  }

  componentDidMount() {
    SaleAPI.fetchGetList().then(data => {
        this.setState({
            goods_list: data.goods_list,
            loaded: true
        })
    });
}

/** render */
  render() {
    return (
      <View style={styles.container}>
        <GoodsList goods_list={this.state.goods_list}/>
      </View>
    )
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  }
});

export default RankingView;