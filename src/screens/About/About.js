import React, { Component } from 'react';

import {
  Text,
  View,
  Image,
  StatusBar,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Linking,
  Button
} from 'react-native';

import Icon from "react-native-vector-icons/MaterialIcons";

class About extends Component {

  render() {
    return (

      <View style={{flex:1, backgroundColor:'#ecf2f5'}}>
      <StatusBar backgroundColor='#ecf2f5' barStyle='light-content' />

        <View style={{backgroundColor:'#ffffff', padding: 20, paddingBottom: 5,flexDirection: 'row'}}>
          <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back" color={'rgb(171, 170, 172)'} size={23} />
          </TouchableOpacity>
          <Text style={styles.header}> Tentang Aplikasi</Text>
        </View>


        <ScrollView>
          <View style={styles.wrapper}>
            <Image
              style={styles.logo}
              source={require('../../../assets/images/shalat.png')}
            />
          <Text style={[styles.titleFocus]}>As Sunnah</Text>
            <Text style={[styles.note]}>All Your Praying Need in One App</Text>
            <Text style={[styles.paragraph]}>     Ruqyah Syar'ah adalah metode penyembuhan dengan cara membacakan ayat ayat Al Qur'an serta do'a pilihan pada orang yang sakit akibat dari ‘ain (mata hasad), sengatan hewan, sihir, rasa sakit, gila, kerasukan atau gangguan jin dan juga penyakit yang lain.</Text>
            <Text style={[styles.paragraph]}>     Aplikasi ini dibuat untuk mempermudah masyarakat dalam mencari tau mengenai metode pengobatan Thibbun Nabawi dan juga berbagai macam obat herbal seperti bidara, madu, kelor dan herbal yang lain, aplikasi ini menyediakan artikel, ayat ayat ruqyah, daftar obar herbal dan juga alamat lokasi peruqyah yang ada di wilayah Indonesia</Text>
            <Text style={[styles.paragraph]}>     Semoga aplikasi ini dapat memberikan banyak manfaat bagi para penggunanaya. Tentunya dalama pengembangan aplikasi ini masih banyak kekurangan, oleh karena itu, masukan dan kritikan dari para pengguna sangat kamu harapkan.</Text>

            <View style={styles.main}>
              <Text style={[styles.mainTitle, styles.develop]}>Developer</Text>
              <View style={styles.mainItem}>
                <Text style={[styles.mainText]}> Fias As Saifullah</Text>
              </View>
            </View>

            <View style={styles.main}>
              <Text style={[styles.mainTitle, styles.develop]}>Pondok Informatika Al-Madinah </Text>
              <View style={styles.mainItem}>
                <Icon name="mail-outline" style={styles.iconStyle}/>
                <Text style={[styles.mainText]}>pondokitalmadinah@gmail.com</Text>
              </View>
              <View style={styles.mainItem}>
                <Icon name="public" style={styles.iconStyle}/>
                <Text style={[styles.mainText,{color: '#rgb(60, 160, 223)'}]} onPress={ ()=>{ Linking.openURL('http://pondokinformatika.com')}}>http://pondokinformatika.com</Text>
              </View>
              <View style={styles.mainItem}>
                <Icon name="phone-iphone" style={styles.iconStyle}/>
                <Text style={[styles.mainText]}>085725249265 (Irhamullah)</Text>
              </View>
              <View style={styles.mainItem}>
                <Icon name="home" style={styles.iconStyle}/>
                <Text style={[styles.mainText]}>Jl. Raya Krapyak RT.05, Karanganyar, Wedomartani, Ngemplak, Sleman, Daerah Istimewa Yogyakarta</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: Dimensions.get('window').width - 20,
    backgroundColor: '#fff',
    alignSelf: 'center',
    paddingVertical: 40,
    paddingHorizontal: 15,
    margin: 20,
  },
  paragraph: {
    fontSize: 15,
    fontStyle: 'italic',
    marginBottom: 10,
    textAlign: 'justify',
    lineHeight: 20
  },
  logo: {
    width: 130,
    height: 130,
    alignSelf: 'center',
    marginBottom: 10,
  },
  titleFocus: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 5,
    letterSpacing: 1,
  },
  note: {
    fontSize: 13,
    alignSelf: 'center',
    marginBottom: 30,
  },

  main: {
    marginVertical: 10,
  },
  mainTitle: {
    marginBottom: 5,
    fontSize: 16,
  },
  mainItem: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  iconStyle: {
    flex: 1,
    color: '#000',
    fontSize: 14,
    marginTop: 4
  },
  mainText: {
    flex: 12,
    fontSize: 14,
  },
  develop: {
    color: '#2C3445',
    fontFamily: 'SourceSansPro',
    fontWeight: 'bold',
  },

  back: {
    width: 30,
    height:40,
    alignItems: 'flex-start',
  },
  header: {
    fontFamily: 'SourceSansPro',
    fontWeight: 'bold',
    fontSize: 20,
  },
  vendorWrapper: {
    flexDirection: 'row',
    marginTop: 20,
  },
  vendorTitle: {
    fontSize: 13,
    alignSelf: 'center',
    marginBottom: 5,
  },
  vendor: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  vendorImage: {
    width: 120,
    alignSelf: 'center',
  },
});

export default About;
