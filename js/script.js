'use strict';
/*
document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
})
*/
/*
const links = document.querySelectorAll('.titles a');

for(let link of links){
    console.log(link)
}
*/

const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
  
    /* [DONE] remove class 'active' from all article links  */
  
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }

    /* [IN PROGRESS] add class 'active' to the clicked link */
  
    clickedElement.classList.add('active');
    console.log('clickedElement:', clickedElement);

    /* [DONE]remove class 'active' from all articles */
  
    const activeArticles = document.querySelectorAll('.post article.active');

    for (let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }

    /* get 'href' attribute from the clicked link */

    let articleSelector = document.getElementById('test-button');
    linkOfArticles = articleSelector.clickedElement.getAttribute('href');
    console.log('linkOfArticle');
    
  
    /* find the correct article using the selector (value of 'href' attribute) */
  
    let targetArticle = document.querySelector('href');
    console.log('targetArticle is correct');

    /* add class 'active' to the correct article */
 
    targetArticle.classList.add('active');


}
  
    const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';
  
  function generateTitleLinks(){
  
    /* remove contents of titleList */
  const titleList = querySelector(optTitleListSelector);
  function clearMessages(){
      document.getElementById('messages').innerHTML = '';
  }
  titleList.classList.remove(optTitleListSelector);

    /* for each article */
  const articles = querySelector(optArticleSelector);
 
  let html = '';

  for(let article of articles) {
    article.addEventListener('click', optArticleSelector);
  }
      /* get the article id */
  const articleId = document.getElementById('id');
      /* find the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      /* get the title from the title element */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log(linkHTML);
      /* create HTML of the link */
      titleList.innerHTML = titleList.innerHTML + linkHTML;
      /* insert link into titleList */
  html = html + linkHTML;
  }
 titleList.innetHTML = html;
} 
  generateTitleLinks();   
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler); 
}
