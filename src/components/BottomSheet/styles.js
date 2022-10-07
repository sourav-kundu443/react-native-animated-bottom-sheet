import {Dimensions, StyleSheet} from 'react-native';
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const Styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    top: SCREEN_HEIGHT,
    // borderRadius: 25,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'grey',
    alignSelf: 'center',
    borderRadius: 50,
    marginVertical: 15,
  },
});

export default Styles;
