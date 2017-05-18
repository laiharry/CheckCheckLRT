function onLoad() {
//    document.addEventListener("deviceready", onDeviceReady, false);
	onDeviceReady();
/*
    if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
        document.addEventListener("deviceready", onDeviceReady, false);
    } else {
        onDeviceReady();
    }
*/
}

function onDeviceReady() {
	setStationName();
	document.getElementById("buttonHere").addEventListener("click",buttonHereClick, false);
	document.getElementById("buttonWhere").addEventListener("click",buttonWhereClick, false);

	document.getElementById("buttonP001").addEventListener("click",buttonP001Click, false);
	document.getElementById("buttonP002").addEventListener("click",buttonP002Click, false);

	document.getElementById("buttonS001").addEventListener("click",buttonS001Click, false);
	document.getElementById("buttonS010").addEventListener("click",buttonS010Click, false);
	document.getElementById("buttonS015").addEventListener("click",buttonS015Click, false);
	document.getElementById("buttonS020").addEventListener("click",buttonS020Click, false);
	document.getElementById("buttonS030").addEventListener("click",buttonS030Click, false);
	document.getElementById("buttonS240").addEventListener("click",buttonS240Click, false);
	document.getElementById("buttonS250").addEventListener("click",buttonS250Click, false);
	document.getElementById("buttonS260").addEventListener("click",buttonS260Click, false);
	document.getElementById("buttonS265").addEventListener("click",buttonS265Click, false);
	document.getElementById("buttonS920").addEventListener("click",buttonS920Click, false);

	document.getElementById("buttonS040").addEventListener("click",buttonS040Click, false);
	document.getElementById("buttonS050").addEventListener("click",buttonS050Click, false);
	document.getElementById("buttonS060").addEventListener("click",buttonS060Click, false);
	document.getElementById("buttonS070").addEventListener("click",buttonS070Click, false);
	document.getElementById("buttonS075").addEventListener("click",buttonS075Click, false);
	document.getElementById("buttonS080").addEventListener("click",buttonS080Click, false);
	document.getElementById("buttonS180").addEventListener("click",buttonS180Click, false);
	document.getElementById("buttonS190").addEventListener("click",buttonS190Click, false);
	document.getElementById("buttonS200").addEventListener("click",buttonS200Click, false);
	document.getElementById("buttonS170").addEventListener("click",buttonS170Click, false);
	document.getElementById("buttonS212").addEventListener("click",buttonS212Click, false);
	document.getElementById("buttonS220").addEventListener("click",buttonS220Click, false);
	document.getElementById("buttonS230").addEventListener("click",buttonS230Click, false);
	document.getElementById("buttonS270").addEventListener("click",buttonS270Click, false);
	document.getElementById("buttonS275").addEventListener("click",buttonS275Click, false);
	document.getElementById("buttonS280").addEventListener("click",buttonS280Click, false);
	document.getElementById("buttonS295").addEventListener("click",buttonS295Click, false);
	document.getElementById("buttonS300").addEventListener("click",buttonS300Click, false);
	document.getElementById("buttonS310").addEventListener("click",buttonS310Click, false);
	document.getElementById("buttonS320").addEventListener("click",buttonS320Click, false);
	document.getElementById("buttonS330").addEventListener("click",buttonS330Click, false);

	document.getElementById("buttonS090").addEventListener("click",buttonS090Click, false);
	document.getElementById("buttonS100").addEventListener("click",buttonS100Click, false);
	document.getElementById("buttonS110").addEventListener("click",buttonS110Click, false);
	document.getElementById("buttonS120").addEventListener("click",buttonS120Click, false);
	document.getElementById("buttonS130").addEventListener("click",buttonS130Click, false);
	document.getElementById("buttonS140").addEventListener("click",buttonS140Click, false);
	document.getElementById("buttonS150").addEventListener("click",buttonS150Click, false);
	document.getElementById("buttonS160").addEventListener("click",buttonS160Click, false);
	document.getElementById("buttonS340").addEventListener("click",buttonS340Click, false);
	document.getElementById("buttonS350").addEventListener("click",buttonS350Click, false);
	document.getElementById("buttonS360").addEventListener("click",buttonS360Click, false);
	document.getElementById("buttonS370").addEventListener("click",buttonS370Click, false);

	document.getElementById("buttonS380").addEventListener("click",buttonS380Click, false);
	document.getElementById("buttonS390").addEventListener("click",buttonS390Click, false);
	document.getElementById("buttonS400").addEventListener("click",buttonS400Click, false);
	document.getElementById("buttonS425").addEventListener("click",buttonS425Click, false);
	document.getElementById("buttonS430").addEventListener("click",buttonS430Click, false);
	document.getElementById("buttonS435").addEventListener("click",buttonS435Click, false);
	document.getElementById("buttonS445").addEventListener("click",buttonS445Click, false);
	document.getElementById("buttonS448").addEventListener("click",buttonS448Click, false);
	document.getElementById("buttonS450").addEventListener("click",buttonS450Click, false);
	document.getElementById("buttonS455").addEventListener("click",buttonS455Click, false);
	document.getElementById("buttonS460").addEventListener("click",buttonS460Click, false);
	document.getElementById("buttonS490").addEventListener("click",buttonS490Click, false);
	document.getElementById("buttonS500").addEventListener("click",buttonS500Click, false);

	document.getElementById("buttonS468").addEventListener("click",buttonS468Click, false);
	document.getElementById("buttonS480").addEventListener("click",buttonS480Click, false);
	document.getElementById("buttonS510").addEventListener("click",buttonS510Click, false);
	document.getElementById("buttonS520").addEventListener("click",buttonS520Click, false);
	document.getElementById("buttonS530").addEventListener("click",buttonS530Click, false);
	document.getElementById("buttonS540").addEventListener("click",buttonS540Click, false);
	document.getElementById("buttonS550").addEventListener("click",buttonS550Click, false);

	document.getElementById("buttonS560").addEventListener("click",buttonS560Click, false);
	document.getElementById("buttonS570").addEventListener("click",buttonS570Click, false);
	document.getElementById("buttonS580").addEventListener("click",buttonS580Click, false);
	document.getElementById("buttonS590").addEventListener("click",buttonS590Click, false);
	document.getElementById("buttonS600").addEventListener("click",buttonS600Click, false);


//	setInputInfo(100,100,100);
	
var zoneId = getZoneId();
var stationId = getStationId();
var platformId = getPlatformId();
//	 alert("zoneId "+zoneId);
//	 alert("stationId "+stationId);
//	 alert("platformId "+platformId);

//  alert("function onDeviceReady debug");

//	showHere();
	showWhere();

/*

	document.getElementById("buttonBeep").addEventListener("click",playBeep, false);
	document.getElementById("buttonAlert").addEventListener("click",showAlert, false);
	document.getElementById("buttonComfirm").addEventListener("click",showConfirm, false);
	document.getElementById("buttonVibrate").addEventListener("click",doVibrate, false);
	document.getElementById("buttonNotificationVibrate").addEventListener("click",doNotificationVibrate, false);

	showDeviceInfo();
	showNetworkConnection();
	window.addEventListener("batterystatus", onBatteryStatus, false);
*/

}


function getStationNameChi(stationId) {
	var stationNameChi = "StationNameChi" + stationId;
	return localStorage.getItem(stationNameChi);
}

function setStationName() {
// zone 1
	localStorage.setItem("StationNameChi001","屯門碼頭");
	localStorage.setItem("StationNameChi010","美樂");
	localStorage.setItem("StationNameChi015","蝴蝶");
	localStorage.setItem("StationNameChi020","輕鐵車廠");
	localStorage.setItem("StationNameChi030","龍門");
	localStorage.setItem("StationNameChi240","兆禧");
	localStorage.setItem("StationNameChi250","屯門泳池");
	localStorage.setItem("StationNameChi260","豐景園");
	localStorage.setItem("StationNameChi265","兆麟");
	localStorage.setItem("StationNameChi920","三聖");

// zone 2	
	localStorage.setItem("StationNameChi040","青山村");
	localStorage.setItem("StationNameChi050","青雲");
	localStorage.setItem("StationNameChi060","建安");
	localStorage.setItem("StationNameChi070","河田");
	localStorage.setItem("StationNameChi075","蔡意橋");
	localStorage.setItem("StationNameChi080","澤豐");
	localStorage.setItem("StationNameChi180","山景（北）");
	localStorage.setItem("StationNameChi190","山景（南）");
	localStorage.setItem("StationNameChi200","鳴琴");
	localStorage.setItem("StationNameChi170","石排");
	localStorage.setItem("StationNameChi212","大興（北）");
	localStorage.setItem("StationNameChi220","大興（南）");
	localStorage.setItem("StationNameChi230","銀圍");
	localStorage.setItem("StationNameChi270","安定");
	localStorage.setItem("StationNameChi275","友愛");
	localStorage.setItem("StationNameChi280","市中心");
	localStorage.setItem("StationNameChi295","屯門");
	localStorage.setItem("StationNameChi300","杯渡");
	localStorage.setItem("StationNameChi310","何福堂");
	localStorage.setItem("StationNameChi320","新墟");
	localStorage.setItem("StationNameChi330","景峰");

// zone 3	
	localStorage.setItem("StationNameChi090","屯門醫院");
	localStorage.setItem("StationNameChi100","兆康");
	localStorage.setItem("StationNameChi110","麒麟");
	localStorage.setItem("StationNameChi120","青松");
	localStorage.setItem("StationNameChi130","建生");
	localStorage.setItem("StationNameChi140","田景");
	localStorage.setItem("StationNameChi150","良景");
	localStorage.setItem("StationNameChi160","新圍");
	localStorage.setItem("StationNameChi340","鳳地");
	localStorage.setItem("StationNameChi350","藍地");
	localStorage.setItem("StationNameChi360","泥圍）");
	localStorage.setItem("StationNameChi370","鍾屋村");
	
// zone 4
	localStorage.setItem("StationNameChi380","洪水橋");
	localStorage.setItem("StationNameChi390","塘坊村");
	localStorage.setItem("StationNameChi400","屏山");
	localStorage.setItem("StationNameChi425","坑尾村");
	localStorage.setItem("StationNameChi430","天水圍");
	localStorage.setItem("StationNameChi435","天慈");
	localStorage.setItem("StationNameChi445","天耀");
	localStorage.setItem("StationNameChi448","樂湖");
	localStorage.setItem("StationNameChi450","天湖");
	localStorage.setItem("StationNameChi455","銀座");
	localStorage.setItem("StationNameChi460","天瑞）");
	localStorage.setItem("StationNameChi490","翠湖");
	localStorage.setItem("StationNameChi500","天榮");

// zone 5A
	localStorage.setItem("StationNameChi468","頌富");
	localStorage.setItem("StationNameChi480","天富");
	localStorage.setItem("StationNameChi510","天悅");
	localStorage.setItem("StationNameChi520","天秀");
	localStorage.setItem("StationNameChi530","濕地公園");
	localStorage.setItem("StationNameChi540","天恆");
	localStorage.setItem("StationNameChi550","天逸");

// zone 5
	localStorage.setItem("StationNameChi560","水邊圍");
	localStorage.setItem("StationNameChi570","豐年路");
	localStorage.setItem("StationNameChi580","康樂路");
	localStorage.setItem("StationNameChi590","大棠路");
	localStorage.setItem("StationNameChi600","元朗");

}

function setInputInfo(zoneId,stationId,platformId){
	localStorage.setItem("zoneId", zoneId);
	localStorage.setItem("stationId", stationId);
	localStorage.setItem("platformId", platformId);
}

function getZoneId() {
	return localStorage.getItem("zoneId");
}

function getStationId() {
	return localStorage.getItem("stationId");
}

function getPlatformId() {
	return localStorage.getItem("platformId");
}


function buttonP001Click() {
//	confirm("buttonP001Click clicked.");
//	platformId = 1;

var zoneId = getZoneId();
var stationId = getStationId();
var platformId = getPlatformId();

	setInputInfo(zoneId,stationId,1);
	insertLRT();
//	showWhere();	
}

function buttonP002Click() {
//	confirm("buttonP002Click clicked.");
//	platformId = 2;

var zoneId = getZoneId();
var stationId = getStationId();
var platformId = getPlatformId();

	setInputInfo(zoneId,stationId,2);
	insertLRT();

//	showWhere();
	}

function buttonS001Click() {
//	confirm("buttonS001Click clicked.");
//	var zoneId = getZoneId();
//	var stationId = getStationId();
//	var platformId = getPlatformId();
	setInputInfo(1,"001",getPlatformId());
	showPageTwo();	
}

function buttonS010Click() {	setInputInfo(1,"010",getPlatformId());	showPageTwo();	}
function buttonS015Click() {	setInputInfo(1,"015",getPlatformId());	showPageTwo();	}
function buttonS020Click() {	setInputInfo(1,"020",getPlatformId());	showPageTwo();	}
function buttonS030Click() {	setInputInfo(1,"030",getPlatformId());	showPageTwo();	}
function buttonS240Click() {	setInputInfo(1,"240",getPlatformId());	showPageTwo();	}
function buttonS250Click() {	setInputInfo(1,"250",getPlatformId());	showPageTwo();	}
function buttonS260Click() {	setInputInfo(1,"260",getPlatformId());	showPageTwo();	}
function buttonS265Click() {	setInputInfo(1,"265",getPlatformId());	showPageTwo();	}
function buttonS920Click() {	setInputInfo(1,"920",getPlatformId());	showPageTwo();	}

function buttonS040Click() {	setInputInfo(2,"040",getPlatformId());	showPageTwo();	}
function buttonS050Click() {	setInputInfo(2,"050",getPlatformId());	showPageTwo();	}
function buttonS060Click() {	setInputInfo(2,"060",getPlatformId());	showPageTwo();	}
function buttonS070Click() {	setInputInfo(2,"070",getPlatformId());	showPageTwo();	}
function buttonS075Click() {	setInputInfo(2,"075",getPlatformId());	showPageTwo();	}
function buttonS080Click() {	setInputInfo(2,"080",getPlatformId());	showPageTwo();	}
function buttonS180Click() {	setInputInfo(2,"180",getPlatformId());	showPageTwo();	}
function buttonS190Click() {	setInputInfo(2,"190",getPlatformId());	showPageTwo();	}
function buttonS200Click() {	setInputInfo(2,"200",getPlatformId());	showPageTwo();	}
function buttonS170Click() {	setInputInfo(2,"170",getPlatformId());	showPageTwo();	}
function buttonS212Click() {	setInputInfo(2,"212",getPlatformId());	showPageTwo();	}
function buttonS220Click() {	setInputInfo(2,"220",getPlatformId());	showPageTwo();	}
function buttonS230Click() {	setInputInfo(2,"230",getPlatformId());	showPageTwo();	}
function buttonS270Click() {	setInputInfo(2,"270",getPlatformId());	showPageTwo();	}
function buttonS275Click() {	setInputInfo(2,"275",getPlatformId());	showPageTwo();	}
function buttonS280Click() {	setInputInfo(2,"280",getPlatformId());	showPageTwo();	}
function buttonS295Click() {	setInputInfo(2,"295",getPlatformId());	showPageTwo();	}
function buttonS300Click() {	setInputInfo(2,"300",getPlatformId());	showPageTwo();	}
function buttonS310Click() {	setInputInfo(2,"310",getPlatformId());	showPageTwo();	}
function buttonS320Click() {	setInputInfo(2,"320",getPlatformId());	showPageTwo();	}
function buttonS330Click() {	setInputInfo(2,"330",getPlatformId());	showPageTwo();	}

function buttonS090Click() {	setInputInfo(3,"090",getPlatformId());	showPageTwo();	}
function buttonS100Click() {	setInputInfo(3,"100",getPlatformId());	showPageTwo();	}
function buttonS110Click() {	setInputInfo(3,"110",getPlatformId());	showPageTwo();	}
function buttonS120Click() {	setInputInfo(3,"120",getPlatformId());	showPageTwo();	}
function buttonS130Click() {	setInputInfo(3,"130",getPlatformId());	showPageTwo();	}
function buttonS140Click() {	setInputInfo(3,"140",getPlatformId());	showPageTwo();	}
function buttonS150Click() {	setInputInfo(3,"150",getPlatformId());	showPageTwo();	}
function buttonS160Click() {	setInputInfo(3,"160",getPlatformId());	showPageTwo();	}
function buttonS340Click() {	setInputInfo(3,"340",getPlatformId());	showPageTwo();	}
function buttonS350Click() {	setInputInfo(3,"350",getPlatformId());	showPageTwo();	}
function buttonS360Click() {	setInputInfo(3,"360",getPlatformId());	showPageTwo();	}
function buttonS370Click() {	setInputInfo(3,"370",getPlatformId());	showPageTwo();	}

function buttonS380Click() {	setInputInfo(4,"380",getPlatformId());	showPageTwo();	}
function buttonS390Click() {	setInputInfo(4,"390",getPlatformId());	showPageTwo();	}
function buttonS400Click() {	setInputInfo(4,"400",getPlatformId());	showPageTwo();	}
function buttonS425Click() {	setInputInfo(4,"425",getPlatformId());	showPageTwo();	}
function buttonS430Click() {	setInputInfo(4,"430",getPlatformId());	showPageTwo();	}
function buttonS435Click() {	setInputInfo(4,"435",getPlatformId());	showPageTwo();	}
function buttonS445Click() {	setInputInfo(4,"445",getPlatformId());	showPageTwo();	}
function buttonS448Click() {	setInputInfo(4,"448",getPlatformId());	showPageTwo();	}
function buttonS450Click() {	setInputInfo(4,"450",getPlatformId());	showPageTwo();	}
function buttonS455Click() {	setInputInfo(4,"455",getPlatformId());	showPageTwo();	}
function buttonS460Click() {	setInputInfo(4,"460",getPlatformId());	showPageTwo();	}
function buttonS490Click() {	setInputInfo(4,"490",getPlatformId());	showPageTwo();	}
function buttonS500Click() {	setInputInfo(4,"500",getPlatformId());	showPageTwo();	}

function buttonS468Click() {	setInputInfo("5A","468",getPlatformId());	showPageTwo();	}
function buttonS480Click() {	setInputInfo("5A","480",getPlatformId());	showPageTwo();	}
function buttonS510Click() {	setInputInfo("5A","510",getPlatformId());	showPageTwo();	}
function buttonS520Click() {	setInputInfo("5A","520",getPlatformId());	showPageTwo();	}
function buttonS530Click() {	setInputInfo("5A","530",getPlatformId());	showPageTwo();	}
function buttonS540Click() {	setInputInfo("5A","540",getPlatformId());	showPageTwo();	}
function buttonS550Click() {	setInputInfo("5A","550",getPlatformId());	showPageTwo();	}

function buttonS560Click() {	setInputInfo(5,"560",getPlatformId());	showPageTwo();	}
function buttonS570Click() {	setInputInfo(5,"570",getPlatformId());	showPageTwo();	}
function buttonS580Click() {	setInputInfo(5,"580",getPlatformId());	showPageTwo();	}
function buttonS590Click() {	setInputInfo(5,"590",getPlatformId());	showPageTwo();	}
function buttonS600Click() {	setInputInfo(5,"600",getPlatformId());	showPageTwo();	}

/*
function insertLRTCallback(data) {
	alert("insertLRTCallback");
	alert(data);

    alert("zoneId: "+ data.zoneId + "stationId: "+ data.stationId + "platformId: "+ data.platformId);
	showWhere();
}
*/

function insertLRTCallback(data)
{
	/*
    alert("Here: "+data.name);
    alert("Here: "+data.age);
    alert("Here: "+data.location);
    alert("Here: "+data.zoneId);
    alert("Here: "+data.stationId);
    alert("Here: "+data.platformId);
    */

	alert("insertLRTCallback");
//	alert(data);

    alert("zoneId: "+ data.zoneId + " stationId: "+ data.stationId + " platformId: "+ data.platformId);
	alert("sqlreturn: " + data.sqlreturn);
	showWhere();


}

function insertLRT() {
//	alert("insertLRT");

	var zoneId = getZoneId();
	var stationId = getStationId();
	var platformId = getPlatformId();

// var dataString="title="+title+"&duration="+duration+"&price="+price+"&insert=";
// var dataString="zoneId="+zoneId+"&stationId="+stationId+"&platformId="+platformId+"&insert=1"; 
 var dataString="zoneId="+zoneId+"&stationId="+stationId+"&platformId="+platformId; 

// var jsonData={zoneId:zoneId, stationId:stationId, platformId:platformId}

//	alert("function before .ajax");
// var jsonDataString = json_encode(dataString);
//	 alert("function before .ajax");

// e.preventDefault();

//	 alert("function before .ajax");
 if($.trim(zoneId).length>0 & $.trim(stationId).length>0 & $.trim(platformId).length>0)
 {
//	 alert("function before .ajax");
	 $.ajax({
	 type: "GET",
	// url: "./www/php/insert.php",
	 url: "http://www.laiharrysir.byethost15.com/www/php/insert.php",
	// url:"http://localhost/phonegap/database/insert.php",
	// timeout: 3000,
	
	 data: dataString,
//	 data: jsonData,
	 
	 dataType: 'jsonp',  //data type必須設定成 'jsonp'
	 //data: jsonDataString,
//	 jsonp: 'myCallback',
//	 jsonp: 'insertLRTCallback',

//	 jsonpCallback: "insertLRTCallback",
	 
	 crossDomain: true,
	 async: false, //IGNORED!!
	 cache: false,
	 beforeSend: function(){ $("#debugArea").val('Connecting...');},
	 success: function(data){
		 if(data=="success")
		 {
//			 alert("success success");
			 alert(dataString);
//			 alert("Name:"+data.name+"nage:"+data.age+"nlocation:"+data.location);
//			 alert("inserted");
//			 $("#debugArea").val('submit');
//			showWhere();	
		 }
		 else if(data=="error")
		 {
			 alert("success error");
//			 $("#debugArea").val('error');
		 }
		 else {
			 document.getElementById("debugArea").innerHTML = data;
			 alert("success else");
			// alert("else");
		 }	 
	 },  // success
//	 error: function(data) {
    error: function (jqXHR, exception) {
        var msg = '';
        if (jqXHR.status === 0) {
            msg = 'Not connect.\n Verify Network.';
        } else if (jqXHR.status == 404) {
            msg = 'Requested page not found. [404]';
        } else if (jqXHR.status == 500) {
            msg = 'Internal Server Error [500].';
        } else if (exception === 'parsererror') {
            msg = 'Requested JSON parse failed.';
        } else if (exception === 'timeout') {
            msg = 'Time out error.';
        } else if (exception === 'abort') {
            msg = 'Ajax request aborted.';
        } else {
            msg = 'Uncaught Error.\n' + jqXHR.responseText;
        }
//        $('#post').html(msg);
//		alert("ajax error: " + msg);
    },
	 }); // ajax
  }
  return false;
 
}



function submitLRTHere(zoneId,stationId,platformId) {
//	alert("submitLRTHere");

}
 

function buttonHereClick() {
	showHere();
//	$("#contentWhere").hide();
//	$("#contentHere").show();
//	showLRT();
//	readjson();
//	alert("button Here clicked.");
}

function showHere() {
//	showLRT();
	$("#contentHerePageTwo").hide();
	$("#contentWhere").hide();
	$("#contentHere").show();
}


function buttonHerePageTwoClick() {
	showPageTwo();
//	alert("button Where clicked.");
}

function showPageTwo() {
	$("#contentHere").hide();
	$("#contentWhere").hide();
	$("#contentHerePageTwo").show();
}

function buttonHerePageTwoBack() {
	showWhere();
//	$("#contentHerePageTwo").hide();
//	$("#contentWhere").show();
//	alert("button Where clicked.");
}

function showWhere() {
	showLRT();
	$("#contentHere").hide();
	$("#contentHerePageTwo").hide();
	$("#contentWhere").show();
}


function buttonWhereClick() {
	showWhere();
	$("#contentHere").hide();
	$("#contentWhere").show();
//	alert("button Where clicked.");
}


function showLRT() {
	var url="http://www.laiharrysir.byethost15.com/www/php/json.php?jsonp=?";
//  var url="www/php/json.php";

/*
$.get(url)
    .done(function() { 
        alert("exists code"); 
    }).fail(function() { 
        alert("not exists code"); 
    })
*/

//	$("#listview").empty();

	document.getElementById("listviewwhere").innerHTML = "";
/*
	$.getJSON(url,function(result){
		// console.log(result);
*/
	$.getJSON(url,	function(result){
		// console.log(result);


 		$.each(result, function(i, field){
 			var id=field.id;
 			var submitDate=field.submitDate;
 			var submitTime=field.submitTime;
			var zoneId=field.zoneId;
			var stationId=field.stationId;
			var platformId=field.platformId;
			
//			$("#listviewwhere").append("<li> <h2>Date:" + submitDate + " </h2> <h2>Time:" + submitTime + " </h2> <p>Zone:" + zoneId + "</p> <p>Station:" + stationId + "</p> <p>Platform:" + platformId + "</p></li>");

// zone 1  <font color='#F0397B'>███ </font>
// zone 2  <font color='#F68712'>███ </font>
// zone 3  <font color='#0E88D3'>███ </font>
// zone 4  <font color='#33B540'>███ </font>
// zone 5A <font color='#F25C19'>███ </font>
// zone 5  <font color='#7641A4'>███ </font>

if (zoneId == 1) {
			$("#listviewwhere").append("<li> <h2><font color='#F0397B'>███ </font>" + submitDate + " " + submitTime + " " + getStationNameChi(stationId) + " 月台 " + platformId + "</h2></li>");
}
else if (zoneId == 2) {
			$("#listviewwhere").append("<li> <h2><font color='#F68712'>███ </font>" + submitDate + " " + submitTime + " " + getStationNameChi(stationId) + " 月台 " + platformId + "</h2></li>");
}
else if (zoneId == 3) {
			$("#listviewwhere").append("<li> <h2><font color='#0E88D3'>███ </font>" + submitDate + " " + submitTime + " " + getStationNameChi(stationId) + " 月台 " + platformId + "</h2></li>");
}
else if (zoneId == 4) {
			$("#listviewwhere").append("<li> <h2><font color='#33B540'>███ </font>" + submitDate + " " + submitTime + " " + getStationNameChi(stationId) + " 月台 " + platformId + "</h2></li>");
}
else if (zoneId == "5A") {
			$("#listviewwhere").append("<li> <h2><font color='#F25C19'>███ </font>" + submitDate + " " + submitTime + " " + getStationNameChi(stationId) + " 月台 " + platformId + "</h2></li>");
}
else if (zoneId == 5) {
			$("#listviewwhere").append("<li> <h2><font color='#7641A4'>███ </font>" + submitDate + " " + submitTime + " " + getStationNameChi(stationId) + " 月台 " + platformId + "</h2></li>");
}

//			$("#listviewwhere").append("<li><a class='item' href='form.html?id="+id+"&title="+title+"&duration="+duration+"&price="+price+"'><span class='item-note'>$"+price+"</span><h2>"+ title + " </h2><p>"+ duration +"</p></a></li>");
			
			$("#listviewwhere").listview("refresh");
		});
/*

 		$.each(result, function(i, field){
 			var id=field.id;
 			var title=field.title;
 			var duration=field.duration;
			var price=field.price;
			
			$("#listviewwhere").append("<li><a class='item' href='form.html?id="+id+"&title="+title+"&duration="+duration+"&price="+price+"'><span class='item-note'>$"+price+"</span><h2>"+ title + " </h2><p>"+ duration +"</p></a></li>");
			
			$("#listviewwhere").listview("refresh");
		});
*/
	});

}
/*
function playBeep() {
	navigator.notification.beep(1);
}

// alert dialog dismissed
	function alertDismissed() {
//		alert("alertDismissed");
	}
		
function showAlert() {
	navigator.notification.alert(
		'Alert OK!',  // message
		alertDismissed,         // callback
		'Game Over',            // title
		'Done'                  // buttonName
	);
}

function onConfirm(buttonIndex) {
//    alert('You selected button ' + buttonIndex);
}

function showConfirm() {
    navigator.notification.confirm(
        'Confirm OK!',  // message
        onConfirm,              // callback to invoke with index of button pressed
        'Game Over',            // title
        'Restart,Exit'          // buttonLabels
    );
}

function doVibrate() {
	navigator.vibrate(1000);
}

function doNotificationVibrate() {
	navigator.notification.vibrate(1000);
}

// Geolocation
var watchID = null;
var geolocationOptions = null;

// GPS
// start the watch
function startGetLocation() {
	alert("Start Get Location");
	var networkState = navigator.network.connection.type;
	if (networkState == Connection.WIFI) {
		geolocationOptions = { enableHighAccuracy: false, timeout: 30000 };
	}
	else {
		geolocationOptions = { enableHighAccuracy: true, timeout: 30000 };
    }
	navigator.geolocation.getCurrentPosition(onGetLocationSuccess, onError, geolocationOptions);
	alert("End Get Location");
}


// onSuccess Geolocation
//
function onGetLocationSuccess(position) {
	var element = document.getElementById('getGeolocation');
	var d = new Date();
	var t = d.toLocaleTimeString();

	element.innerHTML = 'Time: '  + t      + ' ' +
						'Latitude: '  + position.coords.latitude      + ' ' +
						'Longitude: ' + position.coords.longitude     + ' ' +
						'Speed: ' + position.coords.speed     + ' ' +
//                            'Timestamp: ' + position.timestamp     + '<br />' +
						'<hr />';
}

// start the watch
function startWatchLocation() {
	alert("start watch Location");

	var networkState = navigator.network.connection.type;
	if (networkState == Connection.WIFI) {
		geolocationOptions = { enableHighAccuracy: false, timeout: 30000 };
	}
	else {
		geolocationOptions = { enableHighAccuracy: true, timeout: 30000 };
	} 
	watchID = navigator.geolocation.watchPosition(onWatchLocationSuccess, onError, geolocationOptions);	
	alert("End watch Location");
}

// onSuccess Geolocation
//
function onWatchLocationSuccess(position) {
	var element = document.getElementById('watchGeoLocation');
	var d = new Date();
	var t = d.toLocaleTimeString();

	element.innerHTML = 'Time: '  + t      + ' ' +
						'Latitude: '  + position.coords.latitude      + ' ' +
						'Longitude: ' + position.coords.longitude     + ' ' +
						'Speed: ' + position.coords.speed     + ' ' +
//                            'Timestamp: ' + position.timestamp     + '<br />' +
						'<hr />'      + element.innerHTML;
}

// onError Callback receives a PositionError object
//
function onError(error) {
	alert('code: '    + error.code    + '\n' +
		  'message: ' + error.message + '\n');
}


// clear the watch that was started earlier
// 
function clearWatchLocation() {
	if (watchID != null) {
		navigator.geolocation.clearWatch(watchID);
		watchID = null;
	}

	var element = document.getElementById('geolocation');
	element.innerHTML = '';
}


function showDeviceInfo() {
	var myDiv = document.getElementById("deviceProps");
	 
	myDiv.innerHTML = 'Device Name: ' + device.name + '<br />' +
					  'Device PhoneGap: ' + device.phonegap + '<br />' +
					  'Device Cordova: ' + device.cordova + '<br />' +
					  'Device Model: ' + device.model + '<br />' +
					  'Device Platform: ' + device.platform + '<br />' +
					  'Device UUID: ' + device.uuid + '<br />' +
					  'Device Version: ' + device.version + '<br />' +
					  'Device Manufacturer: ' + device.manufacturer + '<br />' +
					  'Device IsVirtual: ' + device.isVirtual + '<br />';
}

function showNetworkConnection() {
	var networkState = navigator.network.connection.type;
	
	var states = {};
	states[Connection.UNKNOWN] = 'Unknown connection';
	states[Connection.ETHERNET] = 'Ethernet connection';
	states[Connection.WIFI] = 'WiFi connection';
	states[Connection.CELL_2G] = 'Cell 2G connection';
	states[Connection.CELL_3G] = 'Cell 3G connection';
	states[Connection.CELL_4G] = 'Cell 4G connection';
	states[Connection.NONE] = 'No network connection';

	var myDiv = document.getElementById("networkConnection");
	 
	myDiv.innerHTML = 'Connection type: ' + states[networkState];
}

function onBatteryStatus(status) {
	var myDiv = document.getElementById("batteryProps");
  
	myDiv.innerHTML = 'Battery Level: ' + status.level + '%' + '<br />' +
                      'Is Plugged: ' + status.isPlugged + '<br />';
}
*/