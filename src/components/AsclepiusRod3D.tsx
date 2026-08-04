import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

class HelixCurve extends THREE.Curve<THREE.Vector3> {
  coils: number
  radius: number
  height: number

  constructor(coils = 4.5, radius = 0.42, height = 3.0) {
    super()
    this.coils = coils
    this.radius = radius
    this.height = height
  }

  getPoint(t: number, target: THREE.Vector3 = new THREE.Vector3()) {
    const angle = t * Math.PI * 2 * this.coils
    const y = -this.height / 2 + t * this.height
    const x = Math.cos(angle) * this.radius
    const z = Math.sin(angle) * this.radius
    return target.set(x, y, z)
  }
}

const CURVE = new HelixCurve(4.5, 0.42, 3.0)
const HEAD_POSITION = CURVE.getPoint(1)

function RodModel() {
  const group = useRef<THREE.Group>(null)
  const snakeGeometry = useMemo(() => new THREE.TubeGeometry(CURVE, 220, 0.085, 14, false), [])

  useFrame((state, delta) => {
    const g = group.current
    if (!g) return
    g.rotation.y += delta * 0.55
    g.position.y = Math.sin(state.clock.elapsedTime * 0.9) * 0.08
    const targetX = state.pointer.y * 0.18
    const targetZ = -state.pointer.x * 0.15
    g.rotation.x += (targetX - g.rotation.x) * 0.04
    g.rotation.z += (targetZ - g.rotation.z) * 0.04
  })

  return (
    <group ref={group}>
      <mesh>
        <cylinderGeometry args={[0.11, 0.11, 3.3, 28]} />
        <meshStandardMaterial color="#2c2b27" metalness={0.75} roughness={0.28} />
      </mesh>
      <mesh geometry={snakeGeometry}>
        <meshStandardMaterial color="#f0a090" metalness={0.55} roughness={0.22} emissive="#c06050" emissiveIntensity={0.18} />
      </mesh>
      <mesh position={[HEAD_POSITION.x, HEAD_POSITION.y, HEAD_POSITION.z]} scale={[1, 0.85, 1.15]}>
        <sphereGeometry args={[0.16, 24, 24]} />
        <meshStandardMaterial color="#f0a090" metalness={0.55} roughness={0.2} emissive="#c06050" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[HEAD_POSITION.x + 0.09, HEAD_POSITION.y + 0.05, HEAD_POSITION.z + 0.09]}>
        <sphereGeometry args={[0.028, 10, 10]} />
        <meshStandardMaterial color="#141414" />
      </mesh>
      <mesh position={[HEAD_POSITION.x - 0.02, HEAD_POSITION.y + 0.05, HEAD_POSITION.z + 0.13]}>
        <sphereGeometry args={[0.028, 10, 10]} />
        <meshStandardMaterial color="#141414" />
      </mesh>
      <mesh position={[0, -1.75, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.55, 0.78, 48]} />
        <meshBasicMaterial color="#f0a090" transparent opacity={0.35} side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

function AsclepiusRod3D() {
  return (
    <div className="rod3d-wrap" aria-hidden="true">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0.2, 5.4], fov: 38 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.45} />
        <directionalLight position={[3, 4, 5]} intensity={1.2} color="#fff6f0" />
        <pointLight position={[-3, -1, -2]} intensity={1.1} color="#f0a090" />
        <pointLight position={[2, 2.5, 3]} intensity={0.6} color="#f0a090" />
        <RodModel />
      </Canvas>
    </div>
  )
}

export default AsclepiusRod3D
