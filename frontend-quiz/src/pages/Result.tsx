import { useRecoilValue } from "recoil";
import { scoreAtom } from "../store/atom";

export default function Result() {
    const score: number = useRecoilValue(scoreAtom);

    let comment: string = "";

    if (score == 20) {
        comment = "Perfect!";
    } else if(score < 20 && score >= 10) {
        comment = "Great";
    }

    return (
        <div className="font-bold text-3xl">
            <div>
                Score: {score}
            </div>
            <div className="animate-bounce-slow mt-5">
                {comment}
            </div>
        </div>
    );
}
