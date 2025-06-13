import './App.css';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stats } from "@react-three/drei";
import { GUI } from 'lil-gui';
import Light from './components/Light';

import ModelHomeOffice from './models/HomeOffice';
import Camera from './components/camera';

function App() {
  const gui = new GUI();

  const homeOfficeFolder = gui.addFolder('Home Office');
  const lightFolder = gui.addFolder('Light');
  const cameraFolder = gui.addFolder('Camera');

  return (
    <>
      <div className="App">
        <Canvas>
          <Suspense fallback={null}>
            <Camera guiFolder={cameraFolder} />
            <Light guiFolder={lightFolder} />
            <ModelHomeOffice guiFolder={homeOfficeFolder} />
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
