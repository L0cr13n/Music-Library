<?php
	
	include_once 'header.php';

	
?>

<section class="main-container">
	<div class="main-wrapper">
		<?php
			if (isset($_SESSION['u_id'])) {
				include_once 'player/player.php';				
			}
		?>
	</div>
</section>

<?php
	include_once 'footer.php';
?>