import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({

  flex: {
    flex: 0,
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  articles: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  article: {
    width: width - (25 * 2),
    height: width * 0.6,
    marginHorizontal: 25,
    paddingHorizontal: 25,
    paddingVertical: 25 * 0.66,
    borderRadius: 12,
  },
  articleInfo: {
    position: 'absolute',
    borderRadius: 12,
    marginHorizontal: -10,
    paddingHorizontal: 30,
    paddingVertical: 25 / 2,
    bottom: 20,
    left: (width - (100)) / (Platform.OS === 'ios' ? 3.2 : 3),
    backgroundColor: '#fff',
    width: width - (100),
  },

  header: {
    fontFamily: 'SourceSansPro',
    fontWeight: 'bold',
    fontSize: 20,
  },
  menuImage: {
    width: (width - (50)) / 2,
    height: (width - (50)) / 2,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 25 / 2,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  dots: {
    width: 10,
    height: 10,
    borderWidth: 2.5,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: '#DCE0E9',
    borderColor: 'transparent',
  },
  activeDot: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.25,
    borderColor: '#007BFA',
  },
  back: {
    width: 30,
    height:40,
    alignItems: 'flex-start',
  },
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
});


export default styles;
