import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import BannerSwiper from '../components/main/BannerSwiper';
import MainBoxMenu from '../components/main/MainBoxMenu';
import MainProductList from '../components/MainProductList';

class MainView extends React.Component {
    render() {
        return (
            <ScrollView>
                <BannerSwiper />
                <MainBoxMenu />
                <MainProductList />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
})

export default MainView;