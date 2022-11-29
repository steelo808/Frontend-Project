console.log("working");


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

    for(let i = 0; i < data.length; i++){
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
        const $p = $('<p class = "cfp">Click for Pronunciation</p>')
        const $audio = $(data[i].word.audio);

        $mainContent.append($word);
        $mainContent.append($typeOfSpeech);
        $mainContent.append($info);
        $mainContent.append($definition);
        $mainContent.append($sound);
        $mainContent.append($p);
        

    }

console.log(data);



    });
    });

