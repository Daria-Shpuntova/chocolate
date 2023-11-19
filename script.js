var width_body = document.getElementById('body').offsetWidth;
if (width_body>991){
    $(document).ready(function() {
	$("#slider").slick({
		dots: false,
		nextArrow: '<div class="arrow-next"><span class="carousel-control-next-icon" aria-hidden="true"></span></div>',
		prevArrow: '<div class="arrow-prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span></div>',
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 2
	    }) ;
})} else if (width_body<=991 && width_body>575){
$(document).ready(function() {
	$("#slider").slick({
		dots: false,
		nextArrow: '<div class="arrow-next"><span class="carousel-control-next-icon" aria-hidden="true"></span></div>',
		prevArrow: '<div class="arrow-prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span></div>',
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2
	    });
})} else {
$(document).ready(function() {
	$("#slider").slick({
		dots: false,
		nextArrow: '<div class="arrow-next"><span class="carousel-control-next-icon" aria-hidden="true"></span></div>',
		prevArrow: '<div class="arrow-prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span></div>',
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 2
	    });
})};


var width = document.getElementById('head').offsetWidth;
var height=width+245

$(document).ready(function() {
    if (width>901){
    $("#head").css("height", height);
    $("#btn_prev").css("top", (height/2)-10);
    $("#btn_next").css("top", (height/2)+45);}
})

var input_name=document.querySelector('.name_text');
input_name.onblur = () => {
    let username = input_name.value;
    if (username.length == 0){
        document.querySelector('.error_name').innerHTML ='Name cannot blank';
    } else if (username.length < 3 || 25 < username.length){
        document.querySelector('.error_name').innerHTML='Name must be between 3 and 25';
    } else {
         document.querySelector('.error_name').innerHTML=" ";
    }
}


$(document).ready(function(){
$('.phone_text').focusout(function() {
    var phone = $(this).val();
    var regtel = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    if(!regtel.test(phone)){
        document.querySelector('.error_phone').innerHTML="Phone is not valid";
    }else if (phone==" "){
        document.querySelector('.error_phone').innerHTML="Email cannot blank";
    }else{
        document.querySelector('.error_phone').innerHTML=" ";
    }
});
$( ".email_text" ).focusout(function() {
    var inputvalue = $(this).val();
    var regemail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if((!regemail.test(inputvalue)) && (inputvalue!='')){
        document.querySelector('.error_email').innerHTML="Email is not valid. It should be in the format 'email@domain.com'";
    }else if(inputvalue == ''){
        document.querySelector('.error_email').innerHTML="Email cannot blank";
    }else{
        document.querySelector('.error_email').innerHTML=" ";
}
});
});

var mestext=document.querySelector('.massage')
mestext.onblur = () => {
    let usermes = mestext.value;
    if (usermes.length == 0){
        document.querySelector('.error_mes').innerHTML ='Massage cannot blank';
    } else if (usermes.length < 10 || 250 < usermes.length){
        document.querySelector('.error_mes').innerHTML='Name must be between 10 and 250';
    } else {
         document.querySelector('.error_mes').innerHTML=" ";
    }
};

const form = document.getElementById("send_form");
form.onclick=function(){
    document.querySelector('.name_text').value='';
    document.querySelector('.email_text').value='';
    document.querySelector('.phone_text').value='';
    document.querySelector('.massage').value='';
};
