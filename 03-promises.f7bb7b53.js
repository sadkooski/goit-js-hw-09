function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=r);var i=r("7Y9D8");const l=document.querySelector("form");let a,s,u,d;function c(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}l.addEventListener("input",(function(e){"delay"===e.target.name?(s=e.target.value,console.log(s)):"step"===e.target.name?u=e.target.value:"amount"===e.target.name&&(d=e.target.value)})),l.addEventListener("submit",(function(t){t.preventDefault(),setTimeout((()=>{console.log(`delay ${s}`);for(let t=0;t<d;t++)console.log("i * step - "+t*u),console.log(`parseint(delay) - ${t*u+parseInt(s)}`),a=t+1,c(a,t*u+parseInt(s)).then((({position:t,delay:n})=>{const o=`✅ Fulfilled promise ${t} in ${n}ms`;e(i).Notify.success(o)})).catch((({position:t,delay:n})=>{const o=`❌ Rejected promise ${t} in ${n}ms`;e(i).Notify.failure(o)}))}),s)}));
//# sourceMappingURL=03-promises.f7bb7b53.js.map
