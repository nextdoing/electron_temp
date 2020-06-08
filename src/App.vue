<template>
  <div id="app" class="lay t-txtr">
    <div class="lay-head">
      <div class="bus-head">
        <router-link to="/" class="t-padr">Home</router-link>
        |
        <router-link to="/about" class="t-padl">About</router-link>
      </div>
    </div>
    <section class="lay-con">
      <router-view />
    </section>
  </div>
</template>
