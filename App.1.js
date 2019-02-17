/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import { Button, Image, ListItem, Header, SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import NetpxHeader from './src/components/MainHeader';
import MainProductList from './src/components/MainProductList';
import BannerSwiper from './src/components/BannerSwiper';
import SplashScreen from 'react-native-splash-screen';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { SlidingPane, SlidingPaneWrapper } from 'react-native-sliding-panes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  navBarBuffer: {
    height: 0,
    backgroundColor: '#000'
  },
  navBar: {
    height: 40,
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'row',
  },
  navLink: {
    flex: 1,
    alignItems: 'center'
  },
  navLinkText: {
    paddingTop: 10,
    paddingBottom: 10,
    color:'#000'
  },
  paneText: {
    fontSize: 22,
    color: '#000'
  }
});

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  	// do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
      this.setupSlidingPanes();
  }

  setupSlidingPanes() {
    this.pane1.warpCenter();
    this.pane2.warpRight();
    this.pane3.warpRight();
    this.pane4.warpRight();
    this.pane5.warpRight();
    this.slidingPaneWrapper.childPanes = [this.pane1, this.pane2, this.pane3, this.pane4, this.pane5];
  }

  render() {
    const swipe_config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
  
    let navLinkClicked = (text) => {
      switch (text) {
        case '홈':
          this.slidingPaneWrapper.setActive(0);
          break;
        case '신상품':
          this.slidingPaneWrapper.setActive(1);
          break;
        case '랭킹샵':
          this.slidingPaneWrapper.setActive(2);
          break;
        case '세일샵':
          this.slidingPaneWrapper.setActive(3);
          break;
        case '구매후기':
        this.slidingPaneWrapper.setActive(4);
        break;
      }
    };
  
    const onSwipe = (gestureName, gestureState) => {
      const {SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
      switch (gestureName) {
        case SWIPE_LEFT:
          this.slidingPaneWrapper.slideAllLeft();
          break;
        case SWIPE_RIGHT:
          this.slidingPaneWrapper.slideAllRight();
          break;
        default:
          break;
      }
    };
  
    let renderNavBarButton = (text, additional_styles) => {
      return  <TouchableHighlight style={ [styles.navLink, additional_styles] }
                                  onPress={() => {navLinkClicked(text)}}>
                <View style={ { flexDirection: 'row' } }>
                  <Text style={styles.navLinkText}>{text}</Text>
                </View>
              </TouchableHighlight>
    };

    return (
        <View style={styles.container}>
          <NetpxHeader/>
          <GestureRecognizer style={{ flex:3.7 }}
            onSwipe={(direction, state) => onSwipe(direction, state)}
            config={swipe_config}>
            <View style={{ width: '100%' }}>
              <View style={styles.navBarBuffer} />
              <View style={styles.navBar}>
                { renderNavBarButton('홈', { borderRightColor: '#ececec', borderRightWidth: 1 }) }
                { renderNavBarButton('신상품', { borderRightColor: '#ececec', borderRightWidth: 1 }) }
                { renderNavBarButton('랭킹샵', { borderRightColor: '#ececec', borderRightWidth: 1 }) }
                { renderNavBarButton('세일샵', { borderRightColor: '#ececec', borderRightWidth: 1 }) }
                { renderNavBarButton('구매후기', { }) }
              </View>
            </View>
            <SlidingPaneWrapper style={{}} ref={(slidingPaneWrapper) => { this.slidingPaneWrapper = slidingPaneWrapper }}>
              <SlidingPane style={[{ }]}
                           ref={ (pane1) => { this.pane1 = pane1} }>
                <BannerSwiper/>
                <MainProductList/>
              </SlidingPane>
              <SlidingPane style={[{ }]}
                           ref={ (pane2) => { this.pane2 = pane2} }>
                <MainProductList/>
              </SlidingPane>
              <SlidingPane style={[{ }]}
                           ref={ (pane3) => { this.pane3 = pane3} }>
                <MainProductList/>
              </SlidingPane>
              <SlidingPane style={[{ }]}
                           ref={ (pane4) => { this.pane4 = pane4} }>
                <MainProductList/>
              </SlidingPane>
              <SlidingPane style={[{ }]}
                           ref={ (pane5) => { this.pane5 = pane5} }>
                <MainProductList/>
              </SlidingPane>
            </SlidingPaneWrapper>
          </GestureRecognizer>
        </View>
    );
  }
}