"use client";
import axios from "axios";
import TYPES from '../Constant';
 import { Fetch_Schemes } from "../../../../Api_endpoint/apiendpoint";

export const FetchSchemes = () => {
    console.log("Inside FetchSchemes action");
  return async (dispatch) => {
    console.log("Inside FetchSchemes action dispatch ");

    const refreshToken = localStorage.getItem('refreshTokenAdmin');
    const accessToken = localStorage.getItem('accessTokenAdmin');

    if (!refreshToken || !accessToken) {
      console.log("Tokens missing in localStorage");
      dispatch({
        type: TYPES.Fetch_Schemes_FAILURE,
        payload: 'Tokens not found in localStorage',
      });
      return;
    }

    try {
      dispatch({ type: TYPES.Fetch_Schemes }); // Indicate loading state

     
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_DATABASE_URL}${Fetch_Schemes}?schemeName=allSchemes`,
        {
          headers: {
            Refresh: refreshToken,
            Access: accessToken,
          },
          withCredentials: true,
        }
      );

     

      const success = response?.data?.success || false;

      if (success) {

        let payload = response.data.data.map((scheme)=>scheme.schemeName)
        
        dispatch({
          type: TYPES.Fetch_Schemes_SUCCESS,
          payload
        });
      } else {
        console.log("API responded with failure:", response.data.message);
        dispatch({
          type: TYPES.Fetch_Schemes_FAILURE,
          payload: response.data.message,
        });
      }
    } catch (error) {
      console.error("Error occurred during API call:", error);
      dispatch({
        type: TYPES.Fetch_Schemes_FAILURE,
        payload: error.response?.data?.message || error.message,
      });
    }
  };
};
