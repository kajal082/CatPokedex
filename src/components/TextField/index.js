// @flow
import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {BEIGE_DARK} from '../../constants/colors';
import CustomText from '../CustomText';

const TextField = ({
  onChangeText,
  placeholder,
  title,
  style,
  customTextInputStyle,
  ...props
}) => {
  return (
    <View style={style}>
      <CustomText.SubHeader style={styles.titleStyle}>
        {title}
      </CustomText.SubHeader>
      <View style={styles.parent}>
        <TextInput
          onChangeText={onChangeText}
          style={[styles.textInputStyle, customTextInputStyle]}
          placeholder={placeholder}
          numberOfLines={1}
          {...props}
        />
      </View>
    </View>
  );
};

TextField.propTypes = {
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.any,
};
TextField.defaultProps = {};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: BEIGE_DARK,
    padding: 6,
    borderRadius: 12,
    paddingHorizontal: 18,
    display: 'flex',
  },
  textInputStyle: {
    height: 37,
  },
  titleStyle: {
    marginBottom: 8,
  },
});
export default TextField;
