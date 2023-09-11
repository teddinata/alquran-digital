(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{204:function(t,e,n){n(205),t.exports=n(206)},273:function(t,e,n){var content=n(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("1992bd8b",content,!0,{sourceMap:!1})},274:function(t,e,n){var r=n(83)((function(i){return i[1]}));r.push([t.i,'/*! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n5. Use the user\'s configured `sans` font-feature-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}*, ::before, ::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;}.container{width:100%;}@media (min-width: 640px){.container{max-width:640px;}}@media (min-width: 768px){.container{max-width:768px;}}@media (min-width: 1024px){.container{max-width:1024px;}}@media (min-width: 1280px){.container{max-width:1280px;}}@media (min-width: 1536px){.container{max-width:1536px;}}.pointer-events-none{pointer-events:none;}.static{position:static;}.fixed{position:fixed;}.absolute{position:absolute;}.relative{position:relative;}.top-0{top:0px;}.z-30{z-index:30;}.z-20{z-index:20;}.z-50{z-index:50;}.mx-auto{margin-left:auto;margin-right:auto;}.my-0{margin-top:0px;margin-bottom:0px;}.my-4{margin-top:1rem;margin-bottom:1rem;}.my-2{margin-top:0.5rem;margin-bottom:0.5rem;}.my-6{margin-top:1.5rem;margin-bottom:1.5rem;}.mt-0{margin-top:0px;}.mt-2{margin-top:0.5rem;}.mr-3{margin-right:0.75rem;}.mt-4{margin-top:1rem;}.mb-8{margin-bottom:2rem;}.-mt-12{margin-top:-3rem;}.mb-4{margin-bottom:1rem;}.mt-3{margin-top:0.75rem;}.mb-12{margin-bottom:3rem;}.mr-2{margin-right:0.5rem;}.mt-1{margin-top:0.25rem;}.mr-5{margin-right:1.25rem;}.mb-3{margin-bottom:0.75rem;}.ml-3{margin-left:0.75rem;}.block{display:block;}.inline-block{display:inline-block;}.flex{display:flex;}.hidden{display:none;}.h-6{height:1.5rem;}.h-1{height:0.25rem;}.h-4{height:1rem;}.h-8{height:2rem;}.w-full{width:100%;}.w-6{width:1.5rem;}.w-20{width:5rem;}.w-10{width:2.5rem;}.w-5{width:1.25rem;}.w-64{width:16rem;}.w-1\\/6{width:16.666667%;}.w-1\\/3{width:33.333333%;}.w-4{width:1rem;}.max-w-sm{max-width:24rem;}.flex-1{flex:1 1 0%;}.flex-shrink{flex-shrink:1;}.flex-shrink-0{flex-shrink:0;}.flex-grow{flex-grow:1;}.transform{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.cursor-pointer{cursor:pointer;}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none;}.flex-col{flex-direction:column;}.flex-wrap{flex-wrap:wrap;}.items-start{align-items:flex-start;}.items-center{align-items:center;}.justify-end{justify-content:flex-end;}.justify-center{justify-content:center;}.justify-between{justify-content:space-between;}.divide-y-2 > :not([hidden]) ~ :not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(2px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(2px * var(--tw-divide-y-reverse));}.overflow-hidden{overflow:hidden;}.rounded-full{border-radius:9999px;}.rounded-lg{border-radius:0.5rem;}.rounded{border-radius:0.25rem;}.rounded-t{border-top-left-radius:0.25rem;border-top-right-radius:0.25rem;}.rounded-b-none{border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.rounded-tl-lg{border-top-left-radius:0.5rem;}.rounded-bl-lg{border-bottom-left-radius:0.5rem;}.rounded-tr-lg{border-top-right-radius:0.5rem;}.rounded-br-lg{border-bottom-right-radius:0.5rem;}.border{border-width:1px;}.border-4{border-width:4px;}.border-b{border-bottom-width:1px;}.border-r{border-right-width:1px;}.border-b-2{border-bottom-width:2px;}.border-none{border-style:none;}.border-gray-100{--tw-border-opacity:1;border-color:rgb(243 244 246 / var(--tw-border-opacity));}.border-teal-500{--tw-border-opacity:1;border-color:rgb(20 184 166 / var(--tw-border-opacity));}.border-blue-500{--tw-border-opacity:1;border-color:rgb(59 130 246 / var(--tw-border-opacity));}.bg-green-500{--tw-bg-opacity:1;background-color:rgb(34 197 94 / var(--tw-bg-opacity));}.bg-black{--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity));}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235 / var(--tw-bg-opacity));}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246 / var(--tw-bg-opacity));}.bg-blue-500{--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));}.bg-transparent{background-color:transparent;}.fill-current{fill:currentColor;}.fill-gray-500{fill:#6b7280;}.object-cover{-o-object-fit:cover;object-fit:cover;}.p-1{padding:0.25rem;}.p-4{padding:1rem;}.p-5{padding:1.25rem;}.p-2{padding:0.5rem;}.p-3{padding:0.75rem;}.py-2{padding-top:0.5rem;padding-bottom:0.5rem;}.px-4{padding-left:1rem;padding-right:1rem;}.py-4{padding-top:1rem;padding-bottom:1rem;}.px-8{padding-left:2rem;padding-right:2rem;}.py-0{padding-top:0px;padding-bottom:0px;}.px-3{padding-left:0.75rem;padding-right:0.75rem;}.py-6{padding-top:1.5rem;padding-bottom:1.5rem;}.py-8{padding-top:2rem;padding-bottom:2rem;}.px-6{padding-left:1.5rem;padding-right:1.5rem;}.py-1{padding-top:0.25rem;padding-bottom:0.25rem;}.px-2{padding-left:0.5rem;padding-right:0.5rem;}.pl-4{padding-left:1rem;}.pr-4{padding-right:1rem;}.pt-24{padding-top:6rem;}.pt-4{padding-top:1rem;}.pb-12{padding-bottom:3rem;}.pl-2{padding-left:0.5rem;}.text-left{text-align:left;}.text-center{text-align:center;}.text-right{text-align:right;}.text-justify{text-align:justify;}.text-2xl{font-size:1.563rem;}.text-5xl{font-size:3.052rem;}.text-base{font-size:1rem;}.text-xl{font-size:1.25rem;}.text-3xl{font-size:1.953rem;}.text-sm{font-size:0.8rem;}.font-bold{font-weight:700;}.font-semibold{font-weight:600;}.leading-normal{line-height:1.5;}.leading-tight{line-height:1.25;}.tracking-normal{letter-spacing:0em;}.text-black{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity));}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));}.text-pink-800{--tw-text-opacity:1;color:rgb(157 23 77 / var(--tw-text-opacity));}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55 / var(--tw-text-opacity));}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81 / var(--tw-text-opacity));}.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99 / var(--tw-text-opacity));}.no-underline{text-decoration-line:none;}.opacity-75{opacity:0.75;}.opacity-25{opacity:0.25;}.shadow{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:0 0 #0000, 0 0 #0000, var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:0 0 #0000, 0 0 #0000, var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.outline-none{outline:2px solid transparent;outline-offset:2px;}.outline-0{outline-width:0px;}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);}.transition{transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.transition-colors{transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.duration-300{transition-duration:300ms;}.ease-in-out{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}.hover\\:scale-105:hover{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.hover\\:border-blue-700:hover{--tw-border-opacity:1;border-color:rgb(29 78 216 / var(--tw-border-opacity));}.hover\\:bg-blue-800:hover{--tw-bg-opacity:1;background-color:rgb(30 64 175 / var(--tw-bg-opacity));}.hover\\:bg-blue-700:hover{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity));}.hover\\:text-gray-900:hover{--tw-text-opacity:1;color:rgb(17 24 39 / var(--tw-text-opacity));}.hover\\:text-gray-800:hover{--tw-text-opacity:1;color:rgb(31 41 55 / var(--tw-text-opacity));}.hover\\:underline:hover{text-decoration-line:underline;}.hover\\:no-underline:hover{text-decoration-line:none;}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px;}@media (min-width: 768px){.md\\:w-3\\/5{width:60%;}.md\\:w-2\\/5{width:40%;}.md\\:w-4\\/5{width:80%;}.md\\:w-1\\/3{width:33.333333%;}.md\\:flex-row{flex-direction:row;}.md\\:text-left{text-align:left;}.md\\:text-sm{font-size:0.8rem;}.md\\:text-base{font-size:1rem;}}@media (min-width: 1024px){.lg\\:mx-0{margin-left:0px;margin-right:0px;}.lg\\:mt-0{margin-top:0px;}.lg\\:-mt-24{margin-top:-6rem;}.lg\\:flex{display:flex;}.lg\\:hidden{display:none;}.lg\\:w-auto{width:auto;}.lg\\:items-center{align-items:center;}.lg\\:bg-transparent{background-color:transparent;}.lg\\:p-0{padding:0px;}.lg\\:text-4xl{font-size:2.441rem;}}',""]),r.locals={},t.exports=r}},[[204,7,1,8]]]);