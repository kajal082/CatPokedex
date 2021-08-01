/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
} from 'react-native';

import ListItem from '../../components/ListItem/index.js';
import CustomText from '../../components/CustomText/index.js';
import {
  BEIGE,
  BEIGE_DARK,
  TEXT_COLOR_LIGHT,
} from '../../constants/colors/index.js';
import {CAT_ARRAY, CAT_BREED} from './constants.js';
import SearchBar from '../../components/SearchBar/index.js';
import Button from '../../components/Button/index.js';
import EmptyList from './components/EmptyList/index.js';
import BlankPage from '../../components/BlankPage/index.js';

const Header = ({onSearch}) => {
  return (
    <View style={styles.headerStyle}>
      <CustomText.SubHeader style={styles.headerFontStyle}>
        Hi Jack 👋
      </CustomText.SubHeader>
      <View style={styles.searchbarContainer}>
        <SearchBar onTextChange={onSearch} />
      </View>
    </View>
  );
};

const HomeScreen = ({navigation}) => {
  const [catArray, setCatArray] = useState([]);
  const [keyword, setKeyword] = useState(null);

  useEffect(() => {
    let filteredArray;

    if (keyword === null || keyword?.trim() === '') {
      filteredArray = [];
    } else {
      filteredArray = CAT_ARRAY.filter(
        item => item.catName.includes(keyword) || item.breed.includes(keyword),
      );
    }
    setCatArray(filteredArray);
  }, [keyword]);

  const onSearch = text => {
    setKeyword(text);
  };

  return (
    <BlankPage>
      {catArray.length === 0 ? (
        <EmptyList navigation={navigation} />
      ) : (
        <View style={styles.container}>
          <Button.FAB title={'Add a cat 😻'} />

          <FlatList
            numColumns={2}
            ListHeaderComponent={<Header onSearch={onSearch} />}
            data={catArray}
            contentContainerStyle={{
              padding: 12,
            }}
            renderItem={({item}) => {
              return <ListItem {...item} />;
            }}
          />
        </View>
      )}
    </BlankPage>
  );
};

HomeScreen.propTypes = {};
HomeScreen.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
  },

  headerStyle: {
    marginVertical: 18,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },

  headerFontStyle: {fontSize: 36, color: TEXT_COLOR_LIGHT},

  searchbarContainer: {
    marginVertical: 12,
  },
});

export default HomeScreen;
