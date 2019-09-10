import React, { Component } from 'react'
import {
  Icon,
  Card,
  CardItem,
  Body,
  Text,
  Content,
  List,
  ListItem,
  Left,
  Right,
  Header,
  Button,
  Title
} from 'native-base';
import {
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Clipboard
} from 'react-native';

import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import MainDoa from '../../data/MainDoa';
import styles from './mainStyle';

class DoaMain extends Component {

    static navigationOptions = {
      header:null
    };
    _menu = null;

    setMenuRef = ref => {
      this._menu = ref;
    };

    showMenu = () => {
      this._menu.show();
    };

    hideMenu = () => {
      this._menu.hide();
    };

    id = this.props.navigation.getParam('itemId');
    index = parseInt(this.id) - 1;
    data = MainDoa[this.index];
    semua = this.data.judul +'\n \n'+ this.data.arab +'\n \n'+ this.data.terjemah +'\n  \n' + this.data.sumber;
    arab = this.data.arab +'\n  \n' + this.data.sumber;
    arti = this.data.terjemah +'\n  \n' + this.data.sumber;

    semua() {
      Clipboard.setString(this.text);
      alert('Doa Tersalin Ke Clipboard!');

      this.hideMenu();
    }

    arabsaja() {
      Clipboard.setString(this.arab);
      alert('Doa Tersalin Ke Clipboard!');

      this.hideMenu();
    }

    artisaja() {
      Clipboard.setString(this.arti);
      alert('Doa Tersalin Ke Clipboard!');

      this.hideMenu();
    }

render() {
    const { navigation } = this.props;
    const id = navigation.getParam('itemId');
    const index = parseInt(id) - 1;

      return (
        <View style={{flex:1, backgroundColor:'#ecf2f5'}}>
          <Header style={{backgroundColor:'rgb(154, 154, 154)'}} androidStatusBarColor='rgb(131, 133, 132)'>
            <Left>
              <TouchableOpacity>
              <Icon onPress={() => navigation.goBack(null)} style={{color:'#fff'}} name='arrow-back'/>
            </TouchableOpacity>
            </Left>
            <Body>
              <Title style={styles.textHeader}>{MainDoa[index].judul}</Title>
            </Body>
            <Right>
              <Button transparent>
              <Menu
                style={styles.menuSetting}
                ref={this.setMenuRef}
                button=
                {
                  <TouchableOpacity onPress={this.showMenu}>
                    <View style={{width: 40, height: 40, alignItems: 'center', justifyContent: 'center'}}>
                      <Icon style={{fontWeight:'bold', fontSize:30}} name='more' />
                    </View>
                  </TouchableOpacity>
                }
              >
              <MenuItem onPress={() => this.arabsaja()}>Salin Doa</MenuItem>
                <MenuItem onPress={() => this.artisaja()}>Salin Arti</MenuItem>
                <MenuItem onPress={() => this.semua()}>Salin Semua</MenuItem>
              </Menu>

              </Button>
            </Right>
          </Header>
          <ScrollView style={{flex:2, margin:15}}>
              <View style={{backgroundColor:'#ffffff', marginTop:10, padding:12}}>
                <Text style={styles.textJudul}>{MainDoa[index].judul}</Text>
                <Text style={styles.textArab}>{MainDoa[index].arab}</Text>
                <Text style={styles.textArabLatin}>{MainDoa[index].arablatin}</Text>
                <Text style={styles.textTerjemah}>{MainDoa[index].terjemah}</Text>
              </View>
          </ScrollView>
        </View>
      );
    }
  }

export default DoaMain;
