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
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
