import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { INIT_TIME, correctAtom, questionNumberAtom, quizAtom, scoreAtom, timerAtom, wrongAtom } from "../store/atom";
import { useEffect, useRef, useState } from "react";

export default function Option() {
    const unClicked: string = "border-2 md:min-w-56 w-48 border-white rounded-lg py-2 md:text-lg";
    const correct: string = "border-2 md:min-w-56 w-48 border-correct-400 text-correct-400 rounded-lg py-2 md:text-lg";
    const wrong: string = "border-2 md:min-w-56 w-48 border-wrong-500 text-wrong-500 rounded-lg py-2 md:text-lg";
    const selected: string = "border-2 md:min-w-56 w-48 border-secondary-400 rounded-lg py-2 md:text-lg";

    const questionNumber = useRecoilValue(questionNumberAtom);
    const timer = useRecoilValue(timerAtom);
    const data = useRecoilValue(quizAtom);
    const [score, setScore] = useRecoilState(scoreAtom);
    const setWrong = useSetRecoilState(wrongAtom);
    const setCorrect = useSetRecoilState(correctAtom);

    const [chosen, setChosen] = useState("");

    const option1Ref = useRef();
    const option2Ref = useRef();
    const option3Ref = useRef();
    const option4Ref = useRef();

    useEffect(() => {
        if (timer == 4) {
            if (data.quiz[questionNumber].answer == chosen) {
                setScore(score => score + 1);
                setCorrect(true);
                setWrong(false);

                if (chosen == data.quiz[questionNumber].option1) {
                    option1Ref.current.className = correct;
                    option2Ref.current.className = unClicked;
                    option3Ref.current.className = unClicked;
                    option4Ref.current.className = unClicked;
                } else if (chosen == data.quiz[questionNumber].option2) {
                    option2Ref.current.className = correct;
                    option1Ref.current.className = unClicked;
                    option3Ref.current.className = unClicked;
                    option4Ref.current.className = unClicked;
                } else if (chosen == data.quiz[questionNumber].option3) {
                    option3Ref.current.className = correct;
                    option1Ref.current.className = unClicked;
                    option2Ref.current.className = unClicked;
                    option4Ref.current.className = unClicked;
                } else if (chosen == data.quiz[questionNumber].option4) {
                    option4Ref.current.className = correct;
                    option1Ref.current.className = unClicked;
                    option2Ref.current.className = unClicked;
                    option3Ref.current.className = unClicked;
                }
            } else if(data.quiz[questionNumber].answer != chosen){
                setWrong(true);
                setCorrect(false);

                if (chosen == data.quiz[questionNumber].option1) {
                    option1Ref.current.className = wrong;
                    option2Ref.current.className = unClicked;
                    option3Ref.current.className = unClicked;
                    option4Ref.current.className = unClicked;
                } else if (chosen == data.quiz[questionNumber].option2) {
                    option2Ref.current.className = wrong;
                    option1Ref.current.className = unClicked;
                    option3Ref.current.className = unClicked;
                    option4Ref.current.className = unClicked;
                } else if (chosen == data.quiz[questionNumber].option3) {
                    option3Ref.current.className = wrong;
                    option1Ref.current.className = unClicked;
                    option2Ref.current.className = unClicked;
                    option4Ref.current.className = unClicked;
                } else if (chosen == data.quiz[questionNumber].option4) {
                    option4Ref.current.className = wrong;
                    option1Ref.current.className = unClicked;
                    option2Ref.current.className = unClicked;
                    option3Ref.current.className = unClicked;
                }
            }
        }

        if (timer == INIT_TIME) {
            setChosen("");
            setCorrect(false);
            setWrong(false);

            option1Ref.current.className = unClicked;
            option2Ref.current.className = unClicked;
            option3Ref.current.className = unClicked;
            option4Ref.current.className = unClicked;
        }
    }, [timer]);

    useEffect(() => {
        if (timer > 4) {
            if (chosen == data.quiz[questionNumber].option1) {
                option1Ref.current.className = selected;
                option2Ref.current.className = unClicked;
                option3Ref.current.className = unClicked;
                option4Ref.current.className = unClicked;
            } else if (chosen == data.quiz[questionNumber].option2) {
                option2Ref.current.className = selected;
                option1Ref.current.className = unClicked;
                option3Ref.current.className = unClicked;
                option4Ref.current.className = unClicked;
            } else if (chosen == data.quiz[questionNumber].option3) {
                option3Ref.current.className = selected;
                option1Ref.current.className = unClicked;
                option2Ref.current.className = unClicked;
                option4Ref.current.className = unClicked;
            } else if (chosen == data.quiz[questionNumber].option4) {
                option4Ref.current.className = selected;
                option1Ref.current.className = unClicked;
                option2Ref.current.className = unClicked;
                option3Ref.current.className = unClicked;
            }
        }
    }, [chosen]);

    return (
        <div className="m-6 flex flex-col justify-center items-center gap-2">
            <button ref={option1Ref} onClick={() => setChosen(data.quiz[questionNumber].option1)} className={unClicked}>{data.quiz[questionNumber].option1}</button>
            <button ref={option2Ref} onClick={() => setChosen(data.quiz[questionNumber].option2)} className={unClicked}>{data.quiz[questionNumber].option2}</button>
            <button ref={option3Ref} onClick={() => setChosen(data.quiz[questionNumber].option3)} className={unClicked}>{data.quiz[questionNumber].option3}</button>
            <button ref={option4Ref} onClick={() => setChosen(data.quiz[questionNumber].option4)} className={unClicked}>{data.quiz[questionNumber].option4}</button>
        </div>
    );
}
