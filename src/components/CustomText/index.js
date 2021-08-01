// @flow
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';
import {TEXT_COLOR} from '../../constants/colors';

const Header = ({style, ...props}) => {
  return (
    <Text style={[styles.headerFont, style]} {...props}>
      {props.children}
    </Text>
  );
};
const SubHeader = ({style, ...props}) => {
  return (
    <Text style={[styles.subHeaderFont, style]} {...props}>
      {props.children}
    </Text>
  );
};

const CustomText = ({type, style, children}) => {
  return <Text style={[styles.regular, style]}>{children}</Text>;
};

CustomText.Header = Header;
CustomText.SubHeader = SubHeader;

CustomText.propTypes = {};
CustomText.defaultProps = {};

const styles = StyleSheet.create({
  headerFont: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    color: TEXT_COLOR,
  },

  subHeaderFont: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    color: TEXT_COLOR,
  },

  regular: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    color: TEXT_COLOR,
  },
});
export default CustomText;
