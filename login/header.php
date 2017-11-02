<?php
	session_start();
	if(isset($_SESSION['u_id'])){
	$username = $_SESSION['u_first'];		
	}
?>

<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

<header>
	<nav>
		<div class="main-wrapper">
				
			<div class="nav-login">
				
				<?php
					
					if (isset($_SESSION['u_id'])) {
						echo '<form action="includes/logout.inc.php" method="POST">
							<button type="submit" name="submit">Logout</button>							 
						</form>', '<p class="username">', $username ,'</p>';
					} else {
						echo '<form action="includes/login.inc.php" method="POST">
							<input type="text" name="uid" placeholder="Username">
							<input type="password" name="pwd" placeholder="Password">
							<br>
							<button type="submit" name="submit">Login</button>
							<a class="anchor" href="signup.php">Sign up</a>
							<a class="anchor" href="index.php">Home</a>
						</form>
						';
					}
				?>
			</div>
		</div>
	</nav>
</header>