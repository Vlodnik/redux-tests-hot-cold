import React from 'react';
import {shallow} from 'enzyme';

import {GuessCount} from './guess-count';

describe('<GuessCount />', function() {
  it('Renders without crashing', function() {
    shallow(<GuessCount />);
  });

  it('Renders the number of guesses', function() {
    const wrapper = shallow(<GuessCount guessCount={5} />);
    expect(wrapper.text()).toEqual("You've made 5 guesses!");
  });
});
