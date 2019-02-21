/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableHighlight, ScrollView } from 'react-native';
import { Button, Image, ListItem, Header, SearchBar } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import MainHeader from './src/components/main/MainHeader';

import MainView from './src/views/MainView';
import RankingView from './src/views/RankingView';

import MainProductList from './src/components/MainProductList';
import SplashScreen from 'react-native-splash-screen';

// import { SlidingPane, SlidingPaneWrapper } from 'react-native-sliding-panes';


export default class App extends React.Component {

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  /**
   * state for Tab (key: String, title: String)
   */
  state = {
    index: 0,
    routes: [
      { key: '0', title: "홈" },
      { key: '1', title: "신상품" },
      { key: '2', title: "랭킹샵" },
      { key: '3', title: "세일샵" },
      { key: '4', title: "후기" },
    ],
  };

  /**
   * render
   */
  render() {

    let renderNavBarButton = (text, additional_styles, idx) => {
      return <TouchableHighlight style={[styles.navLink, additional_styles]}
        onPress={() => { this.Swiper.scrollBy(idx) }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.navLinkText}>{text}</Text>
        </View>
      </TouchableHighlight>
    };

    return (
      <View style={styles.container}>
        <MainHeader />
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            '0': HomeTab,
            '1': NewTab,
            '2': RankingTab,
            '3': SaleTab,
            '4': ReviewTab
          })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}
        />
      </View>
    );
  }
}


/**
 * Tab
 */
const HomeTab = () => (
  <View style={styles.scene}>
    <MainView />
  </View>
);
const NewTab = () => (
  <View style={styles.scene}>
  </View>
);
const RankingTab = () => (
  <View style={styles.scene}>
    <RankingView />
  </View>
);
const SaleTab = () => (
  <View style={styles.scene}>
  </View>
);
const ReviewTab = () => (
  <View style={styles.scene}>
  </View>
);

/**
 * StyleSheet
 */
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scene: {
    flex: 1,
    backgroundColor: '#fff'
  },
  navBar: {
    height: 40,
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'row',
    borderBottomColor: '#ececec',
    borderBottomWidth: 1
  },
  navLink: {
    flex: 1,
    alignItems: 'center'
  },
  navLinkText: {
    paddingTop: 10,
    paddingBottom: 10,
    color: '#000'
  },
  paneText: {
    fontSize: 22,
    color: '#000'
  }

});