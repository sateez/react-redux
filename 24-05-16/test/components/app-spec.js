import {renderComponent , expect} from '../setup'
import App from '../../components/App'

describe ('App component',() =>{
 it('should Exists', () => {
  const component = renderComponent(App);
   //expect(app).toEqual(true)
   console.log(component)
   expect(component).not.to.be.empty;
 })
 it('should have the id of childElement', () => {
  const component = renderComponent(App);
   //expect(app).toEqual(true)
   console.log(component)
   expect(component.find('#childElement')).to.exist;
 })
})
