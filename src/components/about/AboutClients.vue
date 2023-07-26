<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: 'Хамтран ажилласан компаниуд',
			clients: [
				{
					id: 1,
					img: require('@/assets/images/company/1.png'),
				},
				{
					id: 2,
					title: 'Geru',
					img: require('@/assets/images/company/2.png'),
				},
				{
					id: 3,
					title: 'Mongolian Properties',
					img: require('@/assets/images/company/3.png'),
				},
				{
					id: 4,
					title: 'Monlogistics',
					img: require('@/assets/images/company/4.png'),
				},
				{
					id: 5,
					title: 'SendMN',
					img: require('@/assets/images/company/5.png'),
				},
				{
					id: 6,
					title: 'Xacbank',
					img: require('@/assets/images/company/6.png'),
				},
				{
					id: 7,
					title: 'Octasys',
					img: require('@/assets/images/company/7.png'),
				},
				{
					id: 7,
					title: 'Хуримын ордон',
					img: require('@/assets/images/company/8.png'),
				},
				{
					id: 7,
					title: 'Хуримын ордон',
					img: require('@/assets/images/company/9.png'),
				},
				{
					id: 7,
					title: 'Хуримын ордон',
					img: require('@/assets/images/company/10.png'),
				},
			],
		};
	},
};
</script>

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
