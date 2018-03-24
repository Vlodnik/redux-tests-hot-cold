import React from 'react';
import {shallow} from 'enzyme';

import {Feedback} from './feedback';

describe('<Feedback />', function() {
  it('Renders without crashing', function() {
    shallow(<Feedback />);
  });

  it('Renders some feedback', function() {
    const testFeedback = 'This is a game!';
    const wrapper = shallow(<Feedback feedback={testFeedback} />);

    expect(wrapper.contains(testFeedback)).toEqual(true);
  });
});
