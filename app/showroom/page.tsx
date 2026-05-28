"use client"

import Image from "next/image";
import { Canvas } from "@react-three/fiber"
import { Box, Environment, OrbitControls, Plane, RoundedBox } from "@react-three/drei";
import Tree from "@/component/tree";
import { useGLTF } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing"

export default function Showroom() {
  //3D 模型預覽說明瀏覽器
  // const { scene } = useGLTF("http://localhost:3000/cat_in_flowers.glb");

  return (
    <>
      <Canvas style={{ width: "100%", height: "100vh" }}>

        {/* <primitive object={scene} /> */}

        <Environment preset="forest" background={true} backgroundBlurriness={0.5} />
        <OrbitControls autoRotate={true} />

        <Tree position={[-2, 0.5, 1]}/>
        <Tree position={[0, 0.5, 0]}/>
        <Tree position={[2, 0.5, 2]}/>

        <RoundedBox position={[0, 0, 0]} args={[20, 0.1, 20]} radius={0.05}
          receiveShadow
        >
          <meshStandardMaterial color="black" />
        </RoundedBox>

        <EffectComposer>
          <Bloom intensity={2.0} />
        </EffectComposer>

      </Canvas>
    </>
  );
}
useGLTF.preload("/cat_in_flowers.glb");

