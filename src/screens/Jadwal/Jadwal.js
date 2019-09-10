import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
  Animated,
} from 'react-native';

import axios from 'axios';
import styles from './style';
import Icon from "react-native-vector-icons/MaterialIcons";

const { width, height } = Dimensions.get('window');

class Jadwal extends Component {

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
      var tgl = parseInt(date.getDate()) - 1;
      let prayTime = response.data.data[tgl]
      var myJSON = JSON.stringify(prayTime);
      this.setState({
        prayTime : prayTime
      })
    })
    .catch((err) => {
      Alert.alert("Unable To Connect")
    })
  }

  renderPrayTime() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes()
    var day = today.getDate();
    var index = parseInt(day) - 1;
  }


  render() {
      const { prayTime } = this.state;
      const { navigation } = this.props;
      return (
        <View style={{flex: 1, backgroundColor: '#ecf2f5'}}>

          <View style={{backgroundColor:'#ffffff', padding: 20, paddingBottom: 5,flexDirection: 'row'}}>
            <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" color={'rgb(171, 170, 172)'} size={23} />
            </TouchableOpacity>
            <Text style={styles.header}> Jadwal Shalat </Text>
          </View>

          <View style={{paddingLeft: 10, paddingRight: 10}}>
            <View style={styles.content}>
              <Text style={styles.shalat}>Shubuh</Text>
              <Text style={styles.waktu}>{prayTime ? prayTime.timings.Fajr.substr(0,6) : "00:00"}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.shalat}>Dhuhur</Text>
              <Text style={styles.waktu}>{prayTime ? prayTime.timings.Dhuhr.substr(0,6) : "00:00"}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.shalat}>Ashar</Text>
              <Text style={styles.waktu}>{prayTime ? prayTime.timings.Asr.substr(0,6) .substr(0,6) : "00:00"}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.shalat}>Magrib</Text>
              <Text style={styles.waktu}>{prayTime ? prayTime.timings.Maghrib.substr(0,6) : "00:00"}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.shalat}>Isa</Text>
              <Text style={styles.waktu}>{prayTime ? prayTime.timings.Isha.substr(0,6) : "00:00"}</Text>
            </View>
          </View>

        </View>
      );
    }
  }


export default Jadwal;
