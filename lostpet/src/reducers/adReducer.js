import _ from 'lodash';
export default (state = {}, action) => {
    switch (action.type) {
      case "FETCH_ADS":
        return { ...state, ..._.mapKeys(action.payload, 'id') };
      case "FETCH_AD":
        return { ...state, [action.payload.id]: action.payload };
      case "CREATE_AD":
        return { ...state, [action.payload.id]: action.payload };
      default:
          return state;
    }
};