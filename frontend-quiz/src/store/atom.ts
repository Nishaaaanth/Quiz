import axios from 'axios';
import {atom, selector} from 'recoil';

const quiz_api: string = "https://backend-quiz.nishanthubuntu.workers.dev/api/v1/quiz";
export const INIT_TIME: number = 14;

export const timerAtom = atom({
    key: "timerAtom",
    default: INIT_TIME
});

export const questionNumberAtom = atom({
    key: "questionNumberAtom",
    default: 0
});

export const quizAtom = atom({
    key: "quizAtom",
    default: selector({
        key: "quizAtom/default",
        get: async() => {
            const res = await axios.get(quiz_api);
            return res.data;
        }
    })
});

export const scoreAtom = atom({
    key: "scoreAtom",
    default: 0
});

export const wrongAtom = atom({
    key: "wrongAtom",
    default: false
});

export const correctAtom = atom({
    key: "correctAtom",
    default: false
});
