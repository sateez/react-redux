import expect from 'expect'
import App from '../../reducers/index'

// describe ('test',() =>{
//  it('test 1', () => {
//    expect(true).toEqual(true)
//  })
// })
describe('App reducer', () => {
  it('should handle initial state', () => {
    expect(
      App(undefined, {})
    ).toEqual( { formValues: { address: '939 Ridge Lake Blvd', city: 'Memphis', country: 'US', errors: { address: false, city: false, country: false, name: false, phone: false, postalCode: false, state: false }, name: 'Hilton Memphis', phone: '901-762-7496', postalCode: '38120', state: 'TN' }, routing: { locationBeforeTransitions: null } })
  })

  it('should handle ON_CLICK_EDIT_FORM', () => {
    expect(
      App([], { formValues: { address: '939 Ridge Lake Blvd', city: 'Memphis', country: 'US', errors: { address: false, city: false, country: false, name: false, phone: false, postalCode: false, state: false }, name: 'Hilton Memphis', phone: '901-762-7496', postalCode: '38120', state: 'TN' }, routing: { locationBeforeTransitions: null } })
    ).toEqual({ formValues: { address: '939 Ridge Lake Blvd', city: 'Memphis', country: 'US', errors: { address: false, city: false, country: false, name: false, phone: false, postalCode: false, state: false }, name: 'Hilton Memphis', phone: '901-762-7496', postalCode: '38120', state: 'TN' }, routing: { locationBeforeTransitions: null } } )

    expect(
      App([
        {
          text: 'Run the tests',
          completed: false,
          id: 0
        }
      ], {
        type: 'ON_CLICK_SUBMIT_FORM',
        formValues: {},routing:{}
      })
    ).toEqual({ formValues: {}, routing: { locationBeforeTransitions: null } } )

})

})
