import React, {useEffect, useRef} from 'react';
import './App.css';
import * as THREE from 'three/build/three.module';

let camera, scene, renderer;
let geometry, material, mesh;



const init = (rootRef) => {

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.z = 1;

    scene = new THREE.Scene();

    geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    material = new THREE.MeshNormalMaterial();

    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    rootRef.current.appendChild( renderer.domElement );

};

const animate = () => {

    requestAnimationFrame( animate );

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    renderer.render( scene, camera );

};

const App = () => {
    const rootRef = useRef(null);
    useEffect(() => {
        init(rootRef);
        animate();
    }, []);
  return (
    <div ref={rootRef} id="app-root">
    </div>
  );
};

export default App;
