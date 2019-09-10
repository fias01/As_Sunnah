import React from 'react';
import { Text, View, TouchableOpacity, TouchableHighlight, ScrollView, Image, FlatList } from 'react-native';
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


  render() {
    return (
<View style={{ flex:1 }}>
       <View style={{ flex:1, backgroundColor:"#EAEEF2" }}>
          <Carousel
            data={datacarousel}
          />
          <View style={{flexDirection:"row", paddingHorizontal:10, marginBottom:5, marginTop:12, }}>
            <View style={{ flex:1, }}>
              <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' >
                <View>
                  <Image style={{borderRadius:8, width:"30%", aspectRatio:1, }} source={[{"uri":"https://is2-ssl.mzstatic.com/image/thumb/Purple118/v4/4c/0d/cd/4c0dcd8f-56de-6417-6235-f39c64f80e72/AppIcon-1x_U007emarketing-85-220-0-6.png/460x0w.jpg"}]}></Image>
                  <Text style={{
                      color:"#FFFFFF",
                      fontFamily:"Lato",
                      fontSize:17,
                      marginTop:2,
                      fontWeight:"bold",
                    }}>
                    asdasd
                  </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' >
                <View>
                  <Image style={{borderRadius:8, width:"30%", aspectRatio:1, }} source={[{"uri":"https://is2-ssl.mzstatic.com/image/thumb/Purple118/v4/4c/0d/cd/4c0dcd8f-56de-6417-6235-f39c64f80e72/AppIcon-1x_U007emarketing-85-220-0-6.png/460x0w.jpg"}]}></Image>
                  <Text style={{
                      color:"#FFFFFF",
                      fontFamily:"Lato",
                      fontSize:17,
                      marginTop:2,
                      fontWeight:"bold",
                    }}>
                    asdasd
                  </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' >
                <View>
                  <Image style={{borderRadius:8, width:"30%", aspectRatio:1, }} source={[{"uri":"https://is2-ssl.mzstatic.com/image/thumb/Purple118/v4/4c/0d/cd/4c0dcd8f-56de-6417-6235-f39c64f80e72/AppIcon-1x_U007emarketing-85-220-0-6.png/460x0w.jpg"}]}></Image>
                  <Text style={{
                      color:"#FFFFFF",
                      fontFamily:"Lato",
                      fontSize:17,
                      marginTop:2,
                      fontWeight:"bold",
                    }}>
                    asdasd
                  </Text>
                </View>
              </TouchableHighlight>
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
