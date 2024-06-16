import Option from "../components/Option";
import Question from "../components/Question";
import Timer from "../components/Timer";
import Answer from "../components/Answer";

export default function Quiz() {
    return (
        <div className="w-full min-h-[80%] md:text-xl md:mx-[20%]">
                    <Timer />
                    <Question />
                    <Option />
                    <Answer />
        </div>
    );
}
