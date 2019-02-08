function onLoad() {
    // Container + Scene + Camera
    var initial = new Renderer("container");

    //Planets
    var planets = [];
    var starts = new Star("", initial, 2305, [0, 0, 0], ["/public/img/2k_stars_milky_way.jpg"]);
    var sun = new Star("Sun", initial, 160, [0, 0, 0], ["/public/img/2k_sun.jpg", "/public/img/sun_glare.jpg"]);

    var mercury = new Planet("mercury", sun.mesh, 5, [180, 0, 0], 0, ["/public/img/2k_mercury.jpg"], 0.1, 0.003);
    planets.push(mercury);

    var venus = new Planet("venus", sun.mesh, 12, [220, 0, 0], 0, ["/public/img/2k_venus_surface.jpg"], 0.1, 0.001);
    venus.add_cloud("/public/img/2k_venus_atmosphere.jpg", 0.11)
    planets.push(venus);

    var earth = new Planet("earth", sun.mesh, 13, [260, 0, 0], 0.41, ["/public/img/2k_earth_daymap.jpg", "/public/img/2k_earth_normal_map.tif", "/public/img/2k_earth_specular_map.tif"], 0.01, -0.004);
    earth.add_cloud("/public/img/2k_earth_clouds.jpg", 0.015);
    var moon = new Planet("moon", earth.mesh, 4, [20, 0, 0], 0, ["/public/img/2k_moon.jpg"], 0.1, 0.1);
    planets.push(earth);
    planets.push(moon);

    var mars = new Planet("mars", sun.mesh, 7, [300, 0, 0], 0, ["/public/img/2k_mars.jpg"], 0.1, 0.001);
    planets.push(mars);
    var jupiter = new Planet("jupiter", sun.mesh, 60, [500, 0, 0], 0, ["/public/img/2k_jupiter.jpg"], 0.01, -0.005);
    planets.push(jupiter);

    var saturn = new Planet("saturn", sun.mesh, 45, [650, 0, 0], 0, ["/public/img/2k_saturn.jpg"], 0.1, 0.007);
    saturn.add_ring("/public/img/2k_saturn_ring_alpha.png");
    planets.push(saturn);

    var uranus = new Planet("uranus", sun.mesh, 20, [750, 0, 0], 0, ["/public/img/2k_uranus.jpg"], 0.1, 0.002);
    planets.push(uranus);
    var neptune = new Planet("neptune", sun.mesh, 19, [850, 0, 0], 0, ["/public/img/2k_neptune.jpg"], 0.1, -0.001);
    planets.push(neptune);

    //VR-Mode and Animation
    var vr_enable = false;
    var animate = true;
    var vr_button = document.getElementById("vrbutton");
    animate_button = document.getElementById("animatebutton");

    function VRmode() {
        vr_enable = !vr_enable;
    }

    function Animations() {
        animate = !animate;
    }

    vr_button.addEventListener('click', VRmode);
    animate_button.addEventListener('click', Animations);

    //Rotation and Revolution
    run();

    function run() {
        if (vr_enable) {
            initial.effect.render(initial.scene, initial.camera);
            initial.renderer.setSize(initial.contain.offsetWidth, initial.contain.offsetHeight);
        } else {
            initial.renderer.render(initial.scene, initial.camera);
        }
        if (animate) {
            planets.forEach(object => object.update());
        }
        requestAnimationFrame(run);
    }

    //Raycasting
    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();

    function onMouseMove(event) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, initial.camera);
        var intersects = raycaster.intersectObjects(initial.scene.children, true);
        console.log(intersects[0].object.name);
        // for (var i = 0; i < intersects.length; i++) {
        document.getElementById("content").innerHTML = intersects[0].object.name;
        setTimeout(function() { document.getElementById("content").innerHTML = ""; }, 2000);
        // }
    }
    window.addEventListener('click', onMouseMove, false);
}