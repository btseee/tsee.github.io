<script>
import emailjs from "emailjs-com";
import Button from "../reusable/Button.vue";
import FormInput from "../reusable/FormInput.vue";
import FormTextarea from "../reusable/FormTextarea.vue";

export default {
  components: { Button, FormInput, FormTextarea },
  methods: {
    async submitForm() {
      // Collect form data
      const formData = {
        name: this.$refs.name.value,
        email: this.$refs.email.value,
        subject: this.$refs.subject.value,
        message: this.$refs.message.value,
      };

      try {
        // Send the email using EmailJS
        const response = await emailjs.send(
          "service_gywiv3a", // Replace with your EmailJS service ID
          "template_ih3fybl", // Replace with your EmailJS template ID
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          "FnbIqVY58Re_62Izt" // Replace with your EmailJS user ID
        );

        console.log("Email sent:", response);

        // Clear form fields after successful submission
        this.$refs.name.value = "";
        this.$refs.email.value = "";
        this.$refs.subject.value = "";
        this.$refs.message.value = "";
      } catch (error) {
        // Handle error, e.g., show an error message
        this.$refs.name.value = "";
        this.$refs.email.value = "";
        this.$refs.subject.value = "";
        this.$refs.message.value = "";
        console.error("Error sending email:", error);
      }
    },
  },
};
</script>

<template>
  <div class="w-full md:w-1/2">
    <div
      class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
    >
      <p
        class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"
      >
        Гадаадад байгаа тул үүнийг бөглөнө үү би тантай холбогдоно
      </p>
      <form @submit.prevent="submitForm" class="font-general-regular space-y-7">
        <FormInput label="Нэр" inputIdentifier="name" ref="name" />
        <FormInput
          label="Имэйл"
          inputIdentifier="email"
          inputType="email"
          ref="email"
        />
        <FormInput label="Гарчиг" inputIdentifier="subject" ref="subject" />
        <FormTextarea
          label="Тайлбар"
          textareaIdentifier="message"
          ref="message"
        />

        <div>
          <Button
            title="Илгээх"
            class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
            type="submit"
            aria-label="Send Message"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
