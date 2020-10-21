$(document).ready(function () {


    $('.preloader').delay(500).fadeOut(500);

    $(".winner").hide(0.01);

    

    $(function () {

        let flagCircle = false,
            flagSquare = false,
            flagStar = false,
            flafTriangle = false;


        $(".blocks>div").draggable({
            revert: "invalid",
            cursor: "grab"
        });


        $(".triangleSlot").droppable({
            accept: ".triangleBlock",

            drop: function (event, ui) {
                ui.draggable.css("display", "none"),
                    $(".triangleSlot").css("border-bottom", "150px solid lime"),
                    flafTriangle = true,
                    rePlay()
            }
        });

        $(".squareSlot").droppable({
            accept: ".squareBlock",

            drop: function (event, ui) {
                ui.draggable.css("display", "none"),
                    $(".squareSlot").css("background-color", "yellow"),
                    flagSquare = true,
                    rePlay()
            }
        });

        $(".circleSlot").droppable({
            accept: ".circleBlock",

            drop: function (event, ui) {
                ui.draggable.css("display", "none"),
                    $(".circleSlot").css("background-color", "aqua"),
                    flagCircle = true,
                    rePlay()
            }
        });


        $(".starSlotContainer").droppable({
            accept: ".starBlockContainer",

            drop: function (event, ui) {
                ui.draggable.css("display", "none"),
                    $(".starSlotContainer").css("background-color", "tomato"),
                    flagStar = true,
                    rePlay()
            }
        });

        function rePlay() {
            if (flagCircle == true && flafTriangle == true && flagStar == true && flagSquare == true) {
                $(".winner").show(500);
            }
        }

        $(".winner p").click(function () {
            location.reload(true);
        })

    });
});