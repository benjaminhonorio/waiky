import { mount } from 'enzyme';
import Navbar from '../Components/AppNavBar'

describe('<Navbar />', () => {
  const navbar = mount(<Navbar />)

  test('render title', ()=> {
    const text = navbar.find('navbar').text()
    expect(text).toEqual('Home')
  })
  
})

