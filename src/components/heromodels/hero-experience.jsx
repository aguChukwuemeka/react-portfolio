import React from 'react'
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {Room} from "./Programmer-desktop.jsx";
import {useMediaQuery} from "react-responsive";
import WinterParticles from "../winter-particles.tsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";


export default function HeroExperience() {
    const isTablet = useMediaQuery({query: '(max-width: 1024px)'});
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});

    // useGSAP(()=> {
    //     gsap.from('.3d-model',{
    //         y: 50,
    //         opacity: 0,
    //         ease: 'power2.inOut'
    //     })
    // });

    return (
        <Canvas shadows camera={{position: [0, 0, 15], fov: 45}}>
            <ambientLight intensity={0.2} color="#1a1a40" />
            <directionalLight position={[5, 5, 3]} intensity={14} color="#ffd9b3" />
            <WinterParticles />
            <OrbitControls enablePan={false} enableZoom={!isTablet} maxDistance={20} minDistance={10} minPolarAngle={Math.PI / 5} maxPolarAngle={Math.PI / 2} />
            <group scale={isMobile ? 0.7 : 1} position={[0, -3.5, 0]} rotation={[0, -0.4, 0]}>
                <Room className="3d-model" />
            </group>
        </Canvas>
    )
}