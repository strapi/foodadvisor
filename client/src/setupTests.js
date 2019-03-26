import 'jest-enzyme';
import 'react-hooks-testing-library/cleanup-after-each';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
