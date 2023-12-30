<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
};
</script>


<template>
  <div class="flex flex-row bg-slate-200">
    <div id="Main"
        class="xl:rounded-r transform  xl:translate-x-0  ease-in-out transition duration-500 flex sm:w-64 bg-gray-900 flex-col">
      <div class="flex justify-between ml-4 mr-4 mt-4 items-center space-x-3">
          <svg class="h-8 w-8 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
  </svg>
      <p class="text-2xl leading-6 text-white">Dashboard</p>
    </div>
      <div
        class="mt-6 flex flex-col justify-start items-center h-screen pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
        <button @click="navigateTo('/')"
          class="flex jusitfy-start items-center space-x-6 w-full  hover:outline-none  hover:text-indigo-400 focus:outline-none  focus:text-indigo-400 text-white rounded ">
          <svg class="fill-stroke " width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p class="text-base leading-4 ">Dashboard</p>
        </button>
        <button @click="navigateTo('/product')"
          class="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-white focus:text-indigo-400   rounded ">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34314 18.6569 4 17 4C15.3431 4 14 5.34314 14 7C14 8.65685 15.3431 10 17 10Z"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p class="text-base leading-4 ">Products</p>
        </button>
        <button @click="navigateTo('/customer')"
          class="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-white focus:text-indigo-400   rounded ">
          <svg class="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p class="text-base leading-4 ">Customers</p>
        </button>
        <button
          class="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-white focus:text-indigo-400   rounded ">
          <svg class="text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="5" cy="18" r="2" />  <circle cx="19" cy="6" r="2" />  <path d="M19 8v5a5 5 0 0 1 -5 5h-3l3 -3m0 6l-3 -3" />  <path d="M5 16v-5a5 5 0 0 1 5 -5h3l-3 -3m0 6l3 -3" /></svg>
          <p class="text-base leading-4  ">Income</p>
        </button>
        <button
          class="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-white focus:text-indigo-400   rounded ">
          <svg class="text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="9" y1="15" x2="15" y2="9" />  <circle cx="9.5" cy="9.5" r=".5" fill="currentColor" />  <circle cx="14.5" cy="14.5" r=".5" fill="currentColor" />  <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1" /></svg>
          <p class="text-base leading-4  ">Promote</p>
        </button>
        <button
          class="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-white focus:text-indigo-400 rounded ">
          <svg class="text-white" width="24" height="24"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
</svg>
        <p class="text-base leading-4  ">Help</p>
      </button>
    </div>
  </div>
  <div class="p-6 w-full">
    <div class="flex justify-start">
      <p class="font-sans text-lg font-semibold">
      Hello Evano <span class="wave">👋🏾</span> ,
    </p>
    </div>
    
    <div class="w-full">
      <router-view class="h-full"></router-view>
    </div>
  </div>
</div></template>

<style scoped></style>
