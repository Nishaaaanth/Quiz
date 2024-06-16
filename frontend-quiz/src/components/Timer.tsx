import { useRecoilState } from "recoil";
import { INIT_TIME, timerAtom } from "../store/atom";
import { useEffect } from "react";

export default function Timer() {
    const [timer, setTimer] = useRecoilState(timerAtom);

    useEffect(() => {
        const timerInterval = setInterval(() => setTimer(timer - 1), 1000);
        if (timer == 0) setTimer(INIT_TIME);
        return () => clearInterval(timerInterval);
    }, [timer]);

    return (
        <div className="p-4 text-start font-mono">Timer remaining: {timer-4>=0? timer-4: 0}</div>
    );
}
