var map;
var nav = [];
var zk = 2;
var zkL = "";

var qs_maj = "";

var markersArray = [];

function clearOverlays() {
  for (var i = 0; i < markersArray.length; i++ ) {
    markersArray[i].setMap(null);
  }
  markersArray = [];
  zk = 3;
  map.setZoom(zk);
}


    function showStudent(nm) {
       $.ajax({
        type: "GET",
        url: "http://localhost/WoodlawnAlumMap/AlumMap/woodlawn_alums_new.xml",
        dataType: "xml",
        cache: false}).done(function(data) {
            html = "";
            p = $(data).find("name:contains("+nm+")").parent();

            var pers = "";
            var coords = "";
            var woodlawnclass = "";
            var woodlawnprep = "";
            var woodlawnmem = "";
            var loc = "";
            var college = "";
            var collegeclass = "";
            var collegemaj = "";
            var collegemin = "";
            var collegebio = "";
            var univ = "";
            var univclass = "";
            var univmaj = "";
            var univbio = "";
            var job = "";
            var jobpos = "";
            var jobbio = "";
            var img = "";
            var capt = "";     
            //get coordinates and student name

            coords = p.find("coordinates").text();

            p.find("Data").each(function()

            {
                if($(this).attr("name") == "woodlawnclass") {
                    woodlawnclass = $(this).find("value").text();
                }
                if($(this).attr("name") == "woodlawnprepare") {
                    woodlawnprep = $(this).find("value").text();
                }
                if($(this).attr("name") == "woodlawnmemory") {
                    woodlawnmem = $(this).find("value").text();
                }
                if($(this).attr("name") == "location") {
                    loc = $(this).find("value").text();
                }
                if($(this).attr("name") == "college") {
                    college = $(this).find("value").text();
                }
                if($(this).attr("name") == "collegeclass") {
                    collegeclass = $(this).find("value").text();
                }
                if($(this).attr("name") == "collegemajor") {
                    collegemaj = $(this).find("value").text();
                }
                if($(this).attr("name") == "collegeminor") {
                    collegemin = $(this).find("value").text();
                }
                if($(this).attr("name") == "collegebio") {
                    collegebio = $(this).find("value").text();
                }
                if($(this).attr("name") == "university") {
                    univ = $(this).find("value").text();
                }
                if($(this).attr("name") == "universityclass") {
                    univclass = $(this).find("value").text();
                }
                if($(this).attr("name") == "universitymajor") {
                    univmaj = $(this).find("value").text();
                }
                if($(this).attr("name") == "universitybio") {
                    univbio = $(this).find("value").text();
                }
                if($(this).attr("name") == "company") {
                    job = $(this).find("value").text();
                }
                if($(this).attr("name") == "companyposition") {
                    jobpos = $(this).find("value").text();
                }
                if($(this).attr("name") == "companybio") {
                    jobbio = $(this).find("value").text();
                }
                if($(this).attr("name") == "image") {
                    img = $(this).find("value").text();
                }
                if($(this).attr("name") == "caption") {
                    capt = $(this).find("value").text();

                }
                    document.getElementById("infobar").style.display="block";

                    var info = "<div class='nm'>"+nm+" '"+woodlawnclass.substring(2)+"</div>";
                    if(college != "") {
                        info += "<div class='college'><span>College:</span> "+college+" '"+collegeclass.substring(2)+"</div>";
                    }
                    if(collegemaj != "" && collegemin != "") {
                        info += "<div class='collegemaj'><span>College Major/Minor(s):</span> "+collegemaj+"/"+collegemin+"</div>";
                    }
                    else {
                    	info += "<div class='collegemaj'><span>College Major(s):</span> "+collegemaj+"</div>";       
                    }
                    if(univ != "") {
                        info += "<div class='univ'><span>University:</span> "+univ+" '"+univclass.substring(2)+"</div>";
                    }
                    if(univmaj != "") {
                        info += "<div class='univmaj'><span>University Degree:</span> "+univmaj+"</div>";
                    }
                    if(job != "") {
                    	info += "<div class='job'><span>Company:</span> "+job+"</div>";
                    }
                    if(jobpos != "") {
                    	info += "<div class='jobpos'><span>Position:</span> "+jobpos+"</div>";
                    }
                    if (jobbio == "" && univbio == ""){
                    	if(collegebio != "") {
                    		info += "<div class='collegebio'><span>What are you up to?:</span> "+collegebio+"</div>";
                    	}
                    }
                    else if (jobbio == "") {
                    	if(univbio != "") {
                    		info += "<div class='univbio'><span>What are you up to?:</span> "+univbio+"</div>";
                    	}
                    }
                    else {
                    	if(jobbio != "") {
                    		info += "<div class='jobbio'><span>What are you up to?:</span> "+jobbio+"</div>";
                    	}
                    }
                    if(loc != "") {
                        info += "<div class='loc'><span>Location:</span> "+loc+"</div>";
                    }
//                    if(woodlawnprep != "") {
//                        info += "<div class='woodlawnprep'><span>How has Woodlawn prepared you?:</span> "+woodlawnprep+"</div>";
//                    }
                    if(woodlawnmem != "") {
                        info += "<div class='woodlawnmem'><span>What do you miss about Woodlawn?:</span> "+woodlawnmem+"</div>";
                    }

info += "<div class='pics'>"; 

                    if(img != "") {
                        info += "<div class='img'><img src='"+img+"' width='200' alt='"+capt+"' /><div class='capt'>"+capt+"</div></div>";
                    }
                    $("#info").html(info);

//if(img2 != "") {
//$('.pics').css({"display":"block"});
//$('.pics').cycle({fx:'fade'});
//$('.img').css({"background":"none"});
//$('.img').css({"border-width":"0px"});
//}

        });
    });
}

function addListing(filt) {
    var ct =0;
    var ft = "";
    var v = "";
    if(filt.indexOf("any department") > -1) {
        filt = "";
    }


    if(qs_maj != "") {
	ft = "maj";
	qsi = parseInt(qs_maj);
	v = $("#selmaj option")[qsi].text;
	$('#selmaj').prop("selectedIndex",qsi);
	filt = ft+":"+v;
    }

    if(filt != "") {
        ff = filt.split(":");
        ft = ff[0];
        v = ff[1];


        //$('#fbox').toggle();
        hideStudent();

        if(ft=="maj") {
//		alert(v);
            $('#selcy').prop("selectedIndex",0);
        }
        if(ft=="cy") {
            $('#selmaj').prop("selectedIndex",0);
        }
        
        
    } else {
	$('#selcy').prop("selectedIndex",0);
	$('#selmaj').prop("selectedIndex",0);
    }

    $("#sl2").html("");
    clearOverlays();
    tim = new Date().getTime();
    $.ajax({
        type: "GET",
        url: "http://localhost/WoodlawnAlumMap/AlumMap/woodlawn_alums_new.xml",
        dataType: "xml",
        cache: false}).done(function(data) {
            html = "";
            //loop through placemarks tags
            $(data).find("Placemark").each(function(index, value){
              	ct++;
		var pers = "";
                var cy = "";
                var loc = "";
                var maj = "";
                
                
                //get coordinates and student name
                var coords = $(this).find("coordinates").text();
                var nm = $(this).find("name").text();
                $(this).find("Data").each(function()
                {
                    if($(this).attr("name") == "woodlawnclass") {
                        cy = $(this).find("value").text();
                        //cy = cy.substring(2);
                    }
                    if($(this).attr("name") == "location") {
                        loc = $(this).find("value").text();
                    }   
                    if($(this).attr("name") == "collegemajor") {
                        maj = $(this).find("value").text();
                    }
                    
                });
                    
                nm = nm
//                pid = "p"+nm.substring(0,nm.indexOf(" "))+coords.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").substring(0,5);
//		pid = nm.replaceAll(" ","_");
		pid = "p"+nm.replace(/,-'()/g,"_");
pid = pid.replace(/\s+/g,"_");		
pid = pid+cy;
                
                //define person div
                var pers = "<div class=\"pers\" id=\""+pid+"\"><span class=\"mrkLnk\">" + nm +" '"+cy.substring(2)+"</span>";
                pers += "<div class='loc'>"+loc+"</div>";
                pers += "</div>";
                var c = coords.split(",")       


                //output as a navigation accounting in filters
                if(v == "" || (
                    (ft='cy' && cy==v)
                    || (ft='maj' &&  maj.indexOf(v) > -1  && maj!=""    )) ) {
                
                    $("#sl2").append(pers);                 

                    var wpin = "Images/W_pin.png";                
                    var perLatlng = new google.maps.LatLng(c[1],c[0]);
                    var marker = new google.maps.Marker({
                        position: perLatlng,
                        map: map,
                        icon: wpin,
                        title:nm
                    });
                    markersArray.push(marker);

                    $("#"+pid).bind("click", function(){
                        panToPoint = new google.maps.LatLng(c[1], c[0]);
                        if(zkL == c[1]) {
                            zk = zk +2;
                        } else {
                            zk =6;
                            zkL = c[1];
                        }
            
                        map.panTo(panToPoint);
                        map.setZoom(zk);
                        google.maps.event.trigger(marker, 'click');
                    });

                    google.maps.event.addListener(marker, 'click', function() {
                        showStudent(nm);
                    });
                    google.maps.event.addListener(marker,'click',function() {
                  	  map.setZoom(6);
                  	  map.setCenter(marker.getPosition());
                  	  });               
                }
            });         
//                alert(ct);            
        });
    }
    
        
    function hideStudent() {
        document.getElementById("infobar").style.display="none";
        zk = 3;
        map.setZoom(zk);
    }
    
    function initialize() {
    
        
$('#nsrch').keyup(function() {
	var nv = $('#nsrch').val();
	$('div.pers span.mrkLnk').parent().css({"display":"block"});	
	if(nv.length > 0) {
		$('div.pers').find("span.mrkLnk").parent().css({"display":"none"});
		$('div.pers').find("span.mrkLnk:Contains('"+nv+"')").parent().css({"display":"block"});
	}
});

jQuery.expr[':'].Contains = function(a, i, m) { 
  return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0; 
};

geocoder = new google.maps.Geocoder();
        var mapOptions = {
            center: new google.maps.LatLng(43,-69),
            zoom: zk,
            mapTypeId: google.maps.MapTypeId.ROAD,
	    streetViewControl: false,
            mapTypeControl: false,
            panControl: false,
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_CENTER,
              style: google.maps.ZoomControlStyle.DEFAULT
            }
        };
        
        map = new google.maps.Map(document.getElementById("woodlawn_map"),
            mapOptions);
        addListing("");

    }
    
    function codeAddress2() {
    	var geocoder = new google.maps.Geocoder();
    	var address = document.getElementById("address").value;

    	geocoder.geocode( { 'address': address}, function(results, status) {

    	if (status == google.maps.GeocoderStatus.OK) {
    	    var latitude = results[0].geometry.location.lat();
    	    var longitude = results[0].geometry.location.lng();
    	    document.getElementById("longitude").value = longitude;
    	    document.getElementById("latitude").value = latitude;
    	    } 
    	}); 
    	}
    
    google.maps.event.addDomListener(window, 'load', initialize);


function specClick(p) {
	var nv = p.substring(1,p.indexOf("20")).replace(/_/g,' ');
//	console.log(nv);
//	$("#"+p).trigger('click')
	showStudent(nv);
}


$("document").ready(function() {
	urk = window.location.href;

	ta = true;

	if(urk.indexOf("?maj") > -1) {

		ta = false;
		qs_maj = urk.substring(urk.indexOf("=")+1);
		if(qs_maj.indexOf("#") > -1) {
		    qs_maj = qs_maj.substring(0,qs_maj.indexOf("#"));
		}
		//alert(qs_maj);
	}

	if(urk.indexOf("?") > -1 && ta) {
		ppp = urk.substring(urk.indexOf("?"));
		if( ppp.indexOf("=") > -1) {
		   ppp = ppp.substring(ppp.indexOf("=")+1);
		   if(ppp.indexOf("#") > -1) {
		      ppp = ppp.substring(0,ppp.indexOf("#"));
		   }
window.setTimeout( specClick, 1000, ppp);


		}
	}	
});