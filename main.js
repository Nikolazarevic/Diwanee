$(document).ready(function(){
    $('.fa').on('click', function(){
        $('.navBar').toggle('.active');
    });
    $(".innerColumns").hover(function(){
    	$(this).css("background-color", "#222222");
    	$(this).find(".nameOfJob").css("color", "#f2f2f2");
    	$(this).find(".description").css("color", "#f2f2f2");
    	$(this).find(".skill").css("color", "#f2f2f2");
    	$(this).find(".skillContent").css("color", "#f2f2f2");
    	$(this).find(".btn").css("background-color", "#222222");
    	$(this).find(".btn").css("color", "#f2f2f2");
    	$(this).find(".btn").css("border", "2px solid #f2f2f2");
    },function(){
    	$(".innerColumns").css("background-color", "#fbfbfb");
    	$(".nameOfJob").css("color", "#222222");
    	$(".description").css("color", "#222222");
    	$(".skill").css("color", "#222222");
    	$(".skillContent").css("color", "#c41230");
    	$(".btn").css("background-color", "#fbfbfb");
    	$(".btn").css("color", "#222222");
    	$(".btn").css("border", "2px solid #222222");
    	
    })
});
