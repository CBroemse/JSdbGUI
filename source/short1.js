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



