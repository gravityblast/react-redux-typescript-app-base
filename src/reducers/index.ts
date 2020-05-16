import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import {
  LayoutState,
  layoutReducer,
} from './layout';
import {
  SlidesState,
  slidesReducer,
} from './slides';

export interface RootState {
  slides: SlidesState,
}

export default function(history: History) {
  return combineReducers({
    router: connectRouter(history),
    layout: layoutReducer,
    slides: slidesReducer,
  });
}
