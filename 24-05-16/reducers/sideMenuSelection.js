import * as c from '../constants/constants';
const appName = c.DEFAULT_APP_OBJECT;
const defaultItem = {itemName: 'Menu1'}
 const sideMenuSelection  = (state,action) => {
  console.log('Selection state',state);
   switch(action.type){
    case "ON_SIDE_MENU_ITEM_SELECTION":
    console.log('edit state',state)
        return action.itemName

      case "ON_SIDE_MENU_SUB_ITEM_SELECTION":
      console.log('submit state',action)
        return action.itemName

      default:
      console.log('default',state)
      return  state|| defaultItem
   }

}
export default sideMenuSelection
