// @flow
import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import PropTypes from 'prop-types';
import CustomText from '../CustomText';
import {BEIGE_DARK, PURE_WHITE, TEXT_COLOR_LIGHT} from '../../constants/colors';

const ListItem = ({catName, breed, id, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.parent}>
      <View style={styles.container}>
        <View>
          <CustomText.SubHeader style={{fontSize: 18, marginBottom: 10}}>
            {catName}
          </CustomText.SubHeader>
          <CustomText style={{color: TEXT_COLOR_LIGHT}}>{breed}</CustomText>
        </View>
      </View>
    </Pressable>
  );
};

ListItem.propTypes = {};
ListItem.defaultProps = {};
const styles = StyleSheet.create({
  parent: {
    height: 120,
    padding: 12,
    width: '50%',
  },
  container: {
    borderWidth: 1,
    borderColor: BEIGE_DARK,
    backgroundColor: PURE_WHITE,
    height: '100%',
    borderRadius: 12,
    padding: 12,
  },
});
export default ListItem;
