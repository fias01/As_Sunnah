import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/Home/Home';
import About from '../screens/About/About';
import DoaList from '../screens/Doa/DoaList';
import DoaMain from '../screens/Doa/DoaMain';
import Herbal from '../screens/Herbal/Herbal';
import HerbalDetail from '../screens/HerbalDetail/HerbalDetail';
import Article from '../screens/Article/Article';
import ArticleList from '../screens/ArticleList/ArticleList';
import Jadwal from '../screens/Jadwal/Jadwal';

export default createStackNavigator(

  {
    Home: {
       screen: Home,
     },
    About: {
       screen: About,
     },
    Doa: {
       screen: DoaList,
     },
    DoaMain: {
       screen: DoaMain,
     },
    Herbal: {
       screen: Herbal,
     },
    HerbalDetail: {
       screen: HerbalDetail,
     },
     Article: {
       screen: Article,
     },
     ArticleList: {
       screen: ArticleList,
     },
     Jadwal: {
       screen: Jadwal,
     },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      header: null
    }
  }
);
