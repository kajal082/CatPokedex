import {ADD_CAT_DETAILS} from '../../constants/actions';
import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
  loading: false,
  catArray: [],
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CAT_DETAILS:
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

    default:
      return state;
  }
};

export default Reducer;
