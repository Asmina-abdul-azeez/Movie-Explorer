import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MovieListScreen from '../screens/MovieList/MovieListScreen';
import MovieDetailScreen from '../screens/MovieDetail/MovieDetailScreen';

export type RootStackParamList = {
  Movies: undefined;
  MovieDetails: {movieId: number};
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Movies"
          component={MovieListScreen}
          options={{headerTitleAlign: 'center'}}
        />
        <Stack.Screen name="MovieDetails" component={MovieDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
