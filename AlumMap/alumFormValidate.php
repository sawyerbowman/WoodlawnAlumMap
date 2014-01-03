<?php
/*
 * Copyright 2014 by Sawyer Bowman and Karen Bowman. This program is 
 * made originally for Woodlawn School, a nonprofit private school in
 * Davidson, NC. It comes with absolutely no warranty.  You can redistribute 
 * and/or modify it under the terms of the GNU Public License as published
 * by the Free Software Foundation (see <http://www.gnu.org/licenses/).
*/

/*
 *  validates information from the alum form
 *	@Sawyer Bowman
 *	@version 01/03/2014
 */
 
function validateForm() {
	$errors[] = array();
	if($_POST['alumbio'] == null){
		$errors[] = 'Please enter a short bio.';
	}
	if($_POST['alumcity'] == null){
		$errors[] = 'Please enter a city.';
	}
	if($_POST['alumcountry'] == 'United States of America' && $_POST['alumstate'] == null){
		$errors[] = 'Please enter a state.';
	}
	if($_POST['alumcountry'] == null){
		$errors[] = 'Please enter a country.';
	}
	if($_POST['firstname'] == null){
		$errors[] = 'Please enter a first name.';
	}
	if($_POST['lastname'] == null){
		$errors[] = 'Please enter a last name.';
	}
	if($_POST['alumcity'] == null){
		$errors[] = 'Please enter a city.';
	}
	if($_POST['alumcountry'] == 'United States of America' && $_POST['alumstate'] == null){
		$errors[] = 'Please enter a state.';
	}
	if($_POST['classyear'] == null){
		$errors[] = 'Please enter a class year.';
	}
	if(!$errors)
        return "";
    else
        return $errors;
}

function showErrors($e){
	//should display all of the errors in our array
	?>
	<div class="warning">
	<ul>
	<?php 
	foreach($e as $error){
		echo("<li><strong><font color=\"red\">".$error."</font></strong></li>\n");
	}
	?>
	</ul></div>
	<?php
}
?>