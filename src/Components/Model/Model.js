import ReactDOM from "react-dom";
import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

// function Model(props) {
//   const group = useRef();
//   const { nodes, materials } = useGLTF("logo.glb");
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <mesh
//         geometry={nodes.website.geometry}
//         material={materials["default"]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={0.26}
//       />
//     </group>
//   );
// }

function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("model.glb");

  //   return (
  //     <group ref={group} {...props} dispose={null}>
  //       <mesh geometry={nodes.shoe.geometry} material={materials.laces} />
  //       <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} />
  //       <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
  //       <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
  //       <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
  //       <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
  //       <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
  //       <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
  //     </group>
  //   );

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes["2_world_obj"].geometry}
        material={materials["Material.001"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.4}
      />
    </group>
  );
}

const ModelComp = (props) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight intensity={0.5} position={[5, 20, 20]} />
      <Suspense fallback={null}>
        <Model />
        <Environment files="royal_esplanade_1k.hdr" />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default ModelComp;
