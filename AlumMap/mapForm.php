<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    <style type="text/css">
      html { height: 100% }
      body { height: 100%; margin: 0; padding: 0 }
      #map-canvas { height: 100% }
    </style>
    
    <script type="text/javascript"
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBugff7KA0pxxhOb7QAQEIRsPMh8IPxO0w&sensor=false">
    </script>
    
    <script type="text/javascript">
      function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(38.8951100	, -77.0363700),
          zoom: 3
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
        var location = new google.maps.LatLng(38.8951100, -77.0363700);
        var image = 'Images/logo.gif';

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: image,
            title:"Hello World!"
        });
      }
      google.maps.event.addDomListener(window, 'load', initialize);
    </script>
  </head>
  <body>
    <div id="map-canvas"/>
  </body>
</html>