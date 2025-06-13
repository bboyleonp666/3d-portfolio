import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

function Scene() {
    const gltf = useLoader(GLTFLoader, '/home_office/scene.gltf')
    return <primitive object={gltf.scene} />
  }

  export default Scene;
