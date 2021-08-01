/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import ListItem from '../../components/ListItem/index.js';
import CustomText from '../../components/CustomText/index.js';
import {
  BEIGE,
  BEIGE_DARK,
  TEXT_COLOR,
  TEXT_COLOR_LIGHT,
} from '../../constants/colors/index.js';
import {CAT_ARRAY, CAT_BREED} from './constants.js';
import SearchBar from '../../components/SearchBar/index.js';
import Button from '../../components/Button/index.js';
import EmptyList from './components/EmptyList/index.js';
import BlankPage from '../../components/BlankPage/index.js';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {
  ADD_CAT_DETAILS,
  SET_ALL_CAT_DATA,
} from '../../constants/actions/index.js';

import {PlusIcon} from 'react-native-heroicons/solid';
import NewCatCard from '../../components/NewCatCard/index.js';
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
  const [keyword, setKeyword] = useState(null);
  const allCatsArray = useSelector(state => state.catArray);
  const [filteredCatArray, setFilteredCatArray] = useState(allCatsArray);
  const [isReady, setIsReady] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (allCatsArray.length > 0) {
      setFilteredCatArray(allCatsArray);
      return;
    }

    AsyncStorage.getItem('localCatList')
      .then(res => {
        if (res) {
          let data = JSON.parse(res);
          dispatch({
            type: SET_ALL_CAT_DATA,
            payload: data,
          });
        }
      })
      .finally(() => {
        setIsReady(true);
      });
  }, [allCatsArray]);

  useEffect(() => {
    let filteredArray;

    if (keyword === null || keyword?.trim() === '') {
      filteredArray = allCatsArray;
    } else {
      filteredArray = filteredCatArray.filter(
        item => item.catName.includes(keyword) || item.breed.includes(keyword),
      );
    }
    setFilteredCatArray(filteredArray);
  }, [keyword]);

  const onSearch = text => {
    setKeyword(text);
  };

  if (!isReady) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator animating={true} size={'large'} color={TEXT_COLOR} />
      </View>
    );
  }

  return (
    <BlankPage>
      {allCatsArray.length === 0 ? (
        <EmptyList navigation={navigation} />
      ) : (
        <View style={styles.container}>
          {/* <Button.FAB
            title={'Add a cat'}
            onPress={() => navigation.navigate('FormScreen')}
            leftIcon={<PlusIcon height={24} width={24} color={BEIGE} />}
          /> */}
          <FlatList
            numColumns={2}
            ListHeaderComponent={<Header onSearch={onSearch} />}
            data={[{id: -1}, ...filteredCatArray]}
            contentContainerStyle={{
              padding: 12,
            }}
            renderItem={({item}) => {
              if (item.id === -1) {
                return (
                  <NewCatCard
                    onPress={() => navigation.navigate('FormScreen')}
                  />
                );
              }
              return (
                <ListItem
                  {...item}
                  onPress={() =>
                    navigation.navigate('DetailsScreen', {...item})
                  }
                />
              );
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

  headerFontStyle: {fontSize: 28, color: TEXT_COLOR, marginBottom: 16},

  searchbarContainer: {
    marginVertical: 12,
  },
});

export default HomeScreen;
