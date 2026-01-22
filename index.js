import{a as m,S as f,i as n}from"./assets/vendor-MgecxatS.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",h="54277824-efa85ad242bfacaecdcb3057f",y=21,b=o=>m.get(g,{params:{per_page:y,key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data),c=document.querySelector(".gallery"),l=document.querySelector(".loader"),L=new f(".gallery a",{captionsData:"alt",captionDelay:250}),S=()=>{c.innerHTML=""},q=o=>{const r=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:a,comments:u,downloads:p})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img class="gallery-image" src="${s}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes</b> ${t}</p>
          <p><b>Views</b> ${a}</p>
          <p><b>Comments</b> ${u}</p>
          <p><b>Downloads</b> ${p}</p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",r),L.refresh()},v=()=>{l.classList.remove("hidden")},w=()=>{l.classList.add("hidden")},d=document.querySelector(".form"),P=o=>{o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();r&&(S(),v(),b(r).then(s=>{if(s.hits.length===0){n.error({message:"Sorry, there are no images matching <br> your search query. Please try again!",position:"topRight"});return}q(s.hits)}).catch(()=>{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{w(),d.reset()}))};d.addEventListener("submit",P);
//# sourceMappingURL=index.js.map
