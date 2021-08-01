/* eslint-disable react-native/no-inline-styles */
// @flow
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import BlankPage from '../../components/BlankPage';
import {XIcon} from 'react-native-heroicons/solid';
import {
  BEIGE_DARK,
  BEIGE_DARK_EST,
  PURE_WHITE,
  TEXT_COLOR,
  TEXT_COLOR_DARK,
  TEXT_COLOR_LIGHT,
} from '../../constants/colors';
import CustomText from '../../components/CustomText';

const DetailsScreen = ({navigation, route}) => {
  const {catName, breed, birthday, description} = route.params;
  console.log({catName, breed, birthday, description});
  return (
    <BlankPage>
      <View style={styles.parent}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <XIcon color={TEXT_COLOR} />
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <View style={styles.card}>
            <CustomText.Header
              style={{fontSize: 28}}>{`${catName}`}</CustomText.Header>
            <View
              style={{
                backgroundColor: BEIGE_DARK,
                padding: 4,
                paddingHorizontal: 8,
                borderRadius: 6,
                marginVertical: 12,
                alignSelf: 'baseline',
              }}>
              <CustomText.SubHeader
                style={{
                  color: TEXT_COLOR_LIGHT,
                }}>{`Breed: ${breed}`}</CustomText.SubHeader>
            </View>
            <CustomText style={{fontSize: 18, marginTop: 16}}>
              About cat
            </CustomText>
            <CustomText.SubHeader
              style={{
                fontSize: 18,
                marginTop: 6,
              }}>{`${description}`}</CustomText.SubHeader>
            <View style={{marginTop: 24}}>
              <CustomText>{`Birthday🎉: ${birthday}`}</CustomText>
            </View>
          </View>
        </View>
      </View>
    </BlankPage>
  );
};

DetailsScreen.propTypes = {};
DetailsScreen.defaultProps = {};
const styles = StyleSheet.create({
  parent: {
    height: '100%',
    padding: 20,
  },

  card: {
    borderRadius: 12,
    height: '60%',

    padding: 20,
    backgroundColor: PURE_WHITE,
    marginTop: 12,
    borderWidth: 1,
    borderColor: BEIGE_DARK,
  },
});
export default DetailsScreen;
