var data = [{
        "name": "sun",
        "size": 69.5,
        "position": { "x": 0, "y": 0, "z": 0 },
        "texture": {
            "surfaceMap": "/public/images/sun/2k_sun.jpg",
            "bumpMap": "",
            "normalMap": "",
            "specularMap": ""
        }
    },
    {
        "name": "mercury",
        "size": 2.4,
        "position": { "x": 100, "y": 0, "z": 0 },
        "texture": {
            "surfaceMap": "/public/images/mercury/2k_mercury.jpg",
            "bumpMap": "",
            "normalMap": "",
            "specularMap": ""
        },
        "rot_speed": 0.001,
        "rev_speed": 0.002,
    },
    {
        "name": "venus",
        "size": 6,
        "position": { "x": 120, "y": 0, "z": 0 },
        "texture": {
            "surfaceMap": "/public/images/venus/2k_venus_surface.jpg",
            "bumpMap": "",
            "normalMap": "/public/images/venus/venusNormal.jpg",
            "specularMap": ""
        },
        "texture_cloud": { "surfaceMap": "public/images/venus/2k_venus_atmosphere.jpg" },
        "rot_speed": 0.005,
        "rev_speed": 0.005,

    },
    {
        "name": "earth",
        "size": 6.4,
        "position": { "x": 140, "y": 0, "z": 0 },
        "texture": {
            "surfaceMap": "public/images/earth/earth.jpg",
            "bumpMap": "public/images/earth/earthbump.jpg",
            "normalMap": "public/images/earth/EarthNormal.png",
            "specularMap": "public/images/earth/earthspec.png"
        },
        "texture_cloud": { "surfaceMap": "public/images/earth/earthcloudmaptrans.jpg" },
        "rot_speed": -0.001,
        "rev_speed": -0.002,
        "moon": {
            "size": 1.73,
            "position": { "x": 10, "y": 0, "z": 0 },
            "texture": { "surfaceMap": "/public/images/moon/2k_moon.jpg" },
            "rot_speed": 0.004,
            "rev_speed": 0.5,
        },
        "moon1": {
            "size": 1.73,
            "position": { "x": 8, "y": 5, "z": 0 },
            "texture": { "surfaceMap": "/public/images/moon/2k_moon.jpg" },
            "rot_speed": 0.1,
            "rev_speed": 0.2,
        },
    },
    {
        "name": "mars",
        "size": 3.4,
        "position": { "x": 160, "y": 0, "z": 0 },
        "texture": {
            "surfaceMap": "/public/images/mars/2k_mars.jpg",
            "bumpMap": "",
            "normalMap": "/public/images/mars/MarsnormalMap.png",
            "specularMap": ""
        },
        "rot_speed": 0.2,
        "rev_speed": 0.008,
        // "texture_cloud":{"surfaceMap":"public/images/earth/earthcloudmaptrans"} 
    },
    {
        "name": "jupiter",
        "size": 60,
        "position": { "x": 300, "y": 0, "z": 0 },
        "texture": {
            "surfaceMap": "/public/images/jupiter/2k_jupiter.jpg",
            "bumpMap": "",
            "normalMap": "",
            "specularMap": ""
        },
        "texture_cloud": { "surfaceMap": "public/images/jupiter/jupiterclouds.png" },
        "rot_speed": 0.003,
        "rev_speed": 0.01,
    },
    {
        "name": "saturn",
        "size": 58,
        "position": { "x": 450, "y": 0, "z": 0 },
        "texture": {
            "surfaceMap": "/public/images/saturn/2k_saturn.jpg",
            "bumpMap": "",
            "normalMap": "",
            "specularMap": ""
        },
        "rot_speed": 0.004,
        "rev_speed": 0.0025,
    },
    {
        "name": "uranus",
        "size": 15.7,
        "position": { "x": 550, "y": 0, "z": 0 },
        "texture": {
            "surfaceMap": "/public/images/uranus/2k_uranus.jpg",
            "bumpMap": "",
            "normalMap": "",
            "specularMap": ""
        },
        "rot_speed": 0.0043,
        "rev_speed": -0.0011,
    },
    {
        "name": "neptune",
        "size": 15.3,
        "position": { "x": 650, "y": 0, "z": 0 },
        "texture": {
            "surfaceMap": "/public/images/neptune/2k_neptune.jpg",
            "bumpMap": "",
            "normalMap": "",
            "specularMap": ""
        },
        "rot_speed": 0.009,
        "rev_speed": 0.0032,
    },
    {
        "name": "moon_other",
        "size": 1,
        "position": { "x": 0, "y": 0, "z": 0 },
        "texture": {
            "surfaceMap": "/public/images/moon/2k_moon.jpg",
            "bumpMap": "",
            "normalMap": "",
            "specularMap": ""
        }
    }
]