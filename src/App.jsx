import { useState } from 'react';
import './App.css';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import Model from './models/home_basement';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Canvas>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <Model />
            <axesHelper args={[5]} />
            <OrbitControls />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default App
