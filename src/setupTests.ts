import Enzyme, { configure, shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// Tell react we are using the react 16 and its adaptor for configuration
configure({ adapter: new Adapter() })
export { shallow, mount, render }
export default Enzyme
