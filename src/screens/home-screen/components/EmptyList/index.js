// @flow
import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {
  BEIGE,
  TEXT_COLOR,
  TEXT_COLOR_LIGHT,
} from '../../../../constants/colors';
import CustomText from '../../../../components/CustomText';
import Button from '../../../../components/Button';

const EmptyList = ({navigation}) => {
  return (
    <View style={styles.parent}>
      <View style={styles.textContainer}>
        <CustomText.Header style={styles.headerFontStyle}>
          Hi Jack 👋
        </CustomText.Header>
        <CustomText style={styles.bodyFontStyle}>
          {`Welcome to CatPokedex, keep track of all your lovely cats😻.\n`}
        </CustomText>

        <CustomText style={{marginBottom: 32}}>
          Get started by adding your first cat.
        </CustomText>

        <Button
          title={'Add a cat'}
          onPress={() => navigation.navigate('FormScreen')}
        />
      </View>
    </View>
  );
};

EmptyList.propTypes = {};
EmptyList.defaultProps = {};
const styles = StyleSheet.create({
  parent: {
    backgroundColor: BEIGE,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerFontStyle: {
    fontSize: 28,
    marginBottom: 24,
    color: TEXT_COLOR,
  },

  bodyFontStyle: {
    marginBottom: 12,
    color: TEXT_COLOR_LIGHT,
  },
  textContainer: {
    width: '70%',
  },
});
export default EmptyList;
