		/*
		In this file with java script I created all elements which created fence in the front of my house
*/

function fence()
{
        var textureShineMetal = new THREE.TextureLoader().load(
                'images/Fence/shiny-white-metal.jpg');

        var fenceMat = new THREE.MeshPhongMaterial(
        {
                shininess: 100,
                map: textureShineMetal
        });

        var combinedFence = new THREE.Geometry();
        // top fence
        var FenceGeometry = new THREE.CylinderGeometry(8, 8, 500, 32);
        var topFence = new THREE.Mesh(FenceGeometry);
        topFence.rotation.z = Math.PI / 180 * 90;
        topFence.position.set(-550, 100, 80);
        //	scene.add( topFence );

        // 1 part fence
        var partFence1Geo = new THREE.CylinderGeometry(8, 8, 100, 32);
        var partFence1 = new THREE.Mesh(partFence1Geo);
        partFence1.position.set(-310, 50, 80);

        // 2 part fence
        var partFence2Geo = new THREE.CylinderGeometry(8, 8, 100, 32);
        var partFence2 = new THREE.Mesh(partFence2Geo);
        partFence2.position.set(-410, 50, 80);

        // 3 part fence
        var partFence3Geo = new THREE.CylinderGeometry(8, 8, 100, 32);
        var partFence3 = new THREE.Mesh(partFence3Geo);
        partFence3.position.set(-510, 50, 80);

        // 4 part fence
        var partFence4Geo = new THREE.CylinderGeometry(8, 8, 100, 32);
        var partFence4 = new THREE.Mesh(partFence4Geo);
        partFence4.position.set(-610, 50, 80);

        // 5 part fence
        var partFence5Geo = new THREE.CylinderGeometry(8, 8, 100, 32);
        var partFence5 = new THREE.Mesh(partFence5Geo);
        partFence5.position.set(-710, 50, 80);

        THREE.GeometryUtils.merge(combinedFence, topFence);
        THREE.GeometryUtils.merge(combinedFence, partFence1);
        THREE.GeometryUtils.merge(combinedFence, partFence2);
        THREE.GeometryUtils.merge(combinedFence, partFence3);
        THREE.GeometryUtils.merge(combinedFence, partFence4);
        THREE.GeometryUtils.merge(combinedFence, partFence5);
        var fence = new THREE.Mesh(combinedFence, fenceMat);


        fence.castShadow = true;
        scene.add(fence);


}