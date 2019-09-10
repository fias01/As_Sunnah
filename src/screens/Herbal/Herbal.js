import React, {Component} from 'react';
import { View,TouchableHighlight,Image, Text,StyleSheet,ScrollView, TouchableOpacity, FlatList } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

import {herbal} from '../../data/herbal';

export default class Herbal extends Component {

renderHerbal = () => {
  return (
      <ScrollView
        scrollEnabled
        showsHorizontalScrollIndicator={true}
        decelerationRate={0}
        style={{flex:3, margin:6, marginTop:10, paddingLeft: 7, paddingRight: 7
      }}>
        <View>
          <FlatList
            data={this.props.listherbal}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({ item, index }) => this.renderList(item, index)}
          />
        </View>
      </ScrollView>
  );
}

renderList = (item, index) => {
  const { navigation } = this.props;
  const { listherbal } = this.props;
  return (
    <TouchableOpacity
      style={[
      styles.flex, styles.column,  styles.shadow,
      ]}
      onPress={() => navigation.navigate('HerbalDetail', { herbaldetail: item })}
    >
      <View style={{backgroundColor:'#ffffff', marginTop:10, padding:12, flexDirection: 'row', borderRadius: 9}}>
        <Image style={{width: 50, height: 50, borderRadius: 9}}
          source={ item.photo_url }
        />
      <View style={{flexDirection: 'column'}}>
          <Text style={styles.Title}>{item.title}</Text>
          <Text style={styles.subTitle}>{item.subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

  render() {
    return (
      <View style={{flex:1, backgroundColor:'#ecf2f5'}}>

        <View style={{backgroundColor:'#ffffff', padding: 20, paddingBottom: 5,flexDirection: 'row'}}>
          <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back" color={'rgb(171, 170, 172)'} size={23} />
          </TouchableOpacity>
          <Text style={styles.header}> Resep Herbal</Text>
        </View>

        {this.renderHerbal()}
      </View>
    )
  }
}

Herbal.defaultProps ={
  listherbal: herbal ,
};

const styles = StyleSheet.create({
   textJudul: {
      padding:6,
      fontSize:20,
      fontFamily: 'SourceSansPro',
      fontWeight: 'bold',
      textAlign: 'center',
      color:'rgb(138, 138, 138)',
      alignItems: 'center',
      justifyContent: 'center'
   },
   Title: {
      fontSize:23,
      fontFamily: 'lotus-linotype-light',
      color:'#000',
      fontWeight: 'bold',
      alignItems: 'center',
      paddingTop: 5,
      paddingLeft: 10,
   },
   subTitle: {
      fontSize:10,
      fontFamily: 'lotus-linotype-light',
      color:'rgb(4, 180, 75)',
      alignItems: 'center',
      paddingLeft: 12,
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
  })
