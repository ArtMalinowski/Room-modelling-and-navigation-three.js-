		/*
				In this file with java script I created all objects in living room also walls and floor
		*/
		// create Door to home 
		function createDoor()
		{

		    var textureDoor = new THREE.TextureLoader().load(
		        'images/livingRoom/Door.jpg');
		    var doorMat = new THREE.MeshLambertMaterial(
		    {
		        map: textureDoor
		    });
		    var doorGeometry = new THREE.BoxGeometry(100, 4, 200);
		    Door = new THREE.Mesh(doorGeometry, doorMat);
		    Door.rotation.x = Math.PI / 180 * 90;
		    Door.position.set(-250, 100, -100);
		    Door.castShadow = true;
		    scene.add(Door);

		}

		// this function create tv with special video material to create that i used "https://threejs.org/docs/#api/textures/VideoTexture"
		function createTvSet()
		{
		    // set tv screnn which will take video from image folder
		    TVvideo = document.createElement('video');
		    TVvideo.src = "images/Epic_Sax_Guy.ogv";
		    // load this video 
		    TVvideo.load();
		    // play this video
		    TVvideo.play();

		    // video will be canvas 
		    video = document.createElement('canvas');
		    // setting resolution for video
		    video.width = 372;
		    video.height = 180;

		    // seting screen contest 
		    screenContext = video.getContext('2d');
		    // method draws a "filled" rectangle.  The default color of the fill is black.
		    screenContext.fillRect(0, 0, video.width, video.height);

		    // setting texture of video 
		    videoTexture = new THREE.Texture(video);
		    // setting as linear fillter both of them help is with avoiding a lot of errors
		    // setting what happened when texel covers less than one pixel
		    videoTexture.minFilter = THREE.LinearFilter;
		    //setting what happened when texel covers more than one pixel
		    videoTexture.magFilter = THREE.LinearFilter;
		    // create material which will be video
		    var materialsForTV = [
		        new THREE.MeshPhongMaterial(
		        {
		            map: THREE.ImageUtils.loadTexture(
		                'images/livingRoom/silver_light_frame.jpg'
		            )
		        }), new THREE.MeshPhongMaterial(
		        {
		            map: THREE.ImageUtils.loadTexture(
		                'images/livingRoom/silver_light_frame.jpg'
		            )
		        }), new THREE.MeshPhongMaterial(
		        {
		            map: THREE.ImageUtils.loadTexture(
		                'images/livingRoom/silver_light_frame.jpg'
		            )
		        }),
		        new THREE.MeshBasicMaterial(
		        {
		            map: videoTexture,
		            overdraw: true,
		            side: THREE.DoubleSide
		        }),
		        new THREE.MeshPhongMaterial(
		        {
		            map: THREE.ImageUtils.loadTexture(
		                'images/livingRoom/silver_light_frame.jpg'
		            )
		        }),
		        new THREE.MeshPhongMaterial(
		        {
		            map: THREE.ImageUtils.loadTexture(
		                'images/livingRoom/silver_light_frame.jpg'
		            )
		        })
		    ];
		    // setting TV faces to not have video at each side 
		    var TVMaterials = new THREE.MeshFaceMaterial(materialsForTV);
		    // settin geometry for tv screen i set as video have resolution of 256x128  but unfortunetly have other but I still keep 
		    // this size for good looking
		    var TVvideoGeometry = new THREE.BoxGeometry(256, 10, 128);
		    // create mesh tv whcih will have video material
		    TV = new THREE.Mesh(TVvideoGeometry, TVMaterials);
		    // rotate tv to have video in correct rotation
		    TV.rotation.x = Math.PI / 180 * 90;
		    TV.rotation.y = Math.PI / 180 * 180;
		    // setting position
		    TV.position.set(-550, 110, -115);
		    // add tv to scene 
		    scene.add(TV);
		    // addint tv frame texture
		    var textureTvFrame = new THREE.TextureLoader().load(
		        'images/livingRoom/silver_light_frame.jpg');
		    var matTvFrame = new THREE.MeshPhongMaterial(
		    {
		        map: textureTvFrame
		    });
		    // addint tv frame geomery
		    var tvFrameGeo = new THREE.BoxGeometry(320, 5, 170);
		    // addint tv frame
		    var TVframe = new THREE.Mesh(tvFrameGeo, matTvFrame);
		    // setting tv position
		    TVframe.position.set(-550, 110, -110);
		    TVframe.rotation.x = Math.PI / 180 * 90;
		    scene.add(TVframe);


		}
		// create walls in living room
		function createLivingRoomWalls()
		{

		    // Right wall
		    var rightWallGeometry = new THREE.BoxGeometry(500, 10, 200);
		    var rightWall = new THREE.Mesh(rightWallGeometry, isnsideWallMaterial);
		    rightWall.rotation.x = Math.PI / 180 * 90;
		    rightWall.rotation.z = Math.PI / 180 * 90;
		    rightWall.position.set(200, 100, -355);

		    scene.add(rightWall);

		    // Left wall
		    var leftWallGeometry = new THREE.BoxGeometry(500, 10, 200);
		    var leftWall = new THREE.Mesh(leftWallGeometry, isnsideWallMaterial);
		    leftWall.rotation.x = Math.PI / 180 * 90;
		    leftWall.rotation.z = Math.PI / 180 * 90;
		    leftWall.position.set(-800, 100, -350);

		    scene.add(leftWall);

		    // Back wall
		    var backWallGeometry = new THREE.BoxGeometry(1000, 10, 200);
		    var backWall = new THREE.Mesh(backWallGeometry, openWallMaterial);
		    backWall.rotation.x = Math.PI / 180 * 90;
		    backWall.position.set(-300, 100, -700);

		    scene.add(backWall);

		    // front wall
		    var frontWallGeometry = new THREE.BoxGeometry(500, 10, 200);
		    var FrontWall = new THREE.Mesh(frontWallGeometry, openWallMaterial);
		    FrontWall.rotation.x = Math.PI / 180 * 90;
		    FrontWall.position.set(-550, 100, -100);

		    scene.add(FrontWall);
		}
		// create floor in living room
		function createLivingRoomFloor()
		{


		    var textureFloor = new THREE.TextureLoader().load(
		        'images/livingRoom/Wooden-Planks-Texture.jpg');
		    var floorMat = new THREE.MeshLambertMaterial(
		    {
		        map: textureFloor
		    });

		    // Floor
		    var floorGeometry = new THREE.BoxGeometry(990, 10, 590);
		    var floor = new THREE.Mesh(floorGeometry, floorMat);
		    floor.position.set(-300, 5, -400);
		    floor.receiveShadow = true;
		    scene.add(floor);
		}
		// create wardrobe in libing room which have difrrent faces 
		function createLivingRoomWardrobe()
		{

		    var materialswWardrobe = [
		        new THREE.MeshLambertMaterial(
		        {
		            map: THREE.ImageUtils.loadTexture(
		                'images/livingRoom/dark_wood_wardrobe.jpg'
		            )
		        }),
		        new THREE.MeshLambertMaterial(
		        {
		            map: THREE.ImageUtils.loadTexture(
		                'images/livingRoom/dark_wood_wardrobe.jpg'
		            )
		        }),
		        new THREE.MeshLambertMaterial(
		        {
		            map: THREE.ImageUtils.loadTexture(
		                'images/livingRoom/wardrobe.png'
		            )
		        }),
		        new THREE.MeshLambertMaterial(
		        {
		            map: THREE.ImageUtils.loadTexture(
		                'images/livingRoom/dark_wood_wardrobe.jpg'
		            )
		        }),
		        new THREE.MeshLambertMaterial(
		        {
		            map: THREE.ImageUtils.loadTexture(
		                'images/livingRoom/dark_wood_wardrobe.jpg'
		            )
		        }),
		        new THREE.MeshLambertMaterial(
		        {
		            map: THREE.ImageUtils.loadTexture(
		                'images/livingRoom/dark_wood_wardrobe.jpg'
		            )
		        })
		    ];

		    var wardrobeMaterials = new THREE.MeshFaceMaterial(materialswWardrobe);

		    // wardrobe 
		    var wardrobeGeometry = new THREE.BoxGeometry(700, 50, 200);
		    var wardrobe = new THREE.Mesh(wardrobeGeometry, wardrobeMaterials);
		    wardrobe.rotation.x = Math.PI / 180 * 90;
		    wardrobe.position.set(-300, 100, -670);
			wardrobe.castShadow = true;
		    scene.add(wardrobe);
		}
		// create simple shining table 
		function createLivingRoomTable()
		{
		    var textureBaseTable = new THREE.TextureLoader().load(
		        'images/livingRoom/black-plastic.jpg');
		    var tableBaseMaterial = new THREE.MeshPhongMaterial(
		    {
		        map: textureBaseTable
		    });
		    var textureTable = new THREE.TextureLoader().load(
		        'images/livingRoom/white-plastic.jpg');
		    var tableMaterial = new THREE.MeshPhongMaterial(
		    {
		        map: textureTable,
		        shininess: 100
		    });
		    // table 
		    var tableGeometry = new THREE.CylinderGeometry(125, 125, 10, 32);
		    var table = new THREE.Mesh(tableGeometry, tableMaterial);
		    table.rotation.y = Math.PI / 180 * 90;
		    table.position.set(-500, 85, -320);
		    table.castShadow = true;
			table.receiveShadow = true;
		    scene.add(table);

		    // table base
		    var tableBaseGeometry = new THREE.ConeGeometry(50, 80, 32);
		    var tableBase = new THREE.Mesh(tableBaseGeometry, tableBaseMaterial);
		    tableBase.position.set(-500, 50, -320);
		    tableBase.castShadow = true;
		    scene.add(tableBase);
		}

		// create leather black poufes 
		function createLivingRoomPoufes()
		{
		    var texturePoufe = new THREE.TextureLoader().load(
		        'images/livingRoom/dark-leather.jpg');
		    var poufeMaterial = new THREE.MeshLambertMaterial(
		    {
		        map: texturePoufe
		    });
		    // poufe1 to table 

		    var poufe1Geo = new THREE.CylinderGeometry(35, 45, 60, 16);
		    var poufe1 = new THREE.Mesh(poufe1Geo, poufeMaterial);
		    poufe1.position.set(-370, 40, -220);
		    poufe1.castShadow = true;
		    scene.add(poufe1);

		    // poufe2 to table 

		    var poufe2Geo = new THREE.CylinderGeometry(35, 45, 60, 16);
		    var poufe2 = new THREE.Mesh(poufe2Geo, poufeMaterial);
		    poufe2.position.set(-370, 40, -400);
		    poufe2.castShadow = true;
		    scene.add(poufe2);

		    // poufe3 to table 

		    var poufe3Geo = new THREE.CylinderGeometry(35, 45, 60, 16);
		    var poufe3 = new THREE.Mesh(poufe3Geo, poufeMaterial);
		    poufe3.position.set(-620, 40, -400);
		    poufe3.castShadow = true;
		    scene.add(poufe3);

		    // poufe4 to table 
		    var poufe4Geo = new THREE.CylinderGeometry(35, 45, 60, 16);
		    var poufe4 = new THREE.Mesh(poufe4Geo, poufeMaterial);
		    poufe4.position.set(-620, 40, -220);
		    poufe4.castShadow = true;

		    scene.add(poufe4);
		}
		// cretae mirror in living room
		function createLivingRoomMirror()
		{
		    var mirrorFrameTexture = new THREE.TextureLoader().load(
		        'images/livingRoom/mirrorFrame.jpg');
		    var mirrorFrameMaterial = new THREE.MeshPhongMaterial(
		    {
		        map: mirrorFrameTexture
		    });
		    // mirror 
		    var roundMirrorGeo = new THREE.CircleGeometry(50, 32);
		    roundMirrorCamera = new THREE.CubeCamera(1, 5000, 512);
		    scene.add(roundMirrorCamera);
		    var mirrorCubeMaterial = new THREE.MeshBasicMaterial(
		    {
		        envMap: roundMirrorCamera.renderTarget
		    });
		    roundMirror = new THREE.Mesh(roundMirrorGeo, mirrorCubeMaterial);
		    roundMirror.position.set(0, 100, -107);
		    roundMirror.rotation.x = Math.PI / 180 * 180;
		    roundMirrorCamera.position.set(0, 100, -107);
		    scene.add(roundMirror);

		    // mirror Frame 
		    var mirrorFramegeometry = new THREE.TorusGeometry(50, 4, 16, 100);
		    var mirrorFrame = new THREE.Mesh(mirrorFramegeometry,
		        mirrorFrameMaterial);
		    mirrorFrame.position.set(0, 100, -108);
		    mirrorFrame.rotation.x = Math.PI / 180 * 180;
		    scene.add(mirrorFrame);
		}

		// create lamp in livig room
		function createLivingRoomLamp()
		{
		    var lampBaseTexture = new THREE.TextureLoader().load(
		        'images/Lamp/black-metal.jpg');
		    lmapBaseMat = new THREE.MeshPhongMaterial(
		    {
		        shininess: 50,
		        map: lampBaseTexture
		    });
		    var lampBaseTexture = new THREE.TextureLoader().load(
		        'images/Lamp/black-metal.jpg');
		    lmapBaseMat = new THREE.MeshPhongMaterial(
		    {
		        shininess: 50,
		        map: lampBaseTexture
		    });

		    var lampSticktexture = new THREE.TextureLoader().load(
		        'images/Lamp/storey.jpg');
		    lampStickMat = new THREE.MeshPhongMaterial(
		    {
		        shininess: 50,
		        map: lampSticktexture
		    });
		    var LamplivingRoom = new THREE.Group();
		    // LamplivingRoom
		    var LamplivingRoomCodignation1Geo = new THREE.CylinderGeometry(3, 20,
		        10, 32);
		    var LamplivingRoomCodignation1 = new THREE.Mesh(
		        LamplivingRoomCodignation1Geo, lmapBaseMat);
		    LamplivingRoomCodignation1.position.set(0, 15, -400);
		    LamplivingRoom.add(LamplivingRoomCodignation1);

		    // LamplivingRoomstick1

		    var Lampliving1Geostick1Geo = new THREE.CylinderGeometry(3, 3, 140, 32);
		    var Lampliving1stick1 = new THREE.Mesh(Lampliving1Geostick1Geo,
		        lampStickMat);
		    Lampliving1stick1.position.set(0, 85, -400);
		    LamplivingRoom.add(Lampliving1stick1);


		    // LamplivingRoomLight1
		    var LamplivingRoomLight1 = new THREE.PointLight(0xfffff0, 0.1);
		    var Lampliving1Geo = new THREE.SphereGeometry(15, 50, 50, 0, Math.PI *
		        2, 0, Math.PI * 2);
		    LamplivingRoomLight1.add(new THREE.Mesh(Lampliving1Geo, new THREE.MeshBasicMaterial(
		    {
		        color: 0xfffff0
		    })));
		    LamplivingRoomLight1.position.set(0, 160, -400);
		    LamplivingRoom.add(LamplivingRoomLight1);
		    scene.add(LamplivingRoom);
		}