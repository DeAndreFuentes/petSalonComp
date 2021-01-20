function showInfo (){
    $("#lblEmail").text("Email: info@petsalon.com");
    $("#lblPhone").text("Phone: 123-456-789");

    $(".info .hide").removeClass("hide");
    $("#btn-show").hide();
}



function initMap() {
    const place = {

        lat: 32.70838105003759, 

        lng: -117.15494737364602
    };


    const map = new google.maps.Map(document.getElementById("map"),{

        zoom: 12,
        center: place,

    } );

       const marker =  new google.maps.Marker({

        position: place,
        map: map,

       });
        
        }
    



function init(){
    $("#btn-show").click(showInfo);
    console.log("About Page!!!!!!!!!!!!!")

    initMap();

}

window.onload = init;