const countryReducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD_COUNTRY":
      return action.result;
    default:
      return state;
  }
};

export default countryReducer;
