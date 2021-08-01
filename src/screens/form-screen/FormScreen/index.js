// @flow
import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import CustomText from '../../../components/CustomText';
import BlankPage from '../../../components/BlankPage';
import {BEIGE} from '../../../constants/colors';
import TextField from '../../../components/TextField';
import Button from '../../../components/Button';

const FormScreen = ({navigation}) => {
  return (
    <BlankPage>
      <View style={styles.parent}>
        <CustomText.Header style={styles.header}>Add a cat</CustomText.Header>
        <View style={styles.fieldContainer}>
          <TextField
            placeholder={"Enter your cat's name"}
            title={"Cat's name"}
            style={styles.textFieldContainerStyle}
          />
          <TextField
            placeholder={'Awesome breed?'}
            title={'Breed'}
            style={styles.textFieldContainerStyle}
          />
          <TextField
            placeholder={"We'll remind you🎉"}
            title={'Birthday'}
            style={styles.textFieldContainerStyle}
          />
          <TextField
            placeholder={'Anything else...'}
            title={'Description'}
            style={[styles.textFieldContainerStyle]}
            customTextInputStyle={{height: 120}}
            multiline={true}
            numberOfLines={5}
          />
        </View>
        <View style={styles.buttonBar}>
          <Button title={'Add'} />
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
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
});
export default FormScreen;
