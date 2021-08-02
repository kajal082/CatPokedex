/* eslint-disable react-native/no-inline-styles */
// @flow
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
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
import Button from '../../components/Button';
import {useDispatch} from 'react-redux';
import {DELETE_CAT_DETAILS} from '../../constants/actions';
import {PencilAltIcon, TrashIcon} from 'react-native-heroicons/solid';

const DetailsScreen = ({navigation, route}) => {
  const {catName, breed, description, id} = route.params;
  const dispatch = useDispatch();
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
            {/* <View style={{marginTop: 24}}>
              <CustomText>{`Birthday🎉: ${birthday}`}</CustomText>
            </View> */}
          </View>
          <View style={styles.buttonBar}>
            <Button
              title={'Edit'}
              leftIcon={<PencilAltIcon color={PURE_WHITE} size={20} />}
              onPress={() =>
                navigation.navigate('FormScreen', {
                  catName,
                  breed,
                  description,
                  id,
                })
              }
            />
            <Button
              title={'Delete'}
              leftIcon={<TrashIcon color={PURE_WHITE} size={20} />}
              onPress={() => {
                Alert.alert(
                  'Alert',
                  'Are you sure you want to remove this cat from list? ',
                  [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {
                      text: 'Delete 😿',
                      onPress: () => {
                        dispatch({
                          type: DELETE_CAT_DETAILS,
                          payload: id,
                        });
                        navigation.navigate('HomeScreen');
                      },
                    },
                  ],
                );
              }}
            />
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
    // backgroundColor: 'red',
  },

  card: {
    borderRadius: 12,
    // height: '50%',
    padding: 20,
    backgroundColor: PURE_WHITE,
    marginTop: 12,
    borderWidth: 1,
    borderColor: BEIGE_DARK,
  },
  buttonBar: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    // flex: 1,
    marginVertical: 24,
  },
});
export default DetailsScreen;
