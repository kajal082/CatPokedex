// @flow
import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {
  BEIGE_DARK,
  BEIGE_DARK_EST,
  PURE_WHITE,
  TEXT_COLOR,
  TEXT_COLOR_DARK,
} from '../../constants/colors';
import CustomText from '../CustomText';
import {SearchIcon} from 'react-native-heroicons/solid';

const SearchBar = ({onTextChange, value}) => {
  return (
    <View style={styles.parent}>
      <SearchIcon color={TEXT_COLOR_DARK} style={{marginRight: 8}} />
      <TextInput
        placeholder={'Search for cats, breeds...'}
        style={styles.textInputStyle}
        value={value}
        onChangeText={onTextChange}
        placeholderTextColor={BEIGE_DARK_EST}
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
    width: '100%',
    color: TEXT_COLOR,
  },

  iconStyle: {
    marginRight: 8,
  },
});
export default SearchBar;
