// @flow
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import {BEIGE, BEIGE_DARK, BEIGE_DARK_EST} from '../../constants/colors';

const BlankPage = ({children}) => {
  return (
    <SafeAreaView style={{backgroundColor: BEIGE}}>
      <StatusBar backgroundColor={BEIGE_DARK} />
      {children}
    </SafeAreaView>
  );
};

BlankPage.propTypes = {
  children: PropTypes.node,
};

export default BlankPage;
