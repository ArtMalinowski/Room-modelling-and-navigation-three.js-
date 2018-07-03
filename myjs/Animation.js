		/*
				In this file with java script I created objects moon and lamp box and also control them by animation
		*/
		var colorsLampBox = [
		    color = new THREE.Color(0xf80000),
		    color = new THREE.Color(0xf7f800),
		    color = new THREE.Color(0x4df800),
		    color = new THREE.Color(0x00f8cc),
		    color = new THREE.Color(0x0002f8),
		    color = new THREE.Color(0xf8004a)
		];

		// fucntion with animation
		function animation()
		{

		    // sex is used to slow changing color for lamp bx 
		    sec += 1;
		    // t is used to move the moon aroud the house
		    t += 0.015;
		    // x,y,z used to rotation box 
		    x += 0.03;
		    y += 0.02;
		    z += 0.04;
		    LampBox.rotation.set(x, y, z);
		    // if to slow changing color 
		    if (sec > 10)
		    {
		        var randomColor = Math.round(Math.random() * (5 -
		            0) + 0);
		        LampBox.color = colorsLampBox[randomColor];
		        LampBox.add(new THREE.Mesh(animateBoxGeo, new THREE
		            .MeshBasicMaterial(
		            {
		                color: colorsLampBox[
		                    randomColor
		                ]
		            })));
		        sec = 0;
		    }
		    // set roration and change position of moo n
		    moonLight.rotation.y += t;
		    moonLight.position.x += 20 * Math.cos(t);
		    moonLight.position.z += 20 * Math.sin(t);

		}

		function createMoonAndLampBox()
		{

		    // create moon as spot light with gemotery and material
		    moonLight = new THREE.SpotLight(0xffffff, 2, 3000, 0.7);
		    moonGeo = new THREE.SphereGeometry(100, 50, 50, 0, Math.PI *
		        2, 0, Math.PI * 2);
		    moonLight.add(new THREE.Mesh(moonGeo, new THREE.MeshBasicMaterial(
		    {
		        color: 0xffffff
		    })));
		    // setting shadow for moonlight
		    moonLight.castShadow = true;
		    moonLight.shadow.camera.far = 3000;
		    moonLight.shadow.camera.near = 1000;
		    moonLight.shadow.mapSize.width = 1024;
		    moonLight.shadow.mapSize.height = 1024;
		    moonLight.position.set(0, 1000, 0);
		    scene.add(moonLight);

		    // create lambox which will be used for simple animation
		    LampBox = new THREE.PointLight(0x00FF00,0,400,2);
		    animateBoxGeo = new THREE.BoxGeometry(40, 40, 40);
		    LampBox.add(new THREE.Mesh(animateBoxGeo, new THREE.MeshBasicMaterial(
		    {
		        color: 0x00FF00
		    })));
		    LampBox.castShadow = false;
		    LampBox.shadow.camera.far = 500;
		    LampBox.position.set(-500, 150, -320);
		    scene.add(LampBox);
		}