<!-- eslint-disable vue/multi-word-component-names -->
<script>
import feather from "feather-icons";
import ContactForm from "@/components/contact/ContactForm.vue";
import ContactDetails from "@/components/contact/ContactDetails.vue";

export default {
  components: {
    ContactForm,
    ContactDetails,
  },
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: "Kelkheim, Frankfurt, Germany",
          icon: "map-pin",
          action:
            "https://www.google.com/maps/d/viewer?mid=1w46KK4d-F5x767hCPljCGNsU2W8&hl=en&ll=50.129257053363574%2C8.453594999999972&z=15",
        },
        {
          id: 2,
          name: "bbattseren88@gmail.com",
          icon: "mail",
          action: "mailto:",
        },
      ],
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  methods: {},
};
</script>

<template>
  <div
    class="container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"
  >
    <!-- Contact form -->
    <ContactForm />

    <!-- Contact details -->
    <ContactDetails :contacts="contacts" />
  </div>
</template>
