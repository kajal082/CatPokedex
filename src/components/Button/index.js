// @flow
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import {PURE_WHITE, TALC_BLUE} from '../../constants/colors';
import CustomText from '../CustomText';
import FAB from './FAB';

const Button = ({title, onPress, style, textStyle, ...props}) => {
  return (
    <TouchableOpacity
      style={styles.parent}
      onPress={onPress}
      activeOpacity={0.7}>
      <CustomText.SubHeader style={[styles.buttonTextStyle, textStyle]}>
        {title}
      </CustomText.SubHeader>
    </TouchableOpacity>
  );
};

Button.FAB = FAB;

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  style: PropTypes.object,
  leftIcon: PropTypes.node,
};
Button.defaultProps = {
  title: '',
  onPress: () => {},
  style: {},
};
const styles = StyleSheet.create({
  parent: {
    backgroundColor: TALC_BLUE,
    paddingHorizontal: 18,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'baseline',
    borderRadius: 12,
    flexDirection: 'row',
  },

  buttonTextStyle: {
    color: PURE_WHITE,
  },
});
export default Button;
