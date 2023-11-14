const userText = document.querySelector("#userText"),
characters = document.querySelector("#characters"),
paragraphs = document.querySelector("#paragraphs"),
symbols = document.querySelector("#symbols"),
words = document.querySelector("#words"),
form = document.querySelector("form");


// función caracteres
function getTotalCharacters()
{
    return userText.value.trim().length;
}

// función símbolos
function getTotalSymbols()
{
    let symbols = userText.value.match(/[^a-z0-9\s]+/gi);
    return symbols ? symbols.length : 0;
}

// función párrafos
function getTotalParagraphs()
{
    let paragraphs = userText.value.trim().match(/[^\n]+/g);
    return paragraphs ? paragraphs.length : 0;
}

// función palabras
function getTotalWords()
{
    let words = userText.value.trim().match(/[^\s]+/gi);

    if(!words)
    {
        return 0;
    }

    words = words.filter((item) => {
        if(item.match(/[a-z0-9]+/i))
        {
            return item;
        }

        return false;
    })

    return words.length;
}


// función principal = analizar texto

function analyzeText(e)
{
    e.preventDefault();

    characters.innerText = getTotalCharacters();
    symbols.innerText = getTotalSymbols();
    words.innerText = getTotalWords();
    paragraphs.innerText = getTotalParagraphs();
}


form.onsubmit = analyzeText;