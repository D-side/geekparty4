function checkEnd() {
	if (($("#itemPetrol").length > 0) && ($("#itemCog").length > 0) && ($("#itemWrench").length > 0))
		{
				$(".finishLink").html('<i class="icon-unlock-alt action"> </i>Начать вскрытие двери');
				$(".finishLink").attr("data-toggle", "collapse");
				$(".finishLink").attr("data-target", "#sceneFinish");
				$(".finishLink").attr("data-parent", "scenes");
				$(".finishLink").removeClass("disabled");
		}
	
	}

$("#medkit-pickup-button").click( function() {
			$("#inventory").append('<li><a href="#"><i id="itemMedkit" class="inv-birth icon-medkit"></i></a></li>');
			$("#medkit-pickup").hide('slow', function(){ $("#medkit-pickup").remove(); });
			$("#itemMedkit").switchClass("inv-birth", "inventory", 1000);
	});//done (works)
	
$("#takeWrench").click( function() {
			$("#inventory").append('<li><a href="#"><i id="itemWrench" class="inv-birth icon-wrench"></i></a></li>');
			$("#textWrench").hide('slow', function(){ $("#textWrench").remove(); });
			$("#itemWrench").switchClass("inv-birth", "inventory", 1000);
			checkEnd();
	});//done (works)	
	
$(".killer-action").click( function() {
		if ($("#itemMedkit").length == 0)
		{
				$('.collapse.in').collapse('hide');
				$('#sceneGameOver').collapse('show');
		}
		else
				{
					$("#itemMedkit").hide('slow', function(){ $("#itemMedkit").remove(); });
					$('.collapse.in').collapse('hide');
					$('#sceneExplosion').collapse('show');
					}
	});//done
	
	
$(".killer-action2").click( function() {
		if ($("#itemMedkit").length == 0)
		{
				$('.collapse.in').collapse('hide');
				$('#sceneGameOver').collapse('show');
		}
		else
				{
					$("#itemMedkit").hide('slow', function(){ $("#itemMedkit").remove(); });
					$('.collapse.in').collapse('hide');
					$('#sceneExplosion').collapse('show');
					$('#failCog').remove();
					$('#alterableCog').html("Шестерёнка лежит далеко в углу, целёхонькая. Похоже, ей совершенно наплевать на произошедшее. Мне хуже пришлось, чем ей.");
					$('#cogList').append('<li class="removeCog"><a class="takeCog"><i class="icon-cog action"> </i>Взять шестерёнку</a></li>');
					$("#takeCog").click( function() {
					$("#inventory").append('<li><a href="#"><i id="itemCog" class="inv-birth icon-cog"></i></a></li>');
					$("#itemCog").switchClass("inv-birth", "inventory", 1000);
					$(".removeCog").hide('slow', function(){ $(".removeCog").remove(); });
	});//done (works)
					}
	});//done (presumably)

$("#takePetrol").click( function() {
		$("#inventory").append('<li><a href="#"><i id="itemPetrol" class="inv-birth icon-collapse-top"></i></a></li>');
		$("#takePetrol").hide('slow', function(){ $("#takePetrol").remove(); });
		$("#itemPetrol").switchClass("inv-birth", "inventory", 1000);
		checkEnd();
	});//done (works)
	
$("#takeCog").click( function() {
		$("#inventory").append('<li><a href="#"><i id="itemCog" class="inv-birth icon-cog"></i></a></li>');
		$("#itemCog").switchClass("inv-birth", "inventory", 1000);
		$(".removeCog").hide('slow', function(){ $(".removeCog").remove(); });
		checkEnd();
	});//done (works)
	
