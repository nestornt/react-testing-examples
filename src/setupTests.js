import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json'
//import '@testing-library/jest-dom/extend-expect'

// Enzyme config
Enzyme.configure({ adapter: new Adapter() });
// Enzyme to json config
expect.addSnapshotSerializer( createSerializer({ mode: 'deep'}));

