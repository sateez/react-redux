import expect from 'expect'
import * as actions from '../../actions'

describe('Form Actions', () => {
  it('Should return the text values on click of edit button', () => {
    expect(actions.editForm({val:'test'})).toEqual({
     type: 'ON_CLICK_EDIT_FORM',
     formValues:{val:'test'},
     step:0
    })
  })

  it('should return the form values on click of submit form button ', () => {
    expect(actions.submitForm({val:'test'})).toEqual({
     type: 'ON_CLICK_SUBMIT_FORM',
     formValues:{val:'test'},
     step:1
    })
  })
})
