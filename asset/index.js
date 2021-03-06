"use strict";function typer(e,t){function n(e){return{}.toString.call(e).slice(8,-1)}function r(e){var t=n(e);if("HTML"!==t.slice(0,4)&&"String"!==t)throw'You need to provide a string selector, such as ".some-class", or an html element.';return t}function i(){["typer","cursor-block","cursor-soft","cursor-hard","no-cursor"].forEach(function(e){g.newDiv.classList.remove(e)})}function o(){g.dataNum=Math.floor(999999999*Math.random()+1),e.setAttribute("data-typer",g.dataNum)}function c(e,t){g.style=document.createElement("style"),g.style.appendChild(document.createTextNode("")),document.head.appendChild(g.style);var n=document.styleSheets[document.styleSheets.length-1];"insertRule"in n?n.insertRule(e+"{"+t+"}",0):n.addRule(e,t)}function a(e,i,o,c,a){var u={html:o!==!1&&c!==!1,elem:a};if("Number"===n(o)&&(u.speed=o>0?o:t),"Number"===n(c)&&(u.speed=c),"Object"===n(i)){var s=Object.keys(i)[0],l="String"===r(i[s])?document.querySelector(i[s]):i[s];i=l[u.html?"innerHTML":"textContent"].trim()}return u.speed=u.speed||t,u[e]=i,u}function u(){return g.item>=0||(g.item=0),g.item===g.length?document.body.removeEventListener("killTyper",g.kill):(g.ks||(g.ks=!0,document.body.addEventListener("killTyper",g.kill)),g.cursor||(g.cursor="cursor-soft"),void(g.type=setInterval(function(){var e=g[g.item];e.line?l(e):e["continue"]?d(e):e.pause?v(e):e.emit?m(e):e.listen?h(e):e.back?f(e):e.empty?p():e.run?y(e):e.end&&b(e)},0)))}function s(e){function t(t){var n=0;g.iterator=setInterval(function(){var e=s[n++];l.textContent=e,g.newDiv.innerHTML+=t?e:l.innerHTML,n===s.length&&c()},e.speed)}function r(){var t=o(l.childNodes,g.newDiv),n=0,r=0,i=t[n++];g.iterator=setInterval(function(){return i?void(i.content?(i.parent.innerHTML+=i.content[r++],r===i.content.length&&(r=0,i=t[n++])):(i.parent.appendChild(i.voidNode||i.newNode),i=t[n++])):c()},e.speed)}function i(){var t=0;g.iterator=setInterval(function(){if(t===s.length)return clearInterval(g.iterator),g.item++,u();var e=s[t];"String"!==n(s)&&(l.textContent=e,e=l.innerHTML),g.newDiv.innerHTML+=e,t++},e.speed)}function o(e,t){var n=[];e=Array.from(e);for(var r=0;r<e.length;r++){var i=e[r],c=i.nodeName;if("#text"===c)n.push({parent:t,content:i.textContent});else if(i.childNodes.length){var u=document.createElement(c);a(i,u),n.push({parent:t,newNode:u}),n=n.concat(o(i.childNodes,u))}else g.voids.includes(c)&&n.push({parent:t,voidNode:i})}return n}function c(){return clearInterval(g.iterator),g.item++,u()}function a(e,t){Array.from(e.attributes).forEach(function(e){t.setAttribute(e.name,e.value)})}var s=e.line||e["continue"],l=document.createElement("div");return Array.isArray(s)?t(e.html):(l.innerHTML=s,void(e.html?r():i()))}function l(t){clearInterval(g.type),g.newDiv&&(i(),g.newDiv.classList.add("white-space"),g.newDiv.innerHTML||(g.newDiv.innerHTML=" "));var n=document.createElement(t.elem||"div");return n.setAttribute("data-typer-child",g.dataNum),n.className=g.cursor,n.classList.add("typer"),n.classList.add("white-space"),e.appendChild(n),g.newDiv=n,1===t.line?(g.item++,u()):void s(t)}function d(e){clearInterval(g.type),s(e)}function v(e){clearInterval(g.type),g.pause=setTimeout(function(){g.item++,u()},e.pause)}function m(e){clearInterval(g.type),document.querySelector(e.el).dispatchEvent(new Event(e.emit)),g.item++,u()}function h(e){clearInterval(g.type);var t=document.querySelector(e.el);t.addEventListener(e.listen,function n(e){t.removeEventListener(e.type,n),g.killed||(g.item++,u())})}function f(e){function t(e){var n=[],r=Array.from(e.childNodes);return r.length?(r.forEach(function(e){e.childNodes.length?n=n.concat(t(e)):n.push(e)}),n):n}function n(e){Array.from(e.childNodes).forEach(function(e){g.voids.includes(e.nodeName)||(e.childNodes.length&&n(e),"#text"===e.nodeName||e.innerHTML.length||e.remove(),"#text"!==e.nodeName||e.length||e.remove())})}function r(e){var t=0;return Array.from(e.childNodes).forEach(function(e){g.voids.includes(e.nodeName)&&t++,e.childNodes.length&&(t+=r(e))}),t}if(clearInterval(g.type),!g.newDiv||!g.newDiv.textContent)return g.item++,u();if("empty"===e.back)return g.newDiv.innerHTML="",g.item++,u();var i=r(g.newDiv);if(e.back>g.newDiv.textContent.length+i&&(e.back="all"),"all"===e.back&&(e.back=g.newDiv.textContent.length+i),e.back<0){var o=g.newDiv.textContent.length+i;e.back=o-e.back*-1}var c=0,a=t(g.newDiv).reverse();g.goBack=setInterval(function(){var t=a[0],r=g.voids.includes(t.nodeName);r?(t.remove(),a.shift()):(t.textContent=t.textContent.slice(0,-1),t.length||a.shift()),c++,c===e.back&&(clearInterval(g.goBack),n(g.newDiv),g.item++,u())},e.speed)}function p(){g.newDiv="",e.innerHTML="",l({line:1})}function y(t){clearInterval(g.type),t.run(e),g.item++,u()}function b(){clearInterval(g.type),g.cb()}var g=[];"String"===r(e)&&(e=document.querySelector(e)),t=t>0?t:70,g.voids=["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"],g.classNames=["typer","cursor-block","cursor-soft","cursor-hard","no-cursor"],o();var N={cursor:function k(e){if(g.cursorRan)return console.warn('You can only call ".cursor" once.'),this;if(g.cursorRan=!0,void 0===e&&(e=!0),e===!1)return g.cursor="no-cursor",this;var t=e,n=t.color,r=t.blink,i=t.block,k=[],o='[data-typer="'+g.dataNum+'"]';return n&&c(o+" .typer::after","background-color:"+n),k.push("cursor-"+("hard"===r?"hard":"soft")),i===!0&&k.push("cursor-block"),g.cursor=k.join(" "),this},line:function(e,t,r){var i=arguments[arguments.length-1],o=e!==i&&"String"===n(i)&&i;return o=g.voids.includes(o)&&o,g.push(e?a("line",e,t,r,o):{line:1}),g.typing||(g.typing=!0,u()),this},"continue":function(e,t,n){return e?(g.push(a("continue",e,t,n)),this):this},pause:function(e){return g.push({pause:e||500}),this},emit:function(e,t){return t||(t=document.body),"String"===r(t)&&(t=document.querySelector(t)),g.push({emit:e,el:t}),this},listen:function(e,t){return t||(t=document.body),"String"===r(t)&&(t=document.querySelector(t)),g.push({listen:e,el:t}),this},back:function(e,n){return n=n>0?n:t,g.push({back:e||1,speed:n}),this},empty:function(){return g.push({empty:!0}),this},run:function(e){return g.push({run:e}),this},end:function(t,r){function o(){return console.warn('WARNING: you tried to call a method after ".end" has already been called.'),c}g.push({end:!0}),g.cb=function(){g.style&&g.style.remove(),i(),g.newDiv.classList.add("white-space"),g.newDiv="",t&&t instanceof Function&&t(e),(t&&"Boolean"===n(t)||r)&&(r instanceof Function&&r(e),document.body.dispatchEvent(new Event("typerFinished")))};var c={cursor:o,line:o,"continue":o,pause:o,emit:o,listen:o,back:o,empty:o,run:o,end:o};return c}};return g.kill=function(e){if(document.body.removeEventListener(e.type,g.kill),g.killed=!0,clearInterval(g.iterator),clearInterval(g.goBack),clearTimeout(g.pause),g.item===g.length)return console.log("This typer has completed. Listeners removed.");var t=g[g.item];if(t&&t.listen){var n=document.querySelector(t.el);n.dispatchEvent(new Event(t.listen))}},N}

jQuery(document).ready(function($) {
    setTimeout(function(){
      $('body').addClass('loaded');
    }, 3000);
    setTimeout(function(){
      typer('header .header-content h2')
        .line('Hi, ')
        .pause(500)
        .continue('we are Panda Develoopers')
        .back(5)
        .continue('pers!')
        .cursor({block: true, blink: 'soft', color: 'white'});
    }, 5000);

    $('input[type="submit"], input.btn, button').click(function() {
        $(this).blur();
    });
    $('[data-scroll]').click(function(event) {
        event.preventDefault();
        $('body').animate({
            scrollTop: ($($(this).data('scroll')).offset().top) + 'px'
        }, 500);
    });

    $('[data-toggle]').on('click', function() {
        $($(this).data('toggleXs')).slideToggle('medium');
    })

    $('img').each(function(index) {
      var alt = "panda-developer-team";
      if(!$(this).attr('alt')){
        $(this).attr('alt', alt + '_' + index);
      }
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 150) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
});



$(window).on('load resize', function() {

});
