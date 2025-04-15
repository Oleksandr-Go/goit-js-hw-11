import{a as u,i as n,S as m}from"./assets/vendor-CZCqCKWq.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="49723808-114337464bd6e566bb6cace9e";function f(a){return u("https://pixabay.com/api/",{params:{key:g,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:50}}).then(s=>{if(!s.data.hits.length){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}return s.data}).catch(s=>{n.error({message:"Sorry, something went wrong.",position:"center"})})}const l=document.querySelector(".gallery"),c=document.querySelector(".loader");function y(a){l.innerHTML=a.map(({webformatURL:r,largeImageURL:o,tags:e,likes:t,views:i,comments:p,downloads:d})=>`<div class='gallery-container'>
        <li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img
      class="gallery-image"
      src="${r}"
      alt="${e}"
    />
  </a>
  <div class='gallery-min-div'> 
      <div class='div-text'>
          <p class="gallery-text">Likes<span class='text-span'>${t}</span></p>
      </div>
      <div class='div-text'>
         <p class="gallery-text">Views<span class='text-span'>${i}</span></p>
      </div>
      <div class='div-text'>
         <p class="gallery-text">Comments<span class='text-span'>${p}</span></p>
      </div>
      <div class='div-text'>
         <p class="gallery-text">Downloads<span class='text-span'>${d}</span></p>
      </div>
    </div>
  </li>
</div>
`).join(""),new m(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}function h(){l.innerHTML=""}function v(){c.classList.add("is-visible")}function x(){c.classList.remove("is-visible")}const L=document.querySelector(".form"),b=document.querySelector('input[name="search-text"]');L.addEventListener("submit",a=>{a.preventDefault(),h();const s=b.value.toLowerCase().trim();s.length&&(v(),f(s).then(r=>y(r.hits)).catch(r=>console.log(r.message)).finally(()=>x()))});
//# sourceMappingURL=index.js.map
