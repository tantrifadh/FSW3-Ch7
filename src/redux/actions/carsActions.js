import { GET_ALL_CARS, CARS_ERROR } from "./types";

export const getAllCars = (params) => async (dispatch) => {
  try {
    const { tanggal, jam, penumpang } = params;
    const response = await fetch(`http://localhost:8000/api/v1/cars/:${tanggal}/:${jam}/${penumpang}`);
    const data = await response.json();

    dispatch({
      type: GET_ALL_CARS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CARS_ERROR,
      payload: error.response,
    });
  }
};
