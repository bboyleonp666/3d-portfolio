import { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function ModelHomeOffice({ guiFolder, ...props }) {
  const ref = useRef()
  const gltf = useLoader(GLTFLoader, "./home_office_v2/scene.gltf");

  useEffect(() => {
    if (ref.current) {
      ref.current.rotation.x = 0.5 * Math.PI;
      ref.current.rotation.y = 0.05 * Math.PI;
    }

    guiFolder.add(ref.current.position, 'x', -50, 50, 1).name('Model X Position');
    guiFolder.add(ref.current.position, 'y', -50, 50, 1).name('Model Y Position');
    guiFolder.add(ref.current.position, 'z', -50, 50, 1).name('Model Z Position');
    guiFolder.add(ref.current.rotation, 'x', -Math.PI, Math.PI, 0.1).name('Model X Rotation');
    guiFolder.add(ref.current.rotation, 'y', -Math.PI, Math.PI, 0.1).name('Model Y Rotation');
    guiFolder.add(ref.current.rotation, 'z', -Math.PI, Math.PI, 0.1).name('Model Z Rotation');
    guiFolder.add(ref.current.scale, 'x', 0, 10, 0.1).name('Model X Scale');
    guiFolder.add(ref.current.scale, 'y', 0, 10, 0.1).name('Model Y Scale');
    guiFolder.add(ref.current.scale, 'z', 0, 10, 0.1).name('Model Z Scale');
  }, []);

  return (
    <primitive object={gltf.scene} ref={ref} />
  );
}

useGLTF.preload('/home_office/scene.gltf')
