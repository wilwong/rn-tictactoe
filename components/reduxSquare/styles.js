import { StyleSheet }  from 'react-native';
import Layout from '../../constants/layout.js'

const styles = StyleSheet.create({
  button:{
    width: '70%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:{
    width: Layout.width/3,
    height: Layout.width/3,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderWidth :1,
    borderColor: 'black',
  },
  emptyButton:{
    width: Layout.width/3,
    height: Layout.width/3,
    backgroundColor: 'red',
    borderWidth :1,
    borderColor: 'black',
  }
});

export default styles;