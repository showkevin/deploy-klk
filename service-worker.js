"use strict";var precacheConfig=[["./index.html","ba5045f3f6cc7635dc4bcb2e55849db2"],["./static/css/main.252145e1.css","4c93135ffbd85cb762533d9de5c3e183"],["./static/js/main.289eb665.js","dfa85427267ef6b02301774d64d9f464"],["./static/media/bg13_min.75f879f7.jpg","75f879f7f895fadbc6fc4ccbe018960c"],["./static/media/bg17_min.43a356f8.jpg","43a356f89c18b8d349f094de7a249480"],["./static/media/bg20.f3b0a28c.jpg","f3b0a28c6f4e80fb0b44bec758f22f00"],["./static/media/bg21.1fd829be.jpg","1fd829be313dca7312f504e65889448c"],["./static/media/bg52.df841d93.jpg","df841d937e2e9e0dacb3d63044942e27"],["./static/media/bg7.013b0488.jpg","013b04881a6177ff0648349533ef0447"],["./static/media/gloria2.666943cf.jpg","666943cf11bbf75718f8c331104583ed"],["./static/media/jerry.2aa27bf0.jpg","2aa27bf053236c355e62893bb6d08224"],["./static/media/marc.101b9dc3.jpg","101b9dc3484755250ff3de71d22af8e1"],["./static/media/product1.6e4bd962.jpg","6e4bd9620e597bb17efa32e2c2cbe82e"],["./static/media/product1.8d28eb74.jpg","8d28eb7464cf9109b5e5be9da10d87c4"],["./static/media/product2.38202c06.jpg","38202c06cc3af37ef1a94ae62fd1469c"],["./static/media/product2.810d7d26.jpg","810d7d26ae88605f52aadc747434b689"],["./static/media/product3.a5a49133.jpg","a5a4913303914acc7ef95ab8f8d72ffe"],["./static/media/product3.bbb6d463.jpg","bbb6d463f66456e73d6d82b3f743d730"],["./static/media/product4.8605a07c.jpg","8605a07cf32d667c6bde52099376bf03"],["./static/media/product4.e95bbcfc.jpg","e95bbcfc0181aa57026ed0dc64b99889"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});