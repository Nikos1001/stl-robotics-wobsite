
import { Parallax, ParallaxLayer } from '../components/Parallax'; 
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import home from '../styles/Home.module.css';
import gallery from '../styles/Gallery.module.css';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import useLerp from '../components/useLerp';
import Navbar from '../components/Navbar';
import { GalleryPic } from './gallery';

function ImageAndParagraph(props : {
  imgUrl : string,
  title : string,
  children? : React.ReactNode,
  reverse: boolean
}) {
  const content = <>
                    <div>
                    <div>{props.title}</div>
                      {props.children}
                    </div>
                  </>;
  
  return  <div className={home.imgAndParagraph}>
            {props.reverse && content}
            <img src={props.imgUrl}/>
            {props.reverse || content}
          </div>
         
}

function GetInvolvedCard(props : {
  title : string,
  buttonText : string,
  children? : React.ReactNode
}) {
  return  <div className={home.getInvolvedCard}>
            <div>{props.title}</div>
            <p>
              {props.children}
            </p>
            <button>{props.buttonText}</button>
          </div>;
}

interface MoonAnim {
  rotation : number
}

function Moon() {
  const [color, disp] = useLoader(TextureLoader, ['./moon.jpeg', './disp.jpeg']);
  const ref = useRef<any>();
  useFrame(() => {
    ref.current.rotation.y -= 0.00125; 
  })
  return  <mesh
            ref={ref}
            scale={[20.0, 20.0, 20.0]}
            position={[-12, 0, -20]}
          >
            <sphereGeometry args={[1, 64, 64]}/>
            <meshStandardMaterial map={color} bumpMap={disp} bumpScale={0.1}/>
          </mesh>;
}

export default function Home() {

  const topMsg = '  STL Robotics  ';
  const btmMsg = 'Build the future';

  const topTextRef = useRef<HTMLHeadingElement>();
  const btmTextRef = useRef<HTMLParagraphElement>();

  useEffect(() => {
    const interval = setInterval(() => {
      const topTextLen = topTextRef.current.textContent.length; 
      const btmTextLen = btmTextRef.current.textContent.length;
      if(topTextLen < topMsg.length) {
        topTextRef.current.textContent = topMsg.substring(0, topTextLen + 1);
      } else if(btmTextLen < btmMsg.length) {
        btmTextRef.current.textContent = btmMsg.substring(0, btmTextLen + 1);
      } else {

      }
    }, 100);
    return () => clearInterval(interval);
  }, [topTextRef, btmTextRef]);

  const lightRef = useRef<any>();
  useLerp(2, 6.5, 4, (v) => {
    if(!lightRef.current)
      return;
    lightRef.current.position.x = v;
  })

  return <>
    <Navbar fade={true}/>
    <Parallax className='mrblue'> 
      <ParallaxLayer speed={-0.5}> 
        <div className={home.firstPage}>
          <div className={home.title}>
            <h1 ref={topTextRef}></h1>
            <p ref={btmTextRef}></p>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer style={{zIndex: '-5'}} speed={-0.7}>
        <Canvas style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: 'black'
        }}>
          <Suspense fallback={null}>
            <Moon/>
          </Suspense>
          <directionalLight ref={lightRef} position={[5.5, 0, -5]}/>
        </Canvas> 
      </ParallaxLayer>
      <ParallaxLayer offset={1} style={{
        backgroundColor: 'white'
      }} factor={1.25}>
        <div className={home.missionPhoto}>z</div>
        <div className={home.mission}>
          <div>Our Mission</div>
          The mission of STL Robotics is to inspire high school students to be science and technology leaders and innovators, by encouraging them to participate in Vex robotics and other Robotics activities. We aim to integrate and inspire science, engineering, and innovation talents in high school students and promote them to develop lifelong skills such as perseverance, communication, and leadership.
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2.25} factor={1} style={{
        backgroundImage: 'url("https://i.ytimg.com/vi/9xqvKgtg9a0/maxresdefault.jpg")',
        backgroundSize: 'cover',
        zIndex: '-4',
        left: '50%',
        transform: 'translate(-50%, 0)',
        position: 'absolute'
      }} speed={-0.5}></ParallaxLayer>
      <ParallaxLayer offset={3.25} factor={2.2} style={{
        backgroundColor: 'white'
      }}>
        <div className={home.imgParagraphContainer}>
          <ImageAndParagraph title='About Us' reverse={false} imgUrl='https://m.media-amazon.com/images/M/MV5BYWFiZWM5ZGEtZDNlMS00NWQ5LWI0ZjEtNjRjZDM2MDA5YWMyXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg'>
            <p>
              We are STL Robotics, Team 82855, a competitive high school VEX Robotics Competition team located in Richmond Hill, Ontario. We currently have six active teams with a total of 56 members and have qualified to World Championships for the last three consecutive years. 
            </p>
          </ImageAndParagraph>
          <ImageAndParagraph title='Our Goal' reverse={true} imgUrl='https://m.media-amazon.com/images/M/MV5BYWFiZWM5ZGEtZDNlMS00NWQ5LWI0ZjEtNjRjZDM2MDA5YWMyXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg'>
            <p>
              At STL Robotics, we strive to inspire students to become STEM innovators through engineering, coding and of course, competing. We aim to integrate and inspire students that have a passion in STEM by promoting the development of life long skills, including: teamwork, leadership and perseverance. 
            </p>
          </ImageAndParagraph>
        </div>
        <div className={home.getInvolved}>
          <span>
            Our Sponsors 
          </span>
          <div className={home.linePleaseEndThis}/>
        </div>
        <div className={home.sponsorContainer}>
          <img src='https://media.discordapp.net/attachments/991070864206340127/1039288850624827392/dotheysellofices.png' onClick={() => {
            window.location.href = 'http://www.dentalofficesforsale.com';
          }}/>
          <img src='https://cdn.discordapp.com/attachments/991070864206340127/1039290406627704953/thankyou.png' onClick={() => {
            window.location.href = 'http://www.robosource.com';
          }}/>
          <img src='https://cdn.discordapp.com/attachments/991070864206340127/1039290406950670356/toothfairy.png' onClick={() => {
            window.location.href = 'http://www.sharpenyourteethonbamboo.com';
          }}/>
        </div>
        <div className={home.getInvolved}>
          <span>
            Get Involved
          </span>
          <div className={home.linePleaseEndThis}/>
        </div>
        <div className={home.getInvolvedContainer}>
          <GetInvolvedCard title='Join!' buttonText='Apply'>
            If you're a student interested in robotics, programming and technology, you can join the STL robotics team! 
          </GetInvolvedCard>
          <GetInvolvedCard title='Sponsor us' buttonText='Contact us'>
            If you want to support our mission of promoting innovation and STEM education, you can sponsor our program. 
          </GetInvolvedCard>
          <GetInvolvedCard title='Follow us on whatever' buttonText='Follow us'>
            If you want to follow our team's progress, follow us on Instagram.
          </GetInvolvedCard>
        </div>
      </ParallaxLayer>
    </Parallax>
  </>;
}

