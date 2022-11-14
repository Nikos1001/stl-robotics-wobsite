
import navbar from '../styles/Navbar.module.css';
import { SocialIcon } from 'react-social-icons';
import { DOMElement, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

function NavbarButton(props : {
    text : string, 
    url : string
}) {
    const router = useRouter();
    return <div className={navbar.navbarButton} onClick={() => {
        router.push(props.url);
    }}>
        {props.text}
    </div>;
}

export default function Navbar(props : {
    fade : boolean
}) {

    const navbarRef = useRef<HTMLDivElement>();
    const router = useRouter();

    useEffect(() => {
        if(props.fade) {
            const mrBlue = document;
            if(!mrBlue)
                return;

            const listenToMe = (ev) => {
                const scrollTop = window.scrollY;
                navbarRef.current.style.top = `calc(${Math.min(0, scrollTop / 100.0 - 1.7)} * var(--navbar-height))`;
            };

            mrBlue.addEventListener('scroll', listenToMe);

            return () => mrBlue.removeEventListener('scroll', listenToMe);
        } 
    });

    return <div className={navbar.navbar} ref={navbarRef} style={{
        top: props.fade ? 'calc(-2 * var(--navbar-height))' : 'inherit'
    }}>
        <svg viewBox="0 0 400 400" className={navbar.logo} onClick={() => {router.push('/')}}>
            <path d="M200.0 190.0 L355.88458 100.0 L262.78683 46.250015 L137.21317 118.75 L104.73721 100.0 L230.31088 27.500015 L200.0 10.0 L44.115433 100.0 L137.21317 153.75 L262.78683 81.25 L295.2628 100.0 L169.68912 172.5 Z" /><path d="M191.33975 205.0 L191.33975 240.0 L128.55292 203.75 L128.55292 348.75 L98.24202 331.25 L98.24202 186.25 L35.455185 150.0 L35.455185 115.0 Z" /><path d="M208.66025 205.0 L208.66025 385.0 L364.5448 295.0 L364.5448 260.0 L238.97115 332.5 L238.97115 187.5 Z" />
        </svg>
        <div className={navbar.linksContainer}>
            <NavbarButton text='Gallery' url='/gallery'/>
            <button onClick={() => router.push('/contact')}>Contact</button>
        </div>
        <div className={navbar.socials}>
            <SocialIcon url='https://www.youtube.com/channel/UCo__wH1vHqRDpVDYGrnZdeQ/featured' className={navbar.socialIcon} bgColor='transparent' fgColor='#ddd'/>
            <SocialIcon url='https://www.instagram.com/stl_robotics/' className={navbar.socialIcon} bgColor='transparent' fgColor='#ddd'/>
        </div>
    </div>;
}
