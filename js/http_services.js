function makeServiceCall(methodType, url, async=true, data=null){
    return new Promise(function (resolve, reject){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status.toString().match("^[2][0-9]{2}$")){
            resolve(xhr.responseText);
        }else if(xhr.status.toString().match("^[4,5][0-9]{2}$")){
            reject({
               status: xhr.status,
               statusText: xhr.statusText
            }); 
        }
    }
    xhr.onerror = function(){
        reject({
            status: xhr.status,
               statusText: xhr.statusText
        });
    };
    xhr.open(methodType, url, async);
    if(data){
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));
    }else xhr.send();
});
}