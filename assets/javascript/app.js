
$(function() {

// create global variables
	var correct = 0;
	var wrong = 0;
	var unanswered = 0;
	var questionNumber = 0;
	var counter;

	var question1 = {
		text: "The lead singer of this 80s hair band wrecked his red sports car while driving drunk. The crash caused the death of his passenger and friend, Razzle from the band Hanoi Rocks.",
		a: "Winger", 
		b: "White Snake",
		c: "Motley Crue",
		d: "Quiet Riot",
		correct: "c"
	}

	var question2 = {
		text: "Super model, Tawny Kitaen, starred in this 80s music video from the band Whitesnake. She seductively rides atop the car driven by singer, David Coverdale as he drives down 'the only rode I've ever known'",
		a: "Every Rose Has It's Thorn",
		b: "Here I go Again On My Own",
		c: "Kiss Me Deadly",
		d: "I Wanna Rock",
		correct: "b"
	}

	var questionArray = [question1, question2];

	var score = 0;

	var questionIndex = 0;

	// hide counter
	$("#clock").hide();

	function nextQuestion(){

		for (var i = 0; i < questionArray.length; i++) {
			
		console.log(questionArray);

		}	

	}
	
	// on click, start button
	$("#start").click(function(){

		setInterval(function() {

			var counter = 20;

			counter--;

			console.log(counter);

		}, 1000)

		$("#start").hide();

		$("#clock").show();

	});
 

// if timer runs out
	
	// time up screen loads. Displays 0 seconds left. n/ "Too Slow!" n/ "Correct answer is ___."

// if correct answer

	// correct answer screen loads. Displays time remaining. n/ "Correct!"

	// else: Wrong answer screen loads. Displays time remaining. n/ "Wrong answer!" n/ "Correct answer is ___."

// last question answered. Display time remaining. n/ "All done here are you hair stats" n/ "number correct:" n/ "number wrong:" n/ "unanswered:" n/ "Play again?" - button.

// if play again button clicked

	// reset game








});

