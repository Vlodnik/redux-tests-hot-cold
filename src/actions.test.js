import {GENERATE_AURAL_UPDATE, generateAuralUpdate, RESTART_GAME, restartGame, MAKE_GUESS, makeGuess} from './actions';

describe('generateAuralUpdate', function() {
  it('Should return the action', function() {
    const action = generateAuralUpdate();
    expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
  });
});

describe('restartGame', function() {
  it('Should return the action', function() {
    const answer = Math.round(Math.random() * 100) + 1;
    const action = restartGame(answer);
    expect(action.type).toEqual(RESTART_GAME);
    expect(action.correctAnswer).toEqual(answer);
  });
});

describe('makeGuess', function() {
  it('Should return the action', function() {
    const testGuess = 42;
    const action = makeGuess(testGuess);
    expect(action.type).toEqual(MAKE_GUESS);
    expect(action.guess).toEqual(testGuess);
  });
});
