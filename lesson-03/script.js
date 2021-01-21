

/** Create scene */
const scene = new THREE.Scene()

/** Red cube */
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
const mesh = new THREE.Mesh(geometry, material)

/** Add to the scene */
scene.add(mesh)

/** Define sizes */
const sizes = {
  width: 800,
  height: 600
}

/** Define camera */
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.z = 3
scene.add(camera)


/** Add renderer */
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
  canvas 
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera) 