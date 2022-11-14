import { useEffect, useRef } from "react";

function compose(x : any, y : any) {
    const res = {};
    if(x) {
        for(const [key, val] of Object.entries(x)) {
            res[key] = val;
        }
    }
    if(y) {
        for(const [key, val] of Object.entries(y)) {
            res[key] = val;
        }
    }
    return res;
}

function Parallax(props : {
    children : React.ReactNode,
    className : string
}) {

    return <div style={{
        width: '100vw',
        maxWidth: '100vw',
        overflowX: 'hidden',
        height: '100%',
        zIndex: '0'
    }} className={props.className}>
        { props.children }
    </div>;
}

function ParallaxLayer(props : {
    children? : React.ReactNode,
    offset? : number,
    speed? : number,
    factor? : number,
    style? : any
}) {
    const {children, offset = 0, speed = 0, factor = 1} = props;
    //const applyParallax = Math.abs(speed) > 0.01;
    const applyParallax = false;

    const ref = useRef<HTMLDivElement>();

    useEffect(() => {
        if(applyParallax) {
            const listenToMe = (ev) => {
                requestAnimationFrame(() => {
                    ref.current.style.top = 'calc(' + 100 * offset + '% + ' + window.scrollY * speed + 'px)'
                });
            };

            document.addEventListener('scroll', listenToMe);

            return () => document.removeEventListener('scroll', listenToMe); 
        }
    });

    return <div ref={ref} style={compose({
        width: '100%',
        maxWidth: '100%',
        minHeight: 100 * factor + '%',
        position: !applyParallax ? 'absolute' : 'fixed',
        top: 100 * offset + '%'
    }, props.style)}>
        { children }
    </div>; 
}

export { Parallax, ParallaxLayer }