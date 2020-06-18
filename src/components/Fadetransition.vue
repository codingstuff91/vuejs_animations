<template>
  <div class="wrapper">
    <button class="button" @click="toggleModal">Open</button>

    <transition name="fade">
      <div v-if="isOpen" class="modal">
        <p>
          <button @click="toggleModal">Close</button>
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style>
.wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.button{
    width : 100px;
}
.modal{
    background-color: darkcyan;
    width: 100px;
    height: 100px;
    margin-top: 50px;
}
/** ANIMATIONS STYLES */
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}
</style>
