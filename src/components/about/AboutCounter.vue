<script>
import counter from 'vue3-autocounter';
import axios from 'axios';

export default {
	components: {
		counter,
	},
	data: () => {
		const currentYear = (new Date().getFullYear() - 2020).toString();
		return {
			experienceTitle: 'Жилийн туршлага',
			githubTitle: 'Нийт ажилласан төсөл',
			feedbackTitle: 'Эерэг сэтгэгдэл',
			year: currentYear,
			githubUsername: 'btseee',
			totalRepoCount: 0,
		};
	},
	mounted() {
		this.fetchTotalRepoCount();
	},
	methods: {
		fetchTotalRepoCount() {
			const url = `https://api.github.com/users/${this.githubUsername}`;
			axios
				.get(url)
				.then((response) => {
					if (response.status === 200) {
						this.totalRepoCount = response.data.public_repos;
					}
				},)
				.catch((error) => {
					console.error("Failed to fetch data:", error);
				},);
		},
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
		<!-- About me counters -->
		<div class="font-general-regular container mx-auto py-20 block sm:flex sm:justify-between sm:items-center">
			<!-- Years of experience counter -->
			<div class="mb-20 sm:mb-0">
				<counter ref="counter" :startAmount="0" :endAmount=year :duration="1" :autoinit="true"
					@finished="alert(`Counting finished!`)"
					class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
					aria-label="About Status Counter" />
				<span class="block text-md text-ternary-dark dark:text-ternary-light">
					{{ experienceTitle }}
				</span>
			</div>

			<!-- GitHub stars counter -->
			<div class="mb-20 sm:mb-0">
				<counter ref="counter" :startAmount="0" :endAmount=totalRepoCount :duration="1" suffix="+" :autoinit="true"
					@finished="alert(`Counting finished!`)"
					class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2" />
				<span class="block text-md text-ternary-dark dark:text-ternary-light">{{ githubTitle }}</span>
			</div>

			<!-- Positive feedback counter -->
			<div class="mb-20 sm:mb-0">
				<counter ref="counter" :startAmount="0" :endAmount="92" :duration="1" suffix="%" :autoinit="true"
					@finished="alert(`Counting finished!`)"
					class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2" />
				<span class="block text-md text-ternary-dark dark:text-ternary-light">
					{{ feedbackTitle }}
				</span>
			</div>
		</div>
	</div>
</template>
