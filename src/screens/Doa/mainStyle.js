import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
 Icon: {
  color:'#666666'
 },
 copy: {
  fontFamily: 'SourceSansPro',
  fontSize: 17,
  textAlign:'center',
  // backgroundColor:'#00dfbe',
  backgroundColor:'#ecf2f5',
  padding:5,
  justifyContent:'center',
  marginTop:15,
  borderRadius: 10,
},
textCopy: {
  color:'#666666',
  fontSize:12
},
 textJudul: {
    padding:7,
    fontSize:17,
    fontFamily: 'SourceSansPro',
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#666666'
 },
 textArab: {
    fontSize:35,
    fontFamily: 'lotus-linotype-light',
    color:'#333333',
    marginTop:5
 },
 textArabLatin: {
    lineHeight:20,
    marginTop: 10,
    fontStyle:'italic',
    color:'rgb(70, 176, 100)',
    fontFamily: 'SourceSansPro',
    fontSize: 15,
 },
 textTerjemah: {
    lineHeight:20,
    fontFamily: 'SourceSans',
    marginTop:10,
    fontSize:15,
    color:'#333333',
    paddingBottom: 10
 },
 sumber: {
    marginTop:20,
    fontSize:15,
    fontStyle:'italic'
 },
 menuSetting: {
    marginTop: 27,
    borderRadius:0
  },
})


export default styles;
