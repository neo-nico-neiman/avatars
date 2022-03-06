/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, {useEffect, useRef} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/animatedAvatar.glb')
  const { actions } = useAnimations(animations, group)
  // console.log(actions); Retrieve Action's name

  useEffect(() => {
    actions['Armature.001|mixamo.com|Layer0'].play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body001.geometry}
        material={materials['Wolf3D_Body.001']}
        skeleton={nodes.Wolf3D_Body001.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Headwear001.geometry}
        material={materials['Wolf3D_Headwear.001']}
        skeleton={nodes.Wolf3D_Headwear001.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom001.geometry}
        material={materials['Wolf3D_Outfit_Bottom.001']}
        skeleton={nodes.Wolf3D_Outfit_Bottom001.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear001.geometry}
        material={materials['Wolf3D_Outfit_Footwear.001']}
        skeleton={nodes.Wolf3D_Outfit_Footwear001.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top001.geometry}
        material={materials['Wolf3D_Outfit_Top.001']}
        skeleton={nodes.Wolf3D_Outfit_Top001.skeleton}
      />
      <skinnedMesh
        name="EyeLeft001"
        geometry={nodes.EyeLeft001.geometry}
        material={nodes.EyeLeft001.material}
        skeleton={nodes.EyeLeft001.skeleton}
        morphTargetDictionary={nodes.EyeLeft001.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft001.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight001"
        geometry={nodes.EyeRight001.geometry}
        material={nodes.EyeRight001.material}
        skeleton={nodes.EyeRight001.skeleton}
        morphTargetDictionary={nodes.EyeRight001.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight001.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Beard001"
        geometry={nodes.Wolf3D_Beard001.geometry}
        material={materials['Wolf3D_Beard.001']}
        skeleton={nodes.Wolf3D_Beard001.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Beard001.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Beard001.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head001"
        geometry={nodes.Wolf3D_Head001.geometry}
        material={materials['Wolf3D_Skin.001']}
        skeleton={nodes.Wolf3D_Head001.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head001.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head001.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth001"
        geometry={nodes.Wolf3D_Teeth001.geometry}
        material={materials['Wolf3D_Teeth.001']}
        skeleton={nodes.Wolf3D_Teeth001.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth001.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth001.morphTargetInfluences}
      />
    </group>
  )
}

useGLTF.preload(`${process.env.PUBLIC_URL}/animatedAvatar.glb`)
