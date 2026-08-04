import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const COUNT = 220
const BOUNDS = { x: 7, y: 3.6 }

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const speeds = useMemo(() => {
    const arr = new Float32Array(COUNT)
    for (let i = 0; i < COUNT; i++) arr[i] = 0.15 + Math.random() * 0.35
    return arr
  }, [])
  const positions = useMemo(() => {
    const arr = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3] = (Math.random() * 2 - 1) * BOUNDS.x
      arr[i * 3 + 1] = (Math.random() * 2 - 1) * BOUNDS.y
      arr[i * 3 + 2] = Math.random() * -4
    }
    return arr
  }, [])

  useFrame((state, delta) => {
    const geo = pointsRef.current?.geometry
    if (!geo) return
    const posAttr = geo.getAttribute('position') as THREE.BufferAttribute
    for (let i = 0; i < COUNT; i++) {
      let y = posAttr.getY(i) + speeds[i] * delta
      if (y > BOUNDS.y) y = -BOUNDS.y
      const x = posAttr.getX(i) + Math.sin(state.clock.elapsedTime * 0.4 + i) * 0.0015
      posAttr.setXY(i, x, y)
    }
    posAttr.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#f0a090"
        size={0.045}
        sizeAttenuation
        transparent
        opacity={0.55}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function HospitosParticles() {
  return (
    <div className="hospitos-particles" aria-hidden="true">
      <Canvas orthographic camera={{ zoom: 45, position: [0, 0, 10] }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        <ParticleField />
      </Canvas>
    </div>
  )
}

export default HospitosParticles
