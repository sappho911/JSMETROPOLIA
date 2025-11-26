'use strict';

const searchForm = document.querySelector('#searchForm');

searchForm.addEventListener('submit', async function name(e) {
  e.preventDefault();
  const query = document.querySelector('input[name=query]').value;

  try {
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${query}`
    );
    const data = await response.json();
    data.forEach(movie => {
      console.log(movie.show?.name);
    });
  } catch (e) {
    console.log(`${e} Some error`);
  }
});
