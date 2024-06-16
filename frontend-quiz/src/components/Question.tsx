import { useRecoilState, useRecoilValue } from "recoil";
import { questionNumberAtom, quizAtom, timerAtom } from "../store/atom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Question() {
    const data = useRecoilValue(quizAtom);
    const timer = useRecoilValue(timerAtom);
    const [questionNumber, setQuestionNumber] = useRecoilState(questionNumberAtom);

    const navigate = useNavigate();

    useEffect(()=>{
        if(questionNumber+1 == 20 && timer == 1) navigate("/result");
        if(timer == 0) {
            setQuestionNumber(questionNumber + 1);
        }
    }, [timer, questionNumber]);

    return (
        <div className="border-2 min-h-52 flex justify-center items-center border-secondary-400 rounded-lg p-4 text-lg">{questionNumber+1}. {data.quiz[questionNumber].question}</div>
    );
}
