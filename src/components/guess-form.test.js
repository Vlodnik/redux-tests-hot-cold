import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessForm} from './guess-form';
import {makeGuess} from '../actions';

describe('<GuessForm />', function() {
  it('Renders without crashing', function() {
    const dispatch = jest.fn();
    shallow(<GuessForm dispatch={dispatch} />);
  });

  it('Dispatches makeGuess when form is submitted', function() {
    const dispatch = jest.fn();
    const wrapper = mount(<GuessForm dispatch={dispatch} />);
    const value = '10';
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate('submit');
    expect(dispatch).toHaveBeenCalledWith(makeGuess(value));
  });

  it('Resets the input when the form is submitted', function() {
    const dispatch = jest.fn();
    const wrapper = mount(<GuessForm dispatch={dispatch} />);
    const value = '10';
    const guessInput = wrapper.find('input[type="number"]')
    guessInput.instance().value = value;
    wrapper.simulate('submit');
    expect(guessInput.instance().value).toEqual('');
  });
});
