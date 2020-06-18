<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <input type="text" placeholder="Add a fruit to the list" v-model="newFruit" @keydown.enter="addFruit">
    <button @click="addFruit">Add a new fuit to the list</button>
    <button @click="sortFruits">Sort the fruits</button>
    <button @click="showText = !showText">Show the text</button>
    <div>
      <transition-group name="slide-up" tag="ul" appear>
        <li v-for="(fruit,index) in fruits" :key="index">{{fruit}}</li>
      </transition-group>
    </div>
    <div>
      <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave">
        <p v-if="showText">I am a text that appear with an animation</p>
      </transition>
    </div>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'

export default {
  name: 'HelloWorld',
  data() {
    return {
      fruits : ["pommes","poires","Fraises","Kiwis"],
      newFruit : '',
      showText : false
    }
  },
  props: {
    msg: String
  },
  methods: {
    addFruit() {
      this.fruits.push(this.newFruit)
      this.newFruit = ''
    },
    sortFruits(){
      this.fruits.sort()
    },
    beforeEnter(el){
      el.style.opacity = 0;
    },
    enter(el, done){
      Velocity(el,
      {opacity : 1},
      {duration : 4000, easing : 'easeOutCubic', complete : done})
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
li{
  margin-top: 10px;
}

/* Etat initial de la transition*/
.slide-up-enter{
  transform: translateY(10px);
}
/*Etat final de la transition */
.slide-up-enter-active{
  transition : transform .2s ease;
}
.slide-up-move{
  transition: transform .5s ease-out;
}

</style>
