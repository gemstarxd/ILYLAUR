$(document).ready(function() {
    var flame = $("#flame");
    var txt1 = $("#main-text");
    var txt2 = $("#sub-text");
    var animationDone = false;
    var freakbobContainer = $("#freakbob-container");
    var callSound = $("#call-sound")[0];
    var starCount = 100; // Number of stars

    function resetAnimation() {
        flame.removeClass("puff").addClass("burn");
        $(".smoke").removeClass("puff-bubble");
        $("#candle").css("opacity", "1").show();
        txt1.html("").hide();
        txt2.html("").show();
        freakbobContainer.hide();
        callSound.pause();
        callSound.currentTime = 0;
        $("#stars").remove();
        $("body").css("background-color", "#223b6b");
    }

    function startAnimation() {
        flame.removeClass("burn").addClass("puff");
        $(".smoke").each(function () {
            $(this).addClass("puff-bubble");
        });
        $("#glow").remove();
        txt1.hide().html("It will come true!").delay(750).fadeIn(300);
        txt2.hide();
        $("#candle").animate(
            {
                opacity: ".5"
            },
            100,
            function() {
                // Confetti effect
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });

                // After confetti, make everything disappear and show stars
                setTimeout(function() {
                    $("body").animate({ backgroundColor: "black" }, 3000, function() {
                        showStars();
                    });
                    $("#candle").hide();
                    $("h1, h2").hide();
                }, 3000);
            }
        );
    }

    function showStars() {
        $("body").append('<div id="stars"></div>');
        for (var i = 0; i < starCount; i++) {
            var star = $('<div class="star"></div>');
            star.css({
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%'
            });
            $("#stars").append(star);
        }
        $("#stars").fadeIn(3000, function() {
            // Show the first text 3 seconds after stars have been visible
            setTimeout(function() {
                txt1.hide().html("Have a great birthday lil bro").fadeIn(300).delay(3000).fadeOut(300, function() {
                    $(this).html("ur a star and all stars have a reason <3").fadeIn(300).delay(3000).fadeOut(300, function() {
                        $(this).html("(this took so damn long to do)").fadeIn(300).delay(3000).fadeOut(300, function() {
                            // Show FreakBob or call any final function
                            setTimeout(function() {
                                showFinalText();
                            }, 1000);
                        });
                    });
                });
            }, 3000);
        });
    }

    function showFinalText() {
        txt1.hide().html("But I love you bestie! Could never think I'd like a person this much").fadeIn(300).delay(3000).fadeOut(300, function() {
            $(this).html("I wish you nothing but happiness. It's all you deserve for being such a kind person").fadeIn(300).delay(3000).fadeOut(300, function() {
                $(this).html("And remember, I'll always be here for you, no matter what.").fadeIn(300).delay(3000).fadeOut(300, function() {
                    $(this).html("You are amazing, never forget that!").fadeIn(300).delay(3000).fadeOut(300, function() {
                        $(this).html("Thank you for being my someone i can count on").fadeIn(300).delay(3000).fadeOut(300, function() {
                            $(this).html("Love you byebye!").fadeIn(300).delay(3000).fadeOut(300, function() {
                                setTimeout(function() { 
                                    // Additional actions can be placed here
                                }, 1000);
                            });
                        });
                    });
                });
            });
        });
    }
    

   

    flame.on({
        click: function () {
            if (!animationDone) {
                startAnimation();
                animationDone = true;
            }
        }
    });

    // Start the initial sequence
});




