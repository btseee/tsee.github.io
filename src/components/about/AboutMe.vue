<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Im a graduate in Software Engineer from Mongolian University of Science and Technology with a 3 years of experience in this industry. Im a passionate learner whos always willing to learn and work across technologies and UI designing. Also Im pretty capable in NodeJS, Typescript, Angular, ReactJS, MongoDB, PostgreSQL, Python and mentoring new developers.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.png"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
