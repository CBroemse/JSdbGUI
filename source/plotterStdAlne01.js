                       /*  --------------------------------------##################################################### pack a bag for zoe */

function find(needle, haystack) {
    var results = [];
    var idx = haystack.indexOf(needle);
    while (idx != -1) {
        results.push(idx);
        idx = haystack.indexOf(needle, idx + 1);
    }
    return results;
};


function pacK(a){
  var beo=[];
  var teo = beo.push(a);
  return (document.getElementById("zoe").innerHTML = teo); 
}

function sliCE(func, foxe){           /* --------------------------   drop foxe of func */
		const xe = find(foxe, func);	
			if (xe == 0){
                        return func.slice(1) }
			else {
			return (func.slice(0, xe)).concat(func.slice(xe+1))
		} };

// String -> Array Integer  e.g   "33,344553, .." -> [33.35..]
function maP(daAAt){
	var b=(daAAt.split(",")).map(x=>+x);
	var nO = b.map(x=>+ x.toPrecision(4));
	return nO };

function vM(arr){
  return arr.reduce(function (p, v) {
    return ( p > v ? p : v );
  });
};
function vMAX(foda){
    var writeRg = document.getElementById("myText5").value;

    const geTT = (vM(maP(foda)));
    document.getElementById("myText5").innerHtml = geTT ; //(nO.valueOf());

  //  console.log(geTT);
  };

function mapM(m, n){
    return (m[n])
      };
function compareNumbers(a, b) {
  return a - b;
}

function mfilT(array, array2){ 
    // arr1= [1,2,3,4],
    // arr2 = [2,4],
    res = array1.filter(item => !array2.includes(item));
    return res }

function expandIMGi(imgs) {
  var expandImg = document.getElementById("daIMG1");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
//function ploT(){
  //     <a href="file:///c:/stack/SimilaritYWriter20/src/textS/indat23720/otterWORK.svg" style="width:5%;" target="iframe_a">plot   ____0xy0z=3 0xy0z=3 0xy0z=3x0y0z=6 x0y0z=6 x0y0z=6 0x0yz=2</a>


function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}


/* ------------ MAIN SimiVals -----------------------myDiv------------------------------------- ############################################################ obJ0 ---------> MAIN DATA daobJ0
*/




// entrY ::  [[( String  ,  String )]]     =>  Object one of [Object] 
function entries(entrY){
       var geL = entrY[0];
       for (var j=0; j<geL.length; j++) {
	   var offntry =  (entrY[j]);
           var starT = new Map(offntry);   // [
           return Object.fromEntries(starT)
	     }
        };

//[["fl1","48.05194805194805"],["fl2","59.65065502183406"],["fl3","19.51219512195122"],["fl4","18.94736842105263"],["fl5","47.18614718614719"],["fl6","11.49425287356322"]],[["fl1","51.21951219512195"],["fl2","57.030567685589524"],["fl3","14.285714285714285"],["fl4","13.68421052631579"],["fl5","50.40650406504065"],["fl6","5.74712643678161"]],[["fl1","67.21311475409836"],["fl2","36.06986899563319"],["fl3","21.584699453551913"],["fl4","22.131147540983605"],["fl5","66.66666666666666"],["fl6","28.688524590163933"]]];

var deepDown = dBLitoSolu[0];
var  entE = entries(dBLitoSolu);

//] ;

//  [Array] ->  {Array}    call with key 
const convertArrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
};

// get the { max (value n)) -  )max value (n-1..)) } .. min n
// n:Int posi 

// dBLiinLiNoSolo = [['l1',40.59405940594059","48.05194805194805","51.21951219512195","67.21311475409836"],["64.71615720524018","59.65065502183406","57.030567685589524","36.06986899563319"],["29.616724738675956","19.51219512195122","14.285714285714285","21.584699453551913"],["29.12280701754386","18.94736842105263","13.68421052631579","22.131147540983605"],["39.603960396039604","47.18614718614719","50.40650406504065","66.66666666666666"],["22.60536398467433","11.49425287356322","5.74712643678161","28.688524590163933"],["40.59405940594059","36.06986899563319","14.285714285714285","13.68421052631579","39.603960396039604","11.49425287356322"]]


function finDB(){
	function hackl(j){ (((deepDown[j]).slice(1))) }; 
	var aList = [deepDown[0].slice(1),deepDown[1].slice(1),deepDown[2].slice(1),deepDown[3].slice(1),deepDown[4].slice(1),deepDown[5].slice(1)]; //.sort; //Array [(hackl(1)),(hackl(2)),(hackl(3))] ; //, hackl(j,k) ,  hackl(j,k) ,  hackl(j,k) ,  hackl(j,k)"
        var trude = Number(find(hackl(3), aList));
        return  aList +"  "+aList.sort()+ "   " + trude; //deepDown[0] ; // ((aList.sort())).toString();
	};

var tE = (finDB());
var tK=  convertArrayToObject((dBLitoSolu), "fl1");
document.getElementById("hemi4").innerHTML = "<p>daObJ0 :  "+ daObJ0.flist1+"</p><p \n>daObJ1 : "+ daObJ1.dataStr11 +"</p>";


// SELECT DATA from daObJ0 (lists of length 4) - Object
function l4(foIO){
       // var doG = (prepIO[2]).toString(); 
       // var gAT =  daObJ1.fodog;
       // var boT=  gAT.toString();
       // var cLT = boT.spit(",") ;

	if (foIO == "flist1"){
		var tu = daObJ0.flist1;
		return tu }

	if (foIO == "flist2"){
	       	var tu = daObJ0.flist2;
		return tu }

        if (foIO == "flist3"){
		var tu = daObJ0.flist3;
		return tu }
        if (foIO == "flist4"){
	        var tu = daObJ0.flist4;
		return tu }
        if (foIO == "flist5"){
	       	var tu = daObJ0.flist5;
		return tu }
        if (foIO == "flist6"){
	       	var tu = daObJ0.flist6;
		return tu}
		else {var tu = daObJ0.flist1;
		return tu } };

// SELECT DATA from daObJ0 (lists of length 4) - Object
function l42(foIO){
     	if (foIO == "dataStr11"){
	       	var tu = daObJ1.dataStr11;
	        	return tu }
        if (foIO == "dataStr12"){
		var tu = daObJ1.dataStr12;
		        return tu }
        if (foIO == "dataStr13"){
	        var tu = daObJ1.dataStr13;
		        return tu }
       	else {var tu = daObJ0.dataStr11;
	        	return tu } };

//  k of flist1..6    + n of dataStr11..13   
//  obJ0 -> daObJ0    +  obJ1 -> daObJ1 
// e.g  daObj0.flist1  +  daObJ1.dataStr11 
// entE: 
//   entries(enttrY) with dBLitoSolu an experimental used Object with fst line of daObJ1 in other format


// RECEIVE a LIST of datStr
// e.g needs dataStr :: Str
// type e.g> GET 2 flist2 CAT 2 dataStr11 
function pipeS(fodata){
    var readIn = document.getElementById("myText5").value;   
    prepIO = (""+readIn+"").split(" ");             // order stream  prepIO[0] , prepIO[1] , ...
    ifLong = prepIO.length;                        //                 GET          no          list 
    var aRg = new RegExp ("("+readIn+")", "g");    // search own command
   //  var result = dataStr0.match(aRg2);
   if ( (prepIO[0]) == (("GET").toString()) && (ifLong>2)){             
               //    var filteR = readIn.replace("GET", "");
                //   var aRg2 = new RegExp ("("+prepIO[1]+")", "g");
		 //  var result = dataStr0.match(aRg2);
                   var haal = (Number(prepIO[1])-1);
		   var baR = l4(prepIO[2].toString());            // the imported flists 1..4 all (length 4)
		   var moBaR = maP(baR);
		   var gir = (maP(baR))[haal];      
		   var expI = gir.toString();
		   var result = baR.match(gir);
		   var geTs = (find(gir, (moBaR)));
		   var lMAx = (vM(moBaR)); 
		   var maxPos =   (find(lMAx, (moBaR)));      // all fst list
		   document.getElementById("hemi2").innerHTML = "<p> selected: "+ (gir) + "</p><p \n> at posi: "+ geTs +"   of \'flist..\': ["+ moBaR +"]  length:"+moBaR.length +"  max "+ lMAx +" at: "+ maxPos+"</p>";
                   document.getElementById("hemi3").innerHTML = prepIO[0]+" of \'liStr\'" ;
		   var doG = (prepIO[2]).toString(); 
			  var gAT =  daObJ1.doG;
			
		          document.getElementById("hemi4").innerHTML = prepIO[0]+" "+prepIO[1]+" of "+ doG +" => "+expI+" -->" ; //"5"; // JSON.stringify(haal) ;
			  if  ( (ifLong>3) && (prepIO[3]) == (("ADD").toString())){

		               //var calC = ((Number(prepIO[4]))+(Number(prepIO[1])))  ;
				  document.getElementById("hemi3").innerHTML = prepIO[0]+" "+prepIO[1]+" of \'"+ doG +"\'=> "+expI+" -->   75 " + JSON.stringify(entE)+"<br>"+ entE.fl1 ; //"5"; // JSON.stringify(haal) ;
                                   if  ( (ifLong>4) && (prepIO[3]) == (("ADD").toString())){

// ADD daObJ1 of obJ1  -> choose ->  dataStr11 or dataStr12 or dataStr13 
                                       var haal2 = (Number(prepIO[4])-1);
	                               var baR2 = l42(prepIO[5].toString());            // the imported  1..3 all (length 5)
                                       var moBaR2 = maP(baR2);
		                       var gir2 = (maP(baR2))[haal2];      
		                       var expI2 = gir2.toString();
				       var geTs2 = (find(gir2, (moBaR2)));
		                       var lMAx2 = (vM(moBaR2)); 
		                       var maxPos2 =   (find(lMAx2, (moBaR2)));
                                       document.getElementById("hemi3").innerHTML = "<p> selected: "+ (gir2) + "</p><p \n> at posi: "+ geTs2 +"   of \'"+ prepIO[5]+"': ["+ moBaR2 +"]  length:"+moBaR2.length +"  max "+ lMAx2 +" at: "+ maxPos2+"</p>";
				       document.getElementById("zoe").innerHTML = prepIO[0]+" "+prepIO[1]+" of \'"+ doG +"\'=> "+expI+" + "+ expI2 +"  sum <p>"+ (Number(gir2)+gir)+"</p>  <q \n> at posi: "+ geTs +"   of \'flist..\': ["+ moBaR +"]  length:"+moBaR.length +"  max "+ lMAx +" at: "+ maxPos+"</q> "+"<r \n> at posi: "+ geTs2 +"   of \'"+ prepIO[5]+"': ["+ moBaR2 +"]  length:"+moBaR2.length +"  max "+ lMAx2 +" at: "+ maxPos2+"</r>";

				       if  ( (ifLong==6) && (prepIO[6]) == (("CAT").toString())){
					     //  function niRA(fol4,strZ){ return fol4(strZ).toString() } 
                                                var nifty =  (niRa(l4,"flist1"))+","+(niRa(l4,"flist2"))+","+(niRa(l4,"flist3"))+","+(niRa(l4,"flist4"))+","+(niRa(l4,"flist5"))+","+(niRa(l4,"flist6")).split(",") ;

					        if  ( (ifLong>6) && (prepIO[7]) == (("1").toString())){    //  run in concat flist1..6
							var moBaR3 = maP(baR2);
				                        document.getElementById("hemi2").innerHTML = nifty[3] +"<br>"; 
						}
						if  ( (ifLong>6) && (prepIO[7]) == (("2").toString())){   // run in concat dataStr11,12,13
						}
						if  ( (ifLong>6) && (prepIO[7]) == (("3").toString())){  // run ONE big concatenated list, flist 1..6 ++ dataStr 11..13
						}}  } } 
                       /*                                                           #################################################  command   CAT */
			  if  ( (ifLong>3) && (prepIO[3]) == (("CAT").toString())){

		               //var calC = ((Number(prepIO[4]))+(Number(prepIO[1])))  ;
				  document.getElementById("hemi3").innerHTML = prepIO[0]+" "+prepIO[1]+" of \'"+ doG +"\'=> "+expI+" -->   75 " + JSON.stringify(entE)+"<br>"+ entE.fl1 ; //"5"; // JSON.stringify(haal) ;
                                   if  ( (ifLong>4) && (prepIO[3]) == (("CAT").toString())){

// ADD daObJ1 of obJ1  -> choose ->  dataStr11 or dataStr12 or dataStr13 
                                       var haal2 = (Number(prepIO[4])-1);
	                               var baR2 = l42(prepIO[5].toString());            // the imported  1..3 all (length 5)
				       var baR3 = l4("flist1"); var baR4 = l4("flist2"); var baR5 = l4("flist3"); var baR6 = l4("flist4"); var baR7 = l4("flist5"); var baR8 = l4("flist6");  //  SET LENGTH LIST
				       var staR = l42("dataStr11");  var staR2 = l42("dataStr12"); var staR3 = l42("dataStr13");                                                            // SET LENGTH LISTII

                                       var moBaR2 = maP(baR2);
				       var moBar3RAW = (baR3+","+baR4+","+baR5+","+baR6+","+baR7+","+baR8)
				       var moStaRRAW = (staR+","+staR2+","+staR3);
				       var moBar3 = maP(moBar3RAW.toString());
				       var moStar3 =  maP(moStaRRAW.toString());
				    	
				       var gir2 = (maP(baR2))[haal2];      
		                       var expI2 = gir2.toString();
				       var geTs2 = (find(gir2, (moBaR2)));
				       var geTs3 = (find(gir2, (moBar3)));
		                       var lMAx2 = (vM(moBaR2));
				       var lMAx3 = (vM(moBar3)); 
		                       var maxPos2 =   (find(lMAx2, (moBaR2)));
				       var maxPos3 =   (find(lMAx3, (moBar3)));

                                       document.getElementById("hemi3").innerHTML = "<p> selected: "+ (gir2) + "</p><p \n> at posi: "+ geTs2 +"   of \'"+ prepIO[5]+"': ["+ moBaR2 +"]  length:"+moBaR2.length +"  max "+ lMAx2 +" at: "+ maxPos2+"</p>";
				     //  document.getElementById("hemi3").innerHTML = prepIO[0]+" "+prepIO[1]+" of \'"+ doG +"\'=> "+expI+" -->   75 " + JSON.stringify(entE)+"<br>"+ entE.fl1 +"oHHH NO <br>"+ +""; //"5"; // JSON.stringify(haal) ;
				       var pacZoe = pacK("<p \n> at posi: "+ geTs2 +"   of \'"+ prepIO[5]+"': ["+ moBaR2 +"]  length:"+moBaR2.length +"  max "+ lMAx2 +" at: "+ maxPos2+"</p>"); 
                                       document.getElementById("zoe").innerHTML = prepIO[0]+" "+prepIO[1]+" of \'"+ doG +"\'=> "+expI+" + "+ expI2 +"  sum "+ (Number(gir2)+gir)+"  <p \n> at posi: "+ geTs +"   of \'flist..\': ["+ moBaR +"]  length:"+moBaR.length +"  max "+ lMAx +" at: "+ maxPos+"</p> "+"<p \n> at posi: "+ geTs2 +"   of \'"+ prepIO[5]+"': ["+ moBaR2 +"]  length:"+moBaR2.length +"  max "+ lMAx2 +" at: "+ maxPos2+"</p>";
				    					     //  function niRA(fol4,strZ){ return fol4(strZ).toString() }


					        if  ( (ifLong>5) && (prepIO[6]) == (("1").toString())){    //  run in concat flist1..6
							var moBaR3 = maP(baR2);
							document.getElementById("zoe").innerHTML =  prepIO[0]+" "+prepIO[1]+" of \'"+ doG +"\'=> "+expI+" + "+ expI2 +"  sum "+ (Number(gir2)+gir)+"  <p \n> at posi: "+ geTs +"   of \'flist..\': ["+ moBaR +"]  length:"+moBaR.length +"  max "+ lMAx +" at: "+ maxPos+"</p> "+"<p \n> at posi: "+ geTs2 +"   of \'"+ prepIO[5]+"': ["+ moBaR2 +"]  length:"+moBaR2.length +"  max "+ lMAx2 +" at: "+ maxPos2+"</p>"
								+"<p> " +daObJ0.flist1+  "</p><p> at posi: "+ geTs3 +" all flists [" + moBar3.toString()+ "] length:"+ moBar3.length+ "  max "+ lMAx3+ "  at " + maxPos3 + "</p><p\n\n> all dataStr-list:  ["+moStar3.toString()+"] \n\n explain data flist1..6 \n *Colored_2_3_5_Counter20> let gj t = head$ausw t liM2\n*Colored_2_3_5_Counter20> simiVals (\"BBDDDF\") (gj 1)\n40.88669950738917"; 

                                                      // document.getElementById("hemi4").innerHTML = 
						}
						if  ( (ifLong>5) && (prepIO[6]) == (("2").toString()) || (prepIO[6]) == (("BOTH").toString()) || (prepIO[6]) == (("BOTH").toString()) ){   // run in concat dataStr11,12,13

		/* func :: array e.g moBar3   , foxe : String ,the maximum of func  */
							
		                                	var alang = (moBar3RAW).split(",") ; // ).sort();
							
							var folang =  maP(moBar3RAW.toString());
                                                        var laenger = alang.length;
                                                
							var lang = folang.sort((a,b)=>a-b);
							function the5RAW(kl, folang, folaenger){ return folang.slice(folaenger-kl, folaenger)} ; // determine how many maxima of moBar3
							var the5 = the5RAW("5", lang, laenger); // select to drop 5 maxima
                                                        folang =  maP(moBar3RAW.toString());
                                                        var foun1 = Number (find (the5[4],folang)) ;
                                                        var foun2 = Number (find(the5[3], folang));
                                                        var foun3 = Number (find(the5[2], folang)); var foun4 = Number (find(the5[1], folang));
                                                        var foun5 = Number (find(the5[0], folang)); 
                                                        moBar3 = maP(moBar3RAW.toString()); // sliCE

							function rita(n){
                                                             var ergeb =[];
							     var alangI = (moBar3RAW).split(",") ; // ).sort();
                                                             var folangI =  maP(moBar3RAW.toString());
                                                             var laengerI = alangI.length;
							     var langI = folangI.sort((a,b)=>a-b);
							     var founI = alang[foun1]+","+alang[foun2]+","+alang[foun3]+","+alang[foun4]+","+alang[foun5];alang[foun1]+","+alang[foun2]+","+alang[foun3]+","+alang[foun4]+","+alang[foun5];
					         	     var the5I = langI.slice(laengerI-(Number(n)), laengerI) ; // take the last 5 maxima of moBar3

                                                             for (var z=0; z<the5.length; ++z){
                                                                  folangI =  maP(moBar3RAW.toString());
                                                                  const freeZ = Number(find ((the5[z]), folangI)) ;
                                                                  //ergeb.push(freeZ());
                                                                  return freeZ}};  //
                                                  

                                                        var founDS = alang[foun1]+","+alang[foun2]+","+alang[foun3]+","+alang[foun4]+","+alang[foun5];
                                                        var array1= (moBar3RAW).split(","),
                                                            array2 = founDS.split(","),
                                                            res = array1.filter(item => !array2.includes(item));

   document.getElementById("zoe").innerHTML = "df: "+ folang +"<br>"+ " drop maximum and run: "+ the5 +"<br\n\n>"+ res +"<br\n>"+"  length maxima list "+the5.length+"<br>"+"er" +" " +the5+" posi max1 in df "+foun1+" "+ (rita(1)).toString();
					                 if  ( (ifLong>6) && (prepIO[7]) == (("MAX").toString())){   // run in concat dataStr11,12,13 // ------------- ################   command MAX
								 // will select the 10 biggest Numbers out of all flists (flist1..flist6)
								   
								   var alang3 = (moBar3RAW).split(",") ; // ).sort();
								   var folang3 =  maP(moBar3RAW.toString());
						                   var folang33 =  (moBar3RAW);

								   var lang3 = folang3.sort((a,b)=>a-b);
                                                                   var laenger3 = alang3.length;
                                                                                
								   folang3 =  maP(moBar3RAW.toString());
                                                                   var the12 =  the5RAW("12", lang3, laenger3);   // take 12 maxima see if input is long enough !
								   
								   moBar3 = maP(moBar3RAW.toString());
								   the12 =  the5RAW("12", lang3, laenger3);
                                                                   var carrey1 = maP(moBar3RAW.toString()),
                                                                       carrey2 = the12 ,
                                                                          cresP = carrey1.filter(item => !carrey2.includes(item));

								   
								   document.getElementById("hemi").innerHTML = "<p> The maxima: ["+ the12 +"] </p> values left 'quasi minima': "+cresP; 
							             
							                                                                                }
					                 if  ( (ifLong>6) && (prepIO[7]) == (("MIN").toString())){   // run in concat dataStr11,12,13 // ------------- ################   command MIN
								 // will select the 10 biggest Numbers out of all flists (flist1..flist6)
								   
								   var alang3 = (moBar3RAW).split(",") ; // ).sort();
								   var folang3 =  maP(moBar3RAW.toString());
						                   var folang33 =  (moBar3RAW);

								   var lang3 = folang3.sort((a,b)=>b-a);
                                                                   var laenger3 = alang3.length;
                                                                                
								   folang3 =  maP(moBar3RAW.toString());
                                                                   var the12 =  the5RAW("12", lang3, laenger3);   // take 12 maxima see if input is long enough !
								   
								   moBar3 = maP(moBar3RAW.toString());
								   the12 =  the5RAW("12", lang3, laenger3);
                                                                   var carrey1 = maP(moBar3RAW.toString()),
                                                                       carrey2 = the12 ,
                                                                          cresP = carrey1.filter(item => !carrey2.includes(item));

								   
								   document.getElementById("hemi").innerHTML = "<p> The minima: ["+ the12 +"] </p> values left 'quasi maxima': "+cresP; 
							             }		} 
						                          if  ( (ifLong>7) && (prepIO[8]) == (("DATA").toString())){   // run in concat dataStr11,12,13 // ------------- #§§§§§§§§§§§ WORK  dataStr11,12,13
								 // will select the 10 biggest Numbers out of all flists (flist1..flist6)
								   
								   var alang4 = (moStaRRAW).split(",") ; // ).sort();
								   var folang4 =  maP(moStaRRAW.toString());

								   var lang4 = folang4.sort((a,b)=>a-b);
                                                                   var laenger4 = alang4.length;
                                                                                
								   folang4 =  maP(moStaRRAW.toString());
								   function theXRAW(kl, folang, folaenger){ return folang.slice(folaenger-kl, folaenger)} ; // determine how many maxima of moBar3

                                                                   var the124 =  theXRAW("6", lang4, laenger4);   // take 12 maxima see if input is long enough !
								   var crown1 = Number (find (the124[5],folang4)) ;
                                                                   var crown2 = Number (find(the124[4], folang4));
                                                                   var crown3 = Number (find(the124[3], folang4)); var crown4 = Number (find(the124[2], folang4));
                                                                   var crown5 = Number (find(the124[1], folang4));var crown6 = Number (find(the124[0], folang4)); 
                                                                   var crownDS = alang4[crown1]+","+alang4[crown2]+","+alang4[crown3]+","+alang4[crown4]+","+alang4[crown5];

								   moStar3 = maP(moStaRRAW.toString());
								   the124 =  the5RAW("12", lang3, laenger3);
								   var newMAXS =  maP(crownDS)
                                                                   var barrey1 = maP(moStaRRAW.toString()),
                                                                       barrey2 = the124 ,
                                                                          hresP = barrey1.filter(item => !barrey2.includes(item));

								   var ergo = hresP.filter(item => !newMAXS.includes(item));

								   document.getElementById("demo").innerHTML = "<p> dataStr all lists: ["+ hresP +"]; maxima: ["+newMAXS+"] </p> values left 'quasi minima': "+ergo ;
								   document.getElementById("zoe").innerHTML = "selected<p>"+prepIO[2]+" "+prepIO[5]+"</p>below dataStr11,12,13: <q>["+ hresP +"]</q>; length "+hresP.length+" " +prepIO[7]+"ima : <r>["+newMAXS+"] </r> values left 'quasi NOT"+prepIO[7]+"': <s>"+ergo+"</s>\n\n whole list of flissts1..6 \n <t>[" + moBar3.toString()+ "]</t>"+ moBar3.length +"\n  the "+prepIO[7] +"ima : <u>["+ the12 +"] </u> values left 'quasi NOT"+ prepIO[7]+"': <v>"+cresP+"</v>"  ; 	 }
                                                                     if  ( (ifLong>8) && (prepIO[9]) == (("PLOT").toString())){
									    //  var caLR = img
									  if  ( (ifLong>9) && (prepIO[10]) == (("all").toString())){

									     var data = [
                                                                                          {
                                                                                            x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00', '2014-01-04 22:23:00','2014-02-04 22:23:00','2014-03-04 22:23:00','2014-04-04 22:23:00','2014-05-04 22:23:00','2014-06-04 22:23:00','2014-07-04 22:23:00','2014-08-04 22:23:00'],
                                                                                            y: the124,
                                                                                            type: 'scatter'
                                                                                          },
											   {
                                                                                            x: ['2013-10-04 22:23:00', '2013-12-04 22:23:00', '2014-02-04 22:23:00', '2014-04-04 22:23:00','2014-06-04 22:23:00','2014-08-04 22:23:00','2014-10-04 22:23:00','2014-12-04 22:23:00','2015-02-04 22:23:00','2015-04-04 22:23:00','2015-06-04 22:23:00'],
                                                                                            y: cresP,
                                                                                            type: 'scatter'
                                                                                          },
											   {
                                                                                            x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00', '2014-01-04 22:23:00','2014-02-04 22:23:00','2014-03-04 22:23:00','2014-04-04 22:23:00','2014-05-04 22:23:00','2014-06-04 22:23:00','2014-07-04 22:23:00','2014-08-04 22:23:00','2014-09-04 22:23:00', '2014-10-04 22:23:00', '2014-11-04 22:23:00', '2014-12-04 22:23:00','2015-01-04 22:23:00','2015-02-04 22:23:00','2015-03-04 22:23:00','2015-04-04 22:23:00','2015-05-04 22:23:00','2015-06-04 22:23:00','2015-06-04 22:23:00'],
                                                                                            y: the12,
                                                                                            type: 'scatter'
                                                                                          },
											   {
                                                                                            x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00', '2014-01-04 22:23:00','2014-02-04 22:23:00','2014-03-04 22:23:00','2014-04-04 22:23:00','2014-05-04 22:23:00','2014-06-04 22:23:00','2014-07-04 22:23:00','2014-08-04 22:23:00','2014-09-04 22:23:00', '2014-10-04 22:23:00', '2014-11-04 22:23:00', '2014-12-04 22:23:00','2015-01-04 22:23:00','2015-02-04 22:23:00','2015-03-04 22:23:00','2015-04-04 22:23:00','2015-05-04 22:23:00','2015-06-04 22:23:00','2015-06-04 22:23:00'],
                                                                                            y: hresP,
                                                                                            type: 'scatter'
                                                                                          },
											  {
                                                                                            x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00', '2014-01-04 22:23:00', '2014-02-04 22:23:00', '2014-03-04 22:23:00', '2014-04-04 22:23:00', '2014-05-04 22:23:00', '2014-06-04 22:23:00', '2014-07-04 22:23:00', '2014-08-04 22:23:00', '2014-09-04 22:23:00', '2014-10-04 22:23:00', '2014-11-04 22:23:00', '2014-12-04 22:23:00', '2015-01-04 22:23:00', '2015-02-04 22:23:00','2015-03-04 22:23:00', '2015-04-04 22:23:00', '2015-05-04 22:23:00', '2015-06-04 22:23:00', '2015-07-04 22:23:00', '2015-08-04 22:23:00', '2015-09-04 22:23:00'],
                                                                                            y: moBar3,
                                                                                            type: 'scatter'
                                                                                          }



                                                                                             ];

                                                                             Plotly.newPlot('myDiv', data);

									     document.getElementById("steno").innerHTML = daIMG1+"<br>"; }
								     if  ( (ifLong>9) && (prepIO[10]) == (("fl").toString())){

									     var data = [
                                                                                          {
                                                                                            x: ['2013-10-04 22:23:00', '2013-12-04 22:23:00', '2014-02-04 22:23:00', '2014-04-04 22:23:00','2014-06-04 22:23:00','2014-08-04 22:23:00','2014-10-04 22:23:00','2014-12-04 22:23:00','2015-02-04 22:23:00','2015-04-04 22:23:00','2015-06-04 22:23:00'],
                                                                                            y: cresP,
                                                                                            type: 'scatter'
                                                                                          },
											   {
                                                                                            x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00', '2014-01-04 22:23:00','2014-02-04 22:23:00','2014-03-04 22:23:00','2014-04-04 22:23:00','2014-05-04 22:23:00','2014-06-04 22:23:00','2014-07-04 22:23:00','2014-08-04 22:23:00','2014-09-04 22:23:00', '2014-10-04 22:23:00', '2014-11-04 22:23:00', '2014-12-04 22:23:00','2015-01-04 22:23:00','2015-02-04 22:23:00','2015-03-04 22:23:00','2015-04-04 22:23:00','2015-05-04 22:23:00','2015-06-04 22:23:00','2015-06-04 22:23:00'],
                                                                                            y: the12,
                                                                                            type: 'scatter'
                                                                                          },
											   {
                                                                                            x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00', '2014-01-04 22:23:00', '2014-02-04 22:23:00', '2014-03-04 22:23:00', '2014-04-04 22:23:00', '2014-05-04 22:23:00', '2014-06-04 22:23:00', '2014-07-04 22:23:00', '2014-08-04 22:23:00', '2014-09-04 22:23:00', '2014-10-04 22:23:00', '2014-11-04 22:23:00', '2014-12-04 22:23:00', '2015-01-04 22:23:00', '2015-02-04 22:23:00','2015-03-04 22:23:00', '2015-04-04 22:23:00', '2015-05-04 22:23:00', '2015-06-04 22:23:00', '2015-07-04 22:23:00', '2015-08-04 22:23:00', '2015-09-04 22:23:00'],
                                                                                            y: moBar3,
                                                                                            type: 'scatter'
                                                                                          }



                                                                                             ];

                                                                             Plotly.newPlot('myDiv', data);

									     document.getElementById("steno").innerHTML = daIMG1+"<br>"; }
								     if  ( (ifLong>9) && (prepIO[10]) == (("str").toString())){

									     var data = [
                                                                                          {
                                                                                            x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00', '2014-01-04 22:23:00','2014-02-04 22:23:00','2014-03-04 22:23:00','2014-04-04 22:23:00','2014-05-04 22:23:00','2014-06-04 22:23:00','2014-07-04 22:23:00','2014-08-04 22:23:00'],
                                                                                            y: the124,
                                                                                            type: 'scatter'
                                                                                          },
											   											   {
                                                                                            x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00', '2014-01-04 22:23:00','2014-02-04 22:23:00','2014-03-04 22:23:00','2014-04-04 22:23:00','2014-05-04 22:23:00','2014-06-04 22:23:00','2014-07-04 22:23:00','2014-08-04 22:23:00','2014-09-04 22:23:00', '2014-10-04 22:23:00', '2014-11-04 22:23:00', '2014-12-04 22:23:00','2015-01-04 22:23:00','2015-02-04 22:23:00','2015-03-04 22:23:00','2015-04-04 22:23:00','2015-05-04 22:23:00','2015-06-04 22:23:00','2015-06-04 22:23:00'],
                                                                                            y: hresP,
                                                                                            type: 'scatter'
                                                                                          },
											  {
                                                                                            x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00', '2014-01-04 22:23:00', '2014-02-04 22:23:00', '2014-03-04 22:23:00', '2014-04-04 22:23:00', '2014-05-04 22:23:00', '2014-06-04 22:23:00', '2014-07-04 22:23:00', '2014-08-04 22:23:00', '2014-09-04 22:23:00', '2014-10-04 22:23:00', '2014-11-04 22:23:00', '2014-12-04 22:23:00', '2015-01-04 22:23:00', '2015-02-04 22:23:00','2015-03-04 22:23:00', '2015-04-04 22:23:00', '2015-05-04 22:23:00', '2015-06-04 22:23:00', '2015-07-04 22:23:00', '2015-08-04 22:23:00', '2015-09-04 22:23:00'],
                                                                                            y: ergo,
                                                                                            type: 'scatter'
                                                                                          }



                                                                                             ];

                                                                             Plotly.newPlot('myDiv', data);

									     document.getElementById("steno").innerHTML = daIMG1+"<br>"; }
								     if  ( (ifLong>9) && (prepIO[10]) == (("datFU").toString())){

									     var data = [
                                                                                          {
                                                                                            x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00', '2014-01-04 22:23:00','2014-02-04 22:23:00','2014-03-04 22:23:00','2014-04-04 22:23:00','2014-05-04 22:23:00','2014-06-04 22:23:00','2014-07-04 22:23:00','2014-08-04 22:23:00'],
                                                                                            y: the124,
                                                                                            type: 'scatter'
                                                                                          },
											   											   {
                                                                                            x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00', '2014-01-04 22:23:00','2014-02-04 22:23:00','2014-03-04 22:23:00','2014-04-04 22:23:00','2014-05-04 22:23:00','2014-06-04 22:23:00','2014-07-04 22:23:00','2014-08-04 22:23:00','2014-09-04 22:23:00', '2014-10-04 22:23:00', '2014-11-04 22:23:00', '2014-12-04 22:23:00','2015-01-04 22:23:00','2015-02-04 22:23:00','2015-03-04 22:23:00','2015-04-04 22:23:00','2015-05-04 22:23:00','2015-06-04 22:23:00','2015-06-04 22:23:00'],
                                                                                            y: hresP,
                                                                                            type: 'scatter'
                                                                                          },
											  {
                                                                                            x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00', '2014-01-04 22:23:00', '2014-02-04 22:23:00', '2014-03-04 22:23:00', '2014-04-04 22:23:00', '2014-05-04 22:23:00', '2014-06-04 22:23:00', '2014-07-04 22:23:00', '2014-08-04 22:23:00', '2014-09-04 22:23:00', '2014-10-04 22:23:00', '2014-11-04 22:23:00', '2014-12-04 22:23:00', '2015-01-04 22:23:00', '2015-02-04 22:23:00','2015-03-04 22:23:00', '2015-04-04 22:23:00', '2015-05-04 22:23:00', '2015-06-04 22:23:00', '2015-07-04 22:23:00', '2015-08-04 22:23:00', '2015-09-04 22:23:00'],
                                                                                            y: ergo,
                                                                                            type: 'scatter'
                                                                                          }



                                                                                             ];

                                                                             Plotly.newPlot('myDiv', data);

									     document.getElementById("steno").innerHTML = daIMG1+"<br>"; }
}
						if  ( (ifLong>5) && (prepIO[6]) == (("3").toString())){ 
                                                     document.getElementById("steno").innerHTML = "FILTER WORDS IN EXCEL" +"<br>";  // run ONE big concatenated list, flist 1..6 ++ dataStr 11..13
						}
				                   }

   /*                   ------------------------------------------------------------------------------------- ############ command HELP     */

 }
    
      else {
                   var result2 = dataStr0.match(aRg);

		   document.getElementById("hemi3").innerHTML = ifLong ; //result2 ;
      } } 
  //  document.getElementById("hemi3").innerHTML = ifLong+""+prepIO[0] ;

            };

function teRex3(){
  var writeRg = document.getElementById("myText5").value;
  var workRg = ""+writeRg+"";
  var aRg = new RegExp ("("+writeRg+")", "g");
  var patt1 = /(BTC|green)/g;
  var result = dataStr0.match(aRg);
  var geTs = (find(writeRg, data0));
                     		 

 //  document.getElementById("hemi2").innerHTML = "<p>"+ (result)+ "</p><p \n>  posi: "+geTs+"  length:" + data00.length + "    of \'liStr\': ["+ dataStr0+"]   max at: "+vMAX(dataStr)+"</p>";
   document.getElementById("hemi4").innerHTML ="<p>"+ (pipeS())+ "</p><p \n>  posi: "+ +"<\p>";
               };



