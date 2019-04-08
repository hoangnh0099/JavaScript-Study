<!-- if(1>0) -->
			<!-- { -->
				<!-- alert('1>0'); -->
			<!-- } -->
			
			<!-- if(1==0) -->
			<!-- { -->
				<!-- alert('1==0'); -->
			<!-- } -->
			<!-- else -->
			<!-- { -->
				<!-- alert('1 is not equal to 0') -->
			<!-- } -->
			
			var age = prompt('Please type your age?');
			var ageNumber = parseInt(age);
			if(ageNumber < 16)
			{
				alert('You don\'t have permission to access this page');
			}
			else if(ageNumber < 18)
			{
				alert('You have restricted permission to access this page');
			}
			else{
				alert('Welcome to my page');
			}