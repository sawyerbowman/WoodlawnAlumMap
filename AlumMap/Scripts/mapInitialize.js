var map;
var geocoder;

function mapInitialize() {
        var mapOptions = {
          center: new google.maps.LatLng(38.8951100	, -77.0363700),
          zoom: 3,
        };
        map = new google.maps.Map(document.getElementById("woodlawn_map"), mapOptions);
        geocoder = new google.maps.Geocoder();
        var location = new google.maps.LatLng(43.906732, -69.963793);
        var image = 'Images/W_pin.png';

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: image,
            title:"Hello World!"
        });
        
        google.maps.event.addListener(marker,'click',function() {
        	  map.setZoom(6);
        	  map.setCenter(marker.getPosition());
        	  });

        var infowindow = new google.maps.InfoWindow({
        	  content:"Sawyer Bowman!"
       	});

//        google.maps.event.addListener(marker, 'click', function() {
//        	  infowindow.open(map,marker);
//        });
        
        google.maps.event.addListener(marker, 'click', function() {
            showAlum();
        });

        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        var icons = {
          parking: {
            name: 'Parking',
            icon: iconBase + 'parking_lot_maps.png'
          },
          library: {
            name: 'Library',
            icon: iconBase + 'library_maps.png'
          },
          info: {
            name: 'Info',
            icon: iconBase + 'info-i_maps.png'
          }
        };
        
        var infobar = document.getElementById('infobar');
        for (var key in icons) {
          var type = icons[key];
          var name = type.name;
          var icon = type.icon;
          var div = document.createElement('div');
          div.innerHTML = '<img src="' + icon + '"> ' + name;
          legend.appendChild(div);
        }
        map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(infobar);
      }

function codeAddress() {
	  var address = document.getElementById('address').value;
	  geocoder.geocode( { 'address': address}, function(results, status) {
	    if (status == google.maps.GeocoderStatus.OK) {
	      map.setCenter(results[0].geometry.location);
	      var marker = new google.maps.Marker({
	          map: map,
	          position: results[0].geometry.location
	      });
	    } else {
	      alert('Geocode was not successful for the following reason: ' + status);
	    }
	  });
	}

function hideAlum() {
    document.getElementById("infobar").style.display="none";
}

function showAlum() {


			var pers = "";
			var cy = "";
			var loc = "";
			var home = "";
			var img = "";
			var img2 = "";
			var img3 = "";
			var capt = "";
			var capt2 = "";
			var capt3 = "";
			var plans = "";
			var miss = "";
			var best = "";
			var maj = "";
			var rm ="";

					cy = "2015";
					//cy = cy.substring(2);

					loc = "Brunswick, ME";

					home = "Cornelius, NC";

					//img = $(this).find("value").text().toLowerCase();

					//capt = $(this).find("value").text();

					//img2 = $(this).find("value").text().toLowerCase();

					//capt2 = $(this).find("value").text();

					//img3 = $(this).find("value").text().toLowerCase();

					//capt3 = $(this).find("value").text();

					maj = "Computer Science";

					plans = "To work at Apple";

					best = "Love coding";

					miss = "Old friends";

					//rm = $(this).find("value").text();



				document.getElementById("infobar").style.display="block";
				var info = "<div class='nm'>"+"Sawyer Bowman"+" '"+cy.substring(2)+"</div>";

				if(home != "") {
					info += "<div class='ht'><span>Hometown:</span> "+home+"</div>";
				}
				if(loc != "") {
					info += "<div class='loc'><span>Summer Location:</span> "+loc+"</div>";
				}
				if(maj != "") {
					info += "<div class='maj'><span>Major/minor(s):</span> "+maj+"</div>";
				}

				if(plans != "") {
					info += "<div class='plans'><span>What I'm doing:</span> "+plans+"</div>";
				}
				if(best != "") {
					info += "<div class='best'><span>Best part of my Summer so far:</span> "+best+"</div>";
				}
				if(miss != "") {
					info += "<div class='miss'><span>What I miss most about Bowdoin:</span> "+miss+"</div>";
				}
				if(rm != "") {
					info += "<div class='rm'><a target='rm' href='"+rm+"'>read more</a></div>";
				}


//				info += "<div class='pics'>"; 
//
//				if(img != "") {
//					info += "<div class='img'><img src='"+img+"' width='200' alt='"+capt+"' /><div class='capt'>"+capt+"</div></div>";
//				}
//				if(img2 != "") {
//					info += "<div class='img'><img src='"+img2+"' width='200' alt='"+capt2+"' /><div class='capt'>"+capt2+"</div></div>";
//				}
//				if(img3 != "") {
//					info += "<div class='img'><img src='"+img3+"' width='200' alt='"+capt3+"' /><div class='capt'>"+capt2+"</div></div>";
//				}
//
//				info += "</div>"; 
//
//				$("#info").html(info);

}


google.maps.event.addDomListener(window, 'load', mapInitialize);
      