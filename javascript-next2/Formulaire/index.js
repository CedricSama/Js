/**
 * Created by stagiaire on 16/08/2017.
 */
window.addEventListener('load',function(){
    var wrapper = document.getElementById("wrapper");
    var form = wrapper.firstElementChild;
    form.lastElementChild.addEventListener('click',function(){
        console.log(form.checkValidity());
        if (form.checkValidity()) form.submit();
    });
});
