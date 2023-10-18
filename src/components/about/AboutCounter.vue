<template>
  <div class="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
    <!-- About me counters -->
    <div class="font-general-regular container mx-auto py-20 block sm:flex sm:justify-between sm:items-center">
      <!-- Counter Component -->
      <Vue3autocounter
        :title="experienceTitle"
        :startAmount="0"
        :endAmount="year"
      />
      <Vue3autocounter
        :title="githubTitle"
        :startAmount="0"
        :endAmount="totalRepoCount"
        :suffix="' +'"
      />
      <Vue3autocounter
        :title="feedbackTitle"
        :startAmount="0"
        :endAmount="92"
        :suffix="' %'"
      />
    </div>
  </div>
</template>

<script>
import Vue3autocounter from 'vue3-autocounter';
import axios from "axios";

export default {
  components: {
    Vue3autocounter,
  },
  data() {
    const currentYear = (new Date().getFullYear() - 2020).toString();
    return {
      experienceTitle: "Жилийн туршлага",
      githubTitle: "Нийт ажилласан төсөл",
      feedbackTitle: "Эерэг сэтгэгдэл",
      year: currentYear,
      githubUsername: "btseee",
      totalRepoCount: 0,
    };
  },
  mounted() {
    this.fetchTotalRepoCount();
  },
  methods: {
    async fetchTotalRepoCount() {
      const url = `https://api.github.com/users/${this.githubUsername}`;
      try {
        const response = await axios.get(url);
        if (response.status === 200 && typeof response.data.public_repos === "number") {
          this.totalRepoCount = response.data.public_repos;
        } else {
          console.error("Unexpected data type for public_repos:", typeof response.data.public_repos);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    },
  },
};
</script>
