function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl, false);
    Httpreq.send(null);
    // console.log(typeof(Httpreq.responseText));
    //console.log(Httpreq.responseText);
    // console.log((Httpreq.responseText).length);
    var newStr = "";
    var adding = false;
    // var docstrings = false;
    var i;
    for (i = 0; i < Httpreq.responseText.length; i++) {
      var ch = Httpreq.responseText[i];
      // console.log(ch)
      if (ch == "{"){
        // if (docstrings == false){
        //   newStr += "'''";
        //   docstrings = true;
        // }
        newStr += ch;
        adding = true;
      }
      else if (ch == "}"){
        newStr += ch;
        newStr += ch;
        // newStr += "'''"
        adding = false;
        break;
      }
      else if(adding == true){
        newStr += ch;
      }
    }
  //console.log(newStr)
  // return (newStr);
  var object = JSON.parse(newStr)
  document.getElementById("title").innerHTML = object.title;
  document.getElementById("content").innerHTML = object.content;
}
  Get("https://www.poemist.com/api/v1/randompoems");
  //console.log(item)


 // var  item = JSON.stringify(item);


// console.log("huuh" + item);

// document.getElementById("poem").innerHTML = item;
