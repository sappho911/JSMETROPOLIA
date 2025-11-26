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
    console.log(data);
  } catch (e) {
    console.log(`${e} Some error`);
  }
});

// const results = document.querySelector('#results');
// const article = document.createElement('article');
// const div = document.createElement('div');

// document.body.appendChild(article);
// document.body.appendChild(div);

// searchForm.addEventListener('submit', async function (e) {
//   e.preventDefault();
//   const query = document.querySelector('input[name=query]').value;
//   div.innerHTML = '';

//   try {
//     const response = await fetch(
//       `https://api.tvmaze.com/search/shows?q=${query}`
//     );
//     const data = await response.json();

//     data.forEach(movie => {
//       if (!movie.show?.name) return;

//       console.log(data.show);

//       const h2 = document.createElement('h2');
//       h2.textContent = movie.show?.name;

//       const link = document.createElement('a');
//       link.href = movie.show.url;
//       link.target = '_blank';
//       link.textContent = 'Show details';

//       const img = document.createElement('img');
//       img.src = movie.show.image?.medium;
//       img.alt = movie.show.name;

//       div.appendChild(h2);
//       div.appendChild(img);
//       div.appendChild(link);

//       article.appendChild(div);
//       results.appendChild(article);
//     });
//   } catch (e) {
//     console.log(`${e} Some error`);
//   }
// });
