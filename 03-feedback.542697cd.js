var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var a=o("kEUo3");const n={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),input:document.querySelector("input")},l={};!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(null===e)return;n.textarea.value=e.message||"",n.input.value=e.email||""}(),n.form.addEventListener("input",(0,a.throttle)((function(e){l[e.target.name]=e.target.value;const t=JSON.stringify(l);localStorage.setItem("feedback-form-state",t)}),500)),n.form.addEventListener("submit",(e=>{e.preventDefault(),e.currentTarget.reset();JSON.parse(localStorage.getItem("feedback-form-state"));localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.542697cd.js.map