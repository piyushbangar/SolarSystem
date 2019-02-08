class Planet {
    constructor(nm, prnt, size, pos, tilt, texture, rot_speed, rev_speed) {
        this.clouds = [];
        this.systems = [];
        this.moons = [];
        this.nm = nm;
        this.prnt = prnt;
        this.size = size;
        this.pos = pos;
        this.tilt = tilt;
        this.texture = texture;
        this.rot_speed = rot_speed;
        this.rev_speed = rev_speed;
        this.material;

        this.add_planetmesh();
        this.add_orbits();
    }

    add_planetmesh() {
        this.geometry = new THREE.SphereGeometry(this.size, 32, 32);

        this.material = new THREE.MeshPhongMaterial();
        this.material.map = THREE.ImageUtils.loadTexture(this.texture[0]);
        this.material.bumpMap = THREE.ImageUtils.loadTexture(this.texture[1]);
        this.material.bumpScale = 0.1;
        this.material.specularMap = THREE.ImageUtils.loadTexture(this.texture[2]);
        this.material.specular = new THREE.Color('gray');

        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.rotation.z = this.tilt;
        this.mesh.position.set(this.pos[0], this.pos[1], this.pos[2]);
        this.mesh.rot_speed = this.rot_speed;
        this.mesh.rev_speed = this.rev_speed + this.prnt.rot_speed;

        this.mesh.name = this.nm;

        this.system = new THREE.Object3D();
        this.prnt.add(this.system);
        this.system.add(this.mesh);
        // this.prnt.add(this.mesh);
    }

    add_orbits() {
        this.ring_geometry = new THREE.TorusGeometry(this.pos[0], 0.3, 30, 100);
        this.ring_material = new THREE.MeshBasicMaterial({ color: 'gray' });
        this.torus = new THREE.Mesh(this.ring_geometry, this.ring_material);
        this.prnt.add(this.torus);
        this.torus.rotation.x = Math.PI / 2;
    }

    add_cloud(texture, cloud_rot_speed) {
        this.cloud_rot_speed = cloud_rot_speed;
        this.cloud_geometry = new THREE.SphereGeometry(this.size + 0.05, 32, 32);
        this.cloud_material = new THREE.MeshPhongMaterial({
            map: THREE.ImageUtils.loadTexture(texture),
            side: THREE.DoubleSide,
            opacity: 0.4,
            transparent: true
        });
        this.cloud_mesh = new THREE.Mesh(this.cloud_geometry, this.cloud_material);

        this.cloud_mesh.rotation.z = this.tilt;
        this.cloud_mesh.name = this.nm;

        this.clouds.push(this.cloud_mesh);
        this.mesh.add(this.cloud_mesh);
    }

    add_ring(ring_texture) {
        this.ring_geometry = new THREE.RingGeometry(50, 60, 30);
        this.ring_material = new THREE.MeshPhongMaterial({
            map: THREE.ImageUtils.loadTexture(ring_texture),
            shininess: 3,
            opacity: 0.9,
            emissive: 10,
            side: THREE.DoubleSide
        });
        this.ring_mesh = new THREE.Mesh(this.ring_geometry, this.ring_material);
        this.ring_mesh.rotation.x = Math.PI / 2;
        this.mesh.add(this.ring_mesh);
    }

    glow() {
        this.material.emissive.set(0xffffff);
        this.material.emissiveMap.set(this.texture[0]);
    }

    update() {
        this.mesh.rotation.y -= this.rot_speed;
        this.system.rotation.y -= this.rev_speed;
        if (this.clouds.length > 0) {
            this.cloud_mesh.rotation.y -= this.cloud_rot_speed;
        }
    }
}