class Star {
    constructor(nm, initial, size, pos, texture) {
        this.systems = [];
        this.planets = [];
        this.nm = nm;
        this.size = size;
        this.pos = pos;
        this.texture = texture;
        this.rot_speed = [];
        this.rev_speed = [];
        this.initial = initial;
        this.add_star();
    }

    add_star() {
        this.geometry = new THREE.SphereGeometry(this.size, 32, 32);

        this.material = new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture(this.texture[0]),
            bumpMap: THREE.ImageUtils.loadTexture(this.texture[1]),
            bumpScale: 0.1,
            specularMap: THREE.ImageUtils.loadTexture(this.texture[2]),
            specular: new THREE.Color('gray'),
            emissive: 0xffffff,
            emissiveMap: THREE.ImageUtils.loadTexture(this.texture[0]),
            side: THREE.DoubleSide
        });


        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(this.pos[0], this.pos[1], this.pos[2]);
        this.mesh.name = this.nm;

        this.initial.scene.add(this.mesh);
    }
}