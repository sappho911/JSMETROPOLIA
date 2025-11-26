'use strict';

const searchForm = document.querySelector('#searchForm');
const results = document.querySelector('#results');
const article = document.createElement('article');

document.body.appendChild(article);

searchForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  const query = document.querySelector('input[name=query]').value;
  article.innerHTML = '';

  try {
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${query}`
    );
    const data = await response.json();

    data.forEach(movie => {
      if (!movie.show?.name) return;

      console.log(movie);

      const h2 = document.createElement('h2');
      h2.textContent = movie.show?.name;
      article.appendChild(h2);

      const link = document.createElement('a');
      link.href = movie.show.url;
      link.target = '_blank';
      link.textContent = 'Show details';
      article.appendChild(link);

      const img = document.createElement('img');
      img.src = movie.show.image
        ? movie.show.image.medium
        : `https://placehold.co/210x295?text=Not%20Found`;
      img.alt = movie.show.name;
      article.appendChild(img);

      results.appendChild(article);
    });
  } catch (e) {
    console.log(`${e} Some error`);
  }
});
