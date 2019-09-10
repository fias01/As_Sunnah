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

import styles from './listStyle';
import listdoa from '../../data/ListDoa.json';
import Icon from "react-native-vector-icons/MaterialIcons";

const { width, height } = Dimensions.get('window');

class DoaList extends Component {

  renderDoa = () => {
    return (
      <View style={[styles.flex, styles.column,{paddingLeft: 6, paddingRight: 6} ]}>
        <FlatList
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          data={listdoa}
          keyExtractor={(item, index) => `${item.id}`}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX }} }])}
          renderItem={({ item }) => this.renderDoalist(item)}
        />
      </View>
    );
  }

  renderDoalist = (item, index) => {
    const { navigation } = this.props;
      return (
        <View style={[styles.flex, styles.column]}>
          <TouchableOpacity
            style={[styles.row,{margin: 6, marginBottom: 0, marginTop: 15, padding: 15,  backgroundColor: '#fff', borderRadius: 8}]}
            onPress={() => this.props.navigation.navigate('DoaMain', {  itemId: item.id, })}
          >
            <View style={{paddingRight: 20,}}>
              <Text style={[styles.listjudul]}>{item.judul}</Text>
              <Text style={[styles.listconten]}>Doa Harian Nomor - {item.id}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
  }

  render() {
      const { navigation } = this.props;
      return (
        <View style={{flex: 1, backgroundColor: '#ecf2f5'}}>

          <View style={{backgroundColor:'#ffffff', padding: 20, paddingBottom: 5,flexDirection: 'row'}}>
            <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" color={'rgb(171, 170, 172)'} size={23} />
            </TouchableOpacity>
            <Text style={styles.header}> Kumpulan Doa</Text>
          </View>

        <View>
          {this.renderDoa()}
        </View>
        </View>
      );
    }
  }


export default DoaList;
