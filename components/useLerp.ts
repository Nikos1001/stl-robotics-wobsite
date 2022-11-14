
import { useEffect, useRef } from "react";

function lerp(a, b, v) {
    return v * b + (1 - v) * a;
}

function slerp(a, b, v) {
    const smoothVal = lerp(v * v, 1 - (1 - v) * (1 - v), v);
    return lerp(a, b, smoothVal);
}

export default function useLerp(start : number, end : number, time : number, callback : (val : number) => any) {

    const timeElapsed = useRef(0);

    function animationFrame() {
        requestAnimationFrame(() => {
            timeElapsed.current += 0.016;
            timeElapsed.current = Math.min(timeElapsed.current, end);
            callback(slerp(start, end, timeElapsed.current / end));
            if(timeElapsed.current < end) {
                animationFrame();
            }
        });
    }

    useEffect(() => {
        animationFrame();
    });
}
