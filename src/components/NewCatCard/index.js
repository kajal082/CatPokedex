// @flow
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {
  BEIGE_DARK,
  BEIGE_DARK_EST,
  TALC_BLUE,
  TALC_BLUE_LIGHT,
  TEXT_COLOR_LIGHT,
} from '../../constants/colors';
import {PlusCircleIcon, PlusIcon} from 'react-native-heroicons/solid';
import CustomText from '../CustomText';

const NewCatCard = ({onPress}) => {
  return (
    <View style={styles.parent}>
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        activeOpacity={0.7}>
        <PlusCircleIcon size={32} color={TALC_BLUE} />
        <CustomText.Header style={{color: TALC_BLUE, marginTop: 8}}>
          Add a cat
        </CustomText.Header>
      </TouchableOpacity>
    </View>
  );
};

NewCatCard.propTypes = {};
NewCatCard.defaultProps = {};
const styles = StyleSheet.create({
  parent: {
    height: 120,
    padding: 12,
    width: '50%',
  },

  container: {
    flex: 1,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: BEIGE_DARK_EST,
    backgroundColor: BEIGE_DARK,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default NewCatCard;
