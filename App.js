/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView } from 'react-native';
import { Button, Image, ListItem, Header, SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import NetpxHeader from './src/components/MainHeader';
import MainBoxMenu from './src/components/MainBoxMenu';
import MainProductList from './src/components/MainProductList';
import BannerSwiper from './src/components/BannerSwiper';
import SplashScreen from 'react-native-splash-screen';
import Swiper from 'react-native-swiper';
// import { SlidingPane, SlidingPaneWrapper } from 'react-native-sliding-panes';

export default class App extends React.Component {

  componentDidMount() {
  	// do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
  }
  
  render() {

    let renderNavBarButton = (text, additional_styles, idx) => {
      return  <TouchableHighlight style={ [styles.navLink, additional_styles] }
                                  onPress={() => { this.Swiper.scrollBy(idx) }}>
                <View style={ { flexDirection: 'row' } }>
                  <Text style={styles.navLinkText}>{text}</Text>
                </View>
              </TouchableHighlight>
    };

    return (
        <View style={styles.container}>
          <ScrollView
            contentContainerStyle={{
            flexGrow: 1,
            flexDirection: 'column',
          }}>
          <NetpxHeader/>
          <View style={{ width: '100%' }}>
              <View style={styles.navBarBuffer} />
              <View style={styles.navBar}>
                { renderNavBarButton('홈', { borderRightColor: '#ececec', borderRightWidth: 1 }, 0) }
                { renderNavBarButton('신상품', { borderRightColor: '#ececec', borderRightWidth: 1 }, 1) }
                { renderNavBarButton('랭킹샵', { borderRightColor: '#ececec', borderRightWidth: 1 }, 2) }
                { renderNavBarButton('세일샵', { borderRightColor: '#ececec', borderRightWidth: 1 }, 3) }
                { renderNavBarButton('구매후기', { }, 4) }
              </View>
          </View>
          <Swiper containerStyle={{ height: 1600 }} ref={(Swiper) => { this.Swiper = Swiper }}
            showsButtons={false}
            loop={false}
            showsPagination={false}>
            <View>
              <BannerSwiper/>
              <MainBoxMenu/>
              <MainProductList/>
            </View>
            <View>
              <MainProductList/>
            </View>
            <View>
              <MainProductList/>
            </View>
            <View>
              <MainProductList/>
            </View>
            <View>
              <MainProductList/>
            </View>
          </Swiper>
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
    color:'#000'
  },
  paneText: {
    fontSize: 22,
    color: '#000'
  }
});


// import React, { Component } from 'react';
// import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// // import { Constants } from 'expo';

// export default class App extends Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {
//       height: 100,
//     };
//   }
  
//   render() {
//     return (
//       <View style={styles.root}>
//         <ScrollView contentContainerStyle={{ flexGrow: 1, borderColor: 'green' }}>
//           <View style={styles.box1} />
//           <View style={styles.box2} />
//           <View style={styles.box1} />
//         </ScrollView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#fff',
//   },
//   box1: {
//     height: 500,
//     backgroundColor: 'blue'
//   },
//   box2: {
//     height: 500,
//     backgroundColor: 'purple'
//   }
// });
