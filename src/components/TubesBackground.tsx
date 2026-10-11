import { type ReactNode, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const NEON_COLORS = ['#8B5CF6', '#06B6D4', '#EC4899', '#A78BFA', '#22D3EE', '#F472B6']

type TubeDefinition = {
  points: THREE.Vector3[]
  radius: number
  color: string
}

const createTubeDefinitions = (colors: string[]): TubeDefinition[] => {
  return Array.from({ length: 12 }, (_, index) => {
    const points: THREE.Vector3[] = []
    const segmentCount = 8
    const baseX = index % 2 === 0 ? -2.6 : 2.2

    for (let step = 0; step <= segmentCount; step += 1) {
      const t = step / segmentCount
      const x = THREE.MathUtils.lerp(baseX, baseX + (Math.random() * 6 - 3), t)
      const y = THREE.MathUtils.lerp(-2.2, 2.2, t) + Math.sin(step * 0.8 + index) * 0.85
      const z = Math.sin((t * Math.PI * 2) + index * 0.9) * 1.7 + Math.random() * 1.2
      points.push(new THREE.Vector3(x, y, z))
    }

    return {
      points,
      radius: 0.06 + Math.random() * 0.13,
      color: colors[index % colors.length],
    }
  })
}

type TubesBackgroundProps = {
  children: ReactNode
  enabled?: boolean
}

export function TubesBackground({ children, enabled = true }: TubesBackgroundProps) {
  const mountRef = useRef<HTMLDivElement | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const groupRef = useRef<THREE.Group | null>(null)
  const meshesRef = useRef<THREE.Mesh[]>([])
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const [tubeColors, setTubeColors] = useState<string[]>(NEON_COLORS)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) {
      return undefined
    }

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 100)
    camera.position.set(0, 0, 10)

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setClearColor(0x000000, 0)
    rendererRef.current = renderer
    mount.appendChild(renderer.domElement)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    const pointLight = new THREE.PointLight(0x8b5cf6, 2.4, 50)
    pointLight.position.set(0, 0, 8)

    scene.add(ambientLight)
    scene.add(pointLight)

    const group = new THREE.Group()
    groupRef.current = group
    scene.add(group)

    const buildTubes = () => {
      group.clear()
      meshesRef.current = []

      createTubeDefinitions(tubeColors).forEach((definition) => {
        const geometry = new THREE.TubeGeometry(
          new THREE.CatmullRomCurve3(definition.points),
          96,
          definition.radius,
          10,
          false,
        )

        const material = new THREE.MeshStandardMaterial({
          color: definition.color,
          emissive: definition.color,
          emissiveIntensity: 1.5,
          metalness: 0.2,
          roughness: 0.15,
          transparent: true,
          opacity: 0.9,
        })

        const mesh = new THREE.Mesh(geometry, material)
        mesh.scale.setScalar(1.2)
        group.add(mesh)
        meshesRef.current.push(mesh)
      })
    }

    buildTubes()

    const pointer = { x: 0, y: 0 }
    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    const resize = () => {
      const width = mount.clientWidth || window.innerWidth
      const height = mount.clientHeight || window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
    }

    const animate = () => {
      if (!enabled) {
        renderer.render(scene, camera)
        return
      }

      const elapsed = performance.now() * 0.001

      if (group) {
        group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, pointer.y * 0.28, 0.025)
        group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, pointer.x * 0.45, 0.025)
        group.rotation.z = elapsed * 0.09
      }

      meshesRef.current.forEach((mesh, index) => {
        const phase = elapsed * 0.28 + index * 0.53
        mesh.rotation.x = phase * 0.2
        mesh.rotation.y = phase * 0.25
        mesh.position.z = Math.sin(phase * 1.2 + index) * 0.28
      })

      renderer.render(scene, camera)
      animationFrameRef.current = window.requestAnimationFrame(animate)
    }

    window.addEventListener('pointermove', handlePointerMove)

    resize()
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(mount)

    animationFrameRef.current = window.requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      resizeObserver.disconnect()

      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current)
      }

      group.clear()
      meshesRef.current = []

      if (rendererRef.current) {
        rendererRef.current.dispose()
      }

      if (mount && renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement)
      }

      renderer.forceContextLoss()
    }
  }, [enabled, tubeColors])

  const randomizeColors = () => {
    setTubeColors([...NEON_COLORS].sort(() => Math.random() - 0.5))
  }

  return (
    <div
      className="tubes-background"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          randomizeColors()
        }
      }}
    >
      <div ref={mountRef} className="tubes-canvas" aria-hidden="true" />
      <div className="tubes-content">{children}</div>
    </div>
  )
}
