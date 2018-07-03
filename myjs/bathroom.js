		// create Floor in bathroom
		function createFloor()
		{
		        // Floor
		        var textureFloor = new THREE.TextureLoader().load(
		                'images/Bathroom/bathroom-floor-tile-texture.jpg');
		        var floorMat = new THREE.MeshPhongMaterial(
		        {
		                shininess: 100,
		                map: textureFloor
		        });

		        var floorGeometry = new THREE.BoxGeometry(390, 10, 190);
		        var floor = new THREE.Mesh(floorGeometry, floorMat);
		        scene.add(floor);
		}
		// create all walls in bathroom
		function createWalls()
		{

		        var FrontbathroomGeo = new THREE.BoxGeometry(410, 10, 200);
		        var sideWallsGeo = new THREE.BoxGeometry(190, 10, 200);
		        var backbathroomGeo = new THREE.BoxGeometry(310, 10, 200);

		        // Back wall
		        var backWall = new THREE.Mesh(backbathroomGeo, isnsideWallMaterial);
		        backWall.rotation.x = Math.PI / 180 * 90;
		        backWall.position.set(50, 100, -100);
		        scene.add(backWall);

		        // front wall
		        var FrontWall = new THREE.Mesh(FrontbathroomGeo, openWallMaterial);
		        FrontWall.rotation.x = Math.PI / 180 * 90;
		        FrontWall.position.set(0, 100, 100);
		        scene.add(FrontWall);

		        // Left wall
		        var leftWall = new THREE.Mesh(sideWallsGeo, openWallMaterial);
		        leftWall.rotation.x = Math.PI / 180 * 90;
		        leftWall.rotation.z = Math.PI / 180 * 90;
		        leftWall.position.set(-200, 100, 0);
		        scene.add(leftWall);

		        // Right wall
		        var rightWall = new THREE.Mesh(sideWallsGeo, isnsideWallMaterial);
		        rightWall.rotation.x = Math.PI / 180 * 90;
		        rightWall.rotation.z = Math.PI / 180 * 90;
		        rightWall.position.set(200, 100, 0);
		        scene.add(rightWall);
		}
		// creat eShow in bathroom
		function createShower()
		{

		        // creat glass door with transpare an opacity set for 0.3
		        var glassDoor = new THREE.MeshPhongMaterial(
		        {
		                color: 0x000000,
		                transparent: true,
		                opacity: 0.3
		        });

		        var ShowerDoorGeo = new THREE.BoxGeometry(190, 10, 200);

		        var showerBaseMaterials = [
		                new THREE.MeshPhongMaterial(
		                {
		                        map: THREE.ImageUtils.loadTexture(
		                                'images/Bathroom/marlbe.jpg'
		                        )
		                }),
		                new THREE.MeshPhongMaterial(
		                {
		                        map: THREE.ImageUtils.loadTexture(
		                                'images/Bathroom/marlbe.jpg'
		                        )
		                }),
		                new THREE.MeshPhongMaterial(
		                {
		                        map: THREE.ImageUtils.loadTexture(
		                                'images/Bathroom/ShowerTopbase.jpg'
		                        )
		                }),
		                new THREE.MeshPhongMaterial(
		                {
		                        map: THREE.ImageUtils.loadTexture(
		                                'images/Bathroom/marlbe.jpg'
		                        )
		                }),
		                new THREE.MeshPhongMaterial(
		                {
		                        map: THREE.ImageUtils.loadTexture(
		                                'images/Bathroom/marlbe.jpg'
		                        )
		                }),
		                new THREE.MeshPhongMaterial(
		                {
		                        map: THREE.ImageUtils.loadTexture(
		                                'images/Bathroom/marlbe.jpg'
		                        )
		                })
		        ];
		        var showerBaseGeo = new THREE.BoxGeometry(100, 20, 200);
		        var showerBaseMat = new THREE.MeshFaceMaterial(showerBaseMaterials);

		        // shower Base

		        var showerBase = new THREE.Mesh(showerBaseGeo, showerBaseMat);
		        showerBase.position.set(140, 15, 0);
		        scene.add(showerBase);

		        // shower Door 
		        var showerDoor = new THREE.Mesh(ShowerDoorGeo, glassDoor);
		        showerDoor.rotation.x = Math.PI / 180 * 90;
		        showerDoor.rotation.z = Math.PI / 180 * 90;
		        showerDoor.position.set(97, 100, 0);
		        scene.add(showerDoor);
		}

		// creat evase 
		function createSink()
		{


		        var textureSink = new THREE.TextureLoader().load(
		                'images/Bathroom/porcelain.jpg');
		        var sinkMat = new THREE.MeshBasicMaterial(
		        {
		                map: textureSink,
		                side: THREE.DoubleSide
		        });
		        var sinkGeometry = new THREE.CylinderGeometry(40, 17, 30, 4, 0, true);
		        var waterInSinkGeometry = new THREE.CylinderGeometry(38, 15, 25, 4);
		        var baseSinkGeometry = new THREE.CylinderGeometry(17, 17, 50, 32);


		        // sink
		        var sink = new THREE.Mesh(sinkGeometry, sinkMat);
		        sink.position.set(-150, 70, 30)
		        scene.add(sink);
		        // base sink

		        var baseSink = new THREE.Mesh(baseSinkGeometry, sinkMat);
		        baseSink.position.set(-150, 30, 30);
		        scene.add(baseSink);

		        // water in sink

		        var waterInSinkTexture = new THREE.TextureLoader().load(
		                "images/Bathroom/water.jpg");
		        waterInSinkTexture.wrapS = waterInSinkTexture.wrapT = THREE.RepeatWrapping;
		        waterInSinkTexture.offset.set(0, 0);
		        waterInSinkTexture.repeat.set(3, 3);
		        var waterInSinkMaterial = new THREE.MeshBasicMaterial(
		        {
		                map: waterInSinkTexture
		        });




		        var waterInSink = new THREE.Mesh(waterInSinkGeometry,
		                waterInSinkMaterial);

		        waterInSink.position.set(-150, 70, 30);
		        scene.add(waterInSink);

		}