/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Movie, useGetPopularMoviesQuery} from '../../api/moviesApi';
import {RootStackParamList} from '../../navigation/RootNavigator';
import {Star} from '../../assets/icons/index.ts';
import DataView from '../../components/DataView.tsx';

import styles from './styles.ts';

type MovieListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Movies'
>;

type Props = {
  navigation: MovieListScreenNavigationProp;
};

const MovieListScreen: React.FC<Props> = ({navigation}) => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);

  const {data, error, isLoading, isFetching} = useGetPopularMoviesQuery(page);

  useEffect(() => {
    if (data && !isFetching) {
      setMovies(prevMovies => [...prevMovies, ...data.results]);
    }
  }, [data]);

  const handleLoadMore = () => {
    if (!isFetching && !isLoading && page < (data?.total_pages ?? 0)) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const renderItem = ({item}: {item: Movie}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('MovieDetails', {movieId: item.id})}>
      <Image
        source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
        style={styles.image}
      />
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.scoreContainer}>
        <Star />
        <Text style={styles.score}>{item.vote_average.toFixed(1)}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderRow = ({index}: {index: number}) => {
    if (index % 2 === 0) {
      const items = movies ?? [];
      return (
        <View style={styles.rowContainer}>
          {renderItem({item: items[index]})}
          {index + 1 < items.length ? (
            renderItem({item: items[index + 1]})
          ) : (
            <></>
          )}
        </View>
      );
    }
    return null;
  };

  const renderFooter = () => {
    if (!isFetching) {
      return null;
    }
    return <ActivityIndicator />;
  };

  const renderList = (_: any) => {
    return (
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        renderItem={renderRow}
        contentContainerStyle={styles.list}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    );
  };

  return (
    <DataView
      data={movies}
      loading={isLoading}
      renderContent={renderList}
      error={error}
    />
  );
};

export default MovieListScreen;
