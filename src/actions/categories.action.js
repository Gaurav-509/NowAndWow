import { SET_CATEGORIES_MAP } from "../store/constants/categories.constant.js";

export const setCategories = (categoryMap) => dispatch => {
  dispatch({ type: SET_CATEGORIES_MAP, payload: categoryMap })
}
