/*
TOP-HEADLINES
  news by country = country=us
  news by sources = sources=bbc
  news by country and category country=us&category=business
  news by query q=trump

EVERYTHING
  news by query q=bitcoin
  news by domains = domains=wsj.com,nytimes.com( max 20 )
    sort by

SOURCES

  news by all sources
  news by language = language=en
  news by language and country = language=n&country=us
*/

import formatDate from './utils/formatDate';
import { articles, articlesRus, articlesIsraeel } from './fakeData';

const HEADERS = {Authorization: 'b158c3465f5c44118acfd389f25d7549'};
let button = document.querySelector('button');
button.addEventListener('click', (event) => {
  fetch('https://newsapi.org/v2/top-headlines?country=fr', { headers:HEADERS })
  .then(response => {
    return response.json();
  })
  .then(response => {
    createListNews( checkItemNews(response.articles) )
    console.log( response )
  })
  .catch(error => {
    console.log( error );
  })
});

function checkItemNews( list ) {
  list = list.reduce( ( prev, news ) => {
    news.publishedAt = new Date( news.publishedAt );
    news.author = news.author || news.source.id || '';
    news.content = news.content || ''
    if( news.content ) news.content = news.content.replace(/\[.+\]/ig,'');
    else return prev;
    prev.push( news );
    return prev;
  },[]);
  return list;
};

function createListNews( list ) {
  let listNews = document.querySelector('.listNews');
  listNews.innerHTML = list.reduce(( prev, news, i ) => {
    prev += createItemNews( news );
    return prev;
  },'');
}


function createItemNews( data ) {
  let template =
  `<li class="itemNews">
    <div class="containerDate">
      <span class="publishedDate">${formatDate.formateToday(data.publishedAt)}</span>
      <time class="publishedTime">${formatDate.getCurrentTime(data.publishedAt)}</time>
    </div>
    <div class="containerImg">
      <img class="img" src="${data.urlToImage}" alt="hello">
    </div>
    <p class="author">
      <small>autor: </small>
      ${data.author}
    </p>
    <h4 class="title">${data.title}</h4>
    <p class="description">${data.description}</p>
    ${func( data.content )}
    <div class="linkReadNewsContainer">
      <a class="linkReadNews" target="_blank" href="${data.url}">learn more</a>
    </div>
  </li>`;
  return template;
    // <p class="content">${func( data.content )}</p>

  function func( content ) {
    if( content.match(/(«[, .]{2,}»)|(«»)|([. ,]{3,})/g) ) {
      return `<p class="content-bed">${content}</p>`;
    }
    else
      if( content ) {
        return `<p class="content">${content}</p>`;
      }
      else return `<p class="content">no content</p>`
  }
}

createListNews( checkItemNews( articles ) );

export default createListNews;