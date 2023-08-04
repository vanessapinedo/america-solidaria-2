$(function(){
    var container = $(".slide_wrap"); 
    var slideShow = container.find(".slide_show");
    var slideImg = slideShow.find(".slide_img");
    var slides = slideImg.find(">div");                 
    var slideBtn = container.find(".slide_btn")        

    var slideCount = slides.length;                    
    var slideWidth = slides.innerWidth();                   
    var show_num = 3;
    var num = 0;
    
    var slideCopy = $(".slide:lt("+show_num+")").clone();
    slideImg.append(slideCopy);


    function back(){
    if(num == 0){
        num == slideCount;
        slideImg.css("margin-left",-num * slideWidth +"px" )
    }
    
    num--;
      slideImg.animate({"margin-left": -slideWidth * num+"px"}, 500);
    };
    function next(){
        if(num == slideCount){
        num == 0;
        slideImg.css("margin-left",-num * slideWidth +"px");
        }
        num++;
      slideImg.animate({"margin-left": -slideWidth * num+"px"}, 500);
    };
    
    //버튼 클릭하기
    slideBtn.on("click", "a", function(){
        if($(this).hasClass("prev")){
        back();
        } else {
        next();
        }
    });
    
    });