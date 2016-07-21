import {appConstants} from './const';
export function loadMenuItems(view) {
  console.log('menuItems : ', view);
  return {"type": "Default_Menu_Items", "currentView": view}
}
