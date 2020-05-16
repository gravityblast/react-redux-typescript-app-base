import {
  SlidesActions,
  SLIDES_ADD,
} from "../actions/slides";

export interface SlidesState {
  slides: Array<string>,
}

const initialState: SlidesState = {
  slides: [],
}

export const slidesReducer = (state: SlidesState = initialState, action: SlidesActions): SlidesState => {
  switch(action.type) {
    case SLIDES_ADD:
      return {
        ...state,
      };

    default:
      return state;
  }
}
