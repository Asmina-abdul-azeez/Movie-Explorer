/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {RouteProp, useNavigation} from '@react-navigation/native';

import {MovieDetails, useGetMovieDetailsQuery} from '../../api/moviesApi';
import {RootStackParamList} from '../../navigation/RootNavigator';
import {Star} from '../../assets/icons/index.ts';
import DataView from '../../components/DataView';

import styles from './styles';

type MovieDetailScreenRouteProp = RouteProp<RootStackParamList, 'MovieDetails'>;

type Props = {
  route: MovieDetailScreenRouteProp;
};

const MovieDetailScreen: React.FC<Props> = ({route}) => {
  const {movieId} = route.params;
  const navigation = useNavigation();
  const {data, error, isLoading} = useGetMovieDetailsQuery(movieId);

  useEffect(() => {
    if (data) {
      navigation.setOptions({title: data.title});
    }
  }, [data]);

  const renderMovieDetails = (movie: MovieDetails) => (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      {movie?.backdrop_path && (
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`,
          }}
          style={styles.backdrop}
        />
      )}
      <View style={styles.posterContainer}>
        <Image
          source={{uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`}}
          style={styles.poster}
        />
      </View>
      <Text style={styles.title}>{movie?.title}</Text>
      <Text style={styles.releaseDate}>
        Release Date: {movie?.release_date}
      </Text>
      <View style={styles.ratingContainer}>
        <Star />
        <Text style={styles.ratingTitle}>{movie.vote_average.toFixed(1)}</Text>
      </View>
      <View style={styles.genresContainer}>
        <Text style={styles.genresTitle}>Genres: </Text>
        <View style={styles.genres}>
          {movie?.genres.map(genre => (
            <View style={styles.genreContainer}>
              <Text key={genre.id} style={styles.genreText}>
                {genre.name}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <Text style={styles.overview}>{movie?.overview}</Text>
    </ScrollView>
  );

  return (
    <DataView
      loading={isLoading}
      error={error}
      data={data}
      renderContent={renderMovieDetails}
    />
  );
};

export default MovieDetailScreen;
