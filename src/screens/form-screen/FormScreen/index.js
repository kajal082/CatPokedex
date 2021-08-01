// @flow
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import CustomText from '../../../components/CustomText';
import BlankPage from '../../../components/BlankPage';
import {BEIGE} from '../../../constants/colors';
import TextField from '../../../components/TextField';
import Button from '../../../components/Button';
import {useDispatch} from 'react-redux';
import {ADD_CAT_DETAILS} from '../../../constants/actions';

const FormScreen = ({navigation}) => {
  const [catDetails, setDetails] = useState({});
  const dispatch = useDispatch();

  const setData = (data, key) => {
    catDetails[key] = data;
  };

  const addCatDetails = () => {
    catDetails['id'] = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substr(2, 10);
    if (
      catDetails &&
      catDetails?.catName &&
      catDetails?.breed &&
      catDetails?.id &&
      catDetails?.birthday &&
      catDetails?.description
    ) {
      dispatch({
        type: ADD_CAT_DETAILS,
        payload: catDetails,
      });
      navigation.navigate('HomeScreen');
    } else {
      return;
    }
  };

  return (
    <BlankPage>
      <View style={styles.parent}>
        <CustomText.Header style={styles.header}>Add a cat</CustomText.Header>
        <View style={styles.fieldContainer}>
          <TextField
            placeholder={"Enter your cat's name"}
            title={"Cat's name"}
            style={styles.textFieldContainerStyle}
            onChangeText={data => setData(data, 'catName')}
          />
          <TextField
            placeholder={'Awesome breed?'}
            title={'Breed'}
            style={styles.textFieldContainerStyle}
            onChangeText={data => setData(data, 'breed')}
          />
          <TextField
            placeholder={"We'll remind you🎉"}
            title={'Birthday'}
            style={styles.textFieldContainerStyle}
            onChangeText={data => setData(data, 'birthday')}
          />
          <TextField
            placeholder={'Anything else...'}
            title={'Description'}
            style={[styles.textFieldContainerStyle]}
            customTextInputStyle={{height: 120}}
            multiline={true}
            numberOfLines={5}
            onChangeText={data => setData(data, 'description')}
          />
        </View>
        <View style={styles.buttonBar}>
          <Button title={'Add'} onPress={addCatDetails} />
          <Button title={'back'} onPress={() => navigation.goBack()} />
        </View>
      </View>
    </BlankPage>
  );
};

FormScreen.propTypes = {};
FormScreen.defaultProps = {};
const styles = StyleSheet.create({
  parent: {
    backgroundColor: BEIGE,
    height: '100%',
    padding: 24,
  },
  header: {
    fontSize: 24,
  },
  fieldContainer: {
    marginTop: 36,
  },
  textFieldContainerStyle: {
    marginBottom: 18,
  },
  buttonBar: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flex: 1,
  },
});
export default FormScreen;
