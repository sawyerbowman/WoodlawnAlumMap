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
        url: "http://localhost/WoodlawnAlumMap/AlumMap/woodlawn_alums_old.xml",
        dataType: "xml",
        cache: false}).done(function(data) {
            html = "";
            p = $(data).find("name:contains("+nm+")").parent();

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
                
                
                //get coordinates and student name
                var coords = p.find("coordinates").text();
                p.find("Data").each(function()
                {
                    if($(this).attr("name") == "classyear") {
                        cy = $(this).find("value").text();
                        //cy = cy.substring(2);
                    }
                    if($(this).attr("name") == "location") {
                        loc = $(this).find("value").text();
                    }
                    if($(this).attr("name") == "hometown") {
                        home = $(this).find("value").text();
                    }
                    if($(this).attr("name") == "image") {
                        img = $(this).find("value").text().toLowerCase();
                    }
                    if($(this).attr("name") == "caption") {
                        capt = $(this).find("value").text();
                    }
                    if($(this).attr("name") == "image2") {
                        img2 = $(this).find("value").text().toLowerCase();
                    }
                    if($(this).attr("name") == "caption2") {
                        capt2 = $(this).find("value").text();
                    }
                    if($(this).attr("name") == "image3") {
                        img3 = $(this).find("value").text().toLowerCase();
                    }
                    if($(this).attr("name") == "caption3") {
                        capt3 = $(this).find("value").text();
                    }

                    if($(this).attr("name") == "major") {
                        maj = $(this).find("value").text();
                    }
                    if($(this).attr("name") == "plans") {
                        plans = $(this).find("value").text();
                    }

                    if($(this).attr("name") == "best") {
                        best = $(this).find("value").text();
                    }
                    if($(this).attr("name") == "missing") {
                        miss = $(this).find("value").text();
                    }
		    if($(this).attr("name") == "readmore") {
                        rm = $(this).find("value").text();
                    }


                        document.getElementById("infobar").style.display="block";
                        var info = "<div class='nm'>"+nm+" '"+cy.substring(2)+"</div>";

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
                            info += "<div class='best'><span>Best experience at Woodlawn:</span> "+best+"</div>";
                        }
                        if(miss != "") {
                            info += "<div class='miss'><span>What I miss most about Woodlawn:</span> "+miss+"</div>";
                        }
			if(rm != "") {
                            info += "<div class='rm'><a target='rm' href='"+rm+"'>read more</a></div>";
                        }


			info += "<div class='pics'>"; 

                        if(img != "") {
                            info += "<div class='img'><img src='"+img+"' width='200' alt='"+capt+"' /><div class='capt'>"+capt+"</div></div>";
                        }
                        if(img2 != "") {
                            info += "<div class='img'><img src='"+img2+"' width='200' alt='"+capt2+"' /><div class='capt'>"+capt2+"</div></div>";
                        }
                        if(img3 != "") {
                            info += "<div class='img'><img src='"+img3+"' width='200' alt='"+capt3+"' /><div class='capt'>"+capt2+"</div></div>";
                        }

			info += "</div>"; 

                        $("#info").html(info);

//if(img2 != "") {
//	$('.pics').css({"display":"block"});
//	$('.pics').cycle({fx:'fade'});
//	$('.img').css({"background":"none"});
//	$('.img').css({"border-width":"0px"});
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
        url: "http://localhost/WoodlawnAlumMap/AlumMap/woodlawn_alums_old.xml",
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
                    if($(this).attr("name") == "classyear") {
                        cy = $(this).find("value").text();
                        //cy = cy.substring(2);
                    }
                    if($(this).attr("name") == "location") {
                        loc = $(this).find("value").text();
                    }   
                    if($(this).attr("name") == "major") {
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