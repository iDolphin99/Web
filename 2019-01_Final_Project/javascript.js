function digitalClock() {
    var today = new Date();
    var day = "19. 0" + (today.getMonth() + 1) + ". 0" + today.getDate();
    var time = today.getHours() + " : " + today.getMinutes() + " : " + today.getSeconds();

    document.getElementById("digitalClock").innerHTML = day + "<br>" + time;

    setTimeout('digitalClock()', 1000)
}
window.onload = function () {
    digitalClock();
}

function input() {
    var name = document.getElementByID("input").value;
    alert('WELCOME');
    location.href = "Main.html";
}

$('.Totop').click(function(){
    $('html,body').animate({scrollTop:0},200);
    return false;
});

function moving() {
    $("#moving").animate({ marginTop: "30px" }, 1200, "", function () {
        $(this).animate({ marginTop: "0px" }, 1200, "", function () { moving(); });
}); }
 
   
   

