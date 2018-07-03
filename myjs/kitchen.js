		// create walls in kitchen
		function createKitchenWalls()
		{
		        // Right wall
		        var rightWallGeometry = new THREE.BoxGeometry(800, 10, 200);
		        var rightWall = new THREE.Mesh(rightWallGeometry, openWallMaterial);
		        rightWall.rotation.x = Math.PI / 180 * 90;
		        rightWall.rotation.z = Math.PI / 180 * 90;
		        rightWall.position.set(450, 100, -295);
		        scene.add(rightWall);

		        // front wall
		        var frontWallGeometry = new THREE.BoxGeometry(240, 10, 200);
		        var FrontWall = new THREE.Mesh(frontWallGeometry, openWallMaterial);
		        FrontWall.rotation.x = Math.PI / 180 * 90;
		        FrontWall.position.set(325, 100, 100);
		        scene.add(FrontWall);

		        // back wall
		        var backWallGeometry = new THREE.BoxGeometry(255, 10, 200);
		        var backWall = new THREE.Mesh(backWallGeometry, openWallMaterial);
		        backWall.rotation.x = Math.PI / 180 * 90;
		        backWall.position.set(327, 100, -700);
		        scene.add(backWall);
		}
		//create floor in kithcne
		function createKitchenFloor()
		{

		        var textureFloor = new THREE.TextureLoader().load(
		                'images/Kitchen/KitchenFloor.jpg');
		        var floorMat = new THREE.MeshPhongMaterial(
		        {
		                shininess: 100,
		                map: textureFloor,
		                specular: 0x050505
		        });
		        // Floor
		        var floorGeometry = new THREE.BoxGeometry(790, 10, 245);
		        var floor = new THREE.Mesh(floorGeometry, floorMat);
		        floor.rotation.y = Math.PI / 180 * 90;
		        floor.position.set(325, 5, -295);
		        scene.add(floor);
		}

		// create kitchen units and connected to it lights
		function createKitchen()
		{

		        var materialsKitchenUnit = [
		                new THREE.MeshLambertMaterial(
		                {
		                        map: THREE.ImageUtils.loadTexture(
		                                'images/Kitchen/dark_wood_wardrobe.jpg'
		                        )
		                }),
		                new THREE.MeshLambertMaterial(
		                {
		                        map: THREE.ImageUtils.loadTexture(
		                                'images/Kitchen/dark_wood_wardrobe.jpg'
		                        )
		                }),
		                new THREE.MeshLambertMaterial(
		                {
		                        map: THREE.ImageUtils.loadTexture(
		                                'images/Kitchen/Kitchen-unit.jpg'
		                        )
		                }),
		                new THREE.MeshLambertMaterial(
		                {
		                        map: THREE.ImageUtils.loadTexture(
		                                'images/Kitchen/dark_wood_wardrobe.jpg'
		                        )
		                }),
		                new THREE.MeshLambertMaterial(
		                {
		                        map: THREE.ImageUtils.loadTexture(
		                                'images/Kitchen/dark_wood_wardrobe.jpg'
		                        )
		                }),
		                new THREE.MeshLambertMaterial(
		                {
		                        map: THREE.ImageUtils.loadTexture(
		                                'images/Kitchen/dark_wood_wardrobe.jpg'
		                        )
		                })
		        ];
		        var kitchenUnitGeo = new THREE.BoxGeometry(200, 50, 60);
		        var kitchenUniteMaterials = new THREE.MeshFaceMaterial(
		                materialsKitchenUnit);



		        var KichtenLighTexture = new THREE.TextureLoader().load(
		                'images/Kitchen/silver_light_frame.jpg');
		        var KichtenLightFrameMaterial = new THREE.MeshBasicMaterial(
		        {
		                map: KichtenLighTexture
		        });

		        var topUnitTexture = new THREE.TextureLoader().load(
		                'images/Kitchen/ktichenmarlbe.jpg');
		        var topUnitMat = new THREE.MeshPhongMaterial(
		        {
		                map: topUnitTexture,
		                specular: 0x050505,
		                shininess: 100
		        });



		        // Kitchen Units
		        var kitchenUnit1 = new THREE.Mesh(kitchenUnitGeo,
		                kitchenUniteMaterials);
		        kitchenUnit1.rotation.x = Math.PI / 180 * 90;
		        kitchenUnit1.rotation.z = Math.PI / 180 * 90;
		        kitchenUnit1.position.set(418, 40, -345);
		        scene.add(kitchenUnit1);
		        var kitchenUnit2 = new THREE.Mesh(kitchenUnitGeo,
		                kitchenUniteMaterials);
		        kitchenUnit2.rotation.x = Math.PI / 180 * 90;
		        kitchenUnit2.rotation.z = Math.PI / 180 * 90;
		        kitchenUnit2.position.set(418, 40, -545);
		        scene.add(kitchenUnit2);
		        var kitchenUnit3 = new THREE.Mesh(kitchenUnitGeo,
		                kitchenUniteMaterials);
		        kitchenUnit3.rotation.x = Math.PI / 180 * 90;
		        kitchenUnit3.rotation.z = Math.PI / 180 * 90;
		        kitchenUnit3.position.set(418, 40, -145);
		        scene.add(kitchenUnit3);

		        var kitchenUnit4 = new THREE.Mesh(kitchenUnitGeo,
		                kitchenUniteMaterials);
		        kitchenUnit4.rotation.x = Math.PI / 180 * 90;
		        kitchenUnit4.rotation.z = Math.PI / 180 * 90;
		        kitchenUnit4.position.set(418, 170, -345);
		        scene.add(kitchenUnit4);
		        var kitchenUnit5 = new THREE.Mesh(kitchenUnitGeo,
		                kitchenUniteMaterials);
		        kitchenUnit5.rotation.x = Math.PI / 180 * 90;
		        kitchenUnit5.rotation.z = Math.PI / 180 * 90;
		        kitchenUnit5.position.set(418, 170, -545);
		        scene.add(kitchenUnit5);
		        var kitchenUnit6 = new THREE.Mesh(kitchenUnitGeo,
		                kitchenUniteMaterials);
		        kitchenUnit6.rotation.x = Math.PI / 180 * 90;
		        kitchenUnit6.rotation.z = Math.PI / 180 * 90;
		        kitchenUnit6.position.set(418, 170, -145);
		        scene.add(kitchenUnit6);

		        // kitche lights 
		        var KichtenLightGeo = new THREE.CircleGeometry(10, 32);

		        KichtenLight1 = new THREE.DirectionalLight(0xADFF2F, 0);

		        KichtenLight1.add(new THREE.Mesh(KichtenLightGeo, new THREE.MeshBasicMaterial(
		        {
		                color: 0xADFF2F
		        })));
		        KichtenLight1.rotation.x = Math.PI / 180 * 90;
		        KichtenLight1.position.set(418, 138, -145);
		        KichtenLight1.target = kitchenUnit3;
		        scene.add(KichtenLight1);
		/*
		In this file with java script I created all objects in Kitchen also walls and floor
*/
		        KichtenLight2 = new THREE.DirectionalLight(0xADFF2F, 0);
		        KichtenLight2.add(new THREE.Mesh(KichtenLightGeo, new THREE.MeshBasicMaterial(
		        {
		                color: 0xADFF2F
		        })));
		        KichtenLight2.rotation.x = Math.PI / 180 * 90;
		        KichtenLight2.position.set(418, 138, -545);
		        KichtenLight2.target = kitchenUnit2;
		        scene.add(KichtenLight2);


		        KichtenLight3 = new THREE.DirectionalLight(0xADFF2F, 0);
		        KichtenLight3.add(new THREE.Mesh(KichtenLightGeo, new THREE.MeshBasicMaterial(
		        {
		                color: 0xADFF2F
		        })));
		        KichtenLight3.rotation.x = Math.PI / 180 * 90;
		        KichtenLight3.position.set(418, 138, -345);

		        KichtenLight3.target = kitchenUnit1;
		        scene.add(KichtenLight3);

		        var KichtenLightFramegeometry = new THREE.TorusGeometry(11, 4, 5, 100);
		        // KichtenLight1 Frame 

		        var KichtenLight1Frame = new THREE.Mesh(KichtenLightFramegeometry,
		                KichtenLightFrameMaterial);
		        KichtenLight1Frame.position.set(418, 138, -145);
		        KichtenLight1Frame.rotation.x = Math.PI / 180 * 90;
		        scene.add(KichtenLight1Frame);

		        // KichtenLight2 Frame 
		        var KichtenLight2Frame = new THREE.Mesh(KichtenLightFramegeometry,
		                KichtenLightFrameMaterial);
		        KichtenLight2Frame.position.set(418, 138, -545);
		        KichtenLight2Frame.rotation.x = Math.PI / 180 * 90;
		        scene.add(KichtenLight2Frame);

		        // KichtenLight3 Frame 
		        var KichtenLight3Frame = new THREE.Mesh(KichtenLightFramegeometry,
		                KichtenLightFrameMaterial);
		        KichtenLight3Frame.position.set(418, 138, -345);
		        KichtenLight3Frame.rotation.x = Math.PI / 180 * 90;
		        scene.add(KichtenLight3Frame);



		}