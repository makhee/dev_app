import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, SearchBar, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  headerContiner: {
    borderBottomColor:'#000',
    borderBottomWidth:1
  },
  blackBackground: {
    backgroundColor: "#000"
  },
  whiteBackground: {
    backgroundColor: "#fff"
  },
  mainHeader: {
    // flex:1.05,
    height: 150,
    backgroundColor: '#000',
    top: 0
  },
});

class MainHeader extends React.Component {
  state = {
    search: ''
  };

  updateSearch = search => {
    this.setState({ search }); 
  };

  render() {
    const { search } = this.state;
    return (
      <View style={styles.mainHeader}>
        <Header
          backgroundColor = "#000"
          placement = "left"
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={<Image
                              source={require('../../img/logo/img_logo.png')}
                              style={{ width: 100, height: 24}}
                            />                      
          }
          rightComponent={{ icon: 'home', color: '#fff' }}
          statusBarProps={{ barStyle: 'dark-content', translucent: true }}
          containerStyle={ styles.headerContiner }
        />
        <SearchBar
          containerStyle = { styles.blackBackground }
          inputContainerStyle = { styles.whiteBackground }
          placeholder="NETPX 상품 검색"
          onChangeText={this.updateSearch}
          value={search}
        />
      </View>
    );
  }
}

export default MainHeader;