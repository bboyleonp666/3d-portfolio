import './App.css';

import { Suspense, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stats } from "@react-three/drei";

import Model from './models/home_basement';
import Camera from './components/camera';

function App() {
  return (
    <>
      <div className="App">
        <Canvas>
          <Suspense fallback={null}>
            <Camera />
            <Model />
            <axesHelper args={[5]} />
            <Stats />
            <OrbitControls />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default App
