(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"9tVr":function(e,t,n){e.exports={testDiv:"css-3qFxd",form:"css-QY6n6"}},B0mg:function(e,t,n){e.exports={sup:"css-3Jtiz",d:"css-1o5Cy",noted:"css-Nyajp"}},BPMa:function(e,t,n){e.exports={dragbar:"css-3xSTY"}},CNZd:function(e,t,n){e.exports={header:"css-G-H7T",navbar:"css-2cu9j",navbarGrow:"css-sOHx1",navbarBrand:"css-3__Qk",form:"css-2Cez1"}},DShB:function(e,t,n){e.exports={dropdown:"css-2cQyf",dropdownList:"css-1tmWc",dropdownListRight:"css-2X-wl",iconButton:"css-3AIfq"}},ECut:function(e,t,n){e.exports={p:"css-k-P1n",q:"css-2KJWD",qcol:"css-1HONz"}},H3zj:function(e,t,n){e.exports={article:"css-3ph2U",reader:"css-JUyX7",toolbarContainer:"css-2hVKo",toolbar:"css-1q3dd",windowButton:"css-HDosR"}},SN3w:function(e,t,n){e.exports={button:"css-lmpwR",primary:"css-1ZDek",secondary:"css-1SyN1"}},ecZp:function(e,t,n){e.exports={red:"css-3yktI",blue:"css-1mhF2",gray:"css-3rfGi",yellow:"css-2Tkur"}},kiQV:function(e){e.exports=JSON.parse('{"a":{"url":"https://github.com/thesmartwon/openbible/issues"}}')},lTtw:function(e,t,n){e.exports={sup:"css-1Kifr",textarea:"css-aYW0c",textareaContainer:"css-YTfSd",form:"css-2yWfL"}},pLYI:function(e,t,n){"use strict";n.r(t);var r=n("2mXy"),a=n("cua7"),o=n("tPiR"),s=n("CNZd"),c=n.n(s),i=n("kiQV");function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e){return Object(r.h)(o.Link,h({activeClassName:""},e))};function l(){return Object(r.h)("header",{class:c.a.header},Object(r.h)("nav",{class:c.a.navbarGrow},Object(r.h)("ul",{class:c.a.navbar},Object(r.h)("li",null,Object(r.h)("h1",null,Object(r.h)(u,{class:c.a.navbarBrand,href:"/"},"Open Bible"))))),Object(r.h)("div",{style:{display:"flex"}},Object(r.h)("ul",{class:c.a.navbar},Object(r.h)("li",null,Object(r.h)(u,{href:"/about"},"About")),Object(r.h)("li",null,Object(r.h)(u,{href:"/settings"},"Settings")),Object(r.h)("li",null,Object(r.h)("a",{target:"_blank",href:i.a.url},"Report an issue"))),Object(r.h)("form",{class:c.a.form},Object(r.h)("input",{placeholder:"Search"}))))}var p=n("FdF9");function d(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Array.prototype.slice.call(t).filter(Boolean).join(" ")}var f=n("SN3w"),b=n.n(f);var m=Object(p.a)((function(e,t){return Object(r.h)("button",{ref:t,class:d(b.a.button,b.a[e.variant||"primary"],e.class),onClick:e.onClick,style:e.style,tabIndex:0},e.children)})),v=n("DShB"),g=n.n(v);function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return j(O(t=e.call.apply(e,[this].concat(a))||this),"state",{isOpen:!1}),j(O(t),"buttonRef",Object(r.createRef)()),j(O(t),"buttonRef2",Object(r.createRef)()),j(O(t),"ulRef",Object(r.createRef)()),j(O(t),"close",(function(e){!e||e.target!==t.buttonRef.current&&e.target!==t.buttonRef2.current&&!t.ulRef.current.contains(e.target)?(t.setState({isOpen:!1}),document.removeEventListener("mousedown",t.close)):e.preventDefault()})),j(O(t),"toggleOpen",(function(e){var n=t.state.isOpen;n||document.addEventListener("mousedown",t.close),t.setState({isOpen:!n})})),j(O(t),"selectItem",(function(e,n){var r=t.props.onSelect;r&&r(e,n),t.close()})),t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this;return Object(r.h)("div",{class:g.a.dropdown},Object(r.h)(m,{variant:"secondary",ref:this.buttonRef,class:g.a.iconButton,style:this.props.style,onClick:this.props.onClick||this.toggleOpen},this.props.selected||"Choose item"),this.props.icon&&Object(r.h)(m,{variant:"secondary",ref:this.buttonRef2,class:g.a.iconButton,onClick:this.toggleOpen},this.props.icon),this.state.isOpen&&Object(r.h)("ul",{ref:this.ulRef,class:d(g.a.dropdownList,this.props.isRight&&g.a.dropdownListRight)},Object(r.toChildArray)(this.props.children).map((function(t,n){return Object(r.h)("li",{onClick:function(t){return e.selectItem(n,t)}},t)}))))},a}(r.Component);var S={};var C={GEN:{name:"Genesis",chapters:50},EXO:{name:"Exodus",chapters:40},LEV:{name:"Leviticus",chapters:27},NUM:{name:"Numbers",chapters:36},DEU:{name:"Deuteronomy",chapters:34},JOS:{name:"Joshua",chapters:24},JDG:{name:"Judges",chapters:21},RUT:{name:"Ruth",chapters:4},"1SA":{name:"1 Samuel",chapters:31},"2SA":{name:"2 Samuel",chapters:24},"1KI":{name:"1 Kings",chapters:22},"2KI":{name:"2 Kings",chapters:25},"1CH":{name:"1 Chronicles",chapters:29},"2CH":{name:"2 Chronicles",chapters:36},EZR:{name:"Ezra",chapters:10},NEH:{name:"Nehamiah",chapters:13},EST:{name:"Esther",chapters:10},JOB:{name:"Job",chapters:42},PSA:{name:"Psalm",chapters:150},PRO:{name:"Proverbs",chapters:31},ECC:{name:"Ecclessiates",chapters:12},SNG:{name:"Song of Solomon",chapters:8},ISA:{name:"Isiah",chapters:66},JER:{name:"Jeremiah",chapters:52},LAM:{name:"Lamentations",chapters:5},EZK:{name:"Ezekiel",chapters:48},DAN:{name:"Daniel",chapters:12},HOS:{name:"Hosea",chapters:14},JOL:{name:"Joel",chapters:3},AMO:{name:"Amos",chapters:9},OBA:{name:"Obadiah",chapters:1},JON:{name:"Jonah",chapters:4},MIC:{name:"Micah",chapters:7},NAM:{name:"Nahum",chapters:3},HAB:{name:"Habakkuk",chapters:3},ZEP:{name:"Zephaniah",chapters:3},HAG:{name:"Haggai",chapters:2},ZEC:{name:"Zechariah",chapters:14},MAL:{name:"Malachi",chapters:4},MAT:{name:"Matthew",chapters:28},MRK:{name:"Mark",chapters:16},LUK:{name:"Luke",chapters:24},JHN:{name:"John",chapters:21},ACT:{name:"Acts",chapters:28},ROM:{name:"Romans",chapters:16},"1CO":{name:"1 Corinthians",chapters:16},"2CO":{name:"2 Corinthians",chapters:13},GAL:{name:"Galatians",chapters:6},EPH:{name:"Ephesians",chapters:6},PHP:{name:"Philippians",chapters:4},COL:{name:"Colossians",chapters:4},"1TH":{name:"1 Thessalonians",chapters:5},"2TH":{name:"2 Thessalonians",chapters:3},"1TI":{name:"1 Timothy",chapters:6},"2TI":{name:"2 Timothy",chapters:4},TIT:{name:"Titus",chapters:3},PHM:{name:"Philemon",chapters:1},HEB:{name:"Hebrews",chapters:13},JAS:{name:"James",chapters:5},"1PE":{name:"1 Peter",chapters:5},"2PE":{name:"2 Peter",chapters:3},"1JN":{name:"1 John",chapters:5},"2JN":{name:"2 John",chapters:1},"3JN":{name:"3 John",chapters:1},JUD:{name:"Jude",chapters:1},REV:{name:"Revelation",chapters:22}},w={en_ult:"unfoldingWord® Literal Text",en_ust:"unfoldingWord® Simplified Text"};function N(e,t){return"highlight-"+e+"-"+t}function R(e,t){var n=N(e,t);return JSON.parse(localStorage.getItem(n))||{}}function x(e){return localStorage.getItem("setting-"+e)}var I=[],k=["SPAN","U"],A={BODY:["color","background-color","font-family","font-size"],P:["padding-left","margin","text-indent"],SPAN:["color","background-color","text-decoration"]};function P(e,t){for(var n,r=document.createNodeIterator(e.commonAncestorContainer),a=!1;n=r.nextNode();){if(a||n!==e.startContainer){if(!a||!n)continue}else a=!0;if(t(n),n===e.endContainer)break}}function E(e){var t=getComputedStyle(e);return(A[e.nodeName]||[]).filter((function(e){return t[e]})).map((function(e){return e+": "+t[e].replace(/"/g,"")+";"})).join(" ")}function M(){var e=window.getSelection();if(e&&0!==e.rangeCount){var t=e.getRangeAt(0);if(t.startContainer!==t.endContainer||t.startOffset!==t.endOffset)return t}}function J(){var e=M();e&&(!function(e){e.setStart(e.startContainer,0);var t=e.endContainer.length;t&&e.setEnd(e.endContainer,t)}(e),I.length=0,P(e,(function(e){"#text"===e.nodeName&&I.push(e.parentNode)})))}function _(e){console.log("TODO: select verse",e),e.preventDefault()}function H(e){var t=M();if(t&&"default"!==x("selectVerseNums")){var n="",r='<html>\n<head>\n\t<meta http-equiv="content-type" content="text/html; charset=utf-8">\n</head>\n<body style="'+E(document.body)+'">\n\t<meta charset="utf-8">',a=!1;P(t,(function(e){var t=e.parentNode;if("#text"===e.nodeName&&k.includes(t.nodeName)){n+=e.textContent,a||(r+='<p style="'+E(t.parentNode)+'">',a=!0);var o=t.nodeName.toLowerCase();r+="<"+o+' style="'+E(t)+'">'+e.textContent+"</"+o+">"}else"P"===e.nodeName?(n+="\n",r+='</p><p style="'+E(e)+'">'):"SUP"===e.nodeName&&(n+=" ",r+=" ")})),r+="</p></body></html>",e.clipboardData.setData("text/html",r),e.clipboardData.setData("text/plain",n),e.preventDefault()}}var L=Object(r.createContext)({onNoteSubmit:function(e){},onNoteRemove:function(e){}}),D=n("B0mg"),T=n.n(D),B=n("ecZp"),V=n.n(B),F=n("lTtw"),z=n.n(F),W=function(e){e.styles;var t=Object.assign({},e);return delete t.styles,Object(r.h)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},t),["\n  ",Object(r.h)("path",{d:"M402.6 83.2l90.2\n    90.2c3.8 3.8 3.8\n    10 0 13.8L274.4\n    405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8\n    83.2c3.8-3.8 10-3.8 13.8\n    0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8\n    3.8-3.8 10 0\n    13.8l90.2 90.2c3.8 3.8\n    10 3.8 13.8\n    0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2\n    0 6.2-1.3 8.5-3.5l40-40c7.6-7.6\n    2.2-20.5-8.5-20.5H48C21.5 64 0\n    85.5 0 112v352c0\n    26.5 21.5 48\n    48 48h352c26.5 0\n    48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2\n    2.3-3.5 5.3-3.5 8.5z"},[]),"\n"])};function G(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var K,Z=function(e){var t,n;function a(t){var n;return U(G(n=e.call(this,t)||this),"note",void 0),U(G(n),"textAreaRef",Object(r.createRef)()),U(G(n),"onSubmit",(function(e,t){e.preventDefault(),t(n.note),n.setState({isFormOpen:!1,isNoteOpen:!0})})),U(G(n),"onInput",(function(e){n.note.note=e.target.value})),U(G(n),"onOpenForm",(function(e){n.textAreaRef.current&&n.textAreaRef.current.focus(),n.setState({isFormOpen:!n.state.isFormOpen,isNoteOpen:!1})})),U(G(n),"toggleNoteOpen",(function(e){n.state.isFormOpen?n.setState({isFormOpen:!1}):n.setState({isNoteOpen:!n.state.isNoteOpen})})),n.note=n.props.verse.note,n.state={isFormOpen:n.note.isFormOpen,isNoteOpen:!1},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.componentDidMount=function(){this.note.isFormOpen&&this.textAreaRef.current&&this.textAreaRef.current.focus()},o.render=function(){var e=this,t=a.id++;return Object(r.h)(r.Fragment,null,Object(r.h)("sup",{class:z.a.sup,onClick:this.toggleNoteOpen},"N"),this.state.isFormOpen&&Object(r.h)(L.Consumer,null,(function(n){var a=n.onNoteSubmit,o=n.onNoteRemove;return Object(r.h)("form",{id:"versenote-"+t,onSubmit:function(t){return e.onSubmit(t,a)},onReset:function(t){return o(e.note)},class:z.a.form},Object(r.h)("div",{class:z.a.textareaContainer},Object(r.h)("textarea",{form:"versenote-"+t,name:"note",class:z.a.textarea,onInput:e.onInput,value:e.note.note,placeholder:"Add note",ref:e.textAreaRef})),Object(r.h)("input",{type:"reset",value:"Remove"}),Object(r.h)("input",{type:"submit",value:"Submit"}))})),this.state.isNoteOpen&&Object(r.h)("div",null,this.note.note,Object(r.h)("sup",{class:z.a.sup,onClick:this.onOpenForm}," ",Object(r.h)(W,{width:"12px"}))))},a}(r.Component);U(Z,"id",0);var X=/['"“‘\[\(\-]/,Y=/['".”’,?!:;\]\)\-]/,q=["s","th"];function Q(e){var t=e.verse,n=t.highlight&&V.a[t.highlight],a="w"===t.t||"t"===t.t;K&&(K.n||X.test(K.v)||Y.test(t.v)||q.includes(t.v))&&(a=!1);var o=Object(r.h)(r.Fragment,null,a&&Object(r.h)("span",{class:d(K&&K.highlight&&n,K&&K.noted&&t.noted&&T.a.noted)}," "),t.n&&Object(r.h)("sup",{onDblClick:_,class:d(T.a.sup,n)},t.n),t.v&&Object(r.h)("span",{"data-id":t.id,class:d(T.a[t.t],n,t.noted&&T.a.noted)},t.v),t.note&&Object(r.h)(Z,{verse:t}));return K=t,o}var $=n("ECut"),ee=n.n($);function te(e){return"q"===e.t&&"v"===e.v[0].t?ee.a.qcol:ee.a[e.t]}function ne(e){var t=e.paragraph;return Object(r.h)(r.Fragment,null,Array.isArray(t.v)?Object(r.h)("p",{"data-id":t.id,class:te(t)},Object(r.h)(re,{paragraphs:t.v})):Object(r.h)(Q,{verse:t}))}function re(e){return e.paragraphs?Object(r.h)(r.Fragment,null,e.paragraphs.map((function(e){return Object(r.h)(ne,{paragraph:e})}))):Object(r.h)("div",null,"Loading")}function ae(e,t){return"note-"+e+"-"+t}function oe(e,t){var n=ae(e,t);return JSON.parse(localStorage.getItem(n))||{}}var se=function(e){e.styles;var t=Object.assign({},e);return delete t.styles,Object(r.h)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 544 512"},t),["\n  ",Object(r.h)("path",{d:"M0 479.98L99.92\n      512l35.45-35.45-67.04-67.04L0\n      479.98zm124.61-240.01a36.592\n      36.592 0 0\n      0-10.79 38.1l13.05 42.83-50.93\n      50.94 96.23 96.23\n      50.86-50.86 42.74 13.08c13.73\n      4.2 28.65-.01 38.15-10.78l35.55-41.64-173.34-173.34-41.52\n      35.44zm403.31-160.7l-63.2-63.2c-20.49-20.49-53.38-21.52-75.12-2.35L190.55\n      183.68l169.77 169.78L530.27 154.4c19.18-21.74\n      18.15-54.63-2.35-75.13z"},[]),"\n"])},ce=function(e){e.styles;var t=Object.assign({},e);return delete t.styles,Object(r.h)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t),["\n  ",Object(r.h)("path",{fill:"none",d:"M0 0h24v24H0V0z"},[]),"\n  ",Object(r.h)("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM17 11h-4v4h-2v-4H7V9h4V5h2v4h4v2z"},[]),"\n"])},ie=n("H3zj"),he=n.n(ie);function ue(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var pe=["red","blue","gray","yellow"],de=function(e){var t,n;n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=o.prototype;function o(t){var n;return le(ue(n=e.call(this,t)||this),"state",{paragraphs:[],selectedColor:pe[0]}),le(ue(n),"divRef",Object(r.createRef)()),le(ue(n),"onBookChange",(function(e){var t=e.target.value,r=n.props.chapter;r>C[t].chapters&&(r=C[t].chapters),n.onNavChange(n.props.text,t,r)})),le(ue(n),"onChapterChange",(function(e){n.onNavChange(n.props.text,n.props.book,e.target.value)})),le(ue(n),"onTextChange",(function(e){n.onNavChange(e.target.value,n.props.book,n.props.chapter)})),le(ue(n),"getSelectedNodes",(function(){if(M()){var e=I.filter((function(e){return n.divRef.current.contains(e)})),t=e.map((function(e){return e.getAttribute("data-id")})).filter(Boolean);return{containedNodes:e,fromId:t[0],toId:t[t.length-1]}}})),le(ue(n),"onHighlight",(function(e){var t=n.getSelectedNodes();if(t){var r=n.state.paragraphs;if(t.fromId&&t.toId){var a=+t.fromId,o=+t.toId;n.visitParagraphs(r,(function(t){t.id>=a&&t.id<=o&&(t.highlight=e)})),n.setState({paragraphs:r}),function(e,t,n,r,a){var o=N(e,t),s=R(e,t)||{};s[n]={toId:r,color:a},localStorage.setItem(o,JSON.stringify(s))}(n.props.book,n.props.chapter,t.fromId,t.toId,e);var s=document.getSelection();s&&s.removeAllRanges()}}})),le(ue(n),"onNoteAdd",(function(){var e=n.getSelectedNodes();if(e){var t=n.state.paragraphs;if(e.fromId&&e.toId){var r=+e.fromId,a=+e.toId;n.visitParagraphs(t,(function(t){t.id>=r&&t.id<=a&&(t.noted=e.fromId),t.id===a&&(t.note={fromId:r,toId:a,note:"",isFormOpen:!0})})),n.setState({paragraphs:t});var o=document.getSelection();o&&o.removeAllRanges()}}})),le(ue(n),"onNoteSubmit",(function(e){!function(e,t,n,r,a){var o=ae(e,t),s=oe(e,t)||{};s[n]={toId:r,note:a},localStorage.setItem(o,JSON.stringify(s))}(n.props.book,n.props.chapter,e.fromId+"",e.toId+"",e.note),n.setState({paragraphs:n.state.paragraphs})})),le(ue(n),"onNoteRemove",(function(e){var t=+e.fromId,r=+e.toId,a=n.state.paragraphs;n.visitParagraphs(a,(function(e){e.id>=t&&e.id<=r&&delete e.noted,e.id===r&&delete e.note})),n.setState({paragraphs:a})})),n.fetchChapter(t.text,t.book,t.chapter).then((function(e){var t,r,a=R(n.props.book,n.props.chapter),o=oe(n.props.book,n.props.chapter);n.visitParagraphs(e,(function(e){t||(t=a[e.id]),t&&(e.highlight=t.color,e.id>=+t.toId&&(t=void 0));var n=o[e.id];!r&&n&&(r={fromId:e.id,toId:+n.toId,note:n.note,isFormOpen:!1}),r&&(e.noted=e.id+"",e.id>=r.toId&&(e.note=r,r=void 0))})),n.setState({paragraphs:e})})),n}return a.visit=function(e,t){var n=this;t(e),Array.isArray(e.v)&&e.v.forEach((function(e){return n.visit(e,t)}))},a.visitParagraphs=function(e,t){var n=this;e&&e.forEach((function(e){return n.visit(e,t)}))},a.fetchChapter=function(e,t,n){var r=this;return function(e,t,n){var r=function(e,t,n){return"./static/"+e+"/"+t+"-"+(n+"").padStart(2,"0")+".json"}(e,t,n);return S[r]?new Promise((function(e){return e(S[r])})):new Promise((function(e,t){fetch(r).then((function(e){return e.json()})).then((function(t){e(t),S[r]=t})).catch(t)}))}(e,t,n).then((function(e){return r.setState({paragraphs:e}),r.divRef.current.scrollTop=0,e}))},a.onNavChange=function(e,t,n){this.fetchChapter(e,t,n),this.props.onNavChange&&this.props.onNavChange(e,t,n)},a.render=function(){var e=this,t=this.state.selectedColor,n=this.props.style||{};return Object(r.h)("article",{class:he.a.article,style:n},Object(r.h)("div",{class:he.a.toolbarContainer},Object(r.h)("nav",null,Object(r.h)("select",{name:"book",value:this.props.book,onChange:this.onBookChange},Object.entries(C).map((function(e){var t=e[0],n=e[1];return Object(r.h)("option",{value:t,key:t},n.name)}))),Object(r.h)("select",{name:"chapter",value:this.props.chapter,onChange:this.onChapterChange},Array.apply(null,Array(C[this.props.book].chapters)).map((function(e,t){return Object(r.h)("option",{value:t+1,key:t},t+1)}))),Object(r.h)("select",{name:"text",value:this.props.text,onChange:this.onTextChange},Object.entries(w).map((function(e){var t=e[0];e[1];return Object(r.h)("option",{value:t,key:t},t)})))),Object(r.h)("div",{class:he.a.toolbar},Object(r.h)(m,{variant:"secondary",onClick:this.onNoteAdd},Object(r.h)(ce,{height:"12px",style:"fill: #5f6368;"})),Object(r.h)(y,{isRight:!0,icon:"▼",selected:Object(r.h)(se,{height:"12px",style:"fill: #5f6368;"}),onSelect:function(t){e.setState({selectedColor:pe[t]}),e.onHighlight(pe[t])},onClick:function(){return e.onHighlight(t)},style:{borderBottom:"4px solid "+this.state.selectedColor}},pe.map((function(e){return Object(r.h)(se,{value:e,height:"12px",style:"fill: "+e+";"})})))),Object(r.h)("div",null,Object(r.h)(m,{variant:"secondary",onClick:this.props.onAddReader,class:he.a.windowButton},"+"),Object(r.h)(m,{variant:"secondary",onClick:this.props.onCloseReader,class:he.a.windowButton},"x"))),Object(r.h)("div",{ref:this.divRef,onMouseUp:J,onKeyUp:J,class:he.a.reader,onCopy:H,tabIndex:0},Object(r.h)(L.Provider,{value:{onNoteSubmit:this.onNoteSubmit,onNoteRemove:this.onNoteRemove}},Object(r.h)(re,{paragraphs:this.state.paragraphs}))))},o}(r.Component);le(de,"defaultProps",{book:C.GEN,chapter:1,text:Object.keys(w)[0]});var fe=n("BPMa"),be=n.n(fe);function me(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ve(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ge=function(e){var t,n;function a(t){var n;ve(me(n=e.call(this,t)||this),"state",{readers:[{text:"en_ult",book:"LUK",chapter:4,width:50},{text:"en_ult",book:"PSA",chapter:119,width:50}]}),ve(me(n),"preMoveMouseWidths",[]),ve(me(n),"initialPageX",0),ve(me(n),"onMouseMove",(function(e,t){e.preventDefault();var r=(e.pageX-n.initialPageX)/window.innerWidth;n.state.readers.forEach((function(e,a){a===t?e.width=n.preMoveMouseWidths[a]+r:a===t+1&&(e.width=n.preMoveMouseWidths[a]-r)})),n.updateReaders()})),ve(me(n),"onAddReader",(function(e){var t=n.state.readers,r=Object.assign({},t[e]);t.splice(e,0,r),n.updateReaders()})),ve(me(n),"onCloseReader",(function(e){var t=n.state.readers,r=t[e].width;t.splice(e,1),t.forEach((function(e){return e.width+=r/t.length})),n.updateReaders()})),ve(me(n),"onReaderChange",(function(e,t,r,a){e.text=t,e.book=r,e.chapter=a,n.updateReaders()}));var r=JSON.parse(localStorage.getItem("readers"))||[];return r.length>0?n.state={readers:r}:n.state.readers.forEach((function(e){return e.width=1/n.state.readers.length})),n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.updateReaders=function(){var e=this.state.readers;!function(e){localStorage.setItem("readers",JSON.stringify(e))}(e),this.setState({readers:e})},o.mouseMoveHandler=function(e,t){var n=this;e.preventDefault(),this.initialPageX=e.pageX,this.preMoveMouseWidths=this.state.readers.map((function(e){return e.width}));var r=function(e){return n.onMouseMove(e,t)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",(function(e){return document.removeEventListener("mousemove",r)}))},o.render=function(){var e=this;return Object(r.h)(r.Fragment,null,this.state.readers.map((function(t,n){return Object(r.h)(r.Fragment,{key:n},Object(r.h)(de,{text:t.text,book:t.book,chapter:t.chapter,style:{width:100*t.width+"%"},onAddReader:function(){return e.onAddReader(n)},onCloseReader:function(){return e.onCloseReader(n)},onNavChange:function(n,r,a){return e.onReaderChange(t,n,r,a)}}),n!==e.state.readers.length-1&&Object(r.h)("div",{class:be.a.dragbar,onMouseDown:function(t){return e.mouseMoveHandler(t,n)}}))})))},a}(r.Component),Oe=function(e){return Object(r.h)(r.Fragment,null,Object(r.h)(l,null),Object(r.h)("main",null,Object(r.h)(ge,null)))},je=function(e){return Object(r.h)(r.Fragment,null,Object(r.h)(l,null),Object(r.h)("main",null,Object(r.h)("div",null,Object(r.h)("h2",null,"About"),Object(r.h)("p",null,"This is a site that (so far) renders the ",Object(r.h)("a",{href:"https://git.door43.org/unfoldingWord/en_ult"},"en_ult")," and ",Object(r.h)("a",{href:"https://git.door43.org/unfoldingWord/en_ust"},"en_ust")," translations."),Object(r.h)("p",null,"It does so by rendering the USFM markdown to JSON in ",Object(r.h)("a",{href:"https://github.com/thesmartwon/usfm2json"},"usfm2json")," to paragraphs, and then rendering those paragraphs to HTML following some rules for verse numbers, punctuation, highlights, and notes. Currently your highlights and notes are saved to your browser's local storage."),Object(r.h)("p",null,"It's written using ",Object(r.h)("a",{href:"https://preactjs.com/"},"Preact"),", ",Object(r.h)("a",{href:"https://babeljs.io/"},"Babel"),", and a lot of ",Object(r.h)("a",{href:"https://webpack.js.org/"},"Webpack")," sorcery. The few icons come from ",Object(r.h)("a",{href:"https://fontawesome.com/"},"FontAwesome"),"  or ",Object(r.h)("a",{href:"https://material.io/resources/icons/"},"Material Design.")),Object(r.h)("p",null,"The source code is available on ",Object(r.h)("a",{href:"https://github.com/thesmartwon/openbible"},"Github")," and it's deployed using ",Object(r.h)("a",{href:"https://pages.github.com/"},"Github Pages."),"  I welcome contributions, there's still a lot of work to be done!"))))},ye=["--primary-text-color","--primary-text-indent","--primary-theme-color","--primary-font-family"];var Se=n("9tVr"),Ce=n.n(Se);function we(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Re=function(e){var t,n;function a(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return Ne(we(t=e.call.apply(e,[this].concat(r))||this),"setCSSVar",(function(e,n){document.body.style.setProperty(e,n),t.state.cssVars[e]=n,function(e,t){localStorage.setItem("css-"+e,t)}(e,n)})),Ne(we(t),"onSubmit",(function(e){e.preventDefault(),console.log("save settings",t.state)})),Ne(we(t),"onReset",(function(e){e.preventDefault(),ye.forEach((function(e){var n=getComputedStyle(document.documentElement).getPropertyValue(e).trim();t.setCSSVar(e,n)})),t.setState(t.state)})),Ne(we(t),"onSettingInput",(function(e,n){var r;!function(e,t){localStorage.setItem("setting-"+e,t)}(e,n),t.setState(((r={})[e]=n,r))})),t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.componentWillMount=function(){var e=getComputedStyle(document.body),t=ye.reduce((function(t,n){return t[n]=e.getPropertyValue(n).trim(),t}),{});this.setState({cssVars:t,selectVerseNums:x("selectVerseNums")||"noSelect"})},o.onCSSVarInput=function(e,t){this.setCSSVar(e,t.target.value)},o.render=function(){var e=this;return Object(r.h)(r.Fragment,null,Object(r.h)(l,null),Object(r.h)("main",null,Object(r.h)("form",{class:Ce.a.form,onSubmit:this.onSubmit,onReset:this.onReset},Object(r.h)("h2",null,"CSS Variables"),Object.entries(this.state.cssVars).map((function(t){return Object(r.h)("p",{key:t[0]},Object(r.h)("label",null,t[0]),Object(r.h)("input",{type:t[0].includes("color")?"color":"",value:t[1],onInput:function(n){return e.onCSSVarInput(t[0],n)}}))})),Object(r.h)("h2",null,"Copy behavior"),Object(r.h)("p",null,Object(r.h)("label",null,"Snap selection to words"),"TODO: code no snapping but still snapping for highlighting"),Object(r.h)("p",null,Object(r.h)("label",null,"Verse number selection"),Object(r.h)("select",{value:this.state.selectVerseNums,onChange:function(t){return e.onSettingInput("selectVerseNums",t.target.value)}},Object(r.h)("option",{value:"noSelect"},"Don't select"),Object(r.h)("option",{value:"addSpace"},"Add space"),Object(r.h)("option",{value:"default"},"Browser default"))),Object(r.h)("input",{type:"reset",value:"Reset settings"}),Object(r.h)("input",{type:"submit",value:"Save settings"})),Object(r.h)("div",{class:he.a.reader+" "+Ce.a.testDiv},Object(r.h)(m,null,"Primary button"),Object(r.h)(m,{variant:"secondary"},"Secondary button"),Object(r.h)(y,null,Object(r.h)("div",null,"Item 1"),Object(r.h)("div",null,"Item 2"),Object(r.h)("div",null,"Item 3")),Object(r.h)(de,{book:"PSA",chapter:119}))))},a}(r.Component);n("pYmE");var xe=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=o.prototype;return s.componentWillMount=function(){var e;e=document.body,ye.forEach((function(t){e.style.setProperty(t,localStorage.getItem("css-"+t))}))},s.render=function(){return Object(r.h)(a.default,null,Object(r.h)(Oe,{path:"/"}),Object(r.h)(je,{path:"/about"}),Object(r.h)(Re,{path:"/settings"}))},o}(r.Component);Object(r.render)(Object(r.h)(xe,null),document.getElementById("root"))},pYmE:function(e,t,n){}},[["pLYI",1,2]]]);
//# sourceMappingURL=main.e3826de3.bundle.js.map