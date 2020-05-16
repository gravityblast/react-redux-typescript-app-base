import React from 'react';
import classNames from 'classnames';
import { RootState } from '../reducers';
import {
  shallowEqual,
  useSelector,
} from 'react-redux';
/* import "../styles/Layout.scss"; */

export default function(ownProps: any) {
  const props = useSelector((state: RootState) => {
    return {
    }
  }, shallowEqual);


  /* const sidebarClass = classNames({ */
  /*   sidebar: true, */
  /*   open: props.sidebarOpen, */
  /* }); */

  return <div className="main">
    Hello
  </div>;
}
