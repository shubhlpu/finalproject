function randomGenerate(l){
	console.log("rajat");
if (l==="generate"){
if(window.XMLHttpRequest)
{
var generate= new XMLHttpRequest();
}
else
{
var generate =new ActiveXObject("Microsoft.XMLHTTP");
}
var n=document.getElementById("number").value;
generate.onreadystatechange=function(){
if(this.readyState== 4 && this.status==200)
{	
var address=(JSON.parse(this.responseText)).message;
console.log(address);
for(var j=0;j<address.length;j++){

var img=document.createElement("img");
img.setAttribute("src",address[j]);
document.getElementById("gallary").appendChild(img);
}
}
};
generate.open("GET","https://dog.ceo/api/breeds/image/random/"+n,true);
generate.send();
}
else{ 
document.getElementById("gallary").innerHTML="";
}
}

function convertCurrency (){
	var howMuch = document.getElementById("howMuch").value;
	var from =document.getElementsByTagName("select")[0].value;
	var to = document.getElementsByTagName("select")[1].value;
	var res= from +"_"+ to;
	var URL="https://free.currencyconverterapi.com/api/v6/convert?q="+from+"_"+to+"&compact=ultra&apiKey=beaebc2cbae14d4dd01f";
	var generate2= new XMLHttpRequest();
		generate2.open("GET",URL,true);
		generate2.send();
		generate2.onreadystatechange= function (){

				if(this.readyState== 4 && this.status==200)
				{
					var restext=JSON.parse(this.responseText);
					if(restext[res]){
					document.getElementsByClassName("money")[0].firstChild.innerHTML=howMuch;
					document.getElementsByClassName("money")[1].firstChild.innerHTML=howMuch*restext[res];
	
					}
					else{
						document.getElementsByClassName("money")[0].firstChild.innerHTML="Can not Convert";
					document.getElementsByClassName("money")[1].firstChild.innerHTML="Can not Convert";

					}
					
				}

		}
}
function world()
	{
		var request= new XMLHttpRequest();
		request.open("GET","https://restcountries.eu/rest/v2/name/"+document.getElementById("countryName").value+"?fullText=true",true);
		request.send();
		request.onreadystatechange= function(){
		if(this.readyState== 4 && this.status==200)
				{	var list =[""];
					var restext=JSON.parse(this.responseText);
					var table = document.createElement("table");
					table.setAttribute("id","infoTable");
					for (var index in restext)
					{		for (var x in restext[index]){
							var td=document.createElement("td");
							var th= document.createElement("th");
							td.setAttribute("id","tdd");
							th.setAttribute("id","thh");
							if(typeof(restext[index][x])==="object")
							{
								for(var v in restext[index][x])
								{
									if(typeof(restext[index][x][v])==="object")
									{
										for(var m in restext[index][x][v])
										{
											if(typeof(restext[index][x][v][m])==="object")
											{
												for(var b in restext[index][x][v][m])
													{
													td.innerHTML += " " +(restext[index][x][v][m][b]);
													}
												}
											td.innerHTML += " " +(restext[index][x][v][m]);
										}			
									}
								td.innerHTML += " " +(restext[index][x][v]);
								}
							}
							else{
								td.innerHTML=(restext[index][x]);
								console.log(typeof(restext[index][x]));
							}
							th.innerHTML=(JSON.stringify(x));
							var tr=document.createElement("tr");
							tr.appendChild(th);
							tr.appendChild(td);
							table.appendChild(tr);
							}
					document.getElementById("wola").innerHTML="";		
					}
					document.getElementById("wola").appendChild(table);


				}

		}
	}

function  scorePls(api){
var key= "yNnqOMo1AZcXK8oTTsYEoTphU1y1";
	var url="https://cricapi.com/api/";
	var request= new XMLHttpRequest();
	if (api ==="calender"){
	request.open("GET","http://cricapi.com/api/matchCalendar?apikey="+key,true);
	request.send();
	request.onreadystatechange= function(){
		if(this.readyState== 4 && this.status==200)
				{
					var restext=JSON.parse(this.responseText);
					var div = document.getElementById("cricket");
					div.innerHTML="";
					for (var x in restext["data"]){
					div.innerHTML +="<p id='cal-data'>"+(restext["data"][x]["date"])+"</p>";
					div.innerHTML +="<p id='cal-data'>"+(restext["data"][x]["name"])+"</p>";}
				}}}
	else{
		request.open("GET","http://cricapi.com/api/cricket?apikey="+key,true);
		request.send();
	request.onreadystatechange= function(){
		if(this.readyState== 4 && this.status==200)
				{
					var restext=JSON.parse(this.responseText);
					var div = document.getElementById("cricket");
					div.innerHTML="<p><i class='fas fa-asterisk'></i>:Team batting</p>";
					for(var x in restext["data"]){
						div.innerHTML +="<p id='cal-data'>"+(restext["data"][x]["description"])+"</p>";
					};
				}}
	}
	
		

			
}