import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import BannerSwiper from '../components/main/BannerSwiper';
import MainBoxMenu from '../components/main/MainBoxMenu';

import GoodsList from '../components/common/GoodsList';
import MainAPI from '../network/MainAPI';
// import MainProductList from '../components/MainProductList';

class MainView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            goods_list: null,
            loaded: false
        }
    }

    componentDidMount() {
        MainAPI.fetchGetContents().then(data => {
            this.setState({
                goods_list: data.section1,
                loaded: true
            })
        });
    }

    /** render */
    render() {
        return (
            <ScrollView>
                <BannerSwiper />
                <MainBoxMenu />
                <GoodsList goods_list={this.state.goods_list}/>
            </ScrollView>
        );
    }
}

export default MainView;