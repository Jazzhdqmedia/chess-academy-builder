
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const ChessPiece: React.FC<{ position: [number, number, number]; type: 'pawn' | 'knight' | 'bishop' | 'rook' | 'queen' | 'king' }> = ({ position, type }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  const pieceGeometry = useMemo(() => {
    switch (type) {
      case 'pawn':
        return <sphereGeometry args={[0.3, 8, 6]} />;
      case 'rook':
        return <boxGeometry args={[0.4, 0.6, 0.4]} />;
      case 'bishop':
        return <sphereGeometry args={[0.25, 8, 6]} />;
      case 'knight':
        return <boxGeometry args={[0.3, 0.5, 0.3]} />;
      case 'queen':
        return <sphereGeometry args={[0.35, 8, 6]} />;
      case 'king':
        return <boxGeometry args={[0.4, 0.7, 0.4]} />;
      default:
        return <sphereGeometry args={[0.3, 8, 6]} />;
    }
  }, [type]);

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        {pieceGeometry}
        <meshStandardMaterial 
          color={Math.random() > 0.5 ? "#2D2B2C" : "#F8F5F0"} 
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>
    </Float>
  );
};

const ChessBackground: React.FC = () => {
  const pieces = useMemo(() => {
    const pieceTypes: ('pawn' | 'knight' | 'bishop' | 'rook' | 'queen' | 'king')[] = 
      ['pawn', 'knight', 'bishop', 'rook', 'queen', 'king'];
    
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ] as [number, number, number],
      type: pieceTypes[Math.floor(Math.random() * pieceTypes.length)]
    }));
  }, []);

  return (
    <div className="absolute inset-0 opacity-20">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />
        
        {pieces.map((piece) => (
          <ChessPiece
            key={piece.id}
            position={piece.position}
            type={piece.type}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default ChessBackground;
