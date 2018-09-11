(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{72:function(e,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n,r=o(s(3)),t=function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,s):{};n.get||n.set?Object.defineProperty(a,s,n):a[s]=e[s]}return a.default=e,a}(s(0));o(s(2)),o(s(80));function o(e){return e&&e.__esModule?e:{default:e}}function i(e,a,s,r){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var t=e&&e.defaultProps,o=arguments.length-3;if(a||0===o||(a={children:void 0}),a&&t)for(var i in t)void 0===a[i]&&(a[i]=t[i]);else a||(a=t||{});if(1===o)a.children=r;else if(o>1){for(var l=new Array(o),d=0;d<o;d++)l[d]=arguments[d+3];a.children=l}return{$$typeof:n,type:e,key:void 0===s?null:""+s,ref:null,props:a,_owner:null}}function l(e,a,s){return a in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s,e}function d(){return(d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e}).apply(this,arguments)}function c(e,a){if(null==e)return{};var s,n,r=function(e,a){if(null==e)return{};var s,n,r={},t=Object.keys(e);for(n=0;n<t.length;n++)s=t[n],a.indexOf(s)>=0||(r[s]=e[s]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)s=t[n],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}const p=e=>{let{to:a}=e,s=c(e,["to"]);return a.includes("http")?t.default.createElement("a",d({},e,{href:a})):("#"===a[0]&&(a=r.default.join("/Ignite/","pages/Plugins.html")+a),t.default.createElement("a",d({},s,{href:a,onClick:s=>{if(s.preventDefault(),"#"===e.to)return!1;const n=new URL(r.default.join(window.location.origin,a));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(n),null,a),e.onClick();const t=new CustomEvent("changeLocation",{detail:n});return dispatchEvent(t),!1}})))};p.defaultProps={href:"",onClick:()=>{}};const m=e=>{var a,s;return s=a=class extends t.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?t.default.createElement(e,this.props,this.props.children||null):null}},l(a,"defaultProps",{shouldLoad:!0}),s};m(()=>s.e(26).then(s.bind(null,59))),m(()=>s.e(26).then(s.bind(null,81)));var u=i("h1",{},void 0,"Plugins",i("span",{className:"tag is-info is-medium"},void 0,"useful information"),i("span",{className:"tag is-success is-medium"},void 0,"extension")),h=i("p",{},void 0,"A markdown-it plugin can be included in 2 ways. For both you must include a plugins options when running Ignite."),v=i("p",{},void 0,"It can either be the npm package name."),g=i("pre",{},void 0,i("code",{className:"language-json"},void 0,"{",i("br",{}),"  ",i("span",{className:"hljs-attr"},void 0,'"plugins"'),": [",i("span",{className:"hljs-string"},void 0,'"markdown-it-emoji"'),"]",i("br",{}),"}",i("br",{}))),b=i("p",{},void 0,"or a local plugin"),w=i("pre",{},void 0,i("code",{className:"language-js"},void 0,"{",i("br",{}),"  ",i("span",{className:"hljs-string"},void 0,'"plugins"'),": [",i("br",{}),"    ",i("span",{className:"hljs-built_in"},void 0,"require"),"(",i("span",{className:"hljs-string"},void 0,"'path/to/local/plugin'"),")",i("br",{}),"  ]",i("br",{}),"}",i("br",{}))),f=i("p",{},void 0,"This is our implementation of a font-awesome 5 plugin. It matches tags in the markdown the look like ",i("code",{},void 0,":far-flag:")," and replaces them with the html representation."),k=i("pre",{},void 0,i("code",{className:"language-js"},void 0,i("span",{className:"hljs-keyword"},void 0,"import")," makePlugin ",i("span",{className:"hljs-keyword"},void 0,"from")," ",i("span",{className:"hljs-string"},void 0,"'markdown-it-regexp'"),";",i("br",{}),i("br",{}),i("span",{className:"hljs-keyword"},void 0,"export")," ",i("span",{className:"hljs-keyword"},void 0,"default")," ",i("span",{className:"hljs-function"},void 0,i("span",{className:"hljs-keyword"},void 0,"function")," ",i("span",{className:"hljs-title"},void 0,"fontawesomePlugin"),"(",i("span",{className:"hljs-params"},void 0,"md"),") "),"{",i("br",{}),"  md.use(",i("br",{}),"    makePlugin(",i("span",{className:"hljs-regexp"},void 0,"/:[a-z]{2,}-[a-z]{2,}:/"),", match => {",i("br",{}),"      ",i("span",{className:"hljs-keyword"},void 0,"const")," [type, icon] = match[",i("span",{className:"hljs-number"},void 0,"0"),"].split(",i("span",{className:"hljs-string"},void 0,"':'"),")[",i("span",{className:"hljs-number"},void 0,"1"),"].split(",i("span",{className:"hljs-string"},void 0,"'-'"),");",i("br",{}),"      ",i("span",{className:"hljs-keyword"},void 0,"return")," `<i ",i("span",{className:"hljs-class"},void 0,i("span",{className:"hljs-keyword"},void 0,"class")),"=",i("span",{className:"hljs-string"},void 0,'"${type} fa-${icon}"'),">",i("span",{className:"xml"},void 0,i("span",{className:"hljs-tag"},void 0,"</",i("span",{className:"hljs-name"},void 0,"i"),">")),"`;",i("br",{}),"    })",i("br",{}),"  );",i("br",{}),"}",i("br",{}))),j=i("p",{},void 0,"The following is an partial es6 implementation of the 'markdown-it-regexp' used above. It shows how to hook into the markdown engine in a more complex manner."),N=i("pre",{},void 0,i("code",{className:"language-js"},void 0,i("span",{className:"hljs-class"},void 0,i("span",{className:"hljs-keyword"},void 0,"class")," ",i("span",{className:"hljs-title"},void 0,"Plugin")," "),"{",i("br",{}),"  ",i("span",{className:"hljs-keyword"},void 0,"constructor"),"(regexp, replacer) {",i("br",{}),"    ",i("span",{className:"hljs-keyword"},void 0,"this"),".regexp = regexp;",i("br",{}),"    ",i("span",{className:"hljs-keyword"},void 0,"this"),".replacer = replacer;",i("br",{}),i("br",{}),"    ",i("span",{className:"hljs-keyword"},void 0,"this"),".id = ",i("span",{className:"hljs-string"},void 0,"'regexp-'")," + counter;",i("br",{}),"    counter++;",i("br",{}),"  }",i("br",{}),i("br",{}),"  init = ",i("span",{className:"hljs-function"},void 0,"(",i("span",{className:"hljs-params"},void 0,"md, options"),") =>")," {",i("br",{}),"    ",i("span",{className:"hljs-keyword"},void 0,"this"),".options = options;",i("br",{}),i("br",{}),"    md.inline.ruler.push(",i("span",{className:"hljs-keyword"},void 0,"this"),".id, ",i("span",{className:"hljs-keyword"},void 0,"this"),".parse);",i("br",{}),"    md.renderer.rules[",i("span",{className:"hljs-keyword"},void 0,"this"),".id] = ",i("span",{className:"hljs-keyword"},void 0,"this"),".render;",i("br",{}),"  };",i("br",{}),i("br",{}),"  parse = ",i("span",{className:"hljs-function"},void 0,"(",i("span",{className:"hljs-params"},void 0,"state, silent"),") =>")," {",i("br",{}),"    ",i("span",{className:"hljs-keyword"},void 0,"const")," match = ",i("span",{className:"hljs-keyword"},void 0,"this"),".regexp.exec(state.src);",i("br",{}),"    ",i("span",{className:"hljs-keyword"},void 0,"if")," (!match) ",i("span",{className:"hljs-keyword"},void 0,"return")," ",i("span",{className:"hljs-literal"},void 0,"false"),";",i("br",{}),i("br",{}),"    ",i("span",{className:"hljs-comment"},void 0,"// Valid match found, now we need to advance cursor"),i("br",{}),"    state.pos += match[",i("span",{className:"hljs-number"},void 0,"0"),"].length;",i("br",{}),i("br",{}),"    ",i("span",{className:"hljs-comment"},void 0,"// Don't insert any tokens in silent mode"),i("br",{}),"    ",i("span",{className:"hljs-keyword"},void 0,"if")," (silent) ",i("span",{className:"hljs-keyword"},void 0,"return")," ",i("span",{className:"hljs-literal"},void 0,"true"),";",i("br",{}),i("br",{}),"    ",i("span",{className:"hljs-keyword"},void 0,"const")," token = state.push(",i("span",{className:"hljs-keyword"},void 0,"this"),".id, ",i("span",{className:"hljs-string"},void 0,"''"),", ",i("span",{className:"hljs-number"},void 0,"0"),");",i("br",{}),"    token.meta = { match };",i("br",{}),i("br",{}),"    ",i("span",{className:"hljs-keyword"},void 0,"return")," ",i("span",{className:"hljs-literal"},void 0,"true"),";",i("br",{}),"  };",i("br",{}),i("br",{}),"  render = ",i("span",{className:"hljs-function"},void 0,"(",i("span",{className:"hljs-params"},void 0,"tokens, id"),") =>")," {",i("br",{}),"    ",i("span",{className:"hljs-keyword"},void 0,"return")," ",i("span",{className:"hljs-keyword"},void 0,"this"),".replacer(tokens[id].meta.match);",i("br",{}),"  };",i("br",{}),"}",i("br",{}))),y=i("hr",{});var P=e=>i("div",{className:e.className},void 0,i("section",{},void 0,u,i("h2",{id:"markdown-it-plugins"},void 0,"Markdown-it Plugins ",i(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#markdown-it-plugins","aria-hidden":"true"})),i("p",{},void 0,"Ignite supports all the plugins available on the underlying markdown parser. Markdown-It has a large collection of plugins already ",i(p,{currentPage:e.currentPage,target:"_blank",to:"https://www.npmjs.com/search?q=keywords:markdown-it-plugin",className:"external-link"},void 0,"available"),"."),i("h3",{id:"configuration"},void 0,"Configuration ",i(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#configuration","aria-hidden":"true"})),h,v,g,b,w,i("h4",{id:"plugin-example"},void 0,"Plugin Example ",i(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#plugin-example","aria-hidden":"true"})),f,k,j,N,y,i("h2",{id:"useful-plugins"},void 0,"Useful Plugins ",i(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#useful-plugins","aria-hidden":"true"})),i("ul",{},void 0,i("li",{},void 0,i(p,{currentPage:e.currentPage,target:"_blank",to:"https://www.npmjs.com/package/markdown-it-footnote",className:"external-link"},void 0,"markdown-it-footnote")," - Footnotes with anchors"),i("li",{},void 0,i(p,{currentPage:e.currentPage,target:"_blank",to:"https://www.npmjs.com/package/markdown-it-container",className:"external-link"},void 0,"markdown-it-container")," - Plugin for creating block-level custom containers (a good starting place for a plugin)"),i("li",{},void 0,i(p,{currentPage:e.currentPage,target:"_blank",to:"https://www.npmjs.com/package/markdown-it-abbr",className:"external-link"},void 0,"markdown-it-abbr")," - Abbreviation (<abbr>) tag plugin"),i("li",{},void 0,i(p,{currentPage:e.currentPage,target:"_blank",to:"https://www.npmjs.com/package/markdown-it-video",className:"external-link"},void 0,"markdown-it-video")," - markdown-it plugin for embedding hosted videos."),i("li",{},void 0,i(p,{currentPage:e.currentPage,target:"_blank",to:"https://www.npmjs.com/package/markdown-it-mentions",className:"external-link"},void 0,"markdown-it-mentions")," - Support Twitter like mentions"))));a.default=P,e.exports=a.default}}]);
//# sourceMappingURL=Plugins.js.map