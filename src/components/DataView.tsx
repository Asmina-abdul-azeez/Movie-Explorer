import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import {FetchBaseQueryError} from '@reduxjs/toolkit/query/react';
import {SerializedError} from '@reduxjs/toolkit/react';

type DataViewProps<T> = {
  loading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  data: T | null | undefined;
  renderContent: (data: T) => React.ReactNode;
};

function DataView<T>({loading, error, data, renderContent}: DataViewProps<T>) {
  if (loading) {
    return (
      <View style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const isSerializedError = (err: any): err is SerializedError => {
    return err && 'code' in err;
  };

  const isFetchBaseQueryError = (err: any): err is FetchBaseQueryError => {
    return err && 'data' in err;
  };

  const getErroMessage = () => {
    if (
      isFetchBaseQueryError(error) &&
      error.data &&
      typeof error.data === 'string'
    ) {
      return error.data;
    } else if (isSerializedError(error)) {
      return error.message;
    } else {
      return 'Something went wrong!';
    }
  };

  if (error) {
    return (
      <View style={[styles.container, styles.centered]}>
        <Text>Error: {getErroMessage()}</Text>
      </View>
    );
  }

  if (!data) {
    return (
      <View style={[styles.container, styles.centered]}>
        <Text>No data available</Text>
      </View>
    );
  }

  return <View style={styles.container}>{renderContent(data)}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DataView;
