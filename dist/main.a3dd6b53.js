parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
console.log("I am js2");var e=1;getPage.onclick=function(){var n=new XMLHttpRequest;n.open("get","/page".concat(e+1)),n.onreadystatechange=function(){4===n.readyState&&200===n.status&&(console.log(n.response),JSON.parse(n.response).forEach(function(e){var n=document.createElement("li");n.textContent=e.id,xxx.appendChild(n)}),e+=1)},n.send()},getJSON.onclick=function(){var e=new XMLHttpRequest;e.open("get","/5.json"),e.onreadystatechange=function(){if(4===e.readyState&&200===e.status){console.log(e.response);var n=JSON.parse(e.response);myName.textContent=n.name}},e.send()},getXML.onclick=function(){var e=new XMLHttpRequest;e.open("get","/4.xml"),e.onreadystatechange=function(){if(4===e.readyState&&200===e.status){var n=e.responseXML.getElementsByTagName("warning")[0].textContent;console.log(n.trim())}},e.send()},getHTML.onclick=function(){var e=new XMLHttpRequest;e.open("get","/3.html"),e.onload=function(){var n=document.createElement("div");n.innerHTML=e.response,document.body.appendChild(n)},e.onerror=function(){console.log("failed")},e.send()},getJS.onclick=function(){var e=new XMLHttpRequest;e.open("get","/2.js"),e.onload=function(){var n=document.createElement("script");n.innerHTML=e.response,document.body.appendChild(n)},e.onerror=function(){console.log("failed")},e.send()},getCSS.onclick=function(){var e=new XMLHttpRequest;e.open("get","/style.css"),e.onreadystatechange=function(){if(4===e.readyState)if(e.status>=200&&e.status<300){var n=document.createElement("style");n.innerHTML=e.response,document.head.appendChild(n)}else alert("加載CSS失敗")},e.send()};
},{}]},{},["epB2"], null)
//# sourceMappingURL=/main.a3dd6b53.js.map