import * as c from '../constants/constants';
const formValues = c.FORM_DEFAULT_VALUE;
 const formFieldValues  = (state,action) => {
  console.log('value state',state);
   switch(action.type){
    case "ON_CLICK_EDIT_FORM":
    console.log('edit state',state)
        return action.formValues

      case "ON_CLICK_SUBMIT_FORM":
      console.log('submit state',action)
        return action.formValues
      default:
      console.log('default',state)
      return  state || formValues
   }

}
export default formFieldValues
