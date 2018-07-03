		/*
		In this file with java script I created all objects which created bottom of my house
*/
	function createstorey()
	{




	        var Contexture = new THREE.TextureLoader().load(
	                'images/storey/storey.jpg');
	        var condigantionMat = new THREE.MeshPhongMaterial(
	        {
	                map: Contexture
	        });



	        var storey1Geo = new THREE.CylinderGeometry(20, 20, 600, 32);
	        var storey1 = new THREE.Mesh(storey1Geo, condigantionMat);
	        storey1.position.set(-1235, -340, 80);
	        scene.add(storey1);

	        var storey2Geo = new THREE.CylinderGeometry(20, 20, 600, 32);
	        var storey2 = new THREE.Mesh(storey2Geo, condigantionMat);
	        storey2.position.set(-1235, -340, -680);
	        scene.add(storey2);

	        var storey3Geo = new THREE.CylinderGeometry(20, 20, 600, 32);
	        var storey3 = new THREE.Mesh(storey3Geo, condigantionMat);
	        storey3.position.set(-635, -340, -680);
	        scene.add(storey3);

	        var storey4Geo = new THREE.CylinderGeometry(20, 20, 600, 32);
	        var storey4 = new THREE.Mesh(storey4Geo, condigantionMat);
	        storey4.position.set(-203, -340, -680);
	        scene.add(storey4);

	        var storey5Geo = new THREE.CylinderGeometry(20, 20, 600, 32);
	        var storey5 = new THREE.Mesh(storey5Geo, condigantionMat);
	        storey5.position.set(430, -340, -680);
	        scene.add(storey5);

	        var storey6Geo = new THREE.CylinderGeometry(20, 20, 600, 32);
	        var storey6 = new THREE.Mesh(storey6Geo, condigantionMat);
	        storey6.position.set(430, -340, 80);
	        scene.add(storey6);

	        // curved storey
	        var curvedstorey1Geo = new THREE.CylinderGeometry(20, 20, 900,
	                32);
	        var curvedstorey1 = new THREE.Mesh(curvedstorey1Geo,
	                condigantionMat);
	        curvedstorey1.position.set(-1235, -340, -300);
	        curvedstorey1.rotation.x = Math.PI / 180 * 55;
	        scene.add(curvedstorey1);

	        var curvedstorey2Geo = new THREE.CylinderGeometry(20, 20, 900,
	                32);
	        var curvedstorey2 = new THREE.Mesh(curvedstorey2Geo,
	                condigantionMat);
	        curvedstorey2.position.set(430, -340, -300);
	        curvedstorey2.rotation.x = Math.PI / 180 * 55;
	        scene.add(curvedstorey2);

	        var curvedstorey3Geo = new THREE.CylinderGeometry(20, 20, 770,
	                32);
	        var curvedstorey3 = new THREE.Mesh(curvedstorey3Geo,
	                condigantionMat);
	        curvedstorey3.position.set(-935, -340, -680);
	        curvedstorey3.rotation.z = Math.PI / 180 * 130;
	        scene.add(curvedstorey3);

	        var curvedstorey4Geo = new THREE.CylinderGeometry(20, 20, 820,
	                32);
	        var curvedstorey4 = new THREE.Mesh(curvedstorey4Geo,
	                condigantionMat);
	        curvedstorey4.position.set(120, -340, -680);
	        curvedstorey4.rotation.z = Math.PI / 180 * 50;


	}

	function createLadder()
	{

	        var woodTexture = new THREE.TextureLoader().load(
	                'images/storey/wood.png');
	        var laderMat = new THREE.MeshPhongMaterial(
	        {
	                map: woodTexture
	        });


	        var combinedLadder = new THREE.Geometry();


	        var ladder1Geo = new THREE.CylinderGeometry(5, 5, 700, 32);
	        var ladder1 = new THREE.Mesh(ladder1Geo);
	        ladder1.position.set(-200, -240, 110);

	        var ladder2Geo = new THREE.CylinderGeometry(5, 5, 700, 32);
	        var ladder2 = new THREE.Mesh(ladder2Geo);
	        ladder2.position.set(-300, -240, 110);


	        var ladder1StepGeo = new THREE.CylinderGeometry(5, 5, 100, 32);
	        var ladder1Step = new THREE.Mesh(ladder1StepGeo);
	        ladder1Step.rotation.z = Math.PI / 180 * 90;
	        ladder1Step.position.set(-250, -480, 110);

	        var ladder2StepGeo = new THREE.CylinderGeometry(5, 5, 100, 32);
	        var ladder2Step = new THREE.Mesh(ladder2StepGeo);
	        ladder2Step.rotation.z = Math.PI / 180 * 90;
	        ladder2Step.position.set(-250, -380, 110);

	        var ladder3StepGeo = new THREE.CylinderGeometry(5, 5, 100, 32);
	        var ladder3Step = new THREE.Mesh(ladder3StepGeo);
	        ladder3Step.rotation.z = Math.PI / 180 * 90;
	        ladder3Step.position.set(-250, -280, 110);

	        var ladder4StepGeo = new THREE.CylinderGeometry(5, 5, 100, 32);
	        var ladder4Step = new THREE.Mesh(ladder4StepGeo);
	        ladder4Step.rotation.z = Math.PI / 180 * 90;
	        ladder4Step.position.set(-250, -180, 110);

	        var ladder5StepGeo = new THREE.CylinderGeometry(5, 5, 100, 32);
	        var ladder5Step = new THREE.Mesh(ladder5StepGeo);
	        ladder5Step.rotation.z = Math.PI / 180 * 90;
	        ladder5Step.position.set(-250, -80, 110);


	        var ladder6StepGeo = new THREE.CylinderGeometry(5, 5, 100, 32);
	        var ladder6Step = new THREE.Mesh(ladder6StepGeo);
	        ladder6Step.rotation.z = Math.PI / 180 * 90;
	        ladder6Step.position.set(-250, 20, 110);

	        THREE.GeometryUtils.merge(combinedLadder, ladder1);
	        THREE.GeometryUtils.merge(combinedLadder, ladder2);
	        THREE.GeometryUtils.merge(combinedLadder, ladder1Step);
	        THREE.GeometryUtils.merge(combinedLadder, ladder2Step);
	        THREE.GeometryUtils.merge(combinedLadder, ladder3Step);
	        THREE.GeometryUtils.merge(combinedLadder, ladder4Step);
	        THREE.GeometryUtils.merge(combinedLadder, ladder5Step);
	        THREE.GeometryUtils.merge(combinedLadder, ladder6Step);

	        var ladder = new THREE.Mesh(combinedLadder, laderMat);
	        ladder.castShadow = true;
	        scene.add(ladder);


	}