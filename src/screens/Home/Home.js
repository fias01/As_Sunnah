import React, { Component } from 'react'
import {
  Animated,
  Text,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
  Platform,
  TouchableOpacity
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from "react-native-vector-icons/MaterialIcons";
import Octicons from 'react-native-vector-icons/Octicons';
import Swiper from 'react-native-swiper'
import { listmenu } from '../../data/data';
import styles from './styles';
import axios from 'axios';
import * as theme from '../theme';

const { width, height } = Dimensions.get('window');

class Home extends Component {
  scrollX = new Animated.Value(0);

  state = {
    prayTime: false,
  }

  componentWillMount() {
    this.getPrayTime()
  }

  getPrayTime() {
    var bulan =["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

    var today = new Date();
    var month = bulan[today.getMonth()];
    var year = today.getFullYear();

    axios.get("http://api.aladhan.com/v1/calendarByCity?city=Yogyakarta&country=Indonesia&method=11&month=" + month + " &year= " + year + " ")
    .then( (response) => {
      console.log(response.data)
      var date = new Date();
      var kyou = parseInt(date.getDate()) - 1;
      let prayTime = response.data.data[kyou]
      var myJSON = JSON.stringify(prayTime);
      this.setState({
        prayTime : prayTime
      })
    })
    .catch((err) => {
      Alert.alert("Unable To Connect")
    })
  }

  renderAbout(){
    const { navigation } = this.props;
    return(
      <View style={{backgroundColor:'transparent', padding: 10,paddingBottom: 0, paddingLeft: 20, flexDirection: 'row',}}>
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <Icon name="info-outline" color={'#4c945c'} size={30} />
        </TouchableOpacity>
      </View>
    );
  }

  renderMenuList = () => {
    return (
      <View style={[styles.flex, styles.column ]}>
        <View style={[ styles.row, styles.menuListHeader]} >
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#rgb(37, 36, 37)', marginBottom: 8}}>
            Menu Aplikasi
          </Text>
        </View>
        <View style={styles.column}>
          <FlatList
            vertical
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={15}
            snapToAlignment="center"
            style={[styles.shadow,]}
            data={this.props.datamenu}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({ item, index }) => this.renderMenu(item, index)}

          />

        </View>
      </View>
    );
  }
  renderMenu = (item, index) => {
    const { navigation } = this.props;
    const { datamenu } = this.props;
    const isLastItem = index === datamenu.length - 1;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(item.url)}
        style={[
        styles.flex,styles.menu, styles.shadow,]}>
        <View style={[styles.flex, {alignItems: 'center', }]}>
          <Image style={[styles.menuImage]} source={ item.preview } />
          <Text style={[styles.itemenu, {position: 'absolute', marginTop: '74%', fontWeight: 'bold', color: 'rgb(66, 66, 66)'}]}>{ item.title }</Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderTime () {
    const { prayTime } = this.state;
    return(
      <View style={[styles.flex, styles.column, { paddingHorizontal: 25, alignItems: 'center', }]}>
        <View style={[styles.timeContainer,{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 15}]}>
          <Text style={[styles.timeLocation]}>Sleman, Yogyakarta</Text>
          <Text style={{fontSize: 10, alignSelf: 'flex-end', color: '#fff'}}>Selengkapnya  ></Text>
        </View>
        <View  
          style={{
            padding: 6,
            paddingBottom: 23,
            backgroundColor: '#f2fcf4',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            flexDirection: 'row'
          }}>

          <View style={{width: '100%', alignItems: 'center', backgroundColor: 'red'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 27, fontFamily: 'SourceSansPro', color: '#4c945c', fontWeight: 'bold', alignSelf: 'flex-end'}}>Subuh</Text>
              <Text style={{fontSize: 13, fontFamily: 'SourceSansPro', color: '#4c945c', alignSelf: 'flex-end', marginLeft: 20}}> {prayTime ? prayTime.date.readable : "00:00"}</Text>
            </View>
            <Text
              style={{fontSize: 63, fontFamily: 'SourceSansPro', fontWeight: 'bold', color: 'rgb(65, 65, 65)'
            }}>
              {prayTime ? prayTime.timings.Fajr.substr(0,6) : "00:00"}
            </Text>
          </View>

        </View>
      </View>
    );
  }

  render() {
    return (
      <View>
        <View style={[styles.flex, styles.row, styles.header,]}>
          <View style={{marginBottom: 10}}>
            <Text style={{ fontSize: 35 , fontWeight: 'bold', color: '#4c945c'}}>As Sunnah</Text>
            <Text style={{ color: 'rgb(83, 83, 83)' }}>All Your Praying Need in One App</Text>
          </View>
          <View>
            {this.renderAbout()}
          </View>
        </View>
        <ScrollView>
          {this.renderTime()}
          {this.getPrayTime()}
          {this.renderMenuList()}
        </ScrollView>
      </View>
    )
  }}

Home.defaultProps = {
  datamenu: listmenu,
};

export default Home;
