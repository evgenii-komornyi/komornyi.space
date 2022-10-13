import create from 'zustand';

import { devtools } from 'zustand/middleware';

import jokes from '../data/jokes.json';
import { generateRandomNumber } from '../helpers/numbers.helper';

const jokeStore = set => ({
    joke: jokes[generateRandomNumber(jokes)],
    jokes: jokes,

    setJoke: randomNumber => {
        set(state => ({ joke: state.jokes[randomNumber] }));
    },
});

const useJokeStore = create(devtools(jokeStore));

export default useJokeStore;
