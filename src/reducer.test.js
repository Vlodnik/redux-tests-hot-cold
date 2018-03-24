import gameReducer from './reducer';
import {generateAuralUpdate, restartGame, makeGuess} from './actions';

describe('gameReducer', function() {
  it('Should set the initial state when nothing is passed in', function() {
    const state = gameReducer(undefined, {type: 'UNKNOWN'});
    const answer = state.correctAnswer;
    expect(state).toEqual({
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: answer
    });
  });

  it('Should return the current state on an unknown action', function() {
    let currentState = {};
    const state = gameReducer(currentState, {type: 'UNKNOWN'});
    expect(state).toEqual(currentState);
  });

  describe('generateAuralUpdate', function() {
    it('Should create an aural update string', function() {
      let state = {
        guesses: [1, 2, 42],
        feedback: "You're Hot!",
        auralStatus: '',
        correctAnswer: 43
      };
      state = gameReducer(state, generateAuralUpdate());
      expect(state.auralStatus).toEqual(
        `Here's the status of the game right now: ${state.feedback} You've made 3 guesses. In order of most- to least-recent, they are: 42, 2, 1`
      );
    });
  });

  describe('restartGame', function() {
    it('Should reset the game state', function() {
      let state = {
        guesses: [1, 2, 42, 99, 32],
        feedback: "You're Ice Cold...",
        auralStatus: '',
        correctAnswer: 98
      }
      const newAnswer = 42;
      state = gameReducer(state, restartGame(newAnswer));
      expect(state).toEqual({
        guesses: [],
        feedback: 'Make your guess!',
        auralStatus: '',
        correctAnswer: newAnswer
      });
    });
  });

  describe('makeGuess', function() {
    it('Should make guesses', function() {
      let state = {
        guesses: [],
        correctAnswer: 42
      }
      state = gameReducer(state, makeGuess(29));
      expect(state).toEqual({
        guesses: [29],
        feedback: "You're Warm.",
        correctAnswer: 42
      });
    });
  });
});
