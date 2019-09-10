import React, { Component } from 'react'
import { Text, StyleSheet, View, Animated, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import * as theme from '../theme';
import styles from './styles';

const { width, height } = Dimensions.get('window');

class Article extends Component {
  scrollX = new Animated.Value(0);

  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <View style={[styles.flex, styles.row, styles.header]}>
          <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
            <FontAwesome name="chevron-left" color={'#fff'} size={15} />
          </TouchableOpacity>
        </View>
      ),
      headerTransparent: true,
    }
  }

  renderDots = () => {
    const { navigation } = this.props;
    const article = navigation.getParam('article');
    const dotPosition = Animated.divide(this.scrollX, width);

    return (
      <View style={[ styles.flex, styles.row, styles.dotsContainer ]}>
        {article.images.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.5, 1, 0.5],
            extrapolate: 'clamp'
          });
          return (
            <Animated.View
              key={`step-${item}-${index}`}
              style={[styles.dots, { opacity }]}
            />
          )
        })}
      </View>
    )
  }

  render() {
    const { navigation } = this.props;
    const article = navigation.getParam('article');

    return (
      <ScrollView style={styles.flex}>
        <View style={[styles.flex]}>
          <ScrollView
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}
            scrollEventThrottle={16}
            snapToAlignment="center"
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX } } }])}
          >
            {
              article.images.map((img, index) =>
                <Image
                  key={`${index}-${img}`}
                  source={ img }
                  resizeMode='cover'
                  style={{ width, height: width }}
                />
              )
            }
          </ScrollView>
          {this.renderDots()}
        </View>
        <View style={[styles.flex, styles.content]}>
          <View style={[styles.flex, styles.contentHeader]}>
            <Image style={[styles.avatar, styles.shadow]} source={article.avatar} />
            <Text style={styles.title}>{article.title}</Text>
            <View style={[
              styles.row,
              { alignItems: 'center', marginVertical: 36 / 2 }
            ]}>
              <Text style={{ marginLeft: 8, color: '#BCCCD4', marginTop: -10}}>
                 ({article.name})
              </Text>
            </View>
            <View>
              <Text style={styles.description}>
                {article.description}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default Article;
