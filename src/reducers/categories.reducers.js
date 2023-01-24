import { SET_CATEGORIES_MAP } from "../store/constants/categories.constant.js";

export const CATEGORIES_INITIAL_STATE = {
  categoryMap: {},
}

export const categoriesReducers = (state = CATEGORIES_INITIAL_STATE, action) => {

  const { type, payload } = action;

  switch (type) {
    case SET_CATEGORIES_MAP:
      return { ...state, categoryMap: payload }
    default:
      return state;
  }
}