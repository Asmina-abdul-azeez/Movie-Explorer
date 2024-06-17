import {
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

const TMDB_API_KEY = '';

export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieDetails extends Movie {
  genres: Genre[];
}

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.themoviedb.org/3/',
});

const customBaseQuery = async (args: any, api: any, extraOptions: any) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error && 'status' in result.error) {
    const error = result.error as FetchBaseQueryError;
    let customMessage = '';
    switch (error.status) {
      case 401:
        customMessage = 'Unauthorized request';
        break;
      case 404:
        customMessage = 'Resource not found';
        break;
      case 500:
        customMessage = 'Internal server error';
        break;
      case 'FETCH_ERROR':
        customMessage = 'No internet connection';
        break;
      default:
        customMessage = 'Something went wrong';
        break;
    }
    error.data = customMessage;
  }
  return result;
};

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: customBaseQuery,
  endpoints: builder => ({
    getPopularMovies: builder.query<
      {results: Movie[]; total_pages: number},
      number
    >({
      query: (page = 1) => `movie/popular?api_key=${TMDB_API_KEY}&page=${page}`,
    }),
    getMovieDetails: builder.query<MovieDetails, number>({
      query: id =>
        `movie/${id}?api_key=${TMDB_API_KEY}&append_to_response=videos,credits`,
    }),
  }),
});

export const {useGetPopularMoviesQuery, useGetMovieDetailsQuery} = moviesApi;
