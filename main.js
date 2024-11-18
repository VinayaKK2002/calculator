function displaycontent(content){
 result.value +=content
}
function calclear(){
    result.value=""
}
function calcouput(){
    result.value=eval(result.value)
}
function removelast(){
    result.value=result.value.slice(0,-1)
}