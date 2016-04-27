
export const selectSideMenuItem = (itemName) => {
 console.log('select Side Menu Item',itemName)
  return {
    type: 'ON_SIDE_MENU_ITEM_SELECTION',
    itemName:itemName
  }
}

export const selectSideMenuSubItem = (itemName) => {
 console.log('select Side Menu Sub Item',itemName)
  return {
    type: 'ON_SIDE_MENU_SUB_ITEM_SELECTION',
    itemName:itemName
  }
}
