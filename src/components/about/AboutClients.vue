<template>
  <div class="mt-10 sm:mt-20">
    <p
      class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
    >
      {{ clientsHeading }}
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
      <AboutClientSingle
        v-for="client in clients"
        :key="client.id"
        :client="client"
      />
    </div>
  </div>
</template>

<script>
import AboutClientSingle from "./AboutClientSingle.vue";
import { clientsData } from "@/data/company";

export default {
  components: {
    AboutClientSingle,
  },
  data() {
    return {
      clientsHeading: "Хамтран ажилласан компаниуд",
      clients: clientsData,
    };
  },
};
</script>
