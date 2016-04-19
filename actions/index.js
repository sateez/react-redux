
export const editForm = (formValues) => {
 console.log('edit form',formValues)
  return {
    type: 'ON_CLICK_EDIT_FORM',
    formValues:formValues,
    step:0
  }
}

export const submitForm = (formValues) => {
 console.log('submit form',formValues)
  return {
    type: 'ON_CLICK_SUBMIT_FORM',
    formValues:formValues,
    step:1
  }
}
