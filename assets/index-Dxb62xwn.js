(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(o){if(o.ep)return;o.ep=!0;const c=e(o);fetch(o.href,c)}})();const U="modulepreload",G=function(t){return"/front_6th_chapter1-1/"+t},_={},N=function(r,e,n){let o=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(e.map(d=>{if(d=G(d),d in _)return;_[d]=!0;const u=d.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${f}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":U,u||(p.as="script"),p.crossOrigin="",p.href=d,a&&p.setAttribute("nonce",a),document.head.appendChild(p),u)return new Promise((y,b)=>{p.addEventListener("load",y),p.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${d}`)))})}))}function c(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return o.then(s=>{for(const a of s||[])a.status==="rejected"&&c(a.reason);return r().catch(c)})};function K(t){return`
  <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
  data-product-id="${t.productId}">
<!-- 상품 이미지 -->
<div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
 <img src="${t.image}"
      alt="${t.title}"
      class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
      loading="lazy">
</div>
<!-- 상품 정보 -->
<div class="p-3">
 <div class="cursor-pointer product-info mb-3">
   <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
     ${t.title}
   </h3>
   <p class="text-xs text-gray-500 mb-2">${t.brand||""}</p>
   <p class="text-lg font-bold text-gray-900">
     ${Number(t.lprice).toLocaleString()}원
   </p>
 </div>
 <!-- 장바구니 버튼 -->
 <button id="add-to-cart-btn" class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
        hover:bg-blue-700 transition-colors add-to-cart-btn" data-product-id="${t.productId}">
   장바구니 담기
 </button>
</div>
</div>
  `}function Q(){return`
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
      <div class="aspect-square bg-gray-200"></div>
      <div class="p-3">
        <div class="h-4 bg-gray-200 rounded mb-2"></div>
        <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
        <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
        <div class="h-8 bg-gray-200 rounded"></div>
      </div>
    </div>
  `}function V(){return`
    <div class="col-span-2 text-center py-4">
      <div class="inline-flex items-center">
        <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
      </div>
    </div>
  `}function S(t=0){return`
    <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
      </svg>
      ${t>0?`<span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">${t}</span>`:""}
    </button>
  `}function z(t="home"){return t==="detail"?`
      <header class="bg-white shadow-sm sticky top-0 z-40">
        <div class="max-w-md mx-auto px-4 py-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <button id="back-button" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <h1 class="text-lg font-bold text-gray-900">상품 상세</h1>
            </div>
            <div class="flex items-center space-x-2">
              <div id="cart-icon-container">
                ${S(0)}
              </div>
            </div>
          </div>
        </div>
      </header>
    `:`
    <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-xl font-bold text-gray-900">
            <a href="/" data-link="">쇼핑몰</a>
          </h1>
          <div class="flex items-center space-x-2">
            <div id="cart-icon-container">
              ${S(0)}
            </div>
          </div>
        </div>
      </div>
    </header>
  `}function A(){return`
    <footer class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto py-8 text-center text-gray-500">
        <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
      </div>
    </footer>
  `}async function F(t={}){const{limit:r=20,search:e="",category1:n="",category2:o="",sort:c="price_asc"}=t,s=t.current??t.page??1,a=new URLSearchParams({page:s.toString(),limit:r.toString(),...e&&{search:e},...n&&{category1:n},...o&&{category2:o},sort:c});return await(await fetch(`/api/products?${a}`)).json()}async function W(t){return await(await fetch(`/api/products/${t}`)).json()}async function J(){return await(await fetch("/api/categories")).json()}const X=(t={})=>{let r={products:[],loading:!1,error:null,totalCount:0,limit:20,sort:"price_asc",search:"",page:1,hasMore:!0,category1:"",category2:"",categories:[],...t};const e=[],n=l=>(e.push(l),()=>{const g=e.indexOf(l);g>-1&&e.splice(g,1)}),o=()=>{e.forEach(l=>l(c()))},c=()=>({...r}),s=l=>{r={...r,...l},e.forEach(g=>g(c()))};return{getState:c,setState:s,subscribe:n,setProducts:(l,g=!1)=>{const m=c().products;r.products=g?[...m,...l]:l,o()},setLoading:l=>s({loading:l}),setError:l=>s({error:l}),setTotalCount:l=>s({totalCount:l}),setLimit:l=>s({limit:l}),setSort:l=>s({sort:l}),setSearch:l=>s({search:l}),setPage:l=>{r.page=l,o()},setHasMore:l=>{r.hasMore=l,o()},setCategory1:l=>s({category1:l}),setCategory2:l=>s({category2:l}),setCategories:l=>s({categories:l}),resetState:()=>{r={products:[],loading:!1,error:null,totalCount:0,limit:20,sort:"price_asc",search:"",page:1,hasMore:!0,category1:"",category2:"",categories:[]},o()}}},i=X(),Y=(t={})=>{let r={items:[],totalCount:0,...t};const e=[],n=d=>(e.push(d),()=>{const u=e.indexOf(d);u>-1&&e.splice(u,1)}),o=()=>{e.forEach(d=>d(c()))},c=()=>({...r}),s=d=>{r={...r,...d},o()};return{getState:c,setState:s,subscribe:n,addToCart:(d,u=1)=>{if(r.items[d])return;const f={...r.items,[d]:u},p=Object.values(f).reduce((y,b)=>y+b,0);s({items:f,totalCount:p})}}},C=Y(),Z=[10,20,50,100],tt=[{value:"price_asc",label:"가격 낮은순"},{value:"price_desc",label:"가격 높은순"},{value:"name_asc",label:"이름순"},{value:"name_desc",label:"이름 역순"}];function et({state:t}){const r=t.categories,e=r?Object.keys(r):[],n=r!=null&&r[t.category1]?Object.keys(r[t.category1]):[];return`
 <!-- 검색 및 필터 -->
 <div id="product-filter" class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
 <!-- 검색창 -->
 <div class="mb-4">
   <div class="relative">
     <input type="text" id="search-input" placeholder="상품명을 검색해보세요..." value="${t.search||""}" class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
     <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
       <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
               d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
       </svg>
     </div>
   </div>
 </div>
 <!-- 필터 옵션 -->
 <div class="space-y-3">
   <!-- 카테고리 필터 -->
   <div class="space-y-2">
     <div class="flex items-center gap-2">
       <label class="text-sm text-gray-600">카테고리:</label>
       <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline ${!t.category1&&!t.category2?"text-blue-600 font-medium":""}">전체</button>
       ${t.category1?`<span class="text-xs text-gray-500">&gt;</span><button data-breadcrumb="category1" data-category1="${t.category1}" class="text-xs hover:text-blue-800 hover:underline">${t.category1}</button>`:""}
       ${t.category2?`<span class="text-xs text-gray-500">&gt;</span><button data-breadcrumb="category2" data-category2="${t.category2}" class="text-xs hover:text-blue-800 hover:underline">${t.category2}</button>`:""}
     </div>
     <!-- 1depth 카테고리 -->
     ${!r||e.length===0?`
      <div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>
    `:t.category1?`
       <!-- 2depth 카테고리 -->
       <div class="flex flex-wrap gap-2">
        ${n.map(o=>`
          <button data-category2="${o}" class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors
            ${t.category2===o?"bg-blue-100 border-blue-300 text-blue-700":"bg-white border-gray-300 text-gray-700 hover:bg-gray-50"}">
            ${o}
          </button>
          `).join("")}
          </div>
      `:`
     <div class="flex flex-wrap gap-2">
     ${e.map(o=>`
      <button data-category1="${o}" class="category1-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors
        bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
        ${o}
     </button>
     `).join("")}
       </div>
       `}
   </div>
   <!-- 기존 필터들 -->
   <div class="flex gap-2 items-center justify-between">
     <!-- 페이지당 상품 수 -->
     <div class="flex items-center gap-2">
       <label class="text-sm text-gray-600">개수:</label>
       <select id="limit-select"
               class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
         ${Z.map(o=>`<option value="${o}" ${t.limit===o?"selected":""}>${o}개</option>`).join("")}
       </select>
     </div>
     <!-- 정렬 -->
     <div class="flex items-center gap-2">
       <label class="text-sm text-gray-600">정렬:</label>
       <select id="sort-select" class="text-sm border border-gray-300 rounded px-2 py-1
                    focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
         ${tt.map(o=>`<option value="${o.value}" ${t.sort===o.value?"selected":""}>${o.label}</option>`).join("")}
       </select>
     </div>
   </div>
 </div>
</div>
  `}const rt=()=>{const t=new URLSearchParams(window.location.search);return{search:t.get("search")||"",limit:parseInt(t.get("limit"))||20,sort:t.get("sort")||"price_asc",category1:t.get("category1")||"",category2:t.get("category2")||""}},j=t=>{const r=new URLSearchParams(window.location.search);Object.entries(t).forEach(([n,o])=>{o?r.set(n,o):r.delete(n)});const e=`${window.location.pathname}?${r.toString()}`;window.history.pushState({},"",e)};function w(t,r){Object.entries(t).forEach(([e,n])=>{e==="limit"?i.setLimit(parseInt(n)):e==="sort"?i.setSort(n):e==="search"?i.setSearch(n):e==="category1"?i.setCategory1(n):e==="category2"&&i.setCategory2(n)}),j(t),i.setPage(1),i.setHasMore(!0),r({append:!1})}function ot(t,r){const n={"limit-select":()=>w({limit:parseInt(t.target.value)},r),"sort-select":()=>w({sort:t.target.value},r)}[t.target.id];n&&n()}function st(t,r){if(t.target.id==="search-input"&&t.key==="Enter"){const e=t.target.value.trim();w({search:e},r)}}function nt(t,r){var c;const e=t.target;if(e.classList.contains("category1-filter-btn")&&w({category1:e.dataset.category1,category2:""},r),e.classList.contains("category2-filter-btn")){const s=i.getState();w({category1:s.category1,category2:e.dataset.category2},r)}const o={reset:()=>w({category1:"",category2:""},r),category1:()=>w({category1:e.dataset.category1,category2:""},r),category2:()=>{const s=i.getState();w({category1:s.category1,category2:e.dataset.category2},r)}}[e.dataset.breadcrumb];if(o){o();return}if(e.closest(".product-card")&&!e.closest(".add-to-cart-btn")){const s=(c=e.closest("[data-product-id]"))==null?void 0:c.dataset.productId;s&&(window.history.pushState({},"",`/product/${s}`),E())}if(e.classList.contains("add-to-cart-btn")){t.preventDefault(),t.stopPropagation();const s=e.closest(".product-card"),a=s==null?void 0:s.dataset.productId;a&&C.addToCart(a,1);return}}function at(t){window._homeEventRegistered||(document.addEventListener("change",r=>ot(r,t)),document.addEventListener("keydown",r=>st(r,t)),document.addEventListener("click",r=>nt(r,t)),window._homeEventRegistered=!0)}function ct(){window._homeEventRegistered=!1}function O(){const t=document.getElementById("products-grid"),r=document.getElementById("total-count-container"),e=document.getElementById("end-message"),n=i.getState();if(t){if(n.loading&&n.hasMore){t.innerHTML=`${Array(6).fill().map(Q).join("")}${V()}`;return}t.innerHTML=n.products.map(K).join(""),r&&(n.products&&n.products.length>0?(r.style.display="block",r.innerHTML=`총 <span id="total-count" class="font-medium text-gray-900">${n.totalCount}개</span>의 상품`):(r.style.display="none",r.textContent="")),e&&(!n.hasMore&&n.products&&n.products.length>0?e.style.display="block":e.style.display="none")}}async function H({append:t=!1}){var r,e;i.setLoading(!0),i.setError(null);try{const n=i.getState(),o=await F({limit:n.limit,sort:n.sort,search:n.search,page:n.page,category1:n.category1,category2:n.category2});if(o.products){i.setProducts(o.products,t),i.setTotalCount(((r=o.pagination)==null?void 0:r.total)??o.products.length);const c=((e=o.pagination)==null?void 0:e.total)??0,a=(t?n.products.length+o.products.length:o.products.length)<c;i.setHasMore(a),a&&i.setPage(n.page+1)}else i.setError("상품 목록을 불러오는데 실패했습니다.")}catch(n){i.setError("상품 목록을 불러오는데 실패했습니다."),console.error("상품 목록 로드 에러:",n)}finally{i.setLoading(!1)}}function B(){const t=document.querySelector("main");if(!t)return;const r=t.querySelector("#product-filter");r&&r.remove();const e=et({state:i.getState()});t.insertAdjacentHTML("afterbegin",e)}function D(){const t=C.getState(),r=document.getElementById("cart-icon-container");r&&(r.innerHTML=S(t.totalCount))}function it(){const t=`
    ${z()}
    <main class="max-w-md mx-auto px-4 py-4">
      <!-- 상품 목록 -->
      <div class="mb-6">
        <div>
          <!-- 상품 개수 정보 -->
          <div id="total-count-container" class="mb-4 text-sm text-gray-600"></div>
          <!-- 상품 그리드 -->
          <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid"></div>
          <!-- 무한 스크롤 타겟 -->
          <div id="observer-target"></div>
          <div id="end-message" class="text-center py-4 text-sm text-gray-500">
            모든 상품을 확인했습니다
          </div>
        </div>
      </div>
    </main>
    ${A()}
  `;let r=!1,e;async function n(){window.scrollTo(0,0);const o=i.subscribe(()=>{O(),B()});i.setLoading(!0),O(),D(),B();const c=await J();i.setCategories(c),at(H),await H({append:!1}),r=!0;const s=document.getElementById("observer-target");e=new IntersectionObserver(async d=>{const u=d[0],f=i.getState();r&&u.isIntersecting&&!f.loading&&f.hasMore&&await H({append:!0})},{rootMargin:"100px",threshold:.1}),s&&e.observe(s);const a=C.subscribe(()=>{D()});return()=>{e.disconnect(),o(),a(),ct()}}return{template:t,mount:n}}function lt(t={}){const{image:r="",title:e="",mallName:n="",lprice:o=0,stock:c=0,description:s="",rating:a=0,reviewCount:d=0,images:u=[]}=t;function f(p){const y=Math.floor(p),b=p%1!==0,v=5-y-(b?1:0);let x="";for(let h=0;h<y;h++)x+=`
          <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        `;b&&(x+=`
          <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <defs>
              <linearGradient id="half-star">
                <stop offset="50%" stop-color="currentColor"/>
                <stop offset="50%" stop-color="#D1D5DB"/>
              </linearGradient>
            </defs>
            <path fill="url(#half-star)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        `);for(let h=0;h<v;h++)x+=`
          <svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        `;return x}return`
      <!-- 상품 상세 정보 -->
      <div class="bg-white rounded-lg shadow-sm mb-6">
        <!-- 상품 이미지 -->
        <div class="p-4">
          <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
            <img src="${r}" alt="${e}" class="w-full h-full object-cover product-detail-image">
          </div>
          <!-- 상품 정보 -->
          <div>
            <p class="text-sm text-gray-600 mb-1">${n}</p>
            <h1 class="text-xl font-bold text-gray-900 mb-3">${e}</h1>
            <!-- 평점 및 리뷰 -->
            <div class="flex items-center mb-3">
              <div class="flex items-center">
                ${f(a)}
              </div>
              <span class="ml-2 text-sm text-gray-600">${a.toFixed(1)} (${d}개 리뷰)</span>
            </div>
            <!-- 가격 -->
            <div class="mb-4">
              <span class="text-2xl font-bold text-blue-600">${Number(o).toLocaleString()}원</span>
            </div>
            <!-- 재고 -->
            <div class="text-sm text-gray-600 mb-4">
              재고 <span>${c}</span>개
            </div>
            <!-- 설명 -->
            <div class="text-sm text-gray-700 leading-relaxed mb-6">
              ${s}
            </div>
          </div>
        </div>
        <!-- 수량 선택 및 액션 -->
        <div class="border-t border-gray-200 p-4">
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm font-medium text-gray-900">수량</span>
            <div class="flex items-center">
              <button id="quantity-decrease" class="w-8 h-8 flex items-center justify-center border border-gray-300 
                 rounded-l-md bg-gray-50 hover:bg-gray-100">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                </svg>
              </button>
              <input type="number" id="quantity-input" value="1" min="1" max="${c}" class="w-16 h-8 text-center text-sm border-t border-b border-gray-300 
                focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <button id="quantity-increase" class="w-8 h-8 flex items-center justify-center border border-gray-300 
                 rounded-r-md bg-gray-50 hover:bg-gray-100">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                </svg>
              </button>
            </div>
          </div>
          <!-- 액션 버튼 -->
          <button id="add-to-cart-btn" data-product-id="${t.productId}" class="w-full bg-blue-600 text-white py-3 px-4 rounded-md 
               hover:bg-blue-700 transition-colors font-medium">
            장바구니 담기
          </button>
        </div>
      </div>
      <!-- 상품 목록으로 이동 -->
      <div class="mb-6">
        <button id="go-to-product-list" class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md 
          hover:bg-gray-200 transition-colors">
          상품 목록으로 돌아가기
        </button>
      </div>
    `}function dt(t=[]){return t.length===0?`
      <!-- 관련 상품 -->
      <div class="bg-white rounded-lg shadow-sm">
        <div class="p-4 border-b border-gray-200">
          <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
          <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
        </div>
        <div class="p-4">
          <div class="text-center text-gray-500 py-8">
            <p>관련 상품이 없습니다.</p>
          </div>
        </div>
      </div>
    `:`
    <!-- 관련 상품 -->
    <div class="bg-white rounded-lg shadow-sm">
      <div class="p-4 border-b border-gray-200">
        <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
        <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
      </div>
      <div class="p-4">
        <div class="grid grid-cols-2 gap-3 responsive-grid">
          ${t.map(e=>`
    <div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" data-product-id="${e.productId}">
      <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
        <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover" loading="lazy">
      </div>
      <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">${e.title}</h3>
      <p class="text-sm font-bold text-blue-600">${Number(e.lprice).toLocaleString()}원</p>
    </div>
  `).join("")}
        </div>
      </div>
    </div>
  `}function ut(t="",r=""){return`
    <!-- 브레드크럼 -->
    <nav class="mb-4">
      <div class="flex items-center space-x-2 text-sm text-gray-600">
        <a href="/" class="hover:text-blue-600 transition-colors">홈</a>
        ${t?`
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <button class="breadcrumb-link" data-category1="${t}">
            ${t}
          </button>
        `:""}
        ${r?`
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <button class="breadcrumb-link" data-category2="${r}">
            ${r}
          </button>
        `:""}
      </div>
    </nav>
  `}function q({productId:t,cartUpdate:r,navigate:e}){const n=document.querySelectorAll(".breadcrumb-link"),o=document.getElementById("home-breadcrumb-link"),c=document.getElementById("go-to-product-list"),s=document.querySelectorAll(".related-product-card"),a=document.getElementById("quantity-input"),d=document.getElementById("quantity-decrease"),u=document.getElementById("quantity-increase"),f=document.getElementById("add-to-cart-btn"),p=document.getElementById("back-button");function y(){e==null||e("/")}function b(g){g.preventDefault(),e==null||e("/")}function v(g){g.preventDefault(),e==null||e("/")}function x(g){g.preventDefault();const m=g.currentTarget;if(m.dataset.category1){const L=m.dataset.category1;i.setCategory1(L),i.setCategory2(""),j({category1:L,category2:""}),e==null||e(`/?category1=${L}`)}else if(m.dataset.category2){const L=m.dataset.category2,T=i.getState();i.setCategory2(L),j({category1:T.category1,category2:L}),e==null||e(`/?category1=${T.category1}&category2=${L}`)}}function h(g){g.preventDefault();const m=g.currentTarget.dataset.productId;m&&(e==null||e(`/product/${m}`))}function k(){const g=parseInt(a.value)||1;g>1&&(a.value=g-1)}function I(){const g=parseInt(a.value)||1,m=parseInt(a.max);g<m&&(a.value=g+1)}function M(){let g=parseInt(a.value)||1;const m=parseInt(a.max);g<1&&(a.value=1),g>m&&(a.value=m)}function l(){t&&(C.addToCart(t,1),r==null||r())}return d==null||d.addEventListener("click",k),u==null||u.addEventListener("click",I),a==null||a.addEventListener("input",M),f==null||f.addEventListener("click",l),p==null||p.addEventListener("click",y),o==null||o.addEventListener("click",v),c==null||c.addEventListener("click",b),n.forEach(g=>g.addEventListener("click",x)),s.forEach(g=>g.addEventListener("click",h)),function(){d==null||d.removeEventListener("click",k),u==null||u.removeEventListener("click",I),a==null||a.removeEventListener("input",M),f==null||f.removeEventListener("click",l),p==null||p.removeEventListener("click",y),o==null||o.removeEventListener("click",v),c==null||c.removeEventListener("click",b),n.forEach(m=>m.removeEventListener("click",x)),s.forEach(m=>m.removeEventListener("click",h))}}function gt(t={}){const{productId:r}=t;let e;const n=`
    <div class="min-h-screen bg-gray-50">
      ${z("detail")}
      <main class="max-w-md mx-auto px-4 py-4">
        <div id="breadcrumb-container">
        </div>
        
        <!-- 상품 상세 정보 -->
        <div id="product-detail-container">
          <!-- 로딩 상태 -->
          <div class="py-20 bg-gray-50 flex items-center justify-center">
            <div class="text-center">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p class="text-gray-600">상품 정보를 불러오는 중...</p>
            </div>
          </div>
        </div>
        
        <!-- 관련 상품 -->
        <div id="related-product-container">
        </div>
      </main>
      ${A()}
    </div>
  `;function o(){const s=C.getState(),a=document.getElementById("cart-icon-container");a&&(a.innerHTML=S(s.totalCount))}async function c(){e&&(e(),e=null),o();async function s(){try{const u=await W(r);if(u){const f=document.getElementById("breadcrumb-container");f&&(f.innerHTML=ut(u.category1,u.category2));const p=document.getElementById("product-detail-container");p&&(p.innerHTML=lt(u),e=q({productId:r,cartUpdate:o,navigate:y=>{window.history.pushState({},"",y),E()}})),await a(u)}}catch(u){console.error("상품 상세 로드 에러:",u)}}async function a(u){var b;const p=((b=(await F({category1:u.category1,category2:u.category2})).products)==null?void 0:b.filter(v=>v.productId!==u.productId))||[],y=document.getElementById("related-product-container");y&&(y.innerHTML=dt(p.slice(0,4)),e&&e(),e=q({productId:r,cartUpdate:o,navigate:v=>{window.history.pushState({},"",v),E()}}))}await s();const d=C.subscribe(()=>{o()});return()=>{e&&(e(),e=null),d()}}return{template:n,mount:c}}function pt(){return`
  <main class="max-w-md mx-auto px-4 py-4">
    <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg">
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1a73e8;stop-opacity:1" />
        </linearGradient>
        <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#000000" flood-opacity="0.1"/>
        </filter>
      </defs>
      
      <!-- 404 Numbers -->
      <text x="160" y="85" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="48" font-weight="600" fill="url(#blueGradient)" text-anchor="middle">404</text>
      
      <!-- Icon decoration -->
      <circle cx="80" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
      <circle cx="240" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
      <circle cx="90" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
      <circle cx="230" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
      
      <!-- Message -->
      <text x="160" y="110" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="14" font-weight="400" fill="#5f6368" text-anchor="middle">페이지를 찾을 수 없습니다</text>
      
      <!-- Subtle bottom accent -->
      <rect x="130" y="130" width="60" height="2" rx="1" fill="url(#blueGradient)" opacity="0.3"/>
    </svg>
    
    <a href="/" data-link class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">홈으로</a>
  </div>
  </main>
`}const R="/front_6th_chapter1-1",ft=(t=window.location.pathname)=>t.startsWith(R)?t.slice(R.length)||"/":t,P={"/":it,"/product/:productId":gt,"*":pt};let $=null;function E(){const t=ft(),r=rt();t==="/"&&(i.setSearch(r.search),i.setLimit(r.limit),i.setSort(r.sort),i.setCategory1(r.category1),i.setCategory2(r.category2),i.setPage(1),i.setHasMore(!0));let e=P[t],n={};if(!e){const s=t.match(/^\/product\/(.+)$/);s?(e=P["/product/:productId"],n={productId:s[1]}):e=P["*"]}const o=e(n),c=document.getElementById("root");if(c)if(typeof $=="function"&&($(),$=null),o&&o.template&&o.mount){c.innerHTML=o.template;const s=o.mount();s instanceof Promise?s.then(a=>{typeof a=="function"?$=a:$=null}):$=s}else c.innerHTML=o}const mt=()=>N(async()=>{const{worker:t,workerOptions:r}=await import("./browser-CJWggunh.js");return{worker:t,workerOptions:r}},[]).then(({worker:t,workerOptions:r})=>t.start(r));async function yt(){window.addEventListener("popstate",()=>E()),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",E):E()}mt().then(yt);
