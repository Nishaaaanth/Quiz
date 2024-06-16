import {useNavigate} from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return(
        <div>
            <div className="bg-primary-950 p-4 font-bold text-5xl md:text-7xl mb-4 text-secondary-400"><p className="animate-spin-slow origin-center inline-block pr-5 md:pr-8">Q</p>uiz
            </div>

            <p className="md:text-xl"><b className="text-secondary-400">Note: </b>You will have 10s to answer each question. And, there will be 20 questions in total.</p>
            <button onClick={()=>navigate("/quiz")} className="mt-16 mb-5 p-3 bg-secondary-600 rounded-lg font-semibold animate-bounce-slow">START!</button>
            <p className="font-semibold text-secondary-400 text-lg">All the Best!</p>
        </div>
    );
}
