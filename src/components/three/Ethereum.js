/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: arthur (https://sketchfab.com/Arthur_mf)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/ethereum-ac40cebf61464c548776a0c20b47ccc7
title: Ethereum
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Ethereum(props) {
  const { nodes, materials } = useGLTF('/ethereum.glb')

  const ref = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, Math.cos(t) / 4 + 3, 0.1)
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, Math.sin(t) / 4 - 10, 0.1)
    ref.current.rotation.z = THREE.MathUtils.lerp(ref.current.rotation.z, Math.sin(t) / 20, 0.1)
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, (0 + Math.sin(t / 2)) / 2, 0.1)
  });

  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.22, 0, -0.38]} rotation={[Math.PI / 2, 0, 0]} scale={2.41}>
            <mesh geometry={nodes.Object_4.geometry} material={materials['Material.004']} />
          </group>
          <group position={[-0.22, 0, -0.38]} rotation={[Math.PI / 2, 0, 0]} scale={2.41}>
            <mesh geometry={nodes.Object_6.geometry} material={materials['Material.005']} />
          </group>
          <group position={[3, 0, -0.99]} rotation={[Math.PI / 2, 0, 0]} scale={2.41}>
            <mesh geometry={nodes.Object_8.geometry} material={materials['Material.007']} />
          </group>
          <group position={[3, 0, -0.99]} rotation={[Math.PI / 2, 0, 0]} scale={2.41}>
            <mesh geometry={nodes.Object_10.geometry} material={materials['Material.003']} />
          </group>
          <group position={[3, 0, -0.99]} rotation={[Math.PI / 2, 0, 0]} scale={2.41}>
            <mesh geometry={nodes.Object_12.geometry} material={materials['Material.006']} />
          </group>
          <group position={[-0.22, 0, -0.38]} rotation={[Math.PI / 2, 0, 0]} scale={2.41}>
            <mesh geometry={nodes.Object_14.geometry} material={materials['Material.001']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
