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
    fontFamily: 'SourceSansPro',
    fontWeight: 'bold',
    fontSize: 20,
  },
  waktu: {
    fontSize:20,
    color:'rgb(9, 198, 101)'
  },
  shalat: {
    fontFamily: 'SourceSansPro',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    color: '#333',
    letterSpacing: 1,
  },
  content: {
    backgroundColor:'#ffffff',
    marginTop:6,
    padding:12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 9
  },
  back: {
    width: 30,
    height:40,
    alignItems: 'flex-start',
  },
});


export default styles;
