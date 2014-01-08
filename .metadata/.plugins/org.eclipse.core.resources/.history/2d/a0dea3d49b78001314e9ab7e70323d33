<?php

/*
 * Copyright 2014 by Sawyer Bowman and Karen Bowman. This program is 
 * made originally for Woodlawn School, a nonprofit private school in
 * Davidson, NC. It comes with absolutely no warranty.  You can redistribute 
 * and/or modify it under the terms of the GNU Public License as published
 * by the Free Software Foundation (see <http://www.gnu.org/licenses/).
*/

/*
 *  a form for Alumni from Woodlawn School
 *	@Sawyer Bowman
 *	@version 01/03/2014
 */
 
include('../HeaderFooter/header.html');
include('alumFormValidate.php');
	if(!array_key_exists('_form_submit', $_POST)){
		//the form has not been submitted, so show it
		include('alumForm.php');
	}
	else {
		//form has been submitted, so validate it
		//step 1: errors array lists problems on form submitted
		$errors = validateForm();
		//get rid of 0th position
		array_shift($errors);
		//step 2: display the errors on the form to fix
		if($errors){
			//echo($errors[0]);
			showErrors($errors);
			include('alumForm.php');
		}
		else {
			//This was a successful form submission
			include('alumForm2.php');
		}
		echo('</div>');
		echo('</div></body></html>');
		die();
	}
	?>
</div>
</body>
</html>
