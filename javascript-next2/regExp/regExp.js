var r = new RegExp("^c.+r$"); //commence par d
var res = r.test("chaine a tester");
console.log(res);
console.log(r.test("cr"));
console.log(r.toString());


var r = new RegExp("^a+"); //commence par d
console.log(/^a+/g.test(""));
console.log(r.test("aaaaaaaa"));
console.log(r.test("baaa"));
console.log(/^[0-9]+(?!A$)/.test("89879AA"));




var url = 'http://www.google.com'

document.getElementById("test").addEventListener('click',function(){
    var re = /^(http|https|ftp|ftps)(?=:\/\/(?=(www\.|(?!w))(?=[A-Za-z0-9_-]+\.(?=[A-Za-z]{2,5}))))/
    var redate =/^(0[1-9]{1}|[12]{1}[0-9]{1}|30|31)(?=\/(0[1-9]{1}|1[0-2]{1})(?=\/20[0-9]{2}$))/
    var reId = /75AH1983XXXX/; var reId =/(^\d{2}|2[aAbB]{1}|97[0-6]{1})[A-Z]{2}\d{8}$/

    var reg = new RegExp(document.getElementById('regexp').value)
    console.log(reg.test(document.getElementsByTagName("input")[0].value));
    console.log(reg.exec(document.getElementsByTagName("input")[0].value));
});
// document.getElementsByTagName("input")[0].setAttribute("pattern","/^(0[1-9]{1}|[12]{1}[0-9]{1}|30|31)(?=\/(0[1-9]{1}|1[0-2]{1})(?=\/20[0-9]{2}$))/");
// document.getElementsByTagName("input")[0].addEventListener('keydown',function(e){
//     var redate =/^(0[1-9]{1}|[12]{1}[0-9]{1}|30|31)(\/(0[1-9]{1}|1[0-2]{1})(?=\/20[0-9]{2}$))/;
//     if(redate.test(document.getElementsByTagName("input")[0].value)){
//         document.getElementsByTagName("input")[0].setCustomValidity("valid");
//         console.log("valid");
//     }else document.getElementsByTagName("input")[0].setCustomValidity("test");
//
// });
document.getElementsByTagName("input")[0].addEventListener('keypress',function(e){
    if(e.key == "Enter"){
         document.getElementById("test").click();
    }
})








