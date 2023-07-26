<script>
import feather from "feather-icons";

export default {
  name: "Home",
  data: () => {
    return {
      theme: "",
      randomColor: function () {
        return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
      },
    };
  },
  created() {
    this.theme = localStorage.getItem("theme") || "light";
  },
  mounted() {
    feather.replace();
    this.theme = localStorage.getItem("theme") || "light";
  },
  updated() {
    feather.replace();
  },
  methods: {
    showModal() {
      if (this.modal) {
        // Stop screen scrolling
        document
          .getElementsByTagName('html')[0]
          .classList.remove('overflow-y-hidden');
        this.modal = false;
      } else {
        document
          .getElementsByTagName('html')[0]
          .classList.add('overflow-y-hidden');
        this.modal = true;
      }
    },
  },
};
</script>

<template>
  <section class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10">
    <!-- Banner left contents -->
    <div class="w-full md:w-1/3 text-left">
      <h1
        class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light">
        &lt; Намайг <span class="uppercase font-general-bold" :style="{ color: randomColor }">Цээ</span> гэдэг
        /<span>&gt;</span>
      </h1>
      <p
        class="font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400">
        Би утасны апп, вебсайт болон програм хөгжүүлэх чадвартай бөгөөд танд туслахад бэлэн байна.
      </p>
      <div class="flex justify-center sm:block">
        <a download="CV харах" href="https://resume.io/r/IlcOnPHGc"
          class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
          aria-label="CV харах">
          <i data-feather="eye" class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"></i>
          <b class="text-sm sm:text-lg font-general-medium duration-100">CV харах</b></a>
        <div class="hidden md:block">
        </div>
      </div>
    </div>

    <!-- Banner right illustration -->
    <div class="w-full md:w-1/2 text-right float-right">
      <img src="@/assets/images/developer.png" alt="Developer" class="floating-animation" />
    </div>
  </section>
</template>

<style scoped>
.floating-animation {
  animation: floating 2s ease infinite;
}

@keyframes floating {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
