import {appConstants} from '../actions/const';
import objectAssign from 'object-assign';
let initialMainMenuState = {
  currentView: "GENERAL SETUP"
};
let mainMenu = (state = initialMainMenuState, action) => {
  console.log('Selection state :', action, state);
  switch (action.type) {
    case "Default_Menu_Items":
      console.log('edit state : ', action, objectAssign({}, state, {currentView: action.currentView}));
      return objectAssign({}, state, {currentView: action.currentView});

    default:
      console.log('default : ', action, state);
      return state || initialMainMenuState;
  }

}
export default mainMenu
