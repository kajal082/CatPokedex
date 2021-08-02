import {
  ADD_CAT_DETAILS,
  DELETE_CAT_DETAILS,
  EDIT_CAT_DETAILS,
  SET_ALL_CAT_DATA,
} from '../../constants/actions';
import AsyncStorage from '@react-native-community/async-storage';

const setAsyncData = data => {
  try {
    AsyncStorage.setItem('localCatList', JSON.stringify(data));
  } catch (error) {
    console.log({error});
  }
};

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
      }
      setAsyncData(newList);
      return {
        ...state,
        catArray: newList,
      };

    case SET_ALL_CAT_DATA:
      return {
        ...state,
        catArray: action.payload,
      };

    case EDIT_CAT_DETAILS:
      let list = [...state.catArray];

      if (action.payload) {
        let found = list.find(item => {
          if (item.id === action.payload.id) return item;
        });

        if (found) {
          found.breed = action.payload.breed;
          found.catName = action.payload.catName;
          found.description = action.payload.description;
        }
      }
      setAsyncData(list);
      return {
        ...state,
        catArray: list,
      };

    case DELETE_CAT_DETAILS:
      let stateList = [...state.catArray];
      let updatedList = [];
      if (action.payload) {
        updatedList = stateList.filter(item => item.id !== action.payload);
      }
      setAsyncData(updatedList);
      return {
        ...state,
        catArray: updatedList,
      };

    default:
      return state;
  }
};

export default Reducer;
