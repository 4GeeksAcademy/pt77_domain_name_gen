import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  
  let article =['the','a'];
  let adj =['beautiful', 'soft', 'colorful', 'bright'];
  let noun =['clover', 'pie', 'bowl', 'sword'];
  let ext =['.com', '.us', '.net', '.io'];

  for(let i=0; i<article.length; i++) {
    for(let o=0; o<adj.length; o++) {
      for(let u=0; u<noun.length; u++) {
        for(let a=0; a<ext.length; a++) {
        console.log(article[i] + adj[o] + noun[u] + ext[a]);

        }
      }
    }
  }
  console.log("Hello Rigo from the console!");
};
