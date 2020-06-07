// import { NavigationActions } from 'react-navigation';
//
// let _navigator;
//
// function setTopLevelNavigator(navigatorRef) {
//   _navigator = navigatorRef;
// }
//
// function navigate(routeName, params) {
//   console.log("U are in navigation service")
//   _navigator.dispatch(
//     NavigationActions.navigate({
//       routeName,
//       params,
//     }),
//   );
//   console.log("U are in navigation service done")
// }
//
// export const navigationService = {
//   navigate,
//   setTopLevelNavigator,
// };

import * as React from 'react';

const navigationRef = React.createRef();

function navigate(name, params) {
  console.log("U are in navigation service started")
  navigationRef.current?.navigate(name, params);
  console.log("U are in navigation service done")
}

export const navigationService = {
  navigate,
  navigationRef
};
