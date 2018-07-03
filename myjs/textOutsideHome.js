		/*
		In this file with java script I created big welcome text outside my house
*/


function textOutsideHome(){

                // create text which used font.json 
                var textLoader = new THREE.FontLoader();

                textLoader.load('fonts/font.json', function(font)
                {

                        var welcomeTextGeometry = new THREE.TextGeometry(
                                "Welcome in My Home !!!",
                                {
                                        font: font,
                                        size: 150,
                                        height: 150,
                                        curveSegments: 12,
                                        bevelThickness: 1,
                                        bevelSize: 1,
                                        bevelEnabled: true

                                });
                        var welcomeTextMaterial = new THREE.MeshPhongMaterial(
                        {
                                color: 0xf80000,
                                specular: 0xffffff
                        });
                        var welcomeTextMesh = new THREE.Mesh(
                                welcomeTextGeometry,
                                welcomeTextMaterial);
                        welcomeTextMesh.position.set(-1000, 600,
                                1000)
                        welcomeTextMesh.rotation.y = Math.PI /
                                180 * 135;
                        scene.add(welcomeTextMesh);

                });
				}