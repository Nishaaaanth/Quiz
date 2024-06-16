import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { INIT_TIME, correctAtom, questionNumberAtom, quizAtom, scoreAtom, timerAtom, wrongAtom } from "../store/atom";
import { useEffect, useRef, useState } from "react";

export default function Option() {
    const unClicked: string = "border-2 md:min-w-56 w-48 border-white rounded-lg py-2 md:text-lg";
    const correct: string = "border-2 md:min-w-56 w-48 border-correct-400 text-correct-400 rounded-lg py-2 md:text-lg";
    const wrong: string = "border-2 md:min-w-56 w-48 border-wrong-500 text-wrong-500 rounded-lg py-2 md:text-lg";
    const selected: string = "border-2 md:min-w-56 w-48 border-secondary-400 rounded-lg py-2 md:text-lg";

    const questionNumber = useRecoilValue<number>(questionNumberAtom);
    const timer = useRecoilValue<number>(timerAtom);
    const data = useRecoilValue(quizAtom);
    const [score, setScore] = useRecoilState<number>(scoreAtom);
    const setWrong = useSetRecoilState<boolean>(wrongAtom);
    const setCorrect = useSetRecoilState<boolean>(correctAtom);

    const [chosen, setChosen] = useState("");

    const option1Ref = useRef<HTMLDivElement>(null);
    const option2Ref = useRef<HTMLDivElement>(null);
    const option3Ref = useRef<HTMLDivElement>(null);
    const option4Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (timer == 4) {
            if (data.quiz[questionNumber].answer == chosen) {
                setScore(score + 1);
                setCorrect(true);
                setWrong(false);

                if (option1Ref.current != null && option2Ref.current != null && option3Ref.current != null && option4Ref.current != null) {
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
                }
            } else if (data.quiz[questionNumber].answer != chosen) {
                setWrong(true);
                setCorrect(false);

                if (option1Ref.current != null && option2Ref.current != null && option3Ref.current != null && option4Ref.current != null) {
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
        }

        if (timer == INIT_TIME) {
            setChosen("");
            setCorrect(false);
            setWrong(false);

            if (option1Ref.current != null && option2Ref.current != null && option3Ref.current != null && option4Ref.current != null) {
                option1Ref.current.className = unClicked;
                option2Ref.current.className = unClicked;
                option3Ref.current.className = unClicked;
                option4Ref.current.className = unClicked;
            }
        }
    }, [timer]);

    useEffect(() => {
        if (timer > 4) {
            if (chosen == data.quiz[questionNumber].option1) {
                if (option1Ref.current != null && option2Ref.current != null && option3Ref.current != null && option4Ref.current != null) {
                    option1Ref.current.className = selected;
                    option2Ref.current.className = unClicked;
                    option3Ref.current.className = unClicked;
                    option4Ref.current.className = unClicked;
                }
            } else if (chosen == data.quiz[questionNumber].option2) {
                if (option1Ref.current != null && option2Ref.current != null && option3Ref.current != null && option4Ref.current != null) {
                    option2Ref.current.className = selected;
                    option1Ref.current.className = unClicked;
                    option3Ref.current.className = unClicked;
                    option4Ref.current.className = unClicked;
                }
            } else if (chosen == data.quiz[questionNumber].option3) {
                if (option1Ref.current != null && option2Ref.current != null && option3Ref.current != null && option4Ref.current != null) {
                    option3Ref.current.className = selected;
                    option1Ref.current.className = unClicked;
                    option2Ref.current.className = unClicked;
                    option4Ref.current.className = unClicked;
                }
            } else if (chosen == data.quiz[questionNumber].option4) {
                if (option1Ref.current != null && option2Ref.current != null && option3Ref.current != null && option4Ref.current != null) {
                    option4Ref.current.className = selected;
                    option1Ref.current.className = unClicked;
                    option2Ref.current.className = unClicked;
                    option3Ref.current.className = unClicked;
                }
            }
        }
    }, [chosen]);

    return (
        <div className="m-6 flex flex-col justify-center items-center gap-2">
            <div ref={option1Ref} onClick={() => setChosen(data.quiz[questionNumber].option1)} className={unClicked}>{data.quiz[questionNumber].option1}</div>
            <div ref={option2Ref} onClick={() => setChosen(data.quiz[questionNumber].option2)} className={unClicked}>{data.quiz[questionNumber].option2}</div>
            <div ref={option3Ref} onClick={() => setChosen(data.quiz[questionNumber].option3)} className={unClicked}>{data.quiz[questionNumber].option3}</div>
            <div ref={option4Ref} onClick={() => setChosen(data.quiz[questionNumber].option4)} className={unClicked}>{data.quiz[questionNumber].option4}</div>
        </div>
    );
}
