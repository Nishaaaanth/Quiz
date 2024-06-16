import { useRecoilValue } from "recoil";
import { INIT_TIME, correctAtom, questionNumberAtom, quizAtom, timerAtom, wrongAtom } from "../store/atom";
import { useEffect, useState } from "react";

export default function Answer() {
    const isCorrect = useRecoilValue(correctAtom);
    const isWrong = useRecoilValue(wrongAtom);
    const questionNumber = useRecoilValue(questionNumberAtom);
    const data = useRecoilValue(quizAtom);
    const timer = useRecoilValue(timerAtom);

    const [comment, setComment] = useState("");

    useEffect(()=>{
        if(timer == 4) {
            if(isCorrect) setComment("Correct");
            else if(isWrong || (!isCorrect && !isWrong)) {
                setComment("Correct is: " + data.quiz[questionNumber].answer);
            }
        }
        if(timer == INIT_TIME) setComment(""); 
    }, [timer, isWrong, isCorrect]);

    return (
        <div className="font-semibold text-secondary-400">{comment}</div>
    );
}
