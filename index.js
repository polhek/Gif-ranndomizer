// API: JYPSL4oxqrZxVJvB8fPWtC4PTStZBjCP

const APIkey = 'JYPSL4oxqrZxVJvB8fPWtC4PTStZBjCP';
let search = 'cats';

const img = document.getElementById('gif');

const getCats = async (search = 'cats') => {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${APIkey}&s=${search}`
    );

    const find = await response.json();

    const source = find.data;

    if (source.images === undefined) {
      throw "Couldn't find a gif";
    } else {
      img.src = source.images.original.url;
    }
  } catch (error) {
    handleError(error);
  }
};

const handleError = (error) => {
  const errorItem = document.querySelector('.error');
  errorItem.textContent = error;
};
getCats();

const buttonGenerate = document.getElementById('generate');
buttonGenerate.addEventListener('click', () => getCats());

const searchForm = document.getElementById('searchGIF');

const srch = (event) => {
  event.preventDefault();
  let search = document.querySelector('input').value;
  getCats(search);
};

searchForm.addEventListener('submit', (event) => srch(event));
