<?php

/*
 * Copyright 2014 by Sawyer Bowman and Karen Bowman. This program is 
 * made originally for Woodlawn School, a nonprofit private school in
 * Davidson, NC. It comes with absolutely no warranty.  You can redistribute 
 * and/or modify it under the terms of the GNU Public License as published
 * by the Free Software Foundation (see <http://www.gnu.org/licenses/).
*/

/*
 *  submission form for Alumni from Woodlawn School
 *	@Sawyer Bowman
 *	@version 01/03/2014
 */

$today = date('Y-M-d');
$currentday = substr($today, 9, 2);
$currentmonth = substr($today, 5, 3);
$currentyear = substr($today, 0, 4);

?>

<form method="POST" id="alumForm2" name="alumForm2"
action="http://us.1.p10.webhosting.yahoo.com/forms?login=dwayneb">

<input type="hidden" name="next_url" value="http://localhost/WoodlawnAlumMap/AlumMap/Form/alumThankYou.php">


<p>Your form is being processed... Please wait!</p>


			<input type="hidden" type="text" size="17"
			id="firstname" name="firstname" value="<?php echo($_POST['firstname']); ?>">
			<input type="hidden" type="text" size="17"
			id="lastname" name="lastname" value="<?php echo($_POST['lastname']); ?>">
			<select style="display:none;" id="classyear" name="classyear">
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

			<textarea style="display:none;" id="woodlawnprepare" name="woodlawnprepare" rows="5" cols="80" ><?php 
			if(isset($_POST['woodlawnprepare'])) {
			echo ($_POST['woodlawnprepare']); 
			}
			?></textarea>
			<textarea style="display:none;" id="woodlawnmemory" name="woodlawnmemory" rows="5" cols="80" ><?php 
			if(isset($_POST['woodlawnmemory'])) {
			echo ($_POST['woodlawnmemory']); 
			}
			?></textarea>

			<input type="hidden" type="text" size="40"
			id="alumcity" name="alumcity" value="<?php echo($_POST['alumcity']); ?>">
			
			<select
			style="display:none;" id="alumstate" name="alumstate">
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
			<input type="hidden" type="text" size="20" 
			id="alumcountry" name="alumcountry" value="<?php 
			if ($_POST['alumcountry'] == null) {
				echo("United States of America");
			}
			else{
				echo($_POST['alumcountry']);
			}
			?>">

			<input type="hidden" type="text" size="17"
			id="college" name="college" value="<?php echo($_POST['college']); ?>">
			<input type="hidden" type="text" size="17"
			id="collegeyear" name="collegeyear" value="<?php echo($_POST['collegeyear']); ?>">
			<input type="hidden" type="text" size="17"
			id="major" name="major" value="<?php echo($_POST['major']); ?>">
			<input type="hidden" type="text" size="17"
			id="minor" name="minor" value="<?php echo($_POST['minor']); ?>">
			<textarea style="display:none;" id="alumbio" name="alumbio" rows="5" cols="80" ><?php 
			if(isset($_POST['alumbio'])) {
			echo ($_POST['alumbio']); 
			}
			?></textarea>

			<input type="hidden" type="text" size="17"
			id="university" name="university" value="<?php echo($_POST['university']); ?>">
			<input type="hidden" type="text" size="17"
			id="universityyear" name="universityyear" value="<?php echo($_POST['universityyear']); ?>">
			<input type="hidden" type="text" size="17"
			id="universitymajor" name="universitymajor" value="<?php echo($_POST['universitymajor']); ?>">
			<textarea style="display:none;" id="universitybio" name="universitybio" rows="5" cols="80" ><?php 
			if(isset($_POST['universitybio'])) {
			echo ($_POST['universitybio']); 
			}
			?></textarea>

			<input type="hidden" type="text" size="17"
			id="company" name="company" value="<?php echo($_POST['company']); ?>">
			<input type="hidden" type="text" size="17"
			id="job" name="job" value="<?php echo($_POST['job']); ?>">
			<textarea style="display:none;" id="jobbio" name="jobbio" rows="5" cols="80" ><?php 
			if(isset($_POST['jobbio'])) {
			echo ($_POST['jobbio']); 
			}
			?></textarea>

<?php
$college = $_POST['college'];
$university = $_POST['university'];
$job = $_POST['job'];
$city = $_POST['alumcity'];
$state = $_POST['alumstate'];
$country = $_POST['alumcountry'];
if ($university == null && $job == null && $college != null){
	$address = "$college $city $state $country";
}
elseif ($job == null && $university != null) {
	$address = "$university $city $state $country";
}
elseif ($job != null) {
	$address = "$job $city $state $country";
}
else {
	$address = "$city $state $country";
}

//echo($address);

?>

<input type="hidden" type="text" size="17"
id="address" name="address" value="<?php echo($address); ?>">

<input type="text" size="17"
id="longitude" name="longitude" value="<?php echo($_POST['longitude']); ?>">

<input type="text" size="17"
id="latitude" name="latitude" value="<?php echo($_POST['latitude']); ?>">

<?php echo('<script type="text/javascript"> codeAddress2(); </script>'); ?>

</form>

<?php 
include("../HeaderFooter/footer.html");
?>

<script>
document.alumForm2.submit();
</script>


