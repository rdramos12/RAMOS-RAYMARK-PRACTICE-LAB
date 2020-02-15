/* first version
function upDate(previewPic){
    let src = previewPic.getAttribute("src");
    let alt = previewPic.getAttribute( "alt" );
    document.getElementById("image").innerHTML = `<img  alt = "`+ alt +`" src = "`+ src + `" width:100% height:100%>`
}
function unDo(){
    document.getElementById("image").innerHTML = "Hover over an image below to display here";
}
*/

function upDate(previewPic){
    let src = previewPic.getAttribute( "src" );
    let alt = previewPic.getAttribute( "alt" );
    document.getElementById("image").style.backgroundImage = "url('" + src + "')";
    document.getElementById("image").innerHTML = alt;
 }
 function unDo(){
     let src = "";
     let alt = "";
    document.getElementById("image").style.backgroundImage = "url('" + src + "')";
    document.getElementById("image").innerHTML = "Hover over an image below to display here";
}