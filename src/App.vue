<script>
import feather from 'feather-icons';
import AppHeader from './components/shared/AppHeader';
import AppFooter from './components/shared/AppFooter';
import { VuePreloader } from 'vue-preloader';

export default {
  components: {
    AppHeader,
    AppFooter,
    VuePreloader,
  },
  data: () => {
    return {
      appTheme: localStorage.getItem('theme'),
      isLoading: true, // Add a flag to track the loading state
    };
  },
  mounted() {
    feather.replace();
    this.isLoading = false; // Set the loading state to false when the component is mounted
  },
  methods: {
    loadingIsOver() {
      this.isLoading = false; // This method will be called when the preloader loading is over
    },
    transitionIsOver() {
      // This method will be called when the preloader transition is over
    },
  },
};
</script>

<template>
  <div :class="appTheme" class="pt-0.5">
    <!-- App header -->
    <AppHeader />

    <!-- Render active component contents with vue transition -->
    <!-- Add v-if to conditionally render the router-view when loading is complete -->
    <transition name="fade" mode="out-in" v-if="!isLoading">
      <router-view :theme="appTheme" />
    </transition>

    <!-- Scroll to top -->
    <back-to-top
      visibleoffset="500"
      right="30px"
      bottom="20px"
      class="shadow-lg"
    >
      <i data-feather="chevron-up"></i>
    </back-to-top>

    <!-- App footer -->
    <AppFooter />

    <!-- Vue Preloader -->
    <VuePreloader
      background-color="#303031"
      color="#f4f4f4"
      transition-type="fade-up"
      :loading-speed="10"
      :transition-speed="1000"
      @loading-is-over="loadingIsOver"
      @transition-is-over="transitionIsOver"
    ></VuePreloader>
  </div>
</template>

<style>
@import '../node_modules/vue-preloader/dist/style.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.vue-back-to-top {
  @apply p-2 bg-indigo-500 hover:bg-indigo-600 text-white transition
    duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}

.fade-enter-active {
  animation: coming 0.4s;
  animation-delay: 0.2s;
  opacity: 0;
}

.fade-leave-active {
  animation: going 0.4s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-10px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
