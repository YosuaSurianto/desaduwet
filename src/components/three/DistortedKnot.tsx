"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

/**
 * The interactive centerpiece for the Heritage section: a clay-brown
 * distorted torus knot (the "dapur" — dense, earthbound) orbited by a thin
 * emerald wireframe torus (the sawah — light, encircling). Both idle-rotate
 * on their own and additionally tilt toward wherever the user's cursor or
 * finger currently is over the canvas (R3F's `state.pointer`, normalized
 * -1..1, updates for touch exactly like it does for mouse).
 */
export default function DistortedKnot() {
  const tiltRef = useRef<THREE.Group>(null);
  const knotRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (knotRef.current) {
      knotRef.current.rotation.x += delta * 0.16;
      knotRef.current.rotation.y += delta * 0.24;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x -= delta * 0.1;
      ringRef.current.rotation.z += delta * 0.12;
    }
    if (tiltRef.current) {
      const { pointer, clock } = state;
      const bob = Math.sin(clock.elapsedTime * 0.6) * 0.08;
      const targetX = pointer.y * 0.45;
      const targetY = pointer.x * 0.65;
      tiltRef.current.rotation.x = THREE.MathUtils.lerp(tiltRef.current.rotation.x, targetX, 0.05);
      tiltRef.current.rotation.y = THREE.MathUtils.lerp(tiltRef.current.rotation.y, targetY, 0.05);
      tiltRef.current.position.y = THREE.MathUtils.lerp(tiltRef.current.position.y, bob, 0.05);
    }
  });

  return (
    <group ref={tiltRef}>
      {/* Dapur — dense clay-brown core */}
      <mesh ref={knotRef}>
        <torusKnotGeometry args={[1, 0.32, 160, 24]} />
        <MeshDistortMaterial
          color="#a8613a"
          distort={0.42}
          speed={1.8}
          roughness={0.3}
          metalness={0.35}
        />
      </mesh>

      {/* Sawah — light emerald ring encircling the core */}
      <mesh ref={ringRef} scale={1.9}>
        <torusGeometry args={[1, 0.02, 16, 120]} />
        <meshStandardMaterial
          color="#3f8f66"
          emissive="#1f5f45"
          emissiveIntensity={0.6}
          wireframe
        />
      </mesh>
    </group>
  );
}
