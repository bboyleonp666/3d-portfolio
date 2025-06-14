import { useRef, useEffect } from 'react';

export default function Light({ guiFolder }) {
  const pointLightRef = useRef();

  useEffect(() => {
    if (pointLightRef.current) {
      pointLightRef.current.position.set(10, 10, 10);
    }

    guiFolder.add(pointLightRef.current.position, 'x', -50, 50, 1).name('Light X Position');
    guiFolder.add(pointLightRef.current.position, 'y', -50, 50, 1).name('Light Y Position');
    guiFolder.add(pointLightRef.current.position, 'z', -50, 50, 1).name('Light Z Position');
    guiFolder.add(pointLightRef.current, 'intensity', 0, 10, 0.1).name('Light Intensity');
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight
        ref={pointLightRef}
        position={[10, 10, 10]}
        intensity={1}
        castShadow
      />
    </>
  );
}
