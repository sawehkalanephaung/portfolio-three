import * as THREE from 'three';

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000)
const randerer = new THREE.WebGLRenderer()
randerer.setSize(innerWidth, innerHeight)
randerer.setPixelRatio(devicePixelRatio)
randerer.setClearColor(0x000000, 1) // Set background color
document.body.appendChild(randerer.domElement)

// create geometry
const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00FF00 })
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial)
scene.add(boxMesh)
randerer.render(scene, camera)
camera.position.z = 5

// palne geometry
const planeGeometry = new THREE.PlaneGeometry(3,3,10,10)
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0x0000FF, side: THREE.DoubleSide })
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial)
scene.add(planeMesh)


function animate() {
  requestAnimationFrame(animate)
  randerer.render(scene, camera)
  boxMesh.rotation.x += 0.01
  boxMesh.rotation.y += 0.01
    planeMesh.rotation.x += 0.01
    planeMesh.rotation.y += 0.01
}
animate()

