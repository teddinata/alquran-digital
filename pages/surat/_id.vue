<template>
  <body class="leading-normal tracking-normal bg-green-500 text-black gradient" style="font-family: 'Source Sans Pro', sans-serif">
    <!--Nav-->
    <nav id="header" class="fixed bg-green-500 w-full z-30 top-0 text-white">
      <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div class="pl-4 flex items-center">
          <a class="toggleColour text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl" :href="`/`">
            Al-Quran Digital
          </a>
        </div>
        <div class="block lg:hidden pr-4">
          <button id="nav-toggle" class="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <!-- <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-black lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
          <ul class="list-reset lg:flex justify-end flex-1 items-center">
            <li class="mr-3">
              <a class="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Active</a>
            </li>
            <li class="mr-3">
              <a class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a>
            </li>
            <li class="mr-3">
              <a class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a>
            </li>
          </ul>
          <button
            id="navAction"
            class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Action
          </button>
        </div> -->
      </div>
      <div class="lg:hidden flex items-center pr-4 justify-center">
        <a href="https://kitabisa.com/campaign/istandwithpalestine" target="_blank" class="text-white no-underline hover:no-underline flex items-center mx-2 bg-white">
          <span class="text-center text-lg px-2 py-1 rounded bg-white text-red-500" style="text-decoration: underline; font-weight: bold;">#StandWithPalestine</span>
          <span style="font-size: 1.5em; background-color: white; padding: 5px; border-radius: 10px;">🍉</span>
          <!-- <span class="ml-2 text-center text-lg px-2 py-1 rounded bg-red-500 text-white" style="text-decoration: underline; font-weight: bold;">Palestine</span> -->
        </a>
      </div>
      <div class="hidden lg:flex items-center pr-4 justify-center">
        <a href="https://kitabisa.com/campaign/istandwithpalestine" target="_blank" class="text-white no-underline hover:no-underline flex items-center mx-2 bg-white">
          <span class="ml-2 text-center text-2xl px-2 py-1 rounded bg-white text-red-500" style="text-decoration: underline; font-weight: bold;">#StandWithPalestine</span>
          <!-- <span class="ml-2 text-center text-2xl px-2 py-1 rounded bg-red-500 text-white" style="text-decoration: underline; font-weight: bold;">Palestine</span> -->
          <span style="font-size: 2em; background-color: white; padding: 5px; border-radius: 10px;">🍉</span>
        </a>
      </div>
      <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
    <!--Hero-->
    <div class="pt-24">
      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <!--Left Col-->
        <div class="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left">
          <h1 class="my-4 text-5xl font-bold leading-tight">
           Al-Qur'an Digital
          </h1>
          <p class="leading-normal text-2xl mb-8">
            Baca Al-Qur'an secara Online dimana dan kapan saja dengan mudah.
          </p>
        </div>
        <!--Right Col-->
        <div class="w-full md:w-2/5 py-6 text-center">
          <img class="w-20 h-25 object-cover md:w-4/5 z-50 " src="../../assets/image/alquran.png" />
        </div>
      </div>
    </div>
    <div class="relative -mt-12 lg:-mt-24">
      <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
            <path
              d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
              opacity="0.100000001"
            ></path>
            <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
          </g>
          <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <path
              d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
            ></path>
          </g>
        </g>
      </svg>
    </div>
    <section class="bg-white border-b py-8">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <!-- <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Title
        </h1> -->
        <!-- make form search w-full -->
        <div class="w-full mb-4 rounded-lg">
          <!-- button for next surat and before surat position in between  -->
          <div class="flex justify-between"
          >
            <div class="w-1/3" >
              <button
                v-if="detail.surat_sebelumnya"
                @click="$router.push({ name: 'surat-id', params: { id: detail.surat_sebelumnya.id }})"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
              >
              ⬅ Surat Sebelumnya
              </button>
            </div>
            <div class="w-1/3 flex justify-end"
            >
              <button
                v-if="detail.surat_selanjutnya"
                @click="$router.push({ name: 'surat-id', params: { id: detail.surat_selanjutnya.id }})"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
              >
               Surat Berikutnya ➡
              </button>
            </div>

            <!-- <div class="w-1/3 flex justify-end">
              <form class="w-full max-w-sm">
                <div class="flex items center border-b border-b-2 border-teal-500 py-2">
                  <input
                    class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Cari Surat"
                    aria-label="Full name"
                    v-model="search"
                  />
                  <button
                    class="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="button"
                  >
                    Cari
                  </button>
                </div>
              </form>
            </div> -->
          </div>
        </div>
        <!-- <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div> -->
        <div
          class="w-full md:w-3/3  px-6 py-4 flex flex-col flex-grow flex-shrink mt-4">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow border">
            <div class="flex justify-between flex-wrap no-underline hover:no-underline">
              <div class="w-full font-bold text-3xl text-gray-800 px-6 mt-3">
               {{ detail.nama_latin }} - {{ detail.nama }}
              </div>
              <p class="w-full text-gray-600 text-xs md:text-sm px-6 mt-2">
                <svg class="inline-block w-4 h-4 fill-current text-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0 2a12 12 0 1 1 0-24 12 12 0 0 1 0 24z" />
                  <path d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                </svg>
                Turun di {{ detail.tempat_turun }}
              </p>
              <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                <svg class="inline-block w-4 h-4 fill-current text-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                  <path fill-rule="evenodd" d="M10 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0 2a12 12 0 1 1 0-24 12 12 0 0 1 0 24z" />
                </svg>
                Jumlah Ayat : {{ detail.jumlah_ayat }}
              </p>
              <p class="w-full text-gray-600 text-xs md:text-sm px-6">
               <!-- icon svg for translate -->
                <svg class="inline-block w-4 h-4 fill-current text-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0 2a12 12 0 1 1 0-24 12 12 0 0 1 0 24z" />
                  <path d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                </svg>
                Arti : {{ detail.arti }}
              </p>
                <div class="w-full mt-2 text-gray-600 text-xs md:text-sm px-6">
                  Deskripsi Surat : <p class="mt-1 text-justify" v-html="detail.deskripsi"></p>
                </div>
              <div class="flex w-full justify-end">
                <button
                  @click="$router.push({ name: 'tafsir-id', params: { id: detail.nomor }})"
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 items-center mb-8 mr-5 rounded-full">
                 Lihat Tafsir
                </button>
              </div>
            </div>

          </div>
        </div>
        <div
          class="w-full md:w-3/3  px-6 py-4 flex flex-col flex-grow flex-shrink mt-4">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow border">
           <audio class="w-full h-8" controls id="audio_player" :src="detail.audio" type="audio/mpeg"></audio>
          </div>
        </div>
        <div
          v-for="ayat in detail.ayat"
          :key="ayat.id"
          class="w-full md:w-3/3  px-6 py-4 flex flex-col flex-grow flex-shrink mt-4">
          <!-- divider -->

          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow border divide-y-2">
            <div class="w-full font-bold text-xl text-gray-800 px-6 mt-3 mb-3">
              QS. {{ detail.nama_latin }} ({{ ayat.surah }}) : Ayat {{ ayat.nomor }}
              <!-- <button class="ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 items-center mb-8 mr-5 " @click="playAudio(ayat.audio)"> -->
                <!-- icon play button -->
                <!-- <svg class="inline-block w-4 h-4 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M0 0h20v20H0z" fill="none" />
                  <path d="M6 4l10 6-10 6z" />
                </svg> -->
                <!-- <button @click="">▶️</button> -->
                <!-- <button v-if="isPlay=true" @click="isPlay=true">⏸️</button> -->
              <!-- </button> -->
             </div>
            <div class="w-full font-bold text-right text-5xl text-gray-800 px-6">
              {{ ayat.ar }}
            </div>
            <a class="flex flex-wrap no-underline hover:no-underline">

              <div class="w-full font-bold text-left text-2xl text-gray-800 px-6">
                {{ ayat.tr }}
              </div>
              <p class="w-full text-gray-600 text-lg md:text-base px-6">
               {{ ayat.nomor }}. {{ ayat.idn }}
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Change the colour #f8fafc to match the previous section colour -->
    <svg class="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
          <g class="wave" fill="#f8fafc">
            <path
              d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"
            ></path>
          </g>
          <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
            <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
              <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              ></path>
              <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
    <section class="container mx-auto text-center py-6 mb-12">
      <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center ">
       Kebaikan membaca Al-Qur'an
      </h1>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <h3 class="my-4 text-3xl  leading-tight">
        Rasulullah SAW. bersabda: “Siapa saja membaca satu huruf dari Kitabullah (Alquran) maka dia akan mendapat satu kebaikan. Sedangkan satu kebaikan dilipatkan kepada sepuluh semisalnya. Aku tidak mengatakan alif lâm mîm satu huruf. Akan tetapi, alif satu huruf, lâm satu huruf, dan mîm satu huruf.” (HR At-Tirmidzi).
      </h3>
      <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
        <a href="https://trakteer.id/teddinata" target="_blank"><img id="wse-buttons-preview" src="https://cdn.trakteer.id/images/embed/trbtn-green-1.png" height="40" style="border:0px;height:40px;" alt="Trakteer Saya"></a>
        <!-- Action! -->
      </button>
    </section>
    <div>
      <p class="text-center p-3">Made by <a href="https://github.com/teddinata/alquran-digital"><u>teddinata</u></a> From Indonesia</p>
    </div>
  </body>
</template>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-14942YB253"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-14942YB253');
</script>
<!-- Google tag (gtag.js) -->
<!-- <script async src="https://www.googletagmanager.com/gtag/js?id=UA-149885634-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-149885634-1');
</script> -->

<script>
export default {
  name: 'IndexPage',
  data(){
    return {
      detail: [],
      isPlay: false
    }
  },
  mounted(){
    this.getDetailSurat()
  },
  methods: {
    async getDetailSurat(){
      const id = this.$route.params.id
      const detail = await fetch(`https://equran.id/api/surat/${id}`).then(res => res.json())
      console.log(detail.surat_selanjutnya)
      this.detail = detail
    }
    // await fetch(`https://equran.id/api/v2/surat/${id}`).then(res => res.json()).then(data => {
    //     this.detail = data.data
    //   })
  }
}
</script>
