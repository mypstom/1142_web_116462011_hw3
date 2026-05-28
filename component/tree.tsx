"use client"

import { RoundedBox } from "@react-three/drei";

export default function Tree( { position } : { position: [number, number, number] }) {
  return (
    <>
    <group position={position}>
      <RoundedBox position={[0, 0, 0]} args={[0.5, 1, 0.5]} radius={0.05}>
        <meshStandardMaterial color="brown" />
      </RoundedBox>
      <RoundedBox position={[0, 0.5, 0]} args={[1.5, 0.5, 1.5]} radius={0.05}>
        <meshStandardMaterial color="green" />
      </RoundedBox>
      <RoundedBox position={[0, 1.0, 0]} args={[1, 0.5, 1]} radius={0.05}>
        <meshStandardMaterial color="green" />
      </RoundedBox>
      <RoundedBox position={[0, 1.5, 0]} args={[0.5, 0.5, 0.5]} radius={0.05}>
        <meshStandardMaterial color="green" />
      </RoundedBox>

      <RoundedBox 
        position={[0, 2, 0]} 
        args={[0.3, 0.3, 0.3]} 
        radius={0.05}
      >
        <meshStandardMaterial color="yellow" emissive="yellow" emissiveIntensity={0.5} />
      </RoundedBox>
    </group>
    </>
  );
}
