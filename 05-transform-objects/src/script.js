import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Set mesh position
 */
// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1
mesh.position.set(0.7,-0.6,1);
console.log(mesh.position.length())

/**
 * Set mesh scale
 */
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
mesh.scale.set(2, 0.5, 0.5)

/**
 * Set mesh rotation
 */
mesh.rotation.reorder('YXZ') // Should be done before the actual rotations
mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.25

/**
 * Se mesh quaternion
 * 
 * Only explanations: 
 * 
 *   - It affects rotations;
 *   - It is hard to understand;
 */

/**
 * Update and calculate properties
 */
// mesh.position.normalize()
// console.log(mesh.position.length())


/**
 * Add axes helper
 */
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(0,0,3)
scene.add(camera)

/**
 * Distance from mesh to camera
 */
console.log(mesh.position.distanceTo(camera.position))

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)