import {appConstants} from '../actions/const';
import objectAssign from 'object-assign';
let initialMainMenuState = {
  currentView: "GENERAL SETUP",
  currentSideView: "PROPERTY DEFAULTS",
  currentSubSideView:"preferences"
};
let mainMenu = (state = initialMainMenuState, action) => {
  console.log('Selection state :', action, state);
  switch (action.type) {
    case "Default_Menu_Items":
      console.log('edit state : ', action, objectAssign({}, state, {currentView: action.currentView}));
      return objectAssign({}, state, {currentView: action.currentView});
    case "Set_Selected_Side_Menu_Item":
      return objectAssign({}, state, {currentSideView: action.currentSideView});
    case "Set_Selected_Sub_Side_Menu_Item":
      return objectAssign({}, state, {currentSubSideView: action.currentSubSideView});
    default:
      console.log('default : ', action, state);
      return state || initialMainMenuState;
  }

}
export default mainMenu
