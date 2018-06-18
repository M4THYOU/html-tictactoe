var turn = 1;

$(function() {
	var msg = "Player " + turn + "'s turn"; 
	$("#playerTurn").text(msg);

	$(".box").on("click", function() {		
		if (turn === 1) {
			var $thisBox = $(this).children();
			if($thisBox.is(".x") || $thisBox.is(".o")) {
				$("#error").text("Invalid Move").fadeIn(500).delay(0).fadeOut(500);
				//alert("Invalid Move");
			} else {
				$thisBox.addClass("x").animate({opacity: 1}, 1000);
				turn = 2;
			}
		} else if (turn === 2) {
			var $thisBox = $(this).children();
			if ($thisBox.is(".x") || $thisBox.is(".o")) {
				$("#error").text("Invalid Move").fadeIn(500).delay(0).fadeOut(500);
				//alert("Invalid Move");
			} else {
				$thisBox.addClass("o").animate({opacity: 1}, 1000);
				turn = 1;
			}
		} else {
			document.write("Uh Oh");
		}

		msg = "Player " + turn + "'s turn";
		$("#playerTurn").text("");
		$("#playerTurn").text(msg);


//Check if x wins//
	var $tlx, $tmx, $trx, $mlx, $mmx, $mrx, $blx, $bmx, $brx;
	$tlx = $("#tl").hasClass("x");
	$tmx = $("#tm").hasClass("x");
	$trx = $("#tr").hasClass("x");
	$mlx = $("#ml").hasClass("x");
	$mmx = $("#mm").hasClass("x");
	$mrx = $("#mr").hasClass("x");
	$blx = $("#bl").hasClass("x");
	$bmx = $("#bm").hasClass("x");
	$brx = $("#br").hasClass("x");

	if ($tlx && $tmx && $trx) {
		$(".remove").fadeOut(1000);
		$(".box").off("click");
		$(".x-win").animate({
			fontSize: 32
		}, 1000);
	} else if ($mlx && $mmx && $mrx) {
		$(".remove").fadeOut(1000);
		$(".box").off("click");
		$(".x-win").animate({
			fontSize: 32
		}, 1000);
	} else if ($blx && $bmx && $brx) {
		$(".remove").fadeOut(1000);
		$(".box").off("click");
		$(".x-win").animate({
			fontSize: 32
		}, 1000);
	} else if ($tlx && $mlx && $blx) {
		$(".remove").fadeOut(1000);
		$(".box").off("click");
		$(".x-win").animate({
			fontSize: 32
		}, 1000);
	} else if ($tmx && $mmx && $bmx) {
		$(".remove").fadeOut(1000);
		$(".box").off("click");
		$(".x-win").animate({
			fontSize: 32
		}, 1000);
	} else if ($trx && $mrx && $brx) {
		$(".remove").fadeOut(1000);
		$(".box").off("click");
		$(".x-win").animate({
			fontSize: 32
		}, 1000);
	} else if ($tlx && $mmx && $brx) {
		$(".remove").fadeOut(1000);
		$(".box").off("click");
		$(".x-win").animate({
			fontSize: 32
		}, 1000);
	} else if ($trx && $mmx && $blx) {
		$(".remove").fadeOut(1000);
		$(".box").off("click");
		$(".x-win").animate({
			fontSize: 32
		}, 1000);
	}

//Check if o wins//
	var $tlo, $tmo, $tro, $mlo, $mmo, $mro, $blo, $bmo, $bro;
	$tlo = $("#tl").hasClass("o");
	$tmo = $("#tm").hasClass("o");
	$tro = $("#tr").hasClass("o");
	$mlo = $("#ml").hasClass("o");
	$mmo = $("#mm").hasClass("o");
	$mro = $("#mr").hasClass("o");
	$blo = $("#bl").hasClass("o");
	$bmo = $("#bm").hasClass("o");
	$bro = $("#br").hasClass("o");

	if ($tlo && $tmo && $tro) {
		$(".remove").fadeOut(1000);
		$(".box").off("click");
		$(".o-win").animate({
			fontSize: 32
		}, 1000);
	} else if ($mlo && $mmo && $mro) {
		$(".remove").fadeOut(1000);
		$(".box").off("click");
		$(".o-win").animate({
			fontSize: 32
		}, 1000);
	} else if ($blo && $bmo && $bro) {
		$(".remove").fadeOut(1000);
		$(".box").off("click");
		$(".o-win").animate({
			fontSize: 32
		}, 1000);
	} else if ($tlo && $mlo && $blo) {
		$(".remove").fadeOut(1000);
		$(".box").off("click");
		$(".o-win").animate({
			fontSize: 32
		}, 1000);
	} else if ($tmo && $mmo && $bmo) {
		$(".remove").fadeOut(1000);
		$(".box").off("click");
		$(".o-win").animate({
			fontSize: 32
		}, 1000);
	} else if ($tro && $mro && $bro) {
		$(".remove").fadeOut(1000);
		$(".box").off("click");
		$(".o-win").animate({
			fontSize: 32
		}, 1000);
	} else if ($tlo && $mmo && $bro) {
		$(".remove").fadeOut(1000);
		$(".box").off("click");
		$(".o-win").animate({
			fontSize: 32
		}, 1000);
	} else if ($tro && $mmo && $blo) {
		$(".remove").fadeOut(1000);
		$(".box").off("click");
		$(".o-win").animate({
			fontSize: 32
		}, 1000);
	}
	});
});