(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8yLC":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("Ji2X"),c=a("qhky"),l=a("JwsL"),o=a("rY4l"),m=a("IpnI"),s=a.n(m);t.a=function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,null),i.a.createElement(c.b,null,i.a.createElement("meta",{name:"description",content:s.a.siteDescription})),i.a.createElement(r.a,null,t),i.a.createElement(l.a,null))}},EYWl:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("qhky"),c=a("T/ZZ"),l=a.n(c),o=a("IpnI"),m=a.n(o);t.a=function(e){var t,a,n,c,o=e.postNode,s=e.postPath,d=e.postSEO;if(d){var p=o.frontmatter;t=p.title,a=p.description?p.description:o.excerpt,n=p.cover,c=l()(m.a.siteUrl,m.a.pathPrefix,s)}else t=m.a.siteTitle,a=m.a.siteDescription,n=m.a.siteLogo;n=l()(m.a.siteUrl,m.a.pathPrefix,n);var u=l()(m.a.siteUrl,m.a.pathPrefix),f=[{"@context":"http://schema.org","@type":"WebSite",url:u,name:t,alternateName:m.a.siteTitleAlt?m.a.siteTitleAlt:""}];return d&&f.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":c,name:t,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:u,name:t,alternateName:m.a.siteTitleAlt?m.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:n},description:a}),i.a.createElement(r.b,null,i.a.createElement("meta",{name:"description",content:a}),i.a.createElement("meta",{name:"image",content:n}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(f)),i.a.createElement("meta",{property:"og:url",content:d?c:u}),d?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:t}),i.a.createElement("meta",{property:"og:description",content:a}),i.a.createElement("meta",{property:"og:image",content:n}),i.a.createElement("meta",{property:"fb:app_id",content:m.a.siteFBAppID?m.a.siteFBAppID:""}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:m.a.userTwitter?m.a.userTwitter:""}),i.a.createElement("meta",{name:"twitter:title",content:t}),i.a.createElement("meta",{name:"twitter:description",content:a}),i.a.createElement("meta",{name:"twitter:image",content:n}))}},Ji2X:function(e,t,a){"use strict";var n=a("k1TG"),i=a("aXB2"),r=a("FqMR"),c=a("q1tI"),l=a("iuhU"),o=a("H2TA"),m=a("NqtD"),s=c.forwardRef((function(e,t){var a=e.classes,r=e.className,o=e.component,s=void 0===o?"div":o,d=e.disableGutters,p=void 0!==d&&d,u=e.fixed,f=void 0!==u&&u,g=e.maxWidth,h=void 0===g?"lg":g,x=Object(i.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return c.createElement(s,Object(n.a)({className:Object(l.a)(a.root,r,f&&a.fixed,p&&a.disableGutters,!1!==h&&a["maxWidth".concat(Object(m.a)(String(h)))]),ref:t},x))}));t.a=Object(o.a)((function(e){return{root:Object(r.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:n}),t}),{}),maxWidthXs:Object(r.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(r.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(r.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(r.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(r.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(s)},LZFG:function(e,t,a){e.exports={articleList:"PostsListing-module--article-list--3ReSK",articleBox:"PostsListing-module--article-box--3M6_I",right:"PostsListing-module--right--2MxCO",meta:"PostsListing-module--meta--3cFzL"}},NqtD:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("TrhM");function i(e){if("string"!=typeof e)throw new Error(Object(n.a)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},"T/ZZ":function(e,t,a){var n,i,r;r=function(){function e(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var a=e.shift();e[0]=a+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var i=e[n];if("string"!=typeof i)throw new TypeError("Url must be a string. Received "+i);""!==i&&(n>0&&(i=i.replace(/^[\/]+/,"")),i=n<e.length-1?i.replace(/[\/]+$/,""):i.replace(/[\/]+$/,"/"),t.push(i))}var r=t.join("/"),c=(r=r.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return r=c.shift()+(c.length>0?"?":"")+c.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=r():void 0===(i="function"==typeof(n=r)?n.call(t,a,t,e):n)||(e.exports=i)},XeFV:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI"),i=a.n(n),r=a("Wbzz"),c=a("9eSz"),l=a.n(c);a("IpnI");function o(){return i.a.createElement(r.StaticQuery,{query:"2679324283",render:function(e){return i.a.createElement("span",null,i.a.createElement(l.a,{fixed:e.image1.childImageSharp.fixed}),i.a.createElement(l.a,{fixed:e.image2.childImageSharp.fixed}))}})}},lPsB:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("Wbzz"),c=a("LZFG"),l=a.n(c);t.a=function(e){var t=e.postEdges,a=function(){var e=[];return t.forEach((function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,categories:t.node.frontmatter.categories,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})})),e}();return i.a.createElement("div",{className:l.a.articleList},a.map((function(e){return i.a.createElement(r.Link,{to:e.path,key:e.title},i.a.createElement("article",{className:l.a.articleBox},i.a.createElement("div",{className:l.a.right},i.a.createElement("h3",null,e.title),i.a.createElement("div",{className:l.a.meta},e.date," — ",i.a.createElement("span",null,e.categories.join(" / "))," ","— ",e.timeToRead," Min Read"," "),i.a.createElement("p",null,e.excerpt))))})))}},vx99:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return p}));var n=a("q1tI"),i=a.n(n),r=a("qhky"),c=a("8yLC"),l=a("lPsB"),o=a("EYWl"),m=a("IpnI"),s=a.n(m),d=(a("xOYN"),a("XeFV"));t.default=function(e){var t=e.data;return i.a.createElement(c.a,null,i.a.createElement("main",null,i.a.createElement(r.b,{title:s.a.siteTitle}),i.a.createElement(o.a,null),i.a.createElement("h1",null,"Troop News"),i.a.createElement("div",null,i.a.createElement(d.a,null)),i.a.createElement(l.a,{postEdges:t.allMarkdownRemark.edges})))};var p="1698679700"},xOYN:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("q1tI"),i=a.n(n),r=a("Wbzz"),c=a("9eSz"),l=a.n(c),o=a("OS56"),m=a.n(o),s=(a("S5Rk"),a("IpnI"),{autoplay:!0,adaptiveHeight:!0,dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesPerRow:2,Rows:2,slidesToScroll:1});function d(){return i.a.createElement(r.StaticQuery,{query:"710118334",render:function(e){return i.a.createElement("div",{height:"200px"},i.a.createElement(m.a,s,i.a.createElement(l.a,{fixed:e.image2.childImageSharp.fixed}),i.a.createElement(l.a,{fixed:e.image3.childImageSharp.fixed}),i.a.createElement(l.a,{fixed:e.image6.childImageSharp.fixed}),i.a.createElement(l.a,{fixed:e.image8.childImageSharp.fixed}),i.a.createElement(l.a,{fixed:e.image9.childImageSharp.fixed}),i.a.createElement(l.a,{fixed:e.image10.childImageSharp.fixed}),i.a.createElement(l.a,{fixed:e.image11.childImageSharp.fixed}),i.a.createElement(l.a,{fixed:e.image18.childImageSharp.fixed}),i.a.createElement(l.a,{fixed:e.image19.childImageSharp.fixed}),i.a.createElement(l.a,{fixed:e.image20.childImageSharp.fixed}),i.a.createElement(l.a,{fixed:e.image21.childImageSharp.fixed}),i.a.createElement(l.a,{fixed:e.image22.childImageSharp.fixed})))}})}}}]);
//# sourceMappingURL=component---src-pages-blog-js-36eacb9dc0b913fcbe19.js.map