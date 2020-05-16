import {
  LayoutActions,
  LAYOUT_TOGGLE_SLIDES_PANEL,
} from "../actions/layout";

export interface LayoutState {
  slidesPanelOpen: boolean,
}

const initialState: LayoutState = {
  slidesPanelOpen: false,
}

export const layoutReducer = (state: LayoutState = initialState, action: LayoutActions): LayoutState => {
  switch(action.type) {
    case LAYOUT_TOGGLE_SLIDES_PANEL:
      return {
        ...state,
        slidesPanelOpen: action.open,
      };

    default:
      return state;
  }
}
