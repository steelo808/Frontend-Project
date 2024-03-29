console.log("app is working");
const $searchInput = $('.input-field');
const $searchBtn = $('button');

function removeNodes(){
const $content = $('.main-content');
console.log($content);
$content.empty();
}



$searchBtn.on('click',() => {
    const $searchValue = $searchInput.val();
        console.log($searchValue);
        removeNodes();

    $.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${$searchValue}`, (data)=>{
    console.log(data);

    //Creating the UI
    for(let i = 0; i < data.length; i++){ //Looping through array of data
        const $mainContent = $('.main-content');
        const $word = $(`<h2 class ="word">${data[i].word}</h2>`);
        console.log($word);
        const $typeOfSpeech = $(`<h3 class ="type-of-speech">/${data[i].meanings[0].partOfSpeech}/</h3>`);
        console.log($typeOfSpeech);
        const $info = $('.info');
        console.log($info);
        const $definition = $(`<p class= "definition">${data[i].meanings[0].definitions[0].definition}</p>`);
        console.log($definition);
        const $sound = $('<i class="fa-solid fa-ear-listen"></i>');
        const $p = $('<p class = "cfp">Click below for Pronunciation</p>')
        const $audioUrl = `https://api.dictionaryapi.dev/media/pronunciations/en/${$searchValue}-us.mp3`;
        const $audio = $(`<audio controls><source src="${$audioUrl}" type="audio/mpeg">Your browser does not support this audio element.</audio>`)


        //Setting the UI
        $mainContent.append($word);
        $mainContent.append($typeOfSpeech);
        $mainContent.append($info);
        $mainContent.append($definition);
        $mainContent.append($sound);
        $mainContent.append($p);
        $mainContent.append($audio);


       $(document).on("DOMContentLoaded", function(){
        $sound.on("click", ()=>{
            if($audio.paused){
            }
        })
       })
        

    }

console.log(data);

    });

    });

