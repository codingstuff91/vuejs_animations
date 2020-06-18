<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Group transition</router-link> |
      <router-link to="/fade">Fade transition</router-link> |
    </div>
      <transition name="slide-fade">
        <router-view/>
      </transition>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/*** TRANSITIONS ***/
.highlight-enter{
  background-color: #42b983;
}
.highlight-enter-active,
.highlight-leave-active{
  transition: all .5s ease-in-out;
}
.highlight-leave-to{
  background-color: #42b983;
}

/*** PAGE TRANSITIONS */
.slide-fade-enter{
  transform : translateX(70px);
  opacity: 0;
}
.slide-fade-enter-active{
  transition : all .5s ease-in-out;
}

</style>
