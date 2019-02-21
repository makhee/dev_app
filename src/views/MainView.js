import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';

import BannerSwiper from '../components/main/BannerSwiper';
import MainBoxMenu from '../components/main/MainBoxMenu';
import MainProductList from '../components/MainProductList';

class MainView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <BannerSwiper />
                <MainBoxMenu />
                <MainProductList />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
})

export default MainView;