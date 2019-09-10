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
  header: {
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    paddingTop: 15 ,
    paddingBottom: 25 * 0.66,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuListHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 25,
    marginTop: 20,
  },
  menu: {
    alignItems: 'center',
    width: (width - (80)) / 2,
    height: (height - (410)) / 2,
    marginLeft: 25,
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderRadius: 12,
    marginVertical: 10,
  },
  menuHeader: {
    overflow: 'hidden',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  menuImage: {
    width: (width - (120)) / 2,
    height: (width - (120)) / 2,
  },
  itemenu: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.05,
    shadowRadius: 13,
    elevation: 7,
  },
  timeContainer: {
    width: '100%',
    justifyContent: 'center',
    padding: 6,
    paddingLeft: 20,
    backgroundColor: '#4c945c',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  timeLocation:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  sholat: {
    fontSize: 30,
    fontFamily: 'SourceSansPro',
    fontWeight: 'bold',
    color: 'rgb(152, 153, 151)',
  },
  waktu:{
    fontSize: 26,
    fontFamily: 'SourceSansPro',
    fontWeight: 'bold',
    color: 'rgb(152, 153, 151)',
  },
  swiper: {
    backgroundColor: 'red',
  },
  jadwal: {
    fontSize: 13,
    fontWeight:'bold',
    fontFamily: 'SourceSansPro',
  }
});


export default styles;
