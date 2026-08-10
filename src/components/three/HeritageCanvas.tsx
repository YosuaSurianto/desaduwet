"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import DistortedKnot from "./DistortedKnot";

/**
 * R3F canvas mounted inside the Heritage section. `touchAction: "pan-y"` is
 * the mobile-first bit: it lets a finger dragged over the 3D object still
 * scroll the page vertically instead of the canvas swallowing the gesture,
 * while pointer-move position still reaches the scene for the tilt effect.
 */
export default function HeritageCanvas() {
  return (
    <div
      className="relative h-[20rem] w-full sm:h-[26rem] lg:h-[32rem]"
      style={{ touchAction: "pan-y" }}
    >
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 4.2], fov: 42 }}
        style={{ touchAction: "pan-y" }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 4, 5]} intensity={1.5} color="#f0c869" />
        <pointLight position={[-4, -2, -3]} intensity={0.7} color="#1f5f45" />
        <Suspense fallback={null}>
          <DistortedKnot />
        </Suspense>
      </Canvas>
    </div>
  );
}
