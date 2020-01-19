(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "0Y1Z":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"table":"css-bWeIp","swatch":"css-18NVn"};

/***/ }),

/***/ "9tVr":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"testDiv":"css-3qFxd","form":"css-QY6n6"};

/***/ }),

/***/ "B0mg":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"sup":"css-3Jtiz","d":"css-1o5Cy","noted":"css-Nyajp"};

/***/ }),

/***/ "BKJr":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"toolbar":"css-Hw5M8","button":"css-XxCF7","tooltip":"css-39Fw0"};

/***/ }),

/***/ "CNZd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"header":"css-G-H7T","navbar":"css-2cu9j","navbarGrow":"css-sOHx1","navbarBrand":"css-3__Qk","form":"css-2Cez1"};

/***/ }),

/***/ "ECut":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"p":"css-k-P1n","q":"css-2KJWD","qcol":"css-1HONz"};

/***/ }),

/***/ "GD5M":
/***/ (function(module, exports) {

module.exports = {"--primary-text-color":"#3b4351","--primary-text-indent":"1rem","--primary-theme-color":"#0b8dc4","--primary-font-family":"-apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif","--secondary-font-family":"\"Sentinel A\", \"Sentinel B\", \"Gentium Plus\", \"Ezra\", Georgia, Times, serif","--reader-padding":"1rem"}

/***/ }),

/***/ "H3zj":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"article":"css-3ph2U","reader":"css-JUyX7","navContainer":"css-1FFzU","windowButton":"css-HDosR"};

/***/ }),

/***/ "kiQV":
/***/ (function(module) {

module.exports = JSON.parse("{\"a\":{\"url\":\"https://github.com/thesmartwon/openbible/issues\"}}");

/***/ }),

/***/ "lTtw":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"sup":"css-1Kifr","textarea":"css-aYW0c","textareaContainer":"css-YTfSd","note":"css-1IwTc","inMargin":"css-3GW0v"};

/***/ }),

/***/ "pLYI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/preact/dist/preact.module.js
var preact_module = __webpack_require__("2mXy");

// EXTERNAL MODULE: ./node_modules/preact/hooks/dist/hooks.module.js
var hooks_module = __webpack_require__("MOxe");

// EXTERNAL MODULE: ./node_modules/preact-router/dist/preact-router.es.js
var preact_router_es = __webpack_require__("cua7");

// EXTERNAL MODULE: ./node_modules/preact-router/match.js
var match = __webpack_require__("tPiR");

// EXTERNAL MODULE: ./src/components/nav/nav.css
var nav = __webpack_require__("CNZd");
var nav_default = /*#__PURE__*/__webpack_require__.n(nav);

// EXTERNAL MODULE: ./package.json
var package_0 = __webpack_require__("kiQV");

// CONCATENATED MODULE: ./src/components/nav/nav.tsx
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var nav_NavLink = function NavLink(props) {
  return Object(preact_module["h"])(match["Link"], _extends({
    activeClassName: ""
  }, props));
};

function Nav() {
  return Object(preact_module["h"])("header", {
    class: nav_default.a.header
  }, Object(preact_module["h"])("nav", {
    class: nav_default.a.navbarGrow
  }, Object(preact_module["h"])("ul", {
    class: nav_default.a.navbar
  }, Object(preact_module["h"])("li", null, Object(preact_module["h"])("h1", null, Object(preact_module["h"])(nav_NavLink, {
    class: nav_default.a.navbarBrand,
    href: "/"
  }, "Open Bible"))))), Object(preact_module["h"])("div", {
    style: {
      display: 'flex'
    }
  }, Object(preact_module["h"])("ul", {
    class: nav_default.a.navbar
  }, Object(preact_module["h"])("li", null, Object(preact_module["h"])(nav_NavLink, {
    href: "/about"
  }, "About")), Object(preact_module["h"])("li", null, Object(preact_module["h"])(nav_NavLink, {
    href: "/settings"
  }, "Settings")), Object(preact_module["h"])("li", null, Object(preact_module["h"])("a", {
    target: "_blank",
    href: package_0["a" /* bugs */].url
  }, "Report an issue"))), Object(preact_module["h"])("form", {
    class: nav_default.a.form
  }, Object(preact_module["h"])("input", {
    placeholder: "Search"
  }))));
}
// CONCATENATED MODULE: ./src/utils/books.ts
function getChapterPath(version, book, chapter) {
  return "./static/" + version + "/" + book + "-" + (chapter + '').padStart(2, '0') + ".json";
} // TODO: types

var cache = {};
function getChapter(version, book, chapter) {
  var path = getChapterPath(version, book, chapter);

  if (!cache[path]) {
    return new Promise(function (resolve, reject) {
      fetch(path).then(function (res) {
        return res.json();
      }).then(function (paragraphs) {
        resolve(paragraphs);
        cache[path] = paragraphs;
      }).catch(reject);
    });
  }

  return new Promise(function (resolve) {
    return resolve(cache[path]);
  });
}
var books = {
  'GEN': {
    name: 'Genesis',
    chapters: 50
  },
  'EXO': {
    name: 'Exodus',
    chapters: 40
  },
  'LEV': {
    name: 'Leviticus',
    chapters: 27
  },
  'NUM': {
    name: 'Numbers',
    chapters: 36
  },
  'DEU': {
    name: 'Deuteronomy',
    chapters: 34
  },
  'JOS': {
    name: 'Joshua',
    chapters: 24
  },
  'JDG': {
    name: 'Judges',
    chapters: 21
  },
  'RUT': {
    name: 'Ruth',
    chapters: 4
  },
  '1SA': {
    name: '1 Samuel',
    chapters: 31
  },
  '2SA': {
    name: '2 Samuel',
    chapters: 24
  },
  '1KI': {
    name: '1 Kings',
    chapters: 22
  },
  '2KI': {
    name: '2 Kings',
    chapters: 25
  },
  '1CH': {
    name: '1 Chronicles',
    chapters: 29
  },
  '2CH': {
    name: '2 Chronicles',
    chapters: 36
  },
  'EZR': {
    name: 'Ezra',
    chapters: 10
  },
  'NEH': {
    name: 'Nehamiah',
    chapters: 13
  },
  'EST': {
    name: 'Esther',
    chapters: 10
  },
  'JOB': {
    name: 'Job',
    chapters: 42
  },
  'PSA': {
    name: 'Psalm',
    chapters: 150
  },
  'PRO': {
    name: 'Proverbs',
    chapters: 31
  },
  'ECC': {
    name: 'Ecclessiates',
    chapters: 12
  },
  'SNG': {
    name: 'Song of Solomon',
    chapters: 8
  },
  'ISA': {
    name: 'Isiah',
    chapters: 66
  },
  'JER': {
    name: 'Jeremiah',
    chapters: 52
  },
  'LAM': {
    name: 'Lamentations',
    chapters: 5
  },
  'EZK': {
    name: 'Ezekiel',
    chapters: 48
  },
  'DAN': {
    name: 'Daniel',
    chapters: 12
  },
  'HOS': {
    name: 'Hosea',
    chapters: 14
  },
  'JOL': {
    name: 'Joel',
    chapters: 3
  },
  'AMO': {
    name: 'Amos',
    chapters: 9
  },
  'OBA': {
    name: 'Obadiah',
    chapters: 1
  },
  'JON': {
    name: 'Jonah',
    chapters: 4
  },
  'MIC': {
    name: 'Micah',
    chapters: 7
  },
  'NAM': {
    name: 'Nahum',
    chapters: 3
  },
  'HAB': {
    name: 'Habakkuk',
    chapters: 3
  },
  'ZEP': {
    name: 'Zephaniah',
    chapters: 3
  },
  'HAG': {
    name: 'Haggai',
    chapters: 2
  },
  'ZEC': {
    name: 'Zechariah',
    chapters: 14
  },
  'MAL': {
    name: 'Malachi',
    chapters: 4
  },
  'MAT': {
    name: 'Matthew',
    chapters: 28
  },
  'MRK': {
    name: 'Mark',
    chapters: 16
  },
  'LUK': {
    name: 'Luke',
    chapters: 24
  },
  'JHN': {
    name: 'John',
    chapters: 21
  },
  'ACT': {
    name: 'Acts',
    chapters: 28
  },
  'ROM': {
    name: 'Romans',
    chapters: 16
  },
  '1CO': {
    name: '1 Corinthians',
    chapters: 16
  },
  '2CO': {
    name: '2 Corinthians',
    chapters: 13
  },
  'GAL': {
    name: 'Galatians',
    chapters: 6
  },
  'EPH': {
    name: 'Ephesians',
    chapters: 6
  },
  'PHP': {
    name: 'Philippians',
    chapters: 4
  },
  'COL': {
    name: 'Colossians',
    chapters: 4
  },
  '1TH': {
    name: '1 Thessalonians',
    chapters: 5
  },
  '2TH': {
    name: '2 Thessalonians',
    chapters: 3
  },
  '1TI': {
    name: '1 Timothy',
    chapters: 6
  },
  '2TI': {
    name: '2 Timothy',
    chapters: 4
  },
  'TIT': {
    name: 'Titus',
    chapters: 3
  },
  'PHM': {
    name: 'Philemon',
    chapters: 1
  },
  'HEB': {
    name: 'Hebrews',
    chapters: 13
  },
  'JAS': {
    name: 'James',
    chapters: 5
  },
  '1PE': {
    name: '1 Peter',
    chapters: 5
  },
  '2PE': {
    name: '2 Peter',
    chapters: 3
  },
  '1JN': {
    name: '1 John',
    chapters: 5
  },
  '2JN': {
    name: '2 John',
    chapters: 1
  },
  '3JN': {
    name: '3 John',
    chapters: 1
  },
  'JUD': {
    name: 'Jude',
    chapters: 1
  },
  'REV': {
    name: 'Revelation',
    chapters: 22
  }
};
var texts = {
  'en_ult': 'unfoldingWord® Literal Text',
  'en_ust': 'unfoldingWord® Simplified Text'
};
// CONCATENATED MODULE: ./src/utils/classnames.ts
function classnames() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Array.prototype.slice.call(args).filter(Boolean).join(' ');
}
// CONCATENATED MODULE: ./src/utils/useLocalStorage.ts

function useLocalStorage(key, initialValue) {
  var _useState = Object(hooks_module["c" /* useState */])(function () {
    var item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  }),
      storedValue = _useState[0],
      setStoredValue = _useState[1];

  var setValue = function setValue(value) {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}
// CONCATENATED MODULE: ./src/utils/cssVars.ts
// TODO: use custom loader on ../app.css
var cssVars = ['--primary-text-color', '--primary-text-indent', '--primary-theme-color', '--primary-font-family'];
// CONCATENATED MODULE: ./src/utils/visitParagraph.ts
var visit = function visit(verse, visitor, parent) {
  visitor(verse, parent);

  if (Array.isArray(verse.v)) {
    verse.v.forEach(function (v) {
      return visit(v, visitor, verse);
    });
  }
};

var visitParagraphs = function visitParagraphs(paragraphs, visitor) {
  if (!paragraphs) {
    return;
  }

  paragraphs.forEach(function (p) {
    return visit(p, visitor);
  });
};
// CONCATENATED MODULE: ./src/utils/eventEmitter.ts
var events = {};
function subscribe(event, listener) {
  events[event] = events[event] || [];
  events[event].push(listener);
}
function unsubscribe(event, listener) {
  for (var i = 0; i < events[event].length; i++) {
    if (events[event][i] === listener) {
      events[event].splice(i, 1);
    }
  }
}
function emit(event) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var listeners = events[event] || [];
  listeners.forEach(function (listener) {
    return listener.apply(void 0, args);
  });
}
// CONCATENATED MODULE: ./src/utils/index.ts






// CONCATENATED MODULE: ./src/components/paragraphs/select.ts
var selectedNodes = [];
var copyableTags = ['SPAN', 'U'];
var copyStyles = {
  BODY: ['color', 'background-color', 'font-family', 'font-size'],
  P: ['padding-left', 'margin', 'text-indent'],
  SPAN: ['color', 'background-color', 'text-decoration']
};

function snapToWords(range) {
  range.setStart(range.startContainer, 0);
  var length = range.endContainer.length;

  if (length) {
    range.setEnd(range.endContainer, length);
  }
} // Select API doesn't yet allow selecting multiple ranges
// Just traverse selected Range and add a class to tags


function iterateOverRange(range, rangeFn) {
  var it = document.createNodeIterator(range.commonAncestorContainer);
  var hitFirstNode = false;
  var node;

  while (node = it.nextNode()) {
    if (!hitFirstNode && node === range.startContainer) {
      hitFirstNode = true;
    } else if (!hitFirstNode || !node) {
      continue;
    }

    rangeFn(node);

    if (node === range.endContainer) {
      break;
    }
  }
}

function getStyles(node) {
  var nodeStyles = getComputedStyle(node);
  return (copyStyles[node.nodeName] || []).filter(function (style) {
    return nodeStyles[style];
  }).map(function (style) {
    return style + ": " + nodeStyles[style].replace(/"/g, '') + ";";
  }).join(' ');
}

function getRange() {
  var selection = window.getSelection();

  if (!selection || selection.rangeCount === 0) {
    return undefined;
  }

  var range = selection.getRangeAt(0);

  if (range.startContainer === range.endContainer && range.startOffset === range.endOffset) {
    return undefined;
  }

  return range;
}
function onSelectChange() {
  var range = getRange();

  if (!range) {
    return;
  }

  snapToWords(range); // Unselect all previously selected nodes

  selectedNodes.length = 0;
  iterateOverRange(range, function (node) {
    if (node.nodeName === '#text') {
      selectedNodes.push(node.parentNode);
    }
  });
} // TODO

function onDoubleClickVerseNumber(ev) {
  console.log('TODO: select verse', ev);
  ev.preventDefault();
}
function select_onCopy(ev, config) {
  var range = getRange();

  if (!range || config.selectVerseNums === 'default') {
    return;
  }

  var toCopy = '';
  var toCopyHTML = "<html>\n<head>\n\t<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\">\n</head>\n<body style=\"" + getStyles(document.body) + "\">\n\t<meta charset=\"utf-8\">";
  var addedFirstPara = false;
  iterateOverRange(range, function (node) {
    var parentNode = node.parentNode;

    if (node.nodeName === '#text' && copyableTags.includes(parentNode.nodeName)) {
      toCopy += node.textContent;

      if (!addedFirstPara) {
        toCopyHTML += "<p style=\"" + getStyles(parentNode.parentNode) + "\">";
        addedFirstPara = true;
      }

      var tag = parentNode.nodeName.toLowerCase();
      toCopyHTML += "<" + tag + " style=\"" + getStyles(parentNode) + "\">" + node.textContent + "</" + tag + ">";
    } else if (node.nodeName === 'P') {
      toCopy += '\n';
      toCopyHTML += "</p><p style=\"" + getStyles(node) + "\">";
    } else if (node.nodeName === 'SUP') {
      toCopy += ' ';
      toCopyHTML += ' ';
    }
  });
  toCopyHTML += '</p></body></html>';
  ev.clipboardData.setData('text/html', toCopyHTML);
  ev.clipboardData.setData('text/plain', toCopy);
  ev.preventDefault();
}
// CONCATENATED MODULE: ./src/components/paragraphs/versenotecontext.tsx

var NoteContext = Object(preact_module["createContext"])({
  onNoteSubmit: function onNoteSubmit(_note) {},
  onNoteRemove: function onNoteRemove(_note) {}
});
// EXTERNAL MODULE: ./src/components/paragraphs/verse.css
var paragraphs_verse = __webpack_require__("B0mg");
var verse_default = /*#__PURE__*/__webpack_require__.n(paragraphs_verse);

// EXTERNAL MODULE: ./src/components/paragraphs/versenote.css
var versenote = __webpack_require__("lTtw");
var versenote_default = /*#__PURE__*/__webpack_require__.n(versenote);

// CONCATENATED MODULE: ./src/icons/md-edit.svg




/* harmony default export */ var md_edit = (function (props) {
    var styles = props.styles;
    var rest = Object.assign({}, props);
    delete rest.styles;

    return Object(preact_module["h"])('svg', Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24"}, rest), ["\n\t", Object(preact_module["h"])('path', {"fill":"none","d":"M0 0h24v24H0z"}, []), "\n\t", Object(preact_module["h"])('path', {"d":"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}, []), "\n"]);
});;

        
// EXTERNAL MODULE: ./src/components/paragraphs/paragraph.css
var paragraphs_paragraph = __webpack_require__("ECut");
var paragraph_default = /*#__PURE__*/__webpack_require__.n(paragraphs_paragraph);

// CONCATENATED MODULE: ./src/components/paragraphs/versenote.tsx








function VerseNote(props) {
  var textAreaRef = Object(hooks_module["b" /* useRef */])();
  var note = props.verse.note;

  var _useState = Object(hooks_module["c" /* useState */])(note.isFormOpen),
      isFormOpen = _useState[0],
      setFormOpen = _useState[1];

  var _useState2 = Object(hooks_module["c" /* useState */])(false),
      isNoteOpen = _useState2[0],
      setNoteOpen = _useState2[1];

  Object(hooks_module["a" /* useEffect */])(function () {
    if (note.isFormOpen && textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, []);

  var _onSubmit = function onSubmit(ev, onNoteSubmit) {
    ev.preventDefault();
    onNoteSubmit(note);
    setFormOpen(false);
    setNoteOpen(true);
  };

  var onInput = function onInput(ev) {
    note.note = ev.target.value;
  };

  var onOpenForm = function onOpenForm(_ev) {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }

    setFormOpen(function (isOpen) {
      return !isOpen;
    });
    setNoteOpen(false);
  };

  var toggleNoteOpen = function toggleNoteOpen(_ev) {
    if (!isFormOpen) {
      setNoteOpen(function (isOpen) {
        return !isOpen;
      });
    } else {
      setFormOpen(false);
    }
  };

  var marginClass = getParagraphClass(props.verse.parent) === paragraph_default.a.q ? versenote_default.a.inMargin : '';
  return Object(preact_module["h"])(preact_module["Fragment"], null, Object(preact_module["h"])("sup", {
    class: versenote_default.a.sup,
    onClick: toggleNoteOpen
  }, "N"), isFormOpen && Object(preact_module["h"])(NoteContext.Consumer, null, function (_ref) {
    var onNoteSubmit = _ref.onNoteSubmit,
        onNoteRemove = _ref.onNoteRemove;
    return Object(preact_module["h"])("form", {
      onSubmit: function onSubmit(ev) {
        return _onSubmit(ev, onNoteSubmit);
      },
      onReset: function onReset(_ev) {
        return onNoteRemove(note);
      },
      class: marginClass
    }, Object(preact_module["h"])("div", {
      class: versenote_default.a.textareaContainer
    }, Object(preact_module["h"])("textarea", {
      name: "note",
      class: versenote_default.a.textarea,
      onInput: onInput,
      value: note.note,
      placeholder: "Add note",
      ref: textAreaRef
    })), Object(preact_module["h"])("input", {
      type: "reset",
      value: "Remove"
    }), Object(preact_module["h"])("input", {
      type: "submit",
      value: "Submit"
    }));
  }), isNoteOpen && Object(preact_module["h"])("div", {
    class: classnames(versenote_default.a.note, marginClass)
  }, note.note, Object(preact_module["h"])("button", {
    class: versenote_default.a.sup,
    onClick: onOpenForm
  }, Object(preact_module["h"])(md_edit, {
    width: "12px"
  }))));
}
// CONCATENATED MODULE: ./src/components/paragraphs/verse.tsx





var lastVerse;
var startPunct = /['"“‘\[\(\-]/;
var endPunct = /['".”’,?!:;\]\)\-]/;
var suffixes = ['s', // Possesion like "Pharaoh’s"
'th' // Number like "480th year"
];

var isNoted = function isNoted(verse) {
  return Boolean(verse.noted) || verse.noted === 0;
};

function Verse(props) {
  var verse = props.verse;
  var style = verse.highlight ? {
    background: verse.highlight
  } : {};
  var prependSpace = verse.t === 'w' || verse.t === 't';

  if (lastVerse && (lastVerse.n || startPunct.test(lastVerse.v) || endPunct.test(verse.v) || suffixes.includes(verse.v))) {
    prependSpace = false;
  }

  var res = Object(preact_module["h"])(preact_module["Fragment"], null, prependSpace && Object(preact_module["h"])("span", {
    class: classnames(lastVerse && isNoted(lastVerse) && isNoted(verse) && verse_default.a.noted),
    style: style
  }, ' '), verse.n && Object(preact_module["h"])("sup", {
    onDblClick: onDoubleClickVerseNumber,
    class: classnames(verse_default.a.sup),
    style: style
  }, verse.n), verse.v && Object(preact_module["h"])("span", {
    "data-id": verse.id,
    class: classnames(verse_default.a[verse.t], isNoted(verse) && verse_default.a.noted),
    style: style
  }, verse.v), verse.note && Object(preact_module["h"])(VerseNote, {
    verse: verse
  }));
  lastVerse = verse;
  return res;
}
// CONCATENATED MODULE: ./src/components/paragraphs/paragraph.tsx




function getParagraphClass(paragraph) {
  if (!paragraph) {
    return '';
  } else if (paragraph.t === 'q' && paragraph.v[0].t === 'v') {
    return paragraph_default.a.qcol;
  }

  return paragraph_default.a[paragraph.t];
}
function Paragraph(props) {
  var paragraph = props.paragraph;

  if (Array.isArray(paragraph.v)) {
    var className = getParagraphClass(paragraph);
    return Object(preact_module["h"])("p", {
      "data-id": paragraph.id,
      class: className
    }, Object(preact_module["h"])(Paragraphs, {
      paragraphs: paragraph.v
    }));
  }

  return Object(preact_module["h"])(Verse, {
    verse: paragraph
  });
}
// CONCATENATED MODULE: ./src/components/paragraphs/paragraphs.tsx


function Paragraphs(props) {
  if (!props.paragraphs) {
    return Object(preact_module["h"])("div", null, "Loading");
  }

  return Object(preact_module["h"])(preact_module["Fragment"], null, props.paragraphs.map(function (p) {
    return Object(preact_module["h"])(Paragraph, {
      paragraph: p
    });
  }));
}
// EXTERNAL MODULE: ./src/components/reader/reader.css
var reader_reader = __webpack_require__("H3zj");
var reader_default = /*#__PURE__*/__webpack_require__.n(reader_reader);

// CONCATENATED MODULE: ./src/components/reader/reader.tsx







 // import { onAddNote } from '../../actions/onAddNote'

var clearSelection = function clearSelection() {
  var selection = document.getSelection();

  if (selection) {
    selection.removeAllRanges();
  }
};

function Reader(props) {
  if (props === void 0) {
    props = {
      book: books.GEN.name,
      chapter: 1,
      text: Object.keys(texts)[0]
    };
  }

  var _useState = Object(hooks_module["c" /* useState */])([]),
      paragraphs = _useState[0],
      setParagraphs = _useState[1];

  var _useLocalStorage = useLocalStorage("highlight1-" + props.book + "-" + props.chapter, {}),
      highlights = _useLocalStorage[0],
      setHighlights = _useLocalStorage[1];

  var _useLocalStorage2 = useLocalStorage("note1-" + props.book + "-" + props.chapter, {}),
      notes = _useLocalStorage2[0],
      setNotes = _useLocalStorage2[1];

  var _useLocalStorage3 = useLocalStorage('settings', defaultSettings),
      config = _useLocalStorage3[0];

  var divRef = Object(hooks_module["b" /* useRef */])();
  Object(hooks_module["a" /* useEffect */])(function () {
    getChapter(props.text, props.book, props.chapter).then(function (paragraphs) {
      var highlight;
      var note;
      visitParagraphs(paragraphs, function (verse, parent) {
        verse.parent = parent;

        if (!highlight) {
          highlight = highlights[verse.id];
        }

        if (highlight) {
          verse.highlight = highlight.color;

          if (verse.id >= highlight.toId) {
            highlight = undefined;
          }
        }

        var savedNote = notes[verse.id];

        if (!note && savedNote) {
          note = {
            fromId: verse.id,
            toId: savedNote.toId,
            note: savedNote.note,
            isFormOpen: false
          };
        }

        if (note) {
          verse.noted = verse.id;

          if (verse.id >= note.toId) {
            verse.note = note;
            note = undefined;
          }
        }
      });
      setParagraphs(paragraphs);
      subscribe('ADD_NOTE', function () {
        return onAddNote(paragraphs);
      });
      subscribe('ADD_HIGHLIGHT', function (color) {
        return onAddHighlight(paragraphs, color);
      });
    });
  }, []);

  var onNavChange = function onNavChange(text, book, chapter) {
    getChapter(text, book, chapter).then(function (paragraphs) {
      setParagraphs(paragraphs);

      if (divRef.current) {
        divRef.current.scrollTop = 0;
      }
    });

    if (props.onNavChange) {
      props.onNavChange(text, book, chapter);
    }
  };

  var onBookChange = function onBookChange(ev) {
    var book = ev.target.value;
    var chapter = props.chapter;
    if (chapter > books[book].chapters) chapter = books[book].chapters;
    onNavChange(props.text, book, chapter);
  };

  var onChapterChange = function onChapterChange(ev) {
    onNavChange(props.text, props.book, ev.target.value);
  };

  var onTextChange = function onTextChange(ev) {
    onNavChange(ev.target.value, props.book, props.chapter);
  };

  var getSelectedNodes = function getSelectedNodes() {
    if (!getRange()) {
      return;
    }

    var ids = selectedNodes.filter(function (node) {
      return divRef.current && divRef.current.contains(node);
    }).map(function (node) {
      return node.getAttribute('data-id');
    }).filter(Boolean);

    if (ids.length > 0) {
      return {
        fromId: +ids[0],
        toId: +ids[ids.length - 1]
      };
    }
  };

  var onAddNote = function onAddNote(paragraphs) {
    var selected = getSelectedNodes();

    if (selected && selected.fromId && selected.toId) {
      var fromId = selected.fromId;
      var toId = selected.toId;
      visitParagraphs(paragraphs, function (v) {
        if (v.id >= fromId && v.id <= toId) {
          v.noted = selected.fromId;
        }

        if (v.id === toId) {
          v.note = {
            fromId: fromId,
            toId: toId,
            note: '',
            isFormOpen: true
          };
        }
      });
      clearSelection();
      setParagraphs(Object.assign([], paragraphs));
    }
  };

  var onAddHighlight = function onAddHighlight(paragraphs, color) {
    var selected = getSelectedNodes();

    if (!selected) {
      return;
    }

    if (selected.fromId && selected.toId) {
      var fromId = selected.fromId;
      var toId = selected.toId;
      visitParagraphs(paragraphs, function (verse) {
        if (verse.id >= fromId && verse.id <= toId) {
          verse.highlight = color;
        }
      });
      clearSelection();
      highlights[fromId] = {
        toId: toId,
        color: color
      };
      setHighlights(Object.assign({}, highlights));
      setParagraphs(Object.assign([], paragraphs));
    }
  };

  var onNoteSubmit = function onNoteSubmit(note) {
    notes[note.fromId] = {
      toId: note.toId,
      note: note.note
    };
    setNotes(Object.assign({}, notes));
    setParagraphs(Object.assign([], paragraphs));
  };

  var onNoteRemove = function onNoteRemove(note) {
    var fromId = note.fromId;
    var toId = note.toId;
    visitParagraphs(paragraphs, function (v) {
      if (v.id >= fromId && v.id <= toId) {
        delete v.noted;
      }

      if (v.id === toId) {
        delete v.note;
      }
    });
    setParagraphs(Object.assign([], paragraphs));
  };

  var style = props.style || {};
  return Object(preact_module["h"])("article", {
    class: reader_default.a.article,
    style: style
  }, Object(preact_module["h"])("div", {
    class: reader_default.a.navContainer
  }, Object(preact_module["h"])("nav", null, Object(preact_module["h"])("select", {
    name: "book",
    value: props.book,
    onChange: onBookChange
  }, Object.entries(books).map(function (_ref) {
    var key = _ref[0],
        val = _ref[1];
    return Object(preact_module["h"])("option", {
      value: key,
      key: key
    }, val.name);
  })), Object(preact_module["h"])("select", {
    name: "chapter",
    value: props.chapter,
    onChange: onChapterChange
  }, Array.apply(null, Array(books[props.book].chapters)).map(function (_el, i) {
    return Object(preact_module["h"])("option", {
      value: i + 1,
      key: i
    }, i + 1);
  })), Object(preact_module["h"])("select", {
    name: "text",
    value: props.text,
    onChange: onTextChange
  }, Object.entries(texts).map(function (_ref2) {
    var key = _ref2[0],
        val = _ref2[1];
    return Object(preact_module["h"])("option", {
      value: key,
      key: key
    }, key);
  }))), Object(preact_module["h"])("div", null, Object(preact_module["h"])("button", {
    onClick: props.onAddReader,
    class: reader_default.a.windowButton
  }, "+"), Object(preact_module["h"])("button", {
    onClick: props.onCloseReader,
    class: reader_default.a.windowButton
  }, "x"))), Object(preact_module["h"])("div", {
    ref: divRef,
    onMouseUp: onSelectChange,
    onKeyUp: onSelectChange,
    class: reader_default.a.reader,
    onCopy: function onCopy(ev) {
      return select_onCopy(ev, config);
    },
    tabIndex: 0
  }, Object(preact_module["h"])(NoteContext.Provider, {
    value: {
      onNoteSubmit: onNoteSubmit,
      onNoteRemove: onNoteRemove
    }
  }, Object(preact_module["h"])(Paragraphs, {
    paragraphs: paragraphs
  }))));
}
// EXTERNAL MODULE: ./src/components/readergroup/readergroup.css
var readergroup = __webpack_require__("vlch");
var readergroup_default = /*#__PURE__*/__webpack_require__.n(readergroup);

// CONCATENATED MODULE: ./src/components/readergroup/readergroup.tsx





/*
 * Contains many <Reader>s and handles resizing them
 */
function ReaderGroup() {
  var _useLocalStorage = useLocalStorage('readers', [{
    text: 'en_ult',
    book: 'LUK',
    chapter: 4,
    width: 50
  }, {
    text: 'en_ult',
    book: 'PSA',
    chapter: 119,
    width: 50
  }]),
      readers = _useLocalStorage[0],
      setReaders = _useLocalStorage[1];

  var preMoveMouseWidths = [];
  var initialPageX = 0;

  var updateReaders = function updateReaders() {
    setReaders(Object.assign([], readers));
  };

  var onMouseMove = function onMouseMove(ev, index) {
    ev.preventDefault();
    var offsetXPercent = (ev.pageX - initialPageX) / window.innerWidth;
    readers.forEach(function (reader, i) {
      if (i === index) reader.width = preMoveMouseWidths[i] + offsetXPercent;else if (i === index + 1) reader.width = preMoveMouseWidths[i] - offsetXPercent;
    });
    updateReaders();
  };

  var mouseMoveHandler = function mouseMoveHandler(ev, index) {
    ev.preventDefault();
    initialPageX = ev.pageX;
    preMoveMouseWidths = readers.map(function (r) {
      return r.width;
    });

    var handler = function handler(ev) {
      return onMouseMove(ev, index);
    };

    document.addEventListener('mousemove', handler);
    document.addEventListener('mouseup', function (_ev) {
      return document.removeEventListener('mousemove', handler);
    });
  };

  var _onAddReader = function onAddReader(index) {
    index++;
    var nextReader = readers[Math.min(index, readers.length - 1)];
    var newReader = {
      text: 'en_ult',
      book: 'MAT',
      chapter: 1,
      width: nextReader.width / 2
    };
    nextReader.width /= 2;
    readers.splice(index, 0, newReader);
    updateReaders();
  };

  var _onCloseReader = function onCloseReader(index) {
    var lastWidth = readers[index].width;
    readers.splice(index, 1);
    readers.forEach(function (reader) {
      return reader.width += lastWidth / readers.length;
    });
    updateReaders();
  };

  var onReaderChange = function onReaderChange(reader, text, book, chapter) {
    reader.text = text;
    reader.book = book;
    reader.chapter = chapter;
    updateReaders();
  };

  return Object(preact_module["h"])(preact_module["Fragment"], null, readers.map(function (reader, index) {
    return Object(preact_module["h"])(preact_module["Fragment"], {
      key: index
    }, Object(preact_module["h"])(Reader, {
      text: reader.text,
      book: reader.book,
      chapter: reader.chapter,
      style: {
        width: reader.width * 100 + "%"
      },
      onAddReader: function onAddReader() {
        return _onAddReader(index);
      },
      onCloseReader: function onCloseReader() {
        return _onCloseReader(index);
      },
      onNavChange: function onNavChange(text, book, chapter) {
        return onReaderChange(reader, text, book, chapter);
      }
    }), index !== readers.length - 1 && Object(preact_module["h"])("div", {
      class: readergroup_default.a.dragbar,
      onMouseDown: function onMouseDown(e) {
        return mouseMoveHandler(e, index);
      }
    }));
  }));
}
// EXTERNAL MODULE: ./src/components/toolbar/toolbar.css
var toolbar = __webpack_require__("BKJr");
var toolbar_default = /*#__PURE__*/__webpack_require__.n(toolbar);

// CONCATENATED MODULE: ./src/icons/md-add-comment.svg




/* harmony default export */ var md_add_comment = (function (props) {
    var styles = props.styles;
    var rest = Object.assign({}, props);
    delete rest.styles;

    return Object(preact_module["h"])('svg', Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, rest), ["\n  ", Object(preact_module["h"])('path', {"fill":"none","d":"M0 0h24v24H0V0z"}, []), "\n  ", Object(preact_module["h"])('path', {"d":"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM17 11h-4v4h-2v-4H7V9h4V5h2v4h4v2z"}, []), "\n"]);
});;

        
// CONCATENATED MODULE: ./src/icons/md-format-bold.svg




/* harmony default export */ var md_format_bold = (function (props) {
    var styles = props.styles;
    var rest = Object.assign({}, props);
    delete rest.styles;

    return Object(preact_module["h"])('svg', Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24"}, rest), ["\n\t", Object(preact_module["h"])('path', {"fill":"none","d":"M0 0h24v24H0z"}, []), "\n\t", Object(preact_module["h"])('path', {"d":"M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"}, []), "\n"]);
});;

        
// CONCATENATED MODULE: ./src/icons/md-format-italic.svg




/* harmony default export */ var md_format_italic = (function (props) {
    var styles = props.styles;
    var rest = Object.assign({}, props);
    delete rest.styles;

    return Object(preact_module["h"])('svg', Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24"}, rest), ["\n\t", Object(preact_module["h"])('path', {"fill":"none","d":"M0 0h24v24H0z"}, []), "\n\t", Object(preact_module["h"])('path', {"d":"M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"}, []), "\n"]);
});;

        
// CONCATENATED MODULE: ./src/icons/md-format-underlined.svg




/* harmony default export */ var md_format_underlined = (function (props) {
    var styles = props.styles;
    var rest = Object.assign({}, props);
    delete rest.styles;

    return Object(preact_module["h"])('svg', Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24"}, rest), ["\n\t", Object(preact_module["h"])('path', {"fill":"none","d":"M0 0h24v24H0z"}, []), "\n\t", Object(preact_module["h"])('path', {"d":"M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"}, []), "\n"]);
});;

        
// CONCATENATED MODULE: ./src/icons/md-undo.svg




/* harmony default export */ var md_undo = (function (props) {
    var styles = props.styles;
    var rest = Object.assign({}, props);
    delete rest.styles;

    return Object(preact_module["h"])('svg', Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24"}, rest), ["\n\t", Object(preact_module["h"])('path', {"fill":"none","d":"M0 0h24v24H0z"}, []), "\n\t", Object(preact_module["h"])('path', {"d":"M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"}, []), "\n"]);
});;

        
// CONCATENATED MODULE: ./src/icons/md-redo.svg




/* harmony default export */ var md_redo = (function (props) {
    var styles = props.styles;
    var rest = Object.assign({}, props);
    delete rest.styles;

    return Object(preact_module["h"])('svg', Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24"}, rest), ["\n\t", Object(preact_module["h"])('path', {"fill":"none","d":"M0 0h24v24H0z"}, []), "\n\t", Object(preact_module["h"])('path', {"d":"M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"}, []), "\n"]);
});;

        
// CONCATENATED MODULE: ./src/icons/md-format-text-color.svg




/* harmony default export */ var md_format_text_color = (function (props) {
    var styles = props.styles;
    var rest = Object.assign({}, props);
    delete rest.styles;

    return Object(preact_module["h"])('svg', Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24"}, rest), ["\n\t", Object(preact_module["h"])('path', {"d":"M9.62,12L12,5.67L14.37,12M11,3L5.5,17H7.75L8.87,14H15.12L16.25,17H18.5L13,3H11Z"}, []), "\n"]);
});;

        
// CONCATENATED MODULE: ./src/icons/md-format-highlight.svg




/* harmony default export */ var md_format_highlight = (function (props) {
    var styles = props.styles;
    var rest = Object.assign({}, props);
    delete rest.styles;

    return Object(preact_module["h"])('svg', Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24"}, rest), ["\n  ", Object(preact_module["h"])('path', {"d":"M4,17L6.75,14.25L6.72,14.23C6.14,13.64 6.14,12.69 6.72,12.11L11.46,7.37L15.7,11.61L10.96,16.35C10.39,16.93 9.46,16.93 8.87,16.37L8.24,17H4M15.91,2.91C16.5,2.33 17.45,2.33 18.03,2.91L20.16,5.03C20.74,5.62 20.74,6.57 20.16,7.16L16.86,10.45L12.62,6.21L15.91,2.91Z"}, []), "\n"]);
});;

        
// CONCATENATED MODULE: ./src/icons/index.ts









// EXTERNAL MODULE: ./src/components/toolbar/colorpalette.css
var colorpalette = __webpack_require__("0Y1Z");
var colorpalette_default = /*#__PURE__*/__webpack_require__.n(colorpalette);

// CONCATENATED MODULE: ./src/components/toolbar/colorpalette.tsx


function ColorPalette(props) {
  var paletteRows = [['rgb(0,0,0)', 'rgb(67,67,67)', 'rgb(102,102,102)', 'rgb(153,153,153)', 'rgb(183,183,183)', 'rgb(204,204,204)', 'rgb(217,217,217)', 'rgb(239,239,239)', 'rgb(243,243,243)', 'rgb(255,255,255)'], ['rgb(152,0,0)', 'rgb(255,0,0)', 'rgb(255,153,0)', 'rgb(255,255,0)', 'rgb(0,255,0)', 'rgb(0,255,255)', 'rgb(74,134,232)', 'rgb(0,0,255)', 'rgb(153,0,255)', 'rgb(255,0,255)']];
  return Object(preact_module["h"])("table", {
    class: colorpalette_default.a.table
  }, Object(preact_module["h"])("tbody", null, paletteRows.map(function (row) {
    return Object(preact_module["h"])("tr", null, row.map(function (color) {
      return Object(preact_module["h"])("td", null, Object(preact_module["h"])("div", {
        class: colorpalette_default.a.swatch,
        style: {
          background: color
        },
        onClick: function onClick() {
          return props.onSelect(color);
        }
      }));
    }));
  })));
}
// CONCATENATED MODULE: ./src/components/toolbar/toolbar.tsx






function Toolbar() {
  var _useState = Object(hooks_module["c" /* useState */])('rgb(255,0,0)'),
      textColor = _useState[0],
      setTextColor = _useState[1];

  var _useState2 = Object(hooks_module["c" /* useState */])('rgb(255,0,0)'),
      highlightColor = _useState2[0],
      setHighlightColor = _useState2[1];

  var _useState3 = Object(hooks_module["c" /* useState */])(false),
      isTextColorPaletteOpen = _useState3[0],
      setTextColorPaletteOpen = _useState3[1];

  var _useState4 = Object(hooks_module["c" /* useState */])(false),
      isHighlightPaletteOpen = _useState4[0],
      setHighlightPaletteOpen = _useState4[1];

  var onToggleTextPaletteOpen = function onToggleTextPaletteOpen() {
    setTextColorPaletteOpen(function (open) {
      return !open;
    });
    setHighlightPaletteOpen(false);
  };

  var onToggleHighlightPaletteOpen = function onToggleHighlightPaletteOpen() {
    setHighlightPaletteOpen(function (open) {
      return !open;
    });
    setTextColorPaletteOpen(false);
  };

  return Object(preact_module["h"])("div", {
    class: toolbar_default.a.toolbar,
    role: "toolbar"
  }, Object(preact_module["h"])("button", {
    class: toolbar_default.a.button
  }, Object(preact_module["h"])(md_undo, {
    style: {
      fill: '#5f6368'
    }
  }), Object(preact_module["h"])("span", {
    class: toolbar_default.a.tooltip
  }, "Undo")), Object(preact_module["h"])("button", {
    class: toolbar_default.a.button
  }, Object(preact_module["h"])(md_redo, {
    style: {
      fill: '#5f6368'
    }
  }), Object(preact_module["h"])("span", {
    class: toolbar_default.a.tooltip
  }, "Redo")), Object(preact_module["h"])("button", {
    class: toolbar_default.a.button
  }, Object(preact_module["h"])(md_format_bold, {
    style: {
      fill: '#5f6368'
    }
  }), Object(preact_module["h"])("span", {
    class: toolbar_default.a.tooltip
  }, "Bold")), Object(preact_module["h"])("button", {
    class: toolbar_default.a.button
  }, Object(preact_module["h"])(md_format_italic, {
    style: {
      fill: '#5f6368'
    }
  }), Object(preact_module["h"])("span", {
    class: toolbar_default.a.tooltip
  }, "Italic")), Object(preact_module["h"])("button", {
    class: toolbar_default.a.button
  }, Object(preact_module["h"])(md_format_underlined, {
    style: {
      fill: '#5f6368'
    }
  }), Object(preact_module["h"])("span", {
    class: toolbar_default.a.tooltip
  }, "Underline")), Object(preact_module["h"])("button", {
    class: toolbar_default.a.button,
    onClick: onToggleTextPaletteOpen
  }, Object(preact_module["h"])(md_format_text_color, {
    style: {
      fill: '#5f6368',
      borderBottom: "4px solid " + textColor
    }
  }), Object(preact_module["h"])("span", {
    class: toolbar_default.a.tooltip
  }, "Text color"), isTextColorPaletteOpen && Object(preact_module["h"])(ColorPalette, {
    onSelect: function onSelect(color) {
      console.log('color', color);
      setTextColor(color);
    }
  })), Object(preact_module["h"])("button", {
    class: toolbar_default.a.button,
    onClick: onToggleHighlightPaletteOpen
  }, Object(preact_module["h"])(md_format_highlight, {
    style: {
      fill: '#5f6368',
      borderBottom: "4px solid " + highlightColor
    }
  }), Object(preact_module["h"])("span", {
    class: toolbar_default.a.tooltip
  }, "Highlight color"), isHighlightPaletteOpen && Object(preact_module["h"])(ColorPalette, {
    onSelect: function onSelect(color) {
      setHighlightColor(color);
      emit('ADD_HIGHLIGHT', color);
    }
  })), Object(preact_module["h"])("button", {
    class: toolbar_default.a.button,
    onClick: function onClick() {
      return emit('ADD_NOTE');
    }
  }, Object(preact_module["h"])(md_add_comment, {
    style: {
      fill: '#5f6368'
    }
  }), Object(preact_module["h"])("span", {
    class: toolbar_default.a.tooltip
  }, "Add comment")));
}
// CONCATENATED MODULE: ./src/components/index.ts




// CONCATENATED MODULE: ./src/pages/home.tsx


var home_Home = function Home(_props) {
  return Object(preact_module["h"])(preact_module["Fragment"], null, Object(preact_module["h"])(Nav, null), Object(preact_module["h"])(Toolbar, null), Object(preact_module["h"])("main", null, Object(preact_module["h"])(ReaderGroup, null)));
};
// CONCATENATED MODULE: ./src/pages/about.tsx


function About(_props) {
  return Object(preact_module["h"])(preact_module["Fragment"], null, Object(preact_module["h"])(Nav, null), Object(preact_module["h"])("main", null, Object(preact_module["h"])("div", null, Object(preact_module["h"])("h2", null, "About"), Object(preact_module["h"])("p", null, "This is a site that (so far) renders the ", Object(preact_module["h"])("a", {
    href: "https://git.door43.org/unfoldingWord/en_ult"
  }, "en_ult"), "\xA0and ", Object(preact_module["h"])("a", {
    href: "https://git.door43.org/unfoldingWord/en_ust"
  }, "en_ust"), " translations."), Object(preact_module["h"])("p", null, "It does so by rendering the USFM markdown to JSON in ", Object(preact_module["h"])("a", {
    href: "https://github.com/thesmartwon/usfm2json"
  }, "usfm2json"), " to paragraphs, and then rendering those paragraphs to HTML following some rules for verse numbers, punctuation, highlights, and notes. Currently your highlights and notes are saved to your browser's local storage."), Object(preact_module["h"])("p", null, "It's written using\xA0", Object(preact_module["h"])("a", {
    href: "https://preactjs.com/"
  }, "Preact"), ", ", Object(preact_module["h"])("a", {
    href: "https://babeljs.io/"
  }, "Babel"), ", and a lot of ", Object(preact_module["h"])("a", {
    href: "https://webpack.js.org/"
  }, "Webpack"), " sorcery. The few icons come from ", Object(preact_module["h"])("a", {
    href: "https://fontawesome.com/"
  }, "FontAwesome"), "\xA0 or ", Object(preact_module["h"])("a", {
    href: "https://material.io/resources/icons/"
  }, "Material Design.")), Object(preact_module["h"])("p", null, "The source code is available on ", Object(preact_module["h"])("a", {
    href: "https://github.com/thesmartwon/openbible"
  }, "Github"), " and it's deployed using ", Object(preact_module["h"])("a", {
    href: "https://pages.github.com/"
  }, "Github Pages."), "\xA0 I welcome contributions, there's still a lot of work to be done!"))));
}
// EXTERNAL MODULE: ./node_modules/css-variables-loader/src!./src/app.css
var app = __webpack_require__("GD5M");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: ./src/pages/settings.css
var settings = __webpack_require__("9tVr");
var settings_default = /*#__PURE__*/__webpack_require__.n(settings);

// CONCATENATED MODULE: ./src/pages/settings.tsx






var defaultSettings = {
  selectVerseNums: 'noSelect',
  cssVars: app_default.a
};
function Settings(_props) {
  var _useLocalStorage = useLocalStorage('settings2', defaultSettings),
      config = _useLocalStorage[0],
      setConfig = _useLocalStorage[1];

  var setCSSVar = function setCSSVar(cssVar, cssValue) {
    document.body.style.setProperty(cssVar, cssValue);
    config.cssVars[cssVar] = cssValue;
    setConfig(Object.assign({}, config));
  };

  var onSettingInput = function onSettingInput(key, val) {
    config[key] = val;
    setConfig(Object.assign({}, config));
  };

  var onReset = function onReset(ev) {
    ev.preventDefault();
    cssVars.forEach(function (cssVar) {
      var cssVal = getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
      setCSSVar(cssVar, cssVal);
    });
    setConfig(Object.assign({}, config, {}, defaultSettings));
  };

  var onSubmit = function onSubmit(ev) {
    ev.preventDefault(); // TODO: web service

    console.log('save settings');
  };

  return Object(preact_module["h"])(preact_module["Fragment"], null, Object(preact_module["h"])(Nav, null), Object(preact_module["h"])("main", null, Object(preact_module["h"])("form", {
    class: settings_default.a.form,
    onSubmit: onSubmit,
    onReset: onReset
  }, Object(preact_module["h"])("h2", null, "CSS Variables"), Object.entries(config.cssVars).map(function (entry) {
    return Object(preact_module["h"])("p", {
      key: entry[0]
    }, Object(preact_module["h"])("label", null, entry[0]), Object(preact_module["h"])("input", {
      type: entry[0].includes('color') ? 'color' : '',
      value: entry[1],
      onInput: function onInput(ev) {
        return setCSSVar(entry[0], ev.target.value);
      }
    }));
  }), Object(preact_module["h"])("h2", null, "Copy behavior"), Object(preact_module["h"])("p", null, Object(preact_module["h"])("label", null, "Snap selection to words"), "TODO: code no snapping but still snapping for highlighting"), Object(preact_module["h"])("p", null, Object(preact_module["h"])("label", null, "Verse number selection"), Object(preact_module["h"])("select", {
    value: config.selectVerseNums,
    onChange: function onChange(ev) {
      return onSettingInput('selectVerseNums', ev.target.value);
    }
  }, Object(preact_module["h"])("option", {
    value: "noSelect"
  }, "Don't select"), Object(preact_module["h"])("option", {
    value: "addSpace"
  }, "Add space"), Object(preact_module["h"])("option", {
    value: "default"
  }, "Browser default"))), Object(preact_module["h"])("input", {
    type: "reset",
    value: "Reset settings"
  }), Object(preact_module["h"])("input", {
    type: "submit",
    value: "Save settings"
  })), Object(preact_module["h"])("div", {
    class: reader_default.a.reader + " " + settings_default.a.testDiv
  }, Object(preact_module["h"])(Reader, {
    text: "en_ult",
    book: "PSA",
    chapter: 119
  }))));
}
// CONCATENATED MODULE: ./src/pages/index.ts



// EXTERNAL MODULE: ./src/app.css
var src_app = __webpack_require__("pYmE");

// CONCATENATED MODULE: ./src/app.tsx







function App() {
  var config = useLocalStorage('settings2', {
    cssVars: {}
  })[0];
  Object(hooks_module["a" /* useEffect */])(function () {
    // Leave document for default styles, document.body to load styles
    var rootElement = document.body;
    Object.keys(config.cssVars).forEach(function (cssVar) {
      return rootElement.style.setProperty(cssVar, config.cssVars[cssVar]);
    });
  }, []);
  return Object(preact_module["h"])(preact_router_es["default"], null, Object(preact_module["h"])(home_Home, {
    path: "/"
  }), Object(preact_module["h"])(About, {
    path: "/about"
  }), Object(preact_module["h"])(Settings, {
    path: "/settings"
  }));
}

Object(preact_module["render"])(Object(preact_module["h"])(App, null), document.getElementById('root'));

/***/ }),

/***/ "pYmE":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "vlch":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"dragbar":"css-1qs_t"};

/***/ })

},[["pLYI",1,2]]]);
//# sourceMappingURL=main.56f64180.bundle.js.map