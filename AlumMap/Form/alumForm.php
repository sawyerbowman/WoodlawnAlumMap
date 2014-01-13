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

$today = date('Y-M-d');
$currentday = substr($today, 9, 2);
$currentmonth = substr($today, 5, 3);
$currentyear = substr($today, 0, 4);

include_once('alumFormEdit.php');

?>

<script src="http://jqueryjs.googlecode.com/files/jquery-1.3.1.min.js"> </script>
<script>
$(function () {
    $('fieldset.universityinfo').hide();
    $('input[name="universityinformation"]').click(function () {
        if (this.checked) {
            $('fieldset.universityinfo').show();
        } else {
            $('fieldset.universityinfo').hide();
        }
    });
});

$(function () {
    $('fieldset.jobinfo').hide();
    $('input[name="jobinformation"]').click(function () {
        if (this.checked) {
            $('fieldset.jobinfo').show();
        } else {
            $('fieldset.jobinfo').hide();
        }
    });
});
</script>
<style>
@import "../StyleSheets/styles.css";
</style>

<form method="POST" id="alumForm" name="alumForm">

<p align="center"><span style="font-family: verdana,arial,helvetica; color: #336633; font-size: 16pt">
<strong>What Are You Up To?</strong></span></p>
<p align="center"><span style="font-family: verdana,arial,helvetica; color: #336633; font-size: 12pt">
Tell us about where you are, what you're doing, and more!</span></p>

<br>

<fieldset>
	<legend><span style="color: green;">Your Information</span></legend>
		<table>
			<tr><td>First Name</td> <td><input type="text" size="17"
			id="firstname" name="firstname" value="<?php echo($_POST['firstname']); ?>"></td><td width="10"></td>
			<td>Last Name</td> <td><input type="text" size="17"
			id="lastname" name="lastname" value="<?php echo($_POST['lastname']); ?>"></td></tr>
			<tr><td>Email</td> <td><input type="text" size="17"
			id="email" name="email" value="<?php echo($_POST['email']); ?>"></td><td width="10"></td></tr>
		</table>
		<table>
			<tr><td>Woodlawn Class Year</td> <td><select id="classyear" name="classyear">
			<?php 
			if ($currentmonth == "Jan" || $currentmonth == "Feb" || $currentmonth == "Mar" || $currentmonth == "Apr"){
				$years = range("2010", $currentyear-1);
			}
			else {
				$years = range("2010", $currentyear);
			}
			foreach($years as $year) {
				echo "<option value'" . $year . "' ";
				if ($year == $_POST['classyear']){
					echo(SELECTED);
				}
				echo ">" . $year . "</option>";
			}
			?>
			</select>
		</table>
		<table>
			<tr><td>How did Woodlawn best prepare you for college and the world beyond?</td>
			<tr><td> <textarea id="woodlawnprepare" name="woodlawnprepare" rows="5" cols="80" ><?php 
			if(isset($_POST['woodlawnprepare'])) {
			echo ($_POST['woodlawnprepare']); 
			}
			?></textarea></td></tr></tr>
			<tr><td>What do you miss most about Woodlawn?</td>
			<tr><td> <textarea id="woodlawnmemory" name="woodlawnmemory" rows="5" cols="80" ><?php 
			if(isset($_POST['woodlawnmemory'])) {
			echo ($_POST['woodlawnmemory']); 
			}
			?></textarea></td></tr></tr>
		</table>
</fieldset>

<br>

<fieldset>
	<legend><font color="green">Where are you?</font></legend>
		<table>
			<tr><td>City</td> <td><input type="text" size="40"
			id="alumcity" name="alumcity" value="<?php echo($_POST['alumcity']); ?>"></td><td width="10"></td>
			
			<td>State</td> <td><select
			id="alumstate" name="alumstate">
			<?php 
			$states = array("","AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA",
					        "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM",
					        "NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA",
					        "WV","WI","WY");
			foreach ($states as $state) {
				echo "<option value'" . $state ."' ";
				if ($_POST['alumstate'] == null){
					if ($state == "NC") echo("SELECTED");
					echo ">" . $state . "</option>";
				}
				else {
					if ($state == $_POST['alumstate']){
						echo(SELECTED);
					}
					echo ">" . $state . "</option>";
				}	
			}
			
			?>
			</select>
			<tr><td>Country</td> <td><input type="text" size="20" 
			id="alumcountry" name="alumcountry" value="<?php 
			if ($_POST['alumcountry'] == null) {
				echo("United States of America");
			}
			else{
				echo($_POST['alumcountry']);
			}
			?>"
			></td><td width="10"></td></tr>
		</table>
</fieldset>

<br>

<fieldset>
	<legend><span style="color: green;">College Information</span></legend>
		<table>
			<tr><td>College</td> <td><input type="text" size="17"
			id="college" name="college" value="<?php echo($_POST['college']); ?>"></td><td width="10"></td>
			<td>College Class Year</td> <td><input type="text" size="17"
			id="collegeyear" name="collegeyear" value="<?php echo($_POST['collegeyear']); ?>"></td></tr>
		</table>
		<table>
			<tr><td>Major</td> <td><input type="text" size="17"
			id="major" name="major" value="<?php echo($_POST['major']); ?>"></td>
			<td>Minor</td> <td><input type="text" size="17"
			id="minor" name="minor" value="<?php echo($_POST['minor']); ?>"></td></tr>
		</table>
		<table>
			<tr><td>Give a short summary about your school and what you're up to.</td>
			<tr><td> <textarea id="alumbio" name="alumbio" rows="5" cols="80" ><?php 
			if(isset($_POST['alumbio'])) {
			echo ($_POST['alumbio']); 
			}
			?></textarea></td></tr></tr>
		</table>
</fieldset>

<br>

<input type="checkbox" name="universityinformation"> Display/Hide Graduate School Information

<br>
<br>

<fieldset class="universityinfo">
	<legend><span style="color: green;">Graduate School Information</span></legend>
		<table>
			<tr><td>Graduate School</td> <td><input type="text" size="17"
			id="university" name="university" value="<?php echo($_POST['university']); ?>"></td><td width="10"></td>
			<td>Graduate School Class Year</td> <td><input type="text" size="17"
			id="universityyear" name="universityyear" value="<?php echo($_POST['universityyear']); ?>"></td></tr>
		</table>
		<table>
			<tr><td>Degree</td> <td><input type="text" size="17"
			id="universitymajor" name="universitymajor" value="<?php echo($_POST['universitymajor']); ?>"></td>
		</table>
		<table>
			<tr><td>Give a short summary about your school and what you're up to.</td>
			<tr><td> <textarea id="universitybio" name="universitybio" rows="5" cols="80" ><?php 
			if(isset($_POST['universitybio'])) {
			echo ($_POST['universitybio']); 
			}
			?></textarea></td></tr></tr>
		</table>
</fieldset>

<br>

<input type="checkbox" name="jobinformation"> Display/Hide Job Information

<br>
<br>

<fieldset class="jobinfo">
	<legend><span style="color: green;">Job Information</span></legend>
		<table>
			<tr><td>Company</td> <td><input type="text" size="17"
			id="company" name="company" value="<?php echo($_POST['company']); ?>"></td><td width="10"></td>
			<td>Job Position</td> <td><input type="text" size="17"
			id="job" name="job" value="<?php echo($_POST['job']); ?>"></td></tr>
		</table>
		<table>
			<tr><td>Give a short summary about your job and what you're up to.</td>
			<tr><td> <textarea id="jobbio" name="jobbio" rows="5" cols="80" ><?php 
			if(isset($_POST['jobbio'])) {
			echo ($_POST['jobbio']); 
			}
			?></textarea></td></tr></tr>
		</table>
</fieldset>

<?php
$college = $_POST['college'];
$university = $_POST['university'];
$company = $_POST['company'];
$city = $_POST['alumcity'];
$state = $_POST['alumstate'];
$country = $_POST['alumcountry'];
if ($university == null && $company == null && $college != null){
	$address = "$college $city $state $country";
}
elseif ($company == null && $university != null) {
	$address = "$university $city $state $country";
}
elseif ($company != null) {
	$address = "$company $city $state $country";
}
else {
	$address = "$city $state $country";
}

//echo($address);

?>

<input type="hidden" type="text" size="17"
id="address" name="address" value="<?php echo($address); ?>">

<input type="hidden" type="text" size="17"
id="longitude" name="longitude" value="">

<input type="hidden" type="text" size="17"
id="latitude" name="latitude" value="">

<br><br>

<button type="submit" value="_form_submit" name="_form_submit">Submit Form </button>
<button type="reset" value="Clear" name="Clear All">Clear Form</button>

</form>

<?php 
include('../HeaderFooter/footer.html');
?>