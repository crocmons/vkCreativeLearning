'use client';
import React, { useEffect, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { OrbitControls} from '@react-three/drei';


export default function Cubes() {

    return (
        <div className='h-[80vh] md:h-[100vh]'>
            
                <Canvas>
                    <OrbitControls  enablePan={false} enableZoom={false} autoRotate />
                    <ambientLight intensity={2}/>
                    <directionalLight position={[3, 2, 1]}/>
                    <Cubes3D />
                </Canvas>
           
        </div>
    )
}

function Cubes3D() {

    const mesh = useRef(null);

    useFrame((state, delta)=>{
        mesh.current.rotation.x += delta * 0.25;
        mesh.current.rotation.y += delta * 0.25;
        mesh.current.rotation.z += delta * 0.25;
    })
   
   

    const texture_1 = useLoader(TextureLoader, "/assets/aboutImg.webp")
    // const texture_2 = useLoader(TextureLoader, "/assets/aboutImg.webp")
    // const texture_3 = useLoader(TextureLoader, "/assets/corporatelearn.jpg")
    // const texture_4 = useLoader(TextureLoader, "/assets/p1.png")
    // const texture_5 = useLoader(TextureLoader, "/assets/p2.jpg")
    // const texture_6 = useLoader(TextureLoader, "/assets/p3.webp")

    return (
        <mesh ref={mesh}>
            <boxGeometry args={[2.5, 2.5, 2.5]}/>
            <meshStandardMaterial map={texture_1} />
            <meshStandardMaterial map={texture_1} />
            <meshStandardMaterial map={texture_1} />
            <meshStandardMaterial map={texture_1} />
            <meshStandardMaterial map={texture_1} />
            <meshStandardMaterial map={texture_1} />
        </mesh>
    )
}