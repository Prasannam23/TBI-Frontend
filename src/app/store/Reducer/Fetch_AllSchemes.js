import TYPES from '../Constant';
const initialState = {
    loading: false,
    data: [],
    error: null,
    success:false,
  };
  
  const FetchShemesReducer = (state = initialState, action) => {
    switch (action.type) {
      case TYPES.Fetch_Schemes:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case TYPES.Fetch_Schemes_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
          success:true,
        };
      case TYPES.Fetch_Schemes_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
          success:false
        };
      default:
        return state;
    }
  };
  
  export default FetchShemesReducer;