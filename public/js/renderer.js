class Renderer {
    constructor(elmnt) {
        this.contain = document.getElementById(elmnt);
        this.renderer = new THREE.WebGLRenderer({
            antialias: true
        });
        this.renderer.setSize(this.contain.offsetWidth, this.contain.offsetHeight);
        this.contain.appendChild(this.renderer.domElement);
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45, this.contain.offsetWidth / this.contain.offsetHeight, 0.001, 4000);
        this.camera.position.set(0, 1000, 2000);

        //Light
        this.amb_light = new THREE.AmbientLight(0x888888, 1)
        this.scene.add(this.amb_light);
        this.pos_light = new THREE.PointLight(0xffffff, 3, 1000)
        this.pos_light.position.set(0, 0, 0)
        this.scene.add(this.pos_light)

        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);

        this.effect = new THREE.StereoEffect(this.renderer)
    }
}