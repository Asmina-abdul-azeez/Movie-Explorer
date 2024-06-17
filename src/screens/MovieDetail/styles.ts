import {Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const {width} = Dimensions.get('window');

const styles = ScaledSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: '20@ms',
  },
  backdrop: {
    width: width,
    height: width * 0.5625, // Aspect ratio 16:9
  },
  posterContainer: {
    marginTop: '-70@mvs',
    alignItems: 'center',
    elevation: 10,
  },
  poster: {
    width: '150@s',
    height: '225@vs',
    borderRadius: '10@s',
  },
  title: {
    fontSize: '24@ms',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '10@mvs',
    paddingHorizontal: '10@ms',
  },
  releaseDate: {
    fontSize: '16@ms',
    color: '#666',
    textAlign: 'center',
    marginTop: '5@mvs',
  },
  ratingContainer: {
    marginTop: '10@mvs',
    paddingHorizontal: '20@ms',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingTitle: {
    fontSize: '18@ms',
    fontWeight: 'bold',
    marginRight: '10@ms',
    marginLeft: '8@ms',
  },
  starsContainer: {
    flexDirection: 'row',
  },
  starIcon: {
    marginRight: '2@ms',
  },
  genresContainer: {
    marginTop: '10@mvs',
    paddingHorizontal: '20@ms',
    alignSelf: 'flex-start',
    width: '100%',
  },
  genresTitle: {
    fontSize: '18@ms',
    fontWeight: 'bold',
    marginBottom: '5@mvs',
  },
  genres: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flex: 1,
  },
  genreContainer: {
    marginRight: '8@ms',
    marginBottom: '5@mvs',
    paddingHorizontal: '8@ms',
    paddingVertical: '5@mvs',
    borderRadius: '5@s',
    backgroundColor: '#b3b3cc',
  },
  genreText: {
    fontSize: '16@ms',
  },
  overview: {
    fontSize: '16@ms',
    paddingHorizontal: '20@ms',
    textAlign: 'center',
    marginTop: '15@mvs',
  },
});

export default styles;
