'use strict';
var testName = /^[a-zA-Z]{3,20} ?([a-zA-Z]{3,10})?(-[a-zA-Z]{1,10})?$/;
var testLogin = /^[a-zA-Z]{1}[\w-]{2,10}$/;
var testMail = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/;
var form = document.forms.reg;
document.getElementById("buyButton").onclick = function(){
    var resultTestName = testName.test(form.elements.name.value);
    var resultTestLogin = testLogin.test(form.elements.login.value);
    var resultTestMail = testMail.test(form.elements.mail.value);
    console.log(resultTestName);
    console.log(resultTestName);
    console.log(resultTestName);
    if(resultTestMail && resultTestLogin && resultTestName){
        console.log("И тут данные уходят на сервер");
    }
    else{
        alert("Данные введены не верно");
    }
};