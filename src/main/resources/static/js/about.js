(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"7E5O":function(t,e,a){"use strict";a.r(e),a.d(e,"__N_SSP",(function(){return g}));var n=a("q1tI"),o=a.n(n),i=a("ZVht"),r=a("zCbN"),u=a("yBbh"),c=a("RzQv"),l=o.a.createElement;function s(t){var e=Object(n.useContext)(c.a);return l(i.a,null,l(r.a,{title:e.columnSetting.nav_about,cover_url:e.columnSetting.nav_about_banner,imgKey:"nav_about_banner",titleKey:"nav_about",className:"mb0"}),l(u.a,{activeIndex:"0"}),l("div",{className:"xs-container"},l("div",{className:"render-mg","data-component":"refer","data-link":"/admin/homeAbout/orgIntroEdit","data-top":"20%"}),l("div",{className:"introduce-wrap article-content",dangerouslySetInnerHTML:{__html:t.orgIntroContent.value}})))}var m=a("kjtD"),d=o.a.createElement;function v(t){var e=Object(n.useContext)(c.a);return d(m.a,null,d(r.a,{title:e.columnSetting.nav_about,cover_url:e.columnSetting.nav_about_banner,className:"mb0"}),d(u.a,{activeIndex:"0",isMobile:!0}),d("div",{className:"container"},d("div",{className:"introduce-wrap article-content",dangerouslySetInnerHTML:{__html:t.orgIntroContent.value}})))}var b=a("jJuD"),_=o.a.createElement;var g=!0;e.default=function(t){var e="";if(t.userAgent)e=!!Object(b.getDevice)(t.userAgent);else try{e=!!Object(b.getDevice)(window.navigator.userAgent)}catch(n){}var a={wysiwyg:t.wysiwyg,columnSetting:t.columnSetting,isMobile:e};return _(c.a.Provider,{value:a},_(e?v:s,t))}},MfrZ:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return a("7E5O")}])},yBbh:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a("q1tI"),o=a.n(n),i=a("YFqc"),r=a.n(i),u=a("nOHt"),c=a("RzQv"),l=o.a.createElement;function s(t){var e=Object(n.useContext)(c.a),a=Object(u.useRouter)();Object(n.useEffect)((function(){Number(a.query.nav)>=5&&(document.querySelectorAll(".about-nav-list")[0].scrollLeft=document.querySelectorAll(".about-nav-list-item")[0].offsetWidth/2*Number(a.query.nav))}),[]);return l("div",{className:"about-nav-list"},[{id:0,title:"\u673a\u6784\u4ecb\u7ecd",url:"/about?nav=1",key:"about_orgintro_title"},{id:1,title:"\u7406\u4e8b\u4f1a",url:"/about/council?nav=2",key:"about_council_title"},{id:2,title:"\u521b\u59cb\u4f1a\u957f",url:"/about/president?nav=3",key:"about_president_title"},{id:3,title:"\u5171\u540c\u4f53",url:"/about/community?nav=4",key:"about_community_title"},{id:4,title:"\u4fe1\u606f\u516c\u5f00",url:"/about/information?nav=5",key:"about_info_title"},{id:5,title:"\u5de5\u4f5c\u673a\u4f1a",url:"/about/job?nav=6",key:"about_work_title"},{id:6,title:"\u8054\u7cfb\u6211\u4eec",url:"/about/concat?nav=7",key:"about_contactus_title"}].map((function(a,n){return l(r.a,{href:a.url,key:a.id},l("a",{className:t.activeIndex&&t.activeIndex==n?"about-nav-list-item active render-mg":"about-nav-list-item render-mg","data-component":"text","data-key":a.key},e.columnSetting[a.key]))})))}},zCbN:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a("q1tI"),o=a.n(n),i=a("jJuD"),r=a.n(i),u=a("iwlR"),c=a("RzQv"),l=o.a.createElement;function s(t){var e=Object(n.useContext)(c.a);return l("div",{className:t.className?t.className+" swiper-top-wrap has-mask":"swiper-top-wrap has-mask"},l("img",{src:r.a.imageProxy(t.cover_url,e.isMobile?"720x320":"1920x300"),alt:"",className:"render-mg","data-tips":"\u8bf7\u4e0a\u4f20\u5c3a\u5bf8\u4e3a 1920x300 \u50cf\u7d20\uff0c\u683c\u5f0f\u4e3ajpg\u3001jpeg\u3001png\uff0c\u5927\u5c0f\u4e0d\u8d85\u8fc75Mb\u7684\u56fe\u7247","data-component":"image","data-key":t.imgKey,"data-top":"10%","data-upload":"".concat(u.a,"/Upload/UploadImage?option=").concat(e.isMobile?"720x320":"1920x300")}),l("p",{className:"desc render-mg","data-component":"text","data-key":t.titleKey},t.title))}}},[["MfrZ",0,2,1,3,4]]]);