(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"8yLC":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("Ji2X"),s=a("qhky"),o=a("JwsL"),c=a("rY4l"),l=a("IpnI"),d=a.n(l);t.a=function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null),i.a.createElement(s.b,null,i.a.createElement("meta",{name:"description",content:d.a.siteDescription})),i.a.createElement(r.a,null,t),i.a.createElement(o.a,null))}},Ji2X:function(e,t,a){"use strict";var n=a("k1TG"),i=a("aXB2"),r=a("FqMR"),s=a("q1tI"),o=a("iuhU"),c=a("H2TA"),l=a("NqtD"),d=s.forwardRef((function(e,t){var a=e.classes,r=e.className,c=e.component,d=void 0===c?"div":c,u=e.disableGutters,m=void 0!==u&&u,p=e.fixed,g=void 0!==p&&p,b=e.maxWidth,f=void 0===b?"lg":b,h=Object(i.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return s.createElement(d,Object(n.a)({className:Object(o.a)(a.root,r,g&&a.fixed,m&&a.disableGutters,!1!==f&&a["maxWidth".concat(Object(l.a)(String(f)))]),ref:t},h))}));t.a=Object(c.a)((function(e){return{root:Object(r.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:n}),t}),{}),maxWidthXs:Object(r.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(r.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(r.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(r.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(r.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(d)},LZFG:function(e,t,a){e.exports={articleList:"PostsListing-module--article-list--3ReSK",articleBox:"PostsListing-module--article-box--3M6_I",right:"PostsListing-module--right--2MxCO",meta:"PostsListing-module--meta--3cFzL"}},Mdw5:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return d}));var n=a("q1tI"),i=a.n(n),r=a("qhky"),s=a("8yLC"),o=a("lPsB"),c=a("IpnI"),l=a.n(c);t.default=function(e){var t=e.data,a=e.pageContext;return i.a.createElement(s.a,null,i.a.createElement("main",null,i.a.createElement(r.b,{title:' "'+a.category+'" - '+l.a.siteTitle}),i.a.createElement("h1",null,"Category:"," ",a.category),i.a.createElement(o.a,{postEdges:t.allMarkdownRemark.edges})))};var d="89373373"},NqtD:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("TrhM");function i(e){if("string"!=typeof e)throw new Error(Object(n.a)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},lPsB:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("Wbzz"),s=a("LZFG"),o=a.n(s);t.a=function(e){var t=e.postEdges,a=function(){var e=[];return t.forEach((function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,categories:t.node.frontmatter.categories,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})})),e}();return i.a.createElement("div",{className:o.a.articleList},a.map((function(e){return i.a.createElement(r.Link,{to:e.path,key:e.title},i.a.createElement("article",{className:o.a.articleBox},i.a.createElement("div",{className:o.a.right},i.a.createElement("h3",null,e.title),i.a.createElement("div",{className:o.a.meta},e.date," — ",i.a.createElement("span",null,e.categories.join(" / "))," ","— ",e.timeToRead," Min Read"," "),i.a.createElement("p",null,e.excerpt))))})))}}}]);
//# sourceMappingURL=component---src-templates-category-js-684c9f1564f6010b9d3b.js.map