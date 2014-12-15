$(document).ready(function () {

  /* Navigation */
  $('a[href^="#"]').click(function() {    // Change to needed selector
    $("html, body").animate({    // Need both for full browser support
        scrollTop: $( $(this).attr("href") ).offset().top - 100 // Extra 100px
    }, 500);    // Change to desired scroll time in ms
    return false;    // Prevents the dreaded jump/flash
   });

  /* Konami code */
  $( window ).konami({
    cheat: function() {
      window.location = "https://www.youtube.com/watch?v=GFLGRidfFo4";
    } // end cheat
  });

  /* Google Map */
  var mapCanvas = document.getElementById('map_canvas');
  var mapOptions = {
    styles: [
        {
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#FCF4F0"
                }
            ]
        },
        {
            "featureType": "water",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#d8edea"
                }
            ]
        },
        {},
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "lightness": 33
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry",
            "stylers": [
                {
                    "weight": 0.9
                },
                {
                    "visibility": "off"
                }
            ]
        }
    ],
    center: new google.maps.LatLng(21.694025, -71.79792800000001),
    zoom: 5,
    disableDefaultUI: true,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  var map = new google.maps.Map(mapCanvas, mapOptions);

  var marker = new google.maps.Marker({
    map:map,
    position: new google.maps.LatLng(21.694025, -71.79792800000001),
    icon : '../img/marker.png'
  });

  var florida = new google.maps.Marker({
    map:map,
    position: new google.maps.LatLng(27.6648274, -79.5157535),
    icon : '../img/marker_florida.png'
  });

  var costarica = new google.maps.Marker({
    map:map,
    position: new google.maps.LatLng(10.1688133, -81.6359258),
    icon : '../img/marker_costarica.png'
  });

  var venezuela = new google.maps.Marker({
    map:map,
    position: new google.maps.LatLng(10.0390220, -67.4855352),
    icon : '../img/marker_venezuela.png'
  });

  var cuba = new google.maps.Marker({
    map:map,
    position: new google.maps.LatLng(21.7644562, -79.5822148),
    icon : '../img/marker_cuba.png'
  });

  var haiti = new google.maps.Marker({
    map:map,
    position: new google.maps.LatLng(18.8801525, -71.2540898),
    icon : '../img/marker_haiti.png'
  });

})
