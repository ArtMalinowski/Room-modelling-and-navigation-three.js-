		/*
				In this file with java script I created all objects in bedroom also walls and floor
		*/
		// create Bedroom walls
		function createBedroomWalls()
		{
		    glassDarkmaterial = new THREE.MeshPhongMaterial(
		    {
		        color: 0x00000f,
		        transparent: true,
		        opacity: 0.6
		    });
		    // left wall
		    var leftWallGeometry = new THREE.BoxGeometry(810, 7, 200);
		    var leftWall = new THREE.Mesh(leftWallGeometry, openWallMaterial);
		    leftWall.rotation.x = Math.PI / 180 * 90;
		    leftWall.rotation.z = Math.PI / 180 * 90;
		    leftWall.position.set(-1253, 100, -300);
		    scene.add(leftWall);

		    // back wall
		    var rightWallGeometry = new THREE.BoxGeometry(450, 10, 200);
		    var backWall = new THREE.Mesh(rightWallGeometry, openWallMaterial);
		    backWall.rotation.x = Math.PI / 180 * 90;
		    backWall.position.set(-1025, 100, -700);
		    scene.add(backWall);

		    // front wall
		    var frontWallGeometry = new THREE.BoxGeometry(450, 10, 200);
		    var FrontWall = new THREE.Mesh(frontWallGeometry, glassDarkmaterial);
		    FrontWall.rotation.x = Math.PI / 180 * 90;
		    FrontWall.position.set(-1025, 100, 95);
		    scene.add(FrontWall);

		    // Right wall

		    var sideWalls = new THREE.BoxGeometry(200, 10, 200);
		    var rightWall = new THREE.Mesh(sideWalls, glassDarkmaterial);
		    rightWall.rotation.x = Math.PI / 180 * 90;
		    rightWall.rotation.z = Math.PI / 180 * 90;
		    rightWall.position.set(-800, 100, 0);
		    scene.add(rightWall);
		}

		// create bedroom floor
		function createBedroomFloor()
		{

		    var textureFloor = new THREE.TextureLoader().load(
		        'images/Bedroom/dark-wood.jpg');
		    var floorMat = new THREE.MeshLambertMaterial(
		    {
		        map: textureFloor
		    });
		    // Floor
		    var floorGeometry = new THREE.BoxGeometry(795, 10, 455);
		    var floor = new THREE.Mesh(floorGeometry, floorMat);
		    floor.rotation.y = Math.PI / 180 * 90;
		    floor.position.set(-1028, 5, -300);
		    scene.add(floor);
		}

		// create bedroom as 1 object
		function createBedroomBed()
		{

		    var bedTexture = new THREE.TextureLoader().load(
		        'images/Bedroom/bed.jpg');
		    var bedMat = new THREE.MeshLambertMaterial(
		    {
		        map: bedTexture
		    });

		    var pillowTexture = new THREE.TextureLoader().load(
		        'images/Bedroom/red-Pillow.jpg');
		    var pillowMat = new THREE.MeshPhongMaterial(
		    {
		        map: pillowTexture
		    });

		    var sheetTexture = new THREE.TextureLoader().load(
		        'images/Bedroom/black-sheet.jpg');
		    var sheetMat = new THREE.MeshPhongMaterial(
		    {
		        map: sheetTexture
		    });

		    var WholeBed = new THREE.Group();

		    // bed 

		    var bedGeometry = new THREE.BoxGeometry(400, 100, 300);
		    var bed = new THREE.Mesh(bedGeometry, bedMat);
		    bed.rotation.y = Math.PI / 180 * 90;
		    bed.position.set(-1028, 20, -300);
		    WholeBed.add(bed);

		    //pillow1 
		    var pillow1Geo = new THREE.CylinderGeometry(20, 20, 100, 32);
		    var pillow1 = new THREE.Mesh(pillow1Geo, pillowMat);
		    pillow1.rotation.z = Math.PI / 180 * 90;
		    pillow1.position.set(-958, 110, -450);
		    WholeBed.add(pillow1);

		    //pillow2
		    var pillow2Geo = new THREE.CylinderGeometry(20, 20, 100, 32);
		    var pillow2 = new THREE.Mesh(pillow1Geo, pillowMat);
		    pillow2.rotation.z = Math.PI / 180 * 90;
		    pillow2.position.set(-1108, 110, -450);
		    WholeBed.add(pillow2);

		    //sheet
		    var sheetGeometry = new THREE.BoxGeometry(400, 20, 300);
		    var sheet = new THREE.Mesh(sheetGeometry, sheetMat);
		    sheet.rotation.y = Math.PI / 180 * 90;
		    sheet.position.set(-1028, 80, -300);
		    WholeBed.add(sheet);
		    scene.add(WholeBed);
		}

		// create bedroom lamps
		function createBedroomLamps()
		{

		    var lamp1 = new THREE.Group();

		    // lamp storey1
		    var lampCodignation1Geo = new THREE.CylinderGeometry(3, 20, 10, 32);
		    var lampCodignation1 = new THREE.Mesh(lampCodignation1Geo, lmapBaseMat);
		    lampCodignation1.position.set(-1108, 15, -600);
		    lamp1.add(lampCodignation1);

		    // lampstick1

		    var lampstick1Geo = new THREE.CylinderGeometry(3, 3, 140, 32);
		    var lampstick1 = new THREE.Mesh(lampstick1Geo, lampStickMat);
		    lampstick1.position.set(-1108, 85, -600);
		    lamp1.add(lampstick1);


		    // lampLight1
		    var lampLight1 = new THREE.PointLight(0xfffff0, 1, 400,2);
		    var lampLight1Geo = new THREE.SphereGeometry(15, 50, 50, 0, Math.PI * 2,
		        0, Math.PI * 2);
		    lampLight1.add(new THREE.Mesh(lampLight1Geo, new THREE.MeshBasicMaterial(
		    {
		        color: 0xfffff0
		    })));
		    lampLight1.position.set(-1108, 160, -600);
		    lamp1.add(lampLight1);
		    scene.add(lamp1);

		    var lamp2 = new THREE.Group();

		    // lamp storey2
		    var lampCodignation2Geo = new THREE.CylinderGeometry(3, 20, 10, 32);
		    var lampCodignation2 = new THREE.Mesh(lampCodignation2Geo, lmapBaseMat);
		    lampCodignation2.position.set(-908, 15, -600);
		    lamp2.add(lampCodignation2);

		    // lampstick2

		    var lampstick2Geo = new THREE.CylinderGeometry(3, 3, 140, 32);
		    var lampstick2 = new THREE.Mesh(lampstick2Geo, lampStickMat);
		    lampstick2.position.set(-908, 85, -600);
		    lamp2.add(lampstick2);


		    // lampLight2
		    var lampLight2 = new THREE.PointLight(0xfffff0, 1, 400,2);
		    var lampLight2Geo = new THREE.SphereGeometry(15, 50, 50, 0, Math.PI * 2,
		        0, Math.PI * 2);
		    lampLight2.add(new THREE.Mesh(lampLight2Geo, new THREE.MeshBasicMaterial(
		    {
		        color: 0xfffff0
		    })));
		    lampLight2.position.set(-908, 160, -600);
		    lamp2.add(lampLight2);
		    scene.add(lamp2);


		}