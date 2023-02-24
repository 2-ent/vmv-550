// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-10rem";
  }
}


//points product
jQuery(document).ready(function($){
	//open interest point description
	$('.cd-single-point').children('a').on('click', function(){
		var selectedPoint = $(this).parent('li');
		if( selectedPoint.hasClass('is-open') ) {
			selectedPoint.removeClass('is-open').addClass('visited');
		} else {
			selectedPoint.addClass('is-open').siblings('.cd-single-point.is-open').removeClass('is-open').addClass('visited');
		}
	});
	//close interest point description
	$('.cd-close-info').on('click', function(event){
		event.preventDefault();
		$(this).parents('.cd-single-point').eq(0).removeClass('is-open').addClass('visited');
	});
});


// pop-up video
function toggle(){
	var trailer = document.querySelector(".trailer");

	var video = document.querySelector("video");
	trailer.classList.toggle("active");
	video.pause();
	video.currentTime = 0;
}


//questions
let question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if(active && active !== question ) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if(question.classList.contains("active")){
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})

//fade in
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  })

})

const hiddenleft = document.querySelectorAll('.hiddenleft');
hiddenleft.forEach((el) => observer.observe(el));

const hiddenright = document.querySelectorAll('.hiddenright');
hiddenright.forEach((el) => observer.observe(el));

const hiddentop = document.querySelectorAll('.hiddentop');
hiddentop.forEach((el) => observer.observe(el));

const hiddenbottom = document.querySelectorAll('.hiddenbottom');
hiddenbottom.forEach((el) => observer.observe(el));