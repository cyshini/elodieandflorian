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
                    "color": "#E3EEEC"
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
                    "visibility": "on"
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
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions)

})
