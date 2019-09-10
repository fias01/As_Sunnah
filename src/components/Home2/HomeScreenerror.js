import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SliderBox } from 'react-native-image-slider-box';

import DrawerActions from 'react-navigation';
import Carousel from 'react-native-smart-carousel';
import { datacarousel, categories } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import { getCategories } from '../../data/MockDataAPI';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Ar Ruqya',
    headerLeft: (
      <MenuImage
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    )
  });

  renderCategories = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' >
      <View style={styles.container}>
        <Image style={{borderRadius:8, width:"70%", aspectRatio:1, }} source={{ uri: item.photo_url }} />
        <Text style={{
            color:"#FFFFFF",
            fontFamily:"Lato",
            fontSize:17,
            marginTop:2,
            fontWeight:"bold",
          }}>
          {item.name}
        </Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    const categoriesArray = getCategories(item.id);
    return (
<View style={{ flex:1 }}>
       <View style={{ flex:1, backgroundColor:"#EAEEF2" }}>
          <Carousel
            data={datacarousel}
          />
          <View style={{flexDirection:"row", paddingHorizontal:10, marginBottom:5, marginTop:12, }}>
            <View style={{ flex:1, }}>
              <FlatList
                vertical
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={categoriesArray}
                renderItem={this.renderCategories}
                keyExtractor={item => `${item.categoryId}`}
              />
            </View>
          </View>
       </View>

       <View style={{backgroundColor:"#FFFFFF", height:48, }}>
           <View style={{flex:1, height:49, flexDirection:"row", }}>
               <TouchableOpacity style={{flex:1, justifyContent:"center", alignItems:"center", }}>
                <Icon name="home" style={{color:"#317af1"}} size={25} />
                <Text style={{color:"#949CA9", fontFamily:"themify", fontSize: 10, }}>Home</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{flex:1, justifyContent:"center", alignItems:"center", }}>
                <Icon name="description" style={{color:"#949CA9"}} size={25} />
                <Text style={{color:"#949CA9", fontFamily:"themify", fontSize: 10, }}>Article</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{flex:1, justifyContent:"center", alignItems:"center", }}>
                <Icon name="shop" style={{color:"#949CA9"}} size={25} />
                <Text style={{color:"#949CA9", fontFamily:"themify", fontSize: 10, }}>Herbal</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{flex:1, justifyContent:"center", alignItems:"center", }}>
                <Icon name="place" style={{color:"#949CA9"}} size={25} />
                <Text style={{color:"#949CA9", fontFamily:"themify", fontSize: 10, }}>Location</Text>
               </TouchableOpacity>
           </View>
       </View>

</View>
    );
  }
}
