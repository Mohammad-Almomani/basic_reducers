import uuid from 'react-uuid';

export const actions = {
    ADD_DEV: 'ADD_DEV',
    DELETE_DEV: 'DELETE_DEV'
  }
  
  export const Developer = (state, action) => {
    switch (action.type) {
      case actions.ADD_DEV:
        return [...state, {
          devName: action.payload.devName,
          devFavLang: action.payload.devFavLang,
          devFavTech: action.payload.devFavTech,
          devFavFood: action.payload.devFavFood,
          devFavDrink: action.payload.devFavDrink,
          id: uuid()
        }]
      case actions.DELETE_DEV:
        return state.filter(dev => dev.id !== action.payload.id);
      default:
        return state;
    }
  }