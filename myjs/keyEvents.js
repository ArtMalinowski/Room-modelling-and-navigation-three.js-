		/*
				In this file with java script I created fucntion fiwht key events to control movment and many other interactions
		*/
		// craet events what happened when we press some key
		var openDoor = false;
		function keyEvents()
		{
		    document.addEventListener("keydown", onDocumentKeyDown,
		        false);

		    function onDocumentKeyDown(event)
		    {
		        var keyCode = event.which;
		        if (keyCode == 40)
		        {
		            LampBox.position.y -= xSpeed; // lamp box go down
		        }
		        else if (keyCode == 38)
		        {
		            LampBox.position.y += xSpeed; // lamp box go up
		        }
		        else if (keyCode == 39)
		        {
		            LampBox.position.x += xSpeed; // lamp box go left
		        }
		        else if (keyCode == 37)
		        {
		            LampBox.position.x -= xSpeed; // lamp box go right
		        }
		        else if (keyCode == 81)
		        {
		            camera.position.z += xSpeed; // camera move forward
		        }
		        else if (keyCode == 69)
		        {
		            camera.position.z -= xSpeed; // lamp move back
		        }
		        else if (keyCode == 73)
		        {
		            Instruction.start(); // show instruction
		        }
		        else if (keyCode == 80)
		        {
		            TVvideo.pause(); // pause TV
		        }
		        else if (keyCode == 32)
		        {
		            TVvideo.play(); // start TV
		        }
		        else if (keyCode == 79)
		        {   if(openDoor==false){
		            Door.rotation.x = Math.PI / 180 * 90;
		            Door.rotation.z = Math.PI / 180 * 90; // open Door
		            Door.position.x += 45;
		            Door.position.z -= 50;
					openDoor = true;
				}
		        }
		        else if (keyCode == 67)
		        {	
					if(openDoor==true){
		            Door.rotation.x = Math.PI / 180 * 90;
		            Door.rotation.z = Math.PI / 180; 
		            Door.position.x -= 45;
		            Door.position.z += 50; // close Door
					openDoor = false;
					}
		        }
		        else if (keyCode == 70)
		        {
		            // turn off all lights
		            LampBox.intensity = 0;
					LampBox.castShadow = false;
		            KichtenLight1.intensity = 0;
		            KichtenLight2.intensity = 0;
		            KichtenLight3.intensity = 0;
		        }
		        else if (keyCode == 84)
		        {
		            // turn on all lights
		            LampBox.intensity = 0.5;
					LampBox.castShadow = true;
		            KichtenLight1.intensity = 0.1;
		            KichtenLight2.intensity = 0.1;
		            KichtenLight3.intensity = 0.1;
		        }
		        else if (keyCode == 77)
		        {
		            // turn off the moon 
		            moonLight.add(new THREE.Mesh(moonGeo,
		                new THREE.MeshBasicMaterial(
		                {
		                    color: 0x000000
		                })));
		            moonLight.intensity = 0;
					moonLight.castShadow = false;
		        }
		        else if (keyCode == 78)
		        {
		            // turn on the moon
		            moonLight.add(new THREE.Mesh(moonGeo,
		                new THREE.MeshBasicMaterial(
		                {
		                    color: 0xffffff
		                })));
		            moonLight.intensity = 2;
					moonLight.castShadow = true;
		        }
		    };
		}