import {ADD_CAT_DETAILS, SET_ALL_CAT_DATA} from '../../constants/actions';
import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
  loading: false,
  catArray: [],
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CAT_DETAILS:
      console.log('Adding cat details');
      let newList = [...state.catArray];
      if (action.payload) {
        newList.push(action.payload);
        // console.log({newList});
      }
      try {
        AsyncStorage.setItem('localCatList', JSON.stringify(newList));
      } catch (error) {
        console.log({error});
      }
      return {
        ...state,
        catArray: newList,
      };

    case SET_ALL_CAT_DATA:
      return {
        ...state,
        catArray: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
