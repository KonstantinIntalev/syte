function on (){
    if (  document.getElementById('input1').value != "" && document.getElementById('select').value != ""   && document.getElementById('input2').value!="" && document.getElementById('input3').value!="" && document.getElementById('input4').value != "" && document.getElementById('input5').value != ""){
        window.open('example1.html')
    } else { alert('Заполните все поля') }   
}