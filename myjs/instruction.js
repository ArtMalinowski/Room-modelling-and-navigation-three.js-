		/*
				In this file with java script I function with my instruciton
		*/
		// event with instruction 
		function Instruction()
		{

		    this.start = function()
		    {
		        // what instruction will show 
		        this.dispatchEvent(
		        {
		            type: 'start',
		            message: '----INSTRUCNTION FOR MY Assignment----' +
		                '\npress !!!! m !!!!  to turn off the moon ' +
		                '\npress !!!! n !!!! to trun on the moon!' +
		                '\npress !!!! t !!!! to trun on the lights in house!' +
		                '\npress !!!! f !!!! to trun off the lights!' +
		                '\npress !!!! w !!!! to move up!' +
		                '\npress !!!! s !!!! to move down!' +
		                '\npress !!!! d !!!! to move right!' +
		                '\npress !!!! a !!!! to move left!' +
		                '\npress !!!! e !!!! to move forward!' +
		                '\npress !!!! q !!!! to move back!' +
		                '\npress !!!! left arrow !!!! to move light box to left!' +
		                '\npress !!!! right arrow !!!! to move light box to right!' +
		                '\npress !!!! top arrow !!!! to move light box to top!' +
		                '\npress !!!! down arrow !!!! to move light box to down!' +
		                '\npress !!!! space !!!!!  to start tv ' +
		                '\npress !!!! p !!!!!  to pause tv' +
		                '\npress !!!! c !!!!!  to close door' +
		                '\npress !!!! o !!!!!  to open tv' +
		                '\npress !!!! I !!!!!  to see instruction again'
		        });

		    };

		}