(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{297:function(t,e,n){t.exports=n.p+"img/alquran.bcbb0e3.png"},305:function(t,e,n){"use strict";n.r(e);n(25),n(82);var r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"lg:hidden flex items-center pr-4 justify-center"},[e("a",{staticClass:"text-white no-underline hover:no-underline flex items-center mx-2 bg-white",attrs:{href:"https://kitabisa.com/campaign/istandwithpalestine",target:"_blank"}},[e("span",{staticClass:"text-center text-lg px-2 py-1 rounded bg-white text-red-500",staticStyle:{"text-decoration":"underline","font-weight":"bold"}},[t._v("#StandWithPalestine")]),t._v(" "),e("span",{staticStyle:{"font-size":"1.5em","background-color":"white",padding:"5px","border-radius":"10px"}},[t._v("🍉")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"hidden lg:flex items-center pr-4 justify-center"},[e("a",{staticClass:"text-white no-underline hover:no-underline flex items-center mx-2 bg-white",attrs:{href:"https://kitabisa.com/campaign/istandwithpalestine",target:"_blank"}},[e("span",{staticClass:"ml-2 text-center text-2xl px-2 py-1 rounded bg-white text-red-500",staticStyle:{"text-decoration":"underline","font-weight":"bold"}},[t._v("#StandWithPalestine")]),t._v(" "),e("span",{staticStyle:{"font-size":"2em","background-color":"white",padding:"5px","border-radius":"10px"}},[t._v("🍉")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"pt-24"},[e("div",{staticClass:"container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"},[e("div",{staticClass:"flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left"},[e("h1",{staticClass:"my-4 text-5xl font-bold leading-tight"},[t._v("\n         Al-Qur'an Digital\n        ")]),t._v(" "),e("p",{staticClass:"leading-normal text-2xl mb-8"},[t._v("\n          Baca Al-Qur'an secara Online dimana dan kapan saja dengan mudah.\n        ")])]),t._v(" "),e("div",{staticClass:"w-full md:w-2/5 py-6 text-center"},[e("img",{staticClass:"w-20 h-25 object-cover md:w-4/5 z-50",attrs:{src:n(297)}})])])])},function(){var t=this,e=t._self._c;return e("section",{staticClass:"container mx-auto text-center py-6 mb-12"},[e("h1",{staticClass:"w-full my-2 text-5xl font-bold leading-tight text-center"},[t._v("\n     Kebaikan membaca Al-Qur'an\n    ")]),t._v(" "),e("div",{staticClass:"w-full mb-4"},[e("div",{staticClass:"h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"})]),t._v(" "),e("h3",{staticClass:"my-4 text-3xl leading-tight"},[t._v("\n      Rasulullah SAW. bersabda: “Siapa saja membaca satu huruf dari Kitabullah (Alquran) maka dia akan mendapat satu kebaikan. Sedangkan satu kebaikan dilipatkan kepada sepuluh semisalnya. Aku tidak mengatakan alif lâm mîm satu huruf. Akan tetapi, alif satu huruf, lâm satu huruf, dan mîm satu huruf.” (HR At-Tirmidzi).\n    ")]),t._v(" "),e("button",{staticClass:"mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"},[e("a",{attrs:{href:"https://trakteer.id/teddinata",target:"_blank"}},[e("img",{staticStyle:{border:"0px",height:"40px"},attrs:{id:"wse-buttons-preview",src:"https://cdn.trakteer.id/images/embed/trbtn-green-1.png",height:"40",alt:"Trakteer Saya"}})])])])},function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"text-center p-3"},[t._v("Made by "),e("a",{attrs:{href:"https://github.com/teddinata/alquran-digital"}},[e("u",[t._v("teddinata")])]),t._v(" From Indonesia")])])}],l=n(10),o=(n(41),n(13),n(52),{name:"IndexPage",data:function(){return{tafsir:[],teks:[]}},mounted:function(){"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then((function(t){console.log("Service Worker registered with scope:",t.scope)})).catch((function(t){console.error("Service Worker registration failed:",t)})),this.getDetailSurat()},methods:{getDetailSurat:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$route.params.id,e.next=3,fetch("https://equran.id/api/v2/tafsir/".concat(n)).then((function(t){return t.json()})).then((function(data){t.tafsir=data.data,t.teks=t.tafsir.tafsir.map((function(t){return t.teks})),console.log(t.teks)}));case 3:case"end":return e.stop()}}),e)})))()}}}),d=n(51),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("body",{staticClass:"leading-normal tracking-normal bg-green-500 text-black gradient",staticStyle:{"font-family":"'Source Sans Pro', sans-serif"}},[e("nav",{staticClass:"fixed bg-green-500 w-full z-30 top-0 text-white",attrs:{id:"header"}},[e("div",{staticClass:"w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"},[e("div",{staticClass:"pl-4 flex items-center"},[e("a",{staticClass:"toggleColour text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl",attrs:{href:"/"}},[t._v("\n          Al-Quran Digital\n        ")])]),t._v(" "),e("div",{staticClass:"block lg:hidden pr-4"},[e("button",{staticClass:"flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out",attrs:{id:"nav-toggle"}},[e("svg",{staticClass:"fill-current h-6 w-6",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("title",[t._v("Menu")]),t._v(" "),e("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}})])])])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),e("hr",{staticClass:"border-b border-gray-100 opacity-25 my-0 py-0"})]),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"relative -mt-12 lg:-mt-24"},[e("svg",{attrs:{viewBox:"0 0 1428 174",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(-2.000000, 44.000000)",fill:"#FFFFFF","fill-rule":"nonzero"}},[e("path",{attrs:{d:"M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496",opacity:"0.100000001"}}),t._v(" "),e("path",{attrs:{d:"M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z",opacity:"0.100000001"}}),t._v(" "),e("path",{attrs:{d:"M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z",id:"Path-4",opacity:"0.200000003"}})]),t._v(" "),e("g",{attrs:{transform:"translate(-4.000000, 76.000000)",fill:"#FFFFFF","fill-rule":"nonzero"}},[e("path",{attrs:{d:"M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"}})])])])]),t._v(" "),e("section",{staticClass:"bg-white border-b py-8"},[e("div",{staticClass:"container mx-auto flex flex-wrap pt-4 pb-12"},[e("div",{staticClass:"w-full mb-4 rounded-lg"},[e("div",{staticClass:"flex justify-between"},[e("div",{staticClass:"w-1/3"},[t.tafsir.suratSebelumnya?e("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg",on:{click:function(e){return t.$router.push({name:"tafsir-id",params:{id:t.tafsir.suratSebelumnya.nomor}})}}},[t._v("\n          ⬅ Surat Sebelumnya\n          ")]):t._e()]),t._v(" "),e("div",{staticClass:"w-1/3 flex justify-end"},[t.tafsir.suratSelanjutnya?e("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg",on:{click:function(e){return t.$router.push({name:"tafsir-id",params:{id:t.tafsir.suratSelanjutnya.nomor}})}}},[t._v("\n           Surat Berikutnya ➡\n          ")]):t._e()])])]),t._v(" "),e("div",{staticClass:"w-full md:w-3/3 px-6 py-4 flex flex-col flex-grow flex-shrink mt-4"},[e("div",{staticClass:"flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow border"},[e("div",{staticClass:"flex justify-between flex-wrap no-underline hover:no-underline"},[e("div",{staticClass:"w-full font-bold text-3xl text-gray-800 px-6 mt-3"},[t._v("\n             "+t._s(t.tafsir.namaLatin)+" - "+t._s(t.tafsir.nama)+"\n            ")]),t._v(" "),e("p",{staticClass:"w-full text-gray-600 text-xs md:text-sm px-6 mt-2"},[e("svg",{staticClass:"inline-block w-4 h-4 fill-current text-gray-600 mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M10 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0 2a12 12 0 1 1 0-24 12 12 0 0 1 0 24z"}}),t._v(" "),e("path",{attrs:{d:"M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"}})]),t._v("\n              Turun di "+t._s(t.tafsir.tempatTurun)+"\n            ")]),t._v(" "),e("p",{staticClass:"w-full text-gray-600 text-xs md:text-sm px-6"},[e("svg",{staticClass:"inline-block w-4 h-4 fill-current text-gray-600 mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd",d:"M10 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0 2a12 12 0 1 1 0-24 12 12 0 0 1 0 24z"}})]),t._v("\n              Jumlah Ayat : "+t._s(t.tafsir.jumlahAyat)+"\n            ")]),t._v(" "),e("p",{staticClass:"w-full text-gray-600 text-xs md:text-sm px-6"},[e("svg",{staticClass:"inline-block w-4 h-4 fill-current text-gray-600 mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M10 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0 2a12 12 0 1 1 0-24 12 12 0 0 1 0 24z"}}),t._v(" "),e("path",{attrs:{d:"M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"}})]),t._v("\n              Arti : "+t._s(t.tafsir.arti)+"\n            ")]),t._v(" "),e("div",{staticClass:"w-full mt-2 text-gray-600 text-xs md:text-sm px-6"},[t._v("\n               Deskripsi Surat : "),e("p",{staticClass:"mt-1 text-justify",domProps:{innerHTML:t._s(t.tafsir.deskripsi)}})]),t._v(" "),e("div",{staticClass:"flex w-full justify-end"},[e("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 items-center mb-8 mr-5 rounded-full",on:{click:function(e){return t.$router.push({name:"surat-id",params:{id:t.tafsir.nomor}})}}},[t._v("\n               Lihat Surat\n              ")])])])])]),t._v(" "),t._l(t.tafsir.tafsir,(function(n){return e("div",{key:n.id,staticClass:"w-full md:w-3/3 px-6 py-4 flex flex-col flex-grow flex-shrink mt-4"},[e("div",{staticClass:"flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow border divide-y-2"},[e("div",{staticClass:"w-full font-bold text-xl text-gray-800 px-6 mt-3 mb-3"},[t._v("\n            QS. "+t._s(t.tafsir.namaLatin)+" ("+t._s(t.tafsir.nomor)+") : Ayat "+t._s(n.ayat)+"\n           ")]),t._v(" "),e("a",{staticClass:"flex flex-wrap no-underline hover:no-underline"},[e("div",{staticClass:"w-full text-justify text-xl text-gray-800 px-6",domProps:{innerHTML:t._s(n.teks.replace(/\n/g,"<br>"))}})])])])}))],2)]),t._v(" "),e("svg",{staticClass:"wave-top",attrs:{viewBox:"0 0 1439 147",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(-1.000000, -14.000000)","fill-rule":"nonzero"}},[e("g",{staticClass:"wave",attrs:{fill:"#f8fafc"}},[e("path",{attrs:{d:"M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"}})]),t._v(" "),e("g",{attrs:{transform:"translate(1.000000, 15.000000)",fill:"#FFFFFF"}},[e("g",{attrs:{transform:"translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) "}},[e("path",{attrs:{d:"M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496",opacity:"0.100000001"}}),t._v(" "),e("path",{attrs:{d:"M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z",opacity:"0.100000001"}}),t._v(" "),e("path",{attrs:{d:"M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z",opacity:"0.200000003"}})])])])])]),t._v(" "),t._m(3),t._v(" "),t._m(4)])}),r,!1,null,null,null);e.default=component.exports}}]);