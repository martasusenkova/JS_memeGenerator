const generateMemeBtn = document.querySelector(
  ".meme__generator .meme__button"
);

const memeImage = document.querySelector(".meme__generator img");

const memeTitle = document.querySelector(".meme__generator .meme__title");

const memeAuthor = document.querySelector(".meme__generator .meme__author");

const updateDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeAuthor.innerHTML = `Meme by:  ${author}`;
};
const generateMeme = () => {
  fetch("https://meme-api.com/gimme")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();
