<script>
import feather from 'feather-icons';
import Button from './reusable/Button.vue';
import FormInput from './reusable/FormInput.vue';
import FormTextarea from './reusable/FormTextarea.vue';
import emailjs from "emailjs-com";

export default {
	props: ['showModal', 'modal', 'categories'],
	components: { Button, FormInput, FormTextarea },
	data() {
		return {};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
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
	<transition name="fade">
		<div v-show="modal" class="font-general-regular fixed inset-0 z-30">
			<!-- Modal body background as backdrop -->
			<div v-show="modal" @click="showModal()"
				class="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>
			<!-- Modal content -->
			<main class="flex flex-col items-center justify-center h-full w-full">
				<transition name="fade-up-down">
					<div v-show="modal" class="modal-wrapper flex items-center z-30">
						<div
							class="modal max-w-md mx-5 md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
							<div
								class="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
								<h5 class="text-primary-dark dark:text-primary-light text-xl">
									Та ямар ситем хийлгэмээр байна?
								</h5>
								<button class="px-4 text-primary-dark dark:text-primary-light" @click="showModal()">
									<i data-feather="x"></i>
								</button>
							</div>
							<div class="modal-body p-5 w-full h-full">
								<form class="max-w-xl m-4 text-left" @submit.prevent="submitForm">
									<FormInput label="Нэр" inputIdentifier="name" ref="name" />
									<FormInput label="Имэйл" inputIdentifier="email" inputType="email" ref="email" />
									<FormInput label="Гарчиг" inputIdentifier="subject" ref="subject" />
									<FormTextarea label="Тайлбар" textareaIdentifier="message" ref="message" />

									<div>
										<Button title="Илгээх"
											class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
											type="submit" aria-label="Send Message" />
									</div>
								</form>
							</div>
							<div class="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right">
								<Button title="Хаах"
									class="px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
									@click="showModal()" aria-label="Close Modal" />
							</div>
						</div>
					</div>
				</transition>
			</main>
		</div>
	</transition>
</template>

<style scoped>
.modal-body {
	max-height: 570px;
}

.bg-gray-800-opacity {
	background-color: #2d374850;
}

@media screen and (max-width: 768px) {
	.modal-body {
		max-height: 400px;
	}
}

.fade-up-down-enter-active {
	transition: all 0.3s ease;
}

.fade-up-down-leave-active {
	transition: all 0.3s ease;
}

.fade-up-down-enter {
	transform: translateY(10%);
	opacity: 0;
}

.fade-up-down-leave-to {
	transform: translateY(10%);
	opacity: 0;
}

.fade-enter-active {
	-webkit-transition: opacity 2s;
	transition: opacity 0.3s;
}

.fade-leave-active {
	transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
