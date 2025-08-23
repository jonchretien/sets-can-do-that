(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const e=Object.freeze({SET_METHODS:{DIFFERENCE:"difference",INTERSECTION:"intersection",IS_DISJOINT_FROM:"isDisjointFrom",IS_SUBSET_OF:"isSubsetOf",IS_SUPERSET_OF:"isSupersetOf",SYMMETRIC_DIFFERENCE:"symmetricDifference",UNION:"union"},SVG:{WIDTH:300,HEIGHT:200}});function p(){return{[e.SET_METHODS.DIFFERENCE]:{code:`<span class="keyword">const</span> setA = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Chocolate'</span>, <span class="string">'Neapolitan'</span>, <span class="string">'Strawberry'</span>, <span class="string">'Vanilla'</span>]);
<span class="keyword">const</span> setB = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Cookies and Cream'</span>, <span class="string">'Neapolitan'</span>, <span class="string">'Pistachio'</span>, <span class="string">'Rocky Road'</span>, <span class="string">'Vanilla'</span>]);
setA.<span class="method">difference</span>(setB);`,description:"Which ice cream flavors are in the first set, but not in the second one?",emoji:"🍦",output:`<span class="set">Set</span>(2) {<span class="string">'Chocolate'</span>, <span class="string">'Strawberry'</span>}`},[e.SET_METHODS.INTERSECTION]:{code:`<span class="keyword">const</span> setA = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Toyota'</span>, <span class="string">'Honda'</span>, <span class="string">'Ford'</span>, <span class="string">'Chevrolet'</span>]);
<span class="keyword">const</span> setB = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'BMW'</span>, <span class="string">'Honda'</span>, <span class="string">'Kia'</span>, <span class="string">'Ford'</span>, <span class="string">'Chevrolet'</span>]);
setA.<span class="method">intersection</span>(setB);`,description:"Which cars are in both sets?",emoji:"🚗",output:`<span class="set">Set</span>(3) {<span class="string">'Honda'</span>, <span class="string">'Ford'</span>, <span class="string">'Chevrolet'</span>}`},[e.SET_METHODS.IS_DISJOINT_FROM]:{code:`<span class="keyword">const</span> setA = <span class="keyword">new</span> Set([<span class="string">'Lions'</span>, <span class="string">'Tigers'</span>, <span class="string">'Bears'</span>, <span class="string">'Eagles'</span>]);
<span class="keyword">const</span> setB = <span class="keyword">new</span> Set([<span class="string">'Panthers'</span>, <span class="string">'Tigers'</span>, <span class="string">'Wolves'</span>, <span class="string">'Hawks'</span>, <span class="string">'Eagles'</span>]);
setA.<span class="method">isDisjointFrom</span>(setB);`,description:"Check if the first set has no NFL mascots in common with the second set.",emoji:"🏈",output:'<span class="boolean">false</span>'},[e.SET_METHODS.IS_SUBSET_OF]:{code:`<span class="keyword">const</span> setA = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Superman'</span>, <span class="string">'Batman'</span>, <span class="string">'Wonder Woman'</span>]);
<span class="keyword">const</span> setB = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Superman'</span>, <span class="string">'Batman'</span>, <span class="string">'Wonder Woman'</span>, <span class="string">'Flash'</span>, <span class="string">'Green Lantern'</span>]);
setA.<span class="method">isSubsetOf</span>(setB);`,description:"Check if all superheroes in the first set are also in the other set.",emoji:"🦸🏽‍♀️",output:'<span class="boolean">true</span>'},[e.SET_METHODS.IS_SUPERSET_OF]:{code:`<span class="keyword">const</span> setA = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Yellowstone'</span>, <span class="string">'Yosemite'</span>, <span class="string">'Grand Canyon'</span>, <span class="string">'Zion'</span>]);
<span class="keyword">const</span> setB = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Acadia'</span>, <span class="string">'Yosemite'</span>, <span class="string">'Glacier'</span>, <span class="string">'Rocky Mountain'</span>, <span class="string">'Zion'</span>]);
setA.<span class="method">isSupersetOf</span>(setB);`,description:"Check if all national parks in the second set are also in the first set.",emoji:"🏞️",output:'<span class="boolean">false</span>'},[e.SET_METHODS.SYMMETRIC_DIFFERENCE]:{code:`<span class="keyword">const</span> setA = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Miles Davis'</span>, <span class="string">'John Coltrane'</span>, <span class="string">'Thelonious Monk'</span>, <span class="string">'Charles Mingus'</span>]);
<span class="keyword">const</span> setB = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Herbie Hancock'</span>, <span class="string">'John Coltrane'</span>, <span class="string">'Wayne Shorter'</span>, <span class="string">'Ornette Coleman'</span>, <span class="string">'Charles Mingus'</span>]);
setA.<span class="method">symmetricDifference</span>(setB);`,description:"Which jazz musicians are in either set, but not in both?",emoji:"🎷",output:`<span class="set">Set</span>(5) {<span class="string">'Miles Davis'</span>, <span class="string">'Thelonious Monk'</span>, <span class="string">'Herbie Hancock'</span>, <span class="string">'Wayne Shorter'</span>, <span class="string">'Ornette Coleman'</span>}`},[e.SET_METHODS.UNION]:{code:`<span class="keyword">const</span> setA = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Air Jordan'</span>, <span class="string">'Air Max'</span>, <span class="string">'Blazer'</span>, <span class="string">'Cortez'</span>]);
<span class="keyword">const</span> setB = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Dunk'</span>, <span class="string">'Air Max'</span>, <span class="string">'Air Force 1'</span>, <span class="string">'React'</span>, <span class="string">'Cortez'</span>]);
setA.<span class="method">union</span>(setB);`,description:"Which Nike sneakers are in either or both of the sets?",emoji:"👟",output:`<span class="set">Set</span>(7) {<span class="string">'Air Jordan'</span>, <span class="string">'Air Max'</span>, <span class="string">'Blazer'</span>, <span class="string">'Cortez'</span>, <span class="string">'Dunk'</span>, <span class="string">'Air Force 1'</span>, <span class="string">'React'</span>}`}}}function o(t,s={}){const n=document.createElement(t);return Object.entries(s).forEach(([i,a])=>{i==="textContent"?n.textContent=a:n.setAttribute(i,a)}),n}function f(t){const s=o("select",{class:"select-menu"});return s.appendChild(o("option",{textContent:"Pick a method",disabled:!0,selected:!0})),Object.values(e.SET_METHODS).forEach(n=>{s.appendChild(o("option",{value:n,textContent:n}))}),s.addEventListener("change",n=>t(n.target.value)),s}function g(){return o("div",{class:"content-area"})}function d(t,s){return`
    <h2 class="content-area__title">${t} ${s.emoji}</h2>
    <p class="content-area__description">${s.description} – <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/${t}" target="_blank" rel="noopener noreferrer">MDN Web Docs</a></p>
    <pre class="code-block"><code class="code-inline">${s.code}</code></pre>
    <pre class="code-block"><code class="code-inline">${s.output}</code></pre>
    <div class="diagram" aria-hidden="true"></div>
  `}function h(t){return{[e.SET_METHODS.DIFFERENCE]:u,[e.SET_METHODS.INTERSECTION]:w,[e.SET_METHODS.SYMMETRIC_DIFFERENCE]:S,[e.SET_METHODS.UNION]:m,[e.SET_METHODS.IS_DISJOINT_FROM]:E,[e.SET_METHODS.IS_SUBSET_OF]:y,[e.SET_METHODS.IS_SUPERSET_OF]:k}[t]}function u(){return`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${e.SVG.WIDTH} ${e.SVG.HEIGHT}" role="img" aria-label="difference diagram">
      <rect width="100%" height="100%" fill="#fff"/>
      <path d="M115 100c0-25.91 14.08-48.51 35-60.61A69.667 69.667 0 0 0 115 30c-38.66 0-70 31.34-70 70s31.34 70 70 70c12.75 0 24.7-3.43 35-9.39-20.92-12.1-35-34.7-35-60.61z" style="fill:#ea9930"/>
      <circle cx="115" cy="100" r="70" fill-opacity="0.06" stroke="#999" stroke-width="2"/>
      <circle cx="185" cy="100" r="70" fill-opacity="0.06" stroke="#999" stroke-width="2"/>
      <text transform="translate(99.37 50.4)" fill="#333" font-weight="700">A</text>
      <text transform="translate(190.014 50.4)" fill="#333" font-weight="700">B</text>
    </svg>`}function w(){return`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${e.SVG.WIDTH} ${e.SVG.HEIGHT}" role="img" aria-label="intersection diagram">
      <rect width="100%" height="100%" fill="#fff"/>
      <path d="M150 39.39c-20.92 12.1-35 34.71-35 60.61s14.08 48.51 35 60.61c20.92-12.1 35-34.71 35-60.61s-14.08-48.51-35-60.61z" style="fill:#ea9930"/>
      <circle cx="115" cy="100" r="70" fill-opacity="0.06" stroke="#999" stroke-width="2"/>
      <circle cx="185" cy="100" r="70" fill-opacity="0.06" stroke="#999" stroke-width="2"/>
      <text transform="translate(99.37 50.4)" fill="#333" font-weight="900">A</text>
      <text transform="translate(190.014 50.4)" fill="#333" font-weight="900">B</text>
    </svg>`}function S(){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${e.SVG.WIDTH} ${e.SVG.HEIGHT}" role="img" aria-label="symmetric difference diagram">
    <rect width="100%" height="100%" fill="#fff"/>
    <path d="M115 100c0-25.91 14.08-48.51 35-60.61A69.667 69.667 0 0 0 115 30c-38.66 0-70 31.34-70 70s31.34 70 70 70c12.75 0 24.7-3.43 35-9.39-20.92-12.1-35-34.7-35-60.61zm70-70c-12.75 0-24.7 3.43-35 9.39 20.92 12.1 35 34.71 35 60.61s-14.08 48.51-35 60.61a69.667 69.667 0 0 0 35 9.39c38.66 0 70-31.34 70-70s-31.34-70-70-70z" style="fill:#ea9930"/>
    <circle cx="115" cy="100" r="70" fill-opacity="0.06" stroke="#999" stroke-width="2"/>
    <circle cx="185" cy="100" r="70" fill-opacity="0.06" stroke="#999" stroke-width="2"/>
    <text transform="translate(99.37 50.4)" fill="#333" font-weight="900">A</text>
    <text transform="translate(190.014 50.4)" fill="#333" font-weight="900">B</text>
  </svg>`}function m(){return`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${e.SVG.WIDTH} ${e.SVG.HEIGHT}" xml:space="preserve">
      <rect width="100%" height="100%" fill="#fff"/>
      <path d="M185 30c-12.75 0-24.7 3.43-35 9.39A69.667 69.667 0 0 0 115 30c-38.66 0-70 31.34-70 70s31.34 70 70 70c12.75 0 24.7-3.43 35-9.39a69.667 69.667 0 0 0 35 9.39c38.66 0 70-31.34 70-70s-31.34-70-70-70z" style="fill:#ea9930"/>
      <circle cx="115" cy="100" r="70" fill-opacity="0.06" stroke="#999" stroke-width="2"/>
      <circle cx="185" cy="100" r="70" fill-opacity="0.06" stroke="#999" stroke-width="2"/>
      <text transform="translate(99.37 50.4)" fill="#333" font-weight="900">A</text>
      <text transform="translate(190.014 50.4)" fill="#333" font-weight="900">B</text>
    </svg>`}function E(){return`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${e.SVG.WIDTH} ${e.SVG.HEIGHT}" role="img" aria-label="disjoint sets diagram">
      <rect width="100%" height="100%" fill="#fff"/>
      <circle cx="90" cy="100" r="50" fill-opacity="0.06" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
      <circle cx="210" cy="100" r="50" fill-opacity="0.06" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
      <text transform="translate(85.996 75)" fill="#333" font-weight="900">A</text>
      <text transform="translate(205.998 75)" fill="#333" font-weight="900">B</text>
    </svg>`}function y(){return`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${e.SVG.WIDTH} ${e.SVG.HEIGHT}" role="img" aria-label="subset diagram">
    <rect width="100%" height="100%" fill="#fff"/>
    <circle cx="150" cy="100" r="75" fill="#fff" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
    <circle cx="150" cy="120" r="50" fill="#fff" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
    <text transform="translate(144.361 94.51)" fill="#333" font-weight="900">A</text>
    <text transform="translate(144.358 44.51)" fill="#333" font-weight="900">B</text>
  </svg>`}function k(){return`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${e.SVG.WIDTH} ${e.SVG.HEIGHT}" role="img" aria-label="superset diagram">
    <rect width="100%" height="100%" fill="#fff"/>
    <circle cx="150" cy="100" r="75" fill="#fff" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
    <circle cx="150" cy="120" r="50" fill="#fff" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
    <text transform="translate(144.358 44.51)" fill="#333" font-weight="900">A</text>
    <text transform="translate(144.361 94.51)" fill="#333" font-weight="900">B</text>
  </svg>`}function T(t,s){if(!t){console.error("No wrapper element provided for diagram");return}t.innerHTML="";const n=h(s);if(n){const i=n();t.innerHTML=i}else console.error("No diagram strategy found for:",s)}function x(t){window.location.hash=t}function D(t){const s=Object.keys(t),n=Math.floor(Math.random()*s.length);return s[n]}function H(t,s){return function(){const i=window.location.hash.replace("#","");if(i&&t[i])s(i);else{const a=D(t);s(a)}}}function v(t,s){const n=H(t,s);n(),window.addEventListener("hashchange",n)}function I(t,s){let n=null;function i(r){const c=t[r];if(!c)return;n&&(n.value=r),s.innerHTML=d(r,c);const l=s.querySelector(".diagram");T(l,r),x(r)}function a(r){n=r}return i.setSelectElement=a,i}function M(){const t=p(),s=g(),n=I(t,s),i=f(n);n.setSelectElement(i),document.getElementById("app").append(i,s),document.getElementById("copyright").textContent=new Date().getFullYear(),v(t,n)}document.addEventListener("DOMContentLoaded",M);
