import ReactDOM from "react-dom";
import React, { useRef, useState, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";
import { useProxy } from "valtio/macro";
import { HexColorPicker } from "react-colorful";
import "./Model.css";

const state = proxy({
  current: null,
  items: {
    materials: "#fff",
  },
});

function Model(props) {
  const group = useRef();
  const snap = useSnapshot(state, { sync: true });
  const { nodes, materials } = useGLTF("model.glb");
  const [hover, setHover] = useState(null);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onPointerOver={(e) => (
        e.stopPropagation(), setHover(e.object.material.name)
      )}
      onPointerOut={(e) => e.intersections.length === 0 && setHover(null)}
      onPointerMissed={() => (state.current = null)}
      onPointerDown={(e) => (
        e.stopPropagation(), (state.current = e.object.material.name)
      )}
    >
      <mesh
        geometry={nodes["2_world_obj"].geometry}
        material-color={snap.items.materials["Material.001"]}
        material={materials["Material.001"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.5}
      />
    </group>
  );
}

const Picker = () => {
  const snap = useSnapshot(state, { sync: true });
  return (
    <div style={{ display: snap.current ? "block" : "none" }}>
      <h1>{snap.current}</h1>
      {console.log(state.items)}
      <HexColorPicker
        className="picker"
        color={snap.items[snap.current]}
        onChange={(color) => (state.items[snap.current] = color)}
      />
    </div>
  );
};

const ModelComp = (props) => {
  return (
    <>
      <Picker />
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.5} position={[5, 20, 20]} />
        <Suspense fallback={null}>
          <Model />
          <Environment files="royal_esplanade_1k.hdr" />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default ModelComp;
