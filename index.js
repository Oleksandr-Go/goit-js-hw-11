import{a as m,i as l,S as p}from"./assets/vendor-CZCqCKWq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g="49723808-114337464bd6e566bb6cace9e";function f(o){return m("https://pixabay.com/api/",{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:50}}).then(r=>{if(!r.data.hits.length){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}return r.data}).catch(r=>{l.error({message:"Sorry, something went wrong.",position:"center"})})}const n=document.querySelector(".gallery"),c=document.querySelector(".loader");function y(o){n.innerHTML=o.map(({webformatURL:i,largeImageURL:a,tags:e,likes:t,views:s,comments:d,downloads:u})=>`<div class='gallery-container'>
        <li class="gallery-item">
  <a class="gallery-link" href="${a}">
    <img
      class="gallery-image"
      src="${i}"
      alt="${e}"
    />
  </a>
  <div class='gallery-min-div'> 
     <div class='div-text'>
       <p class="gallery-text">likes ${t}</p>
     </div>
     <div class='div-text'>
       <p class="gallery-text">views ${s}</p>
     </div>
     <div class='div-text'>
       <p class="gallery-text">comments ${d}</p>
     </div>
     <div class='div-text'>
       <p class="gallery-text">downloads ${u}</p>
     </div>
   </div>
  </li>
</div>
`).join(""),new p(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}function h(){n.innerHTML=""}function v(){c.classList.add("is-visible")}function L(){c.classList.remove("is-visible")}const b=document.querySelector(".form"),x=document.querySelector('input[name="search-text"]');b.addEventListener("submit",o=>{o.preventDefault(),h();const r=x.value.toLowerCase().trim();r.length&&(v(),f(r).then(i=>y(i.hits)).catch(i=>console.log(i.message)).finally(()=>L()))});
//# sourceMappingURL=index.js.map
