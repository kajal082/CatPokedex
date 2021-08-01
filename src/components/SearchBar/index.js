// @flow
import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {BEIGE_DARK, PURE_WHITE} from '../../constants/colors';
import CustomText from '../CustomText';

const SearchBar = ({onTextChange, value}) => {
  return (
    <View style={styles.parent}>
      <CustomText style={styles.iconStyle}>🔎</CustomText>
      <TextInput
        placeholder={'Search for cats, breeds...'}
        style={styles.textInputStyle}
        value={value}
        onChangeText={onTextChange}
      />
    </View>
  );
};

SearchBar.propTypes = {};
SearchBar.defaultProps = {};
const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: BEIGE_DARK,
    borderWidth: 1,
    borderColor: BEIGE_DARK,
    borderRadius: 12,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  textInputStyle: {
    height: 42,
  },

  iconStyle: {
    marginRight: 8,
  },
});
export default SearchBar;
