var contianer, renderer, camera, scene;
var cubes = []

init()
animate();

function init() {

    container = document.createElement('div');
    container.setAttribute('id', 'rose')
    document.body.appendChild(container);

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, .1, 10000);
    camera.position.set(0.0, 0.0, 8);
    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({
        antialias: true
    });

    console.log(window.innerWidth)
    renderer.setSize(window.innerWidth - (window.innerWidth * .02), window.innerHeight);

    renderer.setClearColor(0x000000);
    container.appendChild(renderer.domElement);

    //geometry
    var num = 250;
    var geometry = new THREE.BoxBufferGeometry(1, 1, 1);
    for (var i = num; i > 0; i--) {
        var eGeometry = new THREE.EdgesGeometry(geometry);
        var eMaterial = new THREE.LineBasicMaterial({
            color: 0xFF0000,
            linewidth: 2,
            opacity: 0.05,
            transparent: true,
            depthTest: 0,
            blending: 2
        });
        var edges = new THREE.LineSegments(eGeometry, eMaterial);
        scene.add(edges);
        cubes.push(edges);
    }

    window.addEventListener('resize', onWindowResize, false);
}

function animate() {
    var time = performance.now() * 0.001;

    for (var i = 0; i < cubes.length; i++) {
        var scale = .01 * i + .001
        var rotate = i + -15 * time;
        cubes[i].rotation.set(radians(rotate), radians(rotate), radians(rotate))
        cubes[i].scale.set(scale, scale, scale)
    }

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function random(seed) {
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function radians(degrees) {
    return degrees * Math.PI / 180;
};

function onWindowResize() {
    camera.left = window.innerWidth / -2;
    camera.right = window.innerWidth / 2;
    camera.top = window.innerHeight / 2;
    camera.bottom = window.innerHeight / -2;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}