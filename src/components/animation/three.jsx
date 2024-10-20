import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

const THREESpace = () => {
  const canvasRef = useRef();
  const scene = useRef();
  const camera = useRef();
  const renderer = useRef();
  const particles = useRef();
  const composer = useRef();
  let frame = useRef(0);

  useEffect(() => {
    scene.current = new THREE.Scene();
    camera.current = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    renderer.current = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    renderer.current.setClearColor(0x000000, 1);

    const particleCount = 700;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const neonColors = [
      new THREE.Color(0x00BFFF),
      new THREE.Color(0xFFFFFF), //White
      new THREE.Color(0x8A2BE2), 
      new THREE.Color(0xBA55D3), 
      new THREE.Color(0xF5F5F5), //White Smoke
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

      const color = neonColors[Math.floor(Math.random() * neonColors.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      sizes[i] = Math.random() * 0.5 + 0.1;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const vertexShader = `
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const fragmentShader = `
      varying vec3 vColor;
      void main() {
        vec2 xy = gl_PointCoord.xy - vec2(0.5);
        float ll = length(xy);
        if (ll > 0.5) discard;
        gl_FragColor = vec4(vColor, 1.0) * smoothstep(0.5, 0.3, ll);
      }
    `;

    const material = new THREE.ShaderMaterial({
      uniforms: {
        texture: { value: new THREE.Texture() }
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      vertexColors: true
    });

    particles.current = new THREE.Points(geometry, material);
    scene.current.add(particles.current);

    camera.current.position.z = 20;

    // Add Bloom effect
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    );
    bloomPass.threshold = 0;
    bloomPass.strength = 0.5;
    bloomPass.radius = 1;

    composer.current = new EffectComposer(renderer.current);
    composer.current.addPass(new RenderPass(scene.current, camera.current));
    composer.current.addPass(bloomPass);

    // Rotation speed
    const baseRotationSpeed = 0.00008;
    const scrollRotationSpeed = 0.0004;
    let totalRotationY = 0;

    function handleResize() {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.current.aspect = newWidth / newHeight;
      camera.current.updateProjectionMatrix();

      renderer.current.setSize(newWidth, newHeight);
      composer.current.setSize(newWidth, newHeight);
    }

    window.addEventListener("resize", handleResize);

    function animate() {
      frame.current = requestAnimationFrame(animate);

      totalRotationY += baseRotationSpeed;
      particles.current.rotation.y = totalRotationY;

      const scrollFactor = 0.002;
      particles.current.position.y = window.scrollY * scrollFactor;

      particles.current.rotation.x = window.scrollY * scrollRotationSpeed;

      composer.current.render();
    }

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div className="absolute bg-black -z-10 top-0 transition-all">
      <canvas ref={canvasRef} className="transition-all duration-500" />
    </div>
  );
};

export default THREESpace;