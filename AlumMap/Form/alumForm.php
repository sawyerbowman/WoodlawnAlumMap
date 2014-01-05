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

<form method="POST" id="alumForm" name="alumForm">

<p align="center"><span style="font-family: verdana,arial,helvetica; color: #336633; font-size: 16pt">
<strong>What Are You Up To?</strong></span></p>
<p align="center"><span style="font-family: verdana,arial,helvetica; color: #336633; font-size: 12pt">
Tell us about where you are, what you're doing, and more!</span></p>

<br>

<p>Give a short summary about your school/job and what you're up to.
<br /> <textarea id="alumbio" name="alumbio" rows="5" cols="80" ><?php 
if(isset($_POST['alumbio'])) {
	echo ($_POST['alumbio']); 
}
?></textarea>

<fieldset>
	<legend><font color="green">Where are you?</font></legend>
		<table>
			<tr><td>College/Job</td> <td><input type="text" size="40"
			id="alumcollegejob" name="alumcollegejob" value="<?php echo($_POST['alumcollegejob']); ?>"></td><td width="10"></td>
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
	<legend><span style="color: green;">Your Information</span></legend>
		<table>
			<tr><td>First Name</td> <td><input type="text" size="17"
			id="firstname" name="firstname" value="<?php echo($_POST['firstname']); ?>"></td><td width="10"></td>
			<td>Last Name</td> <td><input type="text" size="17"
			id="lastname" name="lastname" value="<?php echo($_POST['lastname']); ?>"></td></tr>
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
</fieldset>

<br><br>

<button type="submit" value="_form_submit" name="_form_submit">Submit Form </button>
<button type="reset" value="Clear" name="Clear All">Clear Form</button>

</form>

<?php 
include('footer.html');
?>
