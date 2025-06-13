import { useRef, useEffect } from "react";
import { PerspectiveCamera } from "@react-three/drei";

export default function Camera({ gui }) {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.position.set(0, -20, 10);
    }
    
    gui.add(ref.current.position, 'x', -50, 50, 1).name('Camera X');
    gui.add(ref.current.position, 'y', -50, 50, 1).name('Camera Y');
    gui.add(ref.current.position, 'z', 0, 50, 1).name('Camera Z');
  }, []);

  return (
    <PerspectiveCamera makeDefault ref={ref} />
  )
}