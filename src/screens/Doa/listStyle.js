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
  listconten: {
    fontSize:12,
    letterSpacing: 1,
    color:'rgb(9, 198, 101)'
  },
  listjudul: {
    fontFamily: 'SourceSansPro',
    fontSize: 17,
    fontWeight: 'bold',
    flex: 1,
    color: '#333',
    letterSpacing: 1,
  },
  back: {
    width: 30,
    height:40,
    alignItems: 'flex-start',
  },
});


export default styles;
