import {Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const {width} = Dimensions.get('window');
const imageWidth = width / 2 - 10; // Calculate the image width based on the number of columns

const styles = ScaledSheet.create({
  list: {
    padding: '5@ms',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemContainer: {
    flex: 1,
    margin: '5@ms',
    alignItems: 'center',
  },
  image: {
    width: imageWidth,
    height: imageWidth * 1.5, // Adjust the aspect ratio as needed
    borderRadius: 10,
  },
  title: {
    marginTop: '5@mvs',
    fontSize: '14@ms',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  score: {
    fontSize: '15@ms',
    color: '#666',
    textAlign: 'center',
    marginLeft: '8@ms',
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default styles;
