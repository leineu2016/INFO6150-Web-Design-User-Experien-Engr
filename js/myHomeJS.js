$(window).load(function() {
    //Preloader
    $('#status').delay(300).fadeOut();
    $('#preloader').delay(300).fadeOut('slow');
    $('body').delay(550).css({'overflow':'visible'});
})

$(document).ready(function() {
    //animated logo
    $('.carousel').carousel({
        interval: 4000 //changes the speed
    })
    //Wow Animation DISABLE FOR ANIMATION MOBILE/TABLET
    wow = new WOW(
        {
            mobile: false
        });
    wow.init();
});



function search() {
    var searchButtonValue =  document.getElementById('searchbar').value;
    var uniformInput = searchButtonValue.toLocaleUpperCase();
    console.log(uniformInput);
    if(uniformInput == 'UNITED STATES OF AMERICA')
    {
        sessionStorage.setItem("searchCountry", "America");
        sessionStorage.setItem("countryAB", "US");
        window.location = "map.html";
        document.getElementById('searchbar').reset();
    }
    else if(uniformInput == "INDIA")
    {
        sessionStorage.setItem("searchCountry", "India");
        sessionStorage.setItem("countryAB", "IN");
        window.location = "map.html";
        document.getElementById('searchbar').reset();
    }
    else if(uniformInput == "CHINA")
    {
        sessionStorage.setItem("searchCountry", "China");
        sessionStorage.setItem("countryAB", "CN");
        window.location = "map.html";
        document.getElementById('searchbar').reset();
    }
    document.getElementById('searchbar').reset();
}