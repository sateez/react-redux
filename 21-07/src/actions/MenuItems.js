import {appConstants} from './const';
 function loadMenuItems(view) {
  console.log('menuItems : ', view);
  return {"type": "Default_Menu_Items", "currentView": view}
}
 function setSideMenuItem(sideMenuView) {
  console.log('sideMenuItems : ', sideMenuView);
  return {"type": "Set_Selected_Side_Menu_Item", "currentSideView":sideMenuView}
}
 function setSubSideMenuItem(subSideMenuView) {
  console.log('subSideMenuItems : ', subSideMenuView);
  return {"type": "Set_Selected_Sub_Side_Menu_Item", "currentSubSideView":subSideMenuView}
}
