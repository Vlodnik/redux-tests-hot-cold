import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessList} from './guess-list';

describe('<GuessList />', function() {
  it('Renders without crashing', function() {
    shallow(<GuessList guesses={[]} />);
  });

  it('Renders the guesses passed in as props', function() {
    const testGuesses = [1, 2, 42];
    const wrapper = mount(<GuessList guesses={testGuesses} />);
    const guessElements = wrapper.find('li');
    expect(guessElements.length).toEqual(testGuesses.length);
    testGuesses.forEach((guess, index) => {
      expect(guessElements.at(index).text()).toEqual(guess.toString());
    });
  });
});
