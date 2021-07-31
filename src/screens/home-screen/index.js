import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles.js';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to CatPokedex</Text>
    </View>
  );
};

HomeScreen.propTypes = {};
HomeScreen.defaultProps = {};
export default HomeScreen;
