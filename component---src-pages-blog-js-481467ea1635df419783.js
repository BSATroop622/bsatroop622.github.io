(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"8yLC":function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),r=a("Ji2X"),c=a("qhky"),l=a("JwsL"),s=a("rY4l"),o=a("IpnI"),m=a.n(o);t.a=function(e){var t=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,null),n.a.createElement(c.b,null,n.a.createElement("meta",{name:"description",content:m.a.siteDescription})),n.a.createElement(r.a,null,t),n.a.createElement(l.a,null))}},EYWl:function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),r=a("qhky"),c=a("T/ZZ"),l=a.n(c),s=a("IpnI"),o=a.n(s);t.a=function(e){var t,a,i,c,s=e.postNode,m=e.postPath,d=e.postSEO;if(d){var p=s.frontmatter;t=p.title,a=p.description?p.description:s.excerpt,i=p.cover,c=l()(o.a.siteUrl,o.a.pathPrefix,m)}else t=o.a.siteTitle,a=o.a.siteDescription,i=o.a.siteLogo;i=l()(o.a.siteUrl,o.a.pathPrefix,i);var u=l()(o.a.siteUrl,o.a.pathPrefix),f=[{"@context":"http://schema.org","@type":"WebSite",url:u,name:t,alternateName:o.a.siteTitleAlt?o.a.siteTitleAlt:""}];return d&&f.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":c,name:t,image:i}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:u,name:t,alternateName:o.a.siteTitleAlt?o.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:i},description:a}),n.a.createElement(r.b,null,n.a.createElement("meta",{name:"description",content:a}),n.a.createElement("meta",{name:"image",content:i}),n.a.createElement("script",{type:"application/ld+json"},JSON.stringify(f)),n.a.createElement("meta",{property:"og:url",content:d?c:u}),d?n.a.createElement("meta",{property:"og:type",content:"article"}):null,n.a.createElement("meta",{property:"og:title",content:t}),n.a.createElement("meta",{property:"og:description",content:a}),n.a.createElement("meta",{property:"og:image",content:i}),n.a.createElement("meta",{property:"fb:app_id",content:o.a.siteFBAppID?o.a.siteFBAppID:""}),n.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.a.createElement("meta",{name:"twitter:creator",content:o.a.userTwitter?o.a.userTwitter:""}),n.a.createElement("meta",{name:"twitter:title",content:t}),n.a.createElement("meta",{name:"twitter:description",content:a}),n.a.createElement("meta",{name:"twitter:image",content:i}))}},Ji2X:function(e,t,a){"use strict";var i=a("k1TG"),n=a("aXB2"),r=a("FqMR"),c=a("q1tI"),l=a("iuhU"),s=a("H2TA"),o=a("NqtD"),m=c.forwardRef((function(e,t){var a=e.classes,r=e.className,s=e.component,m=void 0===s?"div":s,d=e.disableGutters,p=void 0!==d&&d,u=e.fixed,f=void 0!==u&&u,g=e.maxWidth,h=void 0===g?"lg":g,x=Object(n.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return c.createElement(m,Object(i.a)({className:Object(l.a)(a.root,r,f&&a.fixed,p&&a.disableGutters,!1!==h&&a["maxWidth".concat(Object(o.a)(String(h)))]),ref:t},x))}));t.a=Object(s.a)((function(e){return{root:Object(r.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var i=e.breakpoints.values[a];return 0!==i&&(t[e.breakpoints.up(a)]={maxWidth:i}),t}),{}),maxWidthXs:Object(r.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(r.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(r.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(r.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(r.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(m)},LZFG:function(e,t,a){e.exports={articleList:"PostsListing-module--article-list--3ReSK",articleBox:"PostsListing-module--article-box--3M6_I",right:"PostsListing-module--right--2MxCO",meta:"PostsListing-module--meta--3cFzL"}},NqtD:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i=a("TrhM");function n(e){if("string"!=typeof e)throw new Error(Object(i.a)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},"T/ZZ":function(e,t,a){var i,n,r;r=function(){function e(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var a=e.shift();e[0]=a+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var i=0;i<e.length;i++){var n=e[i];if("string"!=typeof n)throw new TypeError("Url must be a string. Received "+n);""!==n&&(i>0&&(n=n.replace(/^[\/]+/,"")),n=i<e.length-1?n.replace(/[\/]+$/,""):n.replace(/[\/]+$/,"/"),t.push(n))}var r=t.join("/"),c=(r=r.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return r=c.shift()+(c.length>0?"?":"")+c.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=r():void 0===(n="function"==typeof(i=r)?i.call(t,a,t,e):i)||(e.exports=n)},lPsB:function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),r=a("Wbzz"),c=a("LZFG"),l=a.n(c);t.a=function(e){var t=e.postEdges,a=function(){var e=[];return t.forEach((function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,categories:t.node.frontmatter.categories,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})})),e}();return n.a.createElement("div",{className:l.a.articleList},a.map((function(e){return n.a.createElement(r.Link,{to:e.path,key:e.title},n.a.createElement("article",{className:l.a.articleBox},n.a.createElement("div",{className:l.a.right},n.a.createElement("h3",null,e.title),n.a.createElement("div",{className:l.a.meta},e.date," — ",n.a.createElement("span",null,e.categories.join(" / "))," ","— ",e.timeToRead," Min Read"," "),n.a.createElement("p",null,e.excerpt))))})))}},vx99:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return p}));var i=a("q1tI"),n=a.n(i),r=a("qhky"),c=a("8yLC"),l=a("lPsB"),s=a("EYWl"),o=a("IpnI"),m=a.n(o),d=a("xOYN");t.default=function(e){var t=e.data;return n.a.createElement(c.a,null,n.a.createElement("main",null,n.a.createElement(r.b,{title:m.a.siteTitle},n.a.createElement("link",{rel:"stylesheet",type:"text/css",charset:"UTF-8",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"}),n.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"})),n.a.createElement(s.a,null),n.a.createElement(d.a,null),n.a.createElement(l.a,{postEdges:t.allMarkdownRemark.edges})))};var p="1698679700"},xOYN:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var i=a("q1tI"),n=a.n(i),r=a("Wbzz"),c=a("9eSz"),l=a.n(c),s=a("OS56"),o=a.n(s),m=(a("S5Rk"),a("IpnI"),{autoplay:!0,adaptiveHeight:!0,dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesPerRow:2,Rows:2,slidesToScroll:1});function d(){return n.a.createElement(r.StaticQuery,{query:"710118334",render:function(e){return n.a.createElement("div",{height:"200px"},n.a.createElement(o.a,m,n.a.createElement(l.a,{fixed:e.image2.childImageSharp.fixed}),n.a.createElement(l.a,{fixed:e.image3.childImageSharp.fixed}),n.a.createElement(l.a,{fixed:e.image6.childImageSharp.fixed}),n.a.createElement(l.a,{fixed:e.image8.childImageSharp.fixed}),n.a.createElement(l.a,{fixed:e.image9.childImageSharp.fixed}),n.a.createElement(l.a,{fixed:e.image10.childImageSharp.fixed}),n.a.createElement(l.a,{fixed:e.image11.childImageSharp.fixed}),n.a.createElement(l.a,{fixed:e.image18.childImageSharp.fixed}),n.a.createElement(l.a,{fixed:e.image19.childImageSharp.fixed}),n.a.createElement(l.a,{fixed:e.image20.childImageSharp.fixed}),n.a.createElement(l.a,{fixed:e.image21.childImageSharp.fixed}),n.a.createElement(l.a,{fixed:e.image22.childImageSharp.fixed})))}})}}}]);
//# sourceMappingURL=component---src-pages-blog-js-481467ea1635df419783.js.map