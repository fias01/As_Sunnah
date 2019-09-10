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
import { mocks } from '../../data/data';
import styles from './styles';

const { width, height } = Dimensions.get('window');

class ArticleList extends Component {
  scrollX = new Animated.Value(0);

  renderDots() {
    const { datahome } = this.props;
    const dotPosition = Animated.divide(this.scrollX, width);
    return (
      <View style={[
        styles.flex, styles.row,
        { justifyContent: 'center', alignItems: 'center', marginTop: 6 }
      ]}>
        {datahome.map((item, index) => {
          const borderWidth = dotPosition.interpolate({
            inputRange: [index -1, index, index + 1],
            outputRange: [0, 2.5, 0],
            extrapolate: 'clamp'
          });
          return (
            <Animated.View
              key={`step-${item.id}`}
              style={[styles.dots, styles.activeDot, { borderWidth: borderWidth } ]}
            />
          )
        })}
      </View>
    )
  }

  renderArticles = () => {
    return (
      <View style={[ styles.column, styles.datahome ]}>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          style={{ overflow:'visible', height: 250 }}
          data={this.props.datahome}
          keyExtractor={(item, index) => `${item.id}`}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX }} }])}
          renderItem={({ item }) => this.renderArticle(item)}
        />
        {this.renderDots()}
      </View>
    );
  }

  renderArticle = item => {
    const { navigation } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Article', { article: item })}>
        <ImageBackground
          style={[styles.flex, styles.article, styles.shadow, ]}
          imageStyle={{ borderRadius: 12 }}
          source={ item.preview }
        >
          <View style={[styles.row, { justifyContent: 'center' }]}>
            <View style={{ flex: 0 }}>
              <Image source={item.avatar} style={styles.avatar} />
            </View>
            <View style={[styles.column, { flex: 2, paddingHorizontal: 25 / 2 }]}>
              <Text style={{ color: '#fff', fontWeight: 'bold'}}>{item.name}</Text>
              <Text style={{ color: '#fff' }}> {item.location}</Text>
            </View>
          </View>
        </ImageBackground>

          <View style={[styles.column, styles.articleInfo, styles.shadow,]}>
            <Text style={{ fontSize: 19, fontWeight: 'bold', paddingBottom: 8, }}>
              {item.title}
            </Text>
            <View style={[ styles.row, { justifyContent: 'space-between', alignItems: 'flex-end', }]}>
              <Text style={{ color: 'rgb(133, 132, 132)' }}>
                {item.description.split('').slice(0, 50)}...
              </Text>
              <FontAwesome
                name="chevron-right"
                size={15 * 0.75}
                color={'#BCCCD4'}
              />
            </View>
          </View>
      </TouchableOpacity>
    )
  }

  renderList = () => {
    return (
      <View style={[ styles.column, styles.datahome]}>
        <FlatList
          vertical
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          style={{ overflow:'visible', height: 250 }}
          data={this.props.datahome}
          keyExtractor={(item, index) => `${item.id}`}
          renderItem={({ item }) => this.list(item)}
        />
      </View>
    );
  }

  list = item => {
    const { navigation } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Article', { article: item })}>
        <View style={{backgroundColor:'#ffffff', marginTop:10, padding:5, flexDirection: 'column'}}>
            <View style={[styles.column, styles.shadow,{
              backgroundColor: 'rgb(245, 245, 245)',
              width: width - (25 * 2),
              height: width * 0.3,
              marginHorizontal: 25,
              paddingHorizontal: 25,
              paddingVertical: 25 * 0.66,
              borderRadius: 12,
              }]}>
              <Text style={{ fontSize: 19, fontWeight: 'bold', paddingBottom: 8, }}>
                {item.title}
              </Text>
              <View style={[ styles.row, { justifyContent: 'space-between', alignItems: 'flex-end', }]}>
                <Text style={{ color: 'rgb(133, 132, 132)' }}>
                  {item.description.split('').slice(0, 50)}...
                </Text>
                <FontAwesome
                  name="chevron-right"
                  size={15 * 0.75}
                  color={'#BCCCD4'}
                />
              </View>
            </View>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={{paddingBottom: 30,}}>
        <View style={{backgroundColor:'#ffffff', padding: 20, paddingBottom: 5,flexDirection: 'row'}}>
          <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back" color={'rgb(171, 170, 172)'} size={23} />
          </TouchableOpacity>
          <Text style={styles.header}> Artikel Islam</Text>
        </View>

        <ScrollView>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 15 }}
          >
            {this.renderArticles()}
          </ScrollView>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 15 }}
          >
            {this.renderList()}
          </ScrollView>

        </ScrollView>

      </View>
    )
  }
}

ArticleList.defaultProps = {
  datahome: mocks,
};

export default ArticleList;
