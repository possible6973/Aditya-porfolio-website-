import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
  CuboidCollider,
} from "@react-three/rapier";

// Build canvas textures: white ball + small centered logo
const imageUrls = [
  "/images/logo_premiere.png",      // Adobe Premiere Pro
  "/images/logo_aftereffects.png",  // Adobe After Effects
  "/images/logo_capcut.png",        // CapCut
  "/images/logo_davinci.png",       // DaVinci Resolve
  "/images/logo_canva.png",         // Canva
  "/images/logo_photoshop.png",     // Adobe Photoshop
];

// Creates a 512×512 white canvas with the logo drawn small on BOTH sides
function makeLogoTexture(url: string): THREE.CanvasTexture {
  const size = 512;
  const logoSize = Math.floor(size * 0.36);   // logo size: 36% of canvas
  const vertOffset = Math.floor((size - logoSize) / 2); // vertically centred

  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  // White base
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);

  const img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = () => {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, size, size);

    // Side 1 — centred in left half  (maps to front of sphere)
    const x1 = Math.floor(size * 0.25 - logoSize / 2);
    ctx.drawImage(img, x1, vertOffset, logoSize, logoSize);

    // Side 2 — centred in right half (maps to back of sphere)
    const x2 = Math.floor(size * 0.75 - logoSize / 2);
    ctx.drawImage(img, x2, vertOffset, logoSize, logoSize);

    texture.needsUpdate = true;
  };
  img.src = url;

  return texture;
}

const textures = imageUrls.map(makeLogoTexture);

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

const spheres = [...Array(30)].map(() => ({
  scale: [0.7, 1, 0.8, 1, 1][Math.floor(Math.random() * 5)],
}));

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
};

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive) return;
    delta = Math.min(0.1, delta);
    const target = new THREE.Vector3(0, -3.8, 0);
    const impulse = vec
      .copy(api.current!.translation())
      .sub(target)
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * delta * scale,
          -150 * delta * scale,
          -50 * delta * scale
        )
      );

    api.current?.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    );
    ref.current?.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const softwareNames = [
  "Premiere Pro",
  "After Effects",
  "CapCut",
  "DaVinci Resolve",
  "Canva",
  "Photoshop",
];

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const techEl = document.querySelector(".techstack");
    if (!techEl) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(techEl);
    return () => {
      observer.disconnect();
    };
  }, []);
  const materials = useMemo(() => {
    return textures.map(
      (texture) =>
        new THREE.MeshPhysicalMaterial({
          map: texture,
          color: "#ffffff",        // white ball base
          metalness: 0.0,          // no metal sheen — clean white
          roughness: 0.25,         // slightly smooth = nice highlight
          clearcoat: 1.0,          // glossy topcoat
          clearcoatRoughness: 0.1, // shiny clearcoat
          envMapIntensity: 0.8,
        })
    );
  }, []);

  return (
    <div className="techstack">
      <div className="techstack-head">
        <h2>My Editing Software</h2>
        <p className="techstack-copy">
          The tools I use to shoot, cut, color, and polish professional video
          content.
        </p>
        <div className="techstack-labels">
          {softwareNames.map((name, i) => (
            <span key={i} className="techstack-label">
              {name}
            </span>
          ))}
        </div>
      </div>
      <Canvas
        shadows
        gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
        className="tech-canvas"
      >
        <ambientLight intensity={1} />
        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.2}
          color="white"
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <directionalLight position={[0, 5, -4]} intensity={2} />
        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive} />
          <RigidBody type="fixed" position={[0, 0.6, 0]} colliders={false}>
            <CuboidCollider args={[30, 0.5, 10]} />
          </RigidBody>
          {spheres.map((props, i) => (
            <SphereGeo
              key={i}
              {...props}
              material={materials[Math.floor(Math.random() * materials.length)]}
              isActive={isActive}
            />
          ))}
        </Physics>
        <Environment
          files="/models/char_enviorment.hdr"
          environmentIntensity={0.5}
          environmentRotation={[0, 4, 2]}
        />
        <EffectComposer enableNormalPass={false}>
          <N8AO color="#0f002c" aoRadius={2} intensity={1.15} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default TechStack;
