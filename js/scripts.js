$(document).ready(function () {

  /* Navigation */
  $('a[href^="#"]').click(function() {    // Change to needed selector
    $("html, body").animate({    // Need both for full browser support
        scrollTop: $( $(this).attr("href") ).offset().top - 100 // Extra 100px
    }, 500);    // Change to desired scroll time in ms
    return false;    // Prevents the dreaded jump/flash
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
    icon : '../img/pointer.png'
  });

  var floride = new google.maps.Marker({
    map:map,
    position: new google.maps.LatLng(27.6648274, -81.5157535)
  });

  var costarica = new google.maps.Marker({
    map:map,
    position: new google.maps.LatLng(10.1688133, -83.6359258)
  });

  var venezuela = new google.maps.Marker({
    map:map,
    position: new google.maps.LatLng(10.0390220, -69.4855352)
  });

  var cuba = new google.maps.Marker({
    map:map,
    position: new google.maps.LatLng(21.7644562, -78.5822148)
  });

  var haiti = new google.maps.Marker({
    map:map,
    position: new google.maps.LatLng(18.8801525, -72.2540898)
  });

})
