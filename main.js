/*

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/gsimas');
xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        console.log(JSON.parse(xhr.responseText));
    }
}

*/

/*

var myPromise = function(){
    return new Promise(function(resolve, reject){

        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/gsimas');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                } else{
                    reject('Erro na request');
                }
            }
        }
    });
}

myPromise()
    .then(function(response){
    console.log(response);
})
    .catch(function(error){
    console.warn(error);
});

*/

alert('Check the browser console')

axios.get('https://api.github.com/users/gsimas')
    .then(function(response){
    console.log(response);
})
    .catch(function(error){
    console.warn(error);
});