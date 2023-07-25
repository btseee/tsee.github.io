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
					title: 'Erxes',
					img: require('@/assets/images/company/erxes.png'),
				},
				{
					id: 2,
					title: 'Geru',
					img: require('@/assets/images/company/geru.png'),
				},
				{
					id: 3,
					title: 'Mongolian Properties',
					img: require('@/assets/images/company/mongolian_properties.jpg'),
				},
				{
					id: 4,
					title: 'Monlogistics',
					img: require('@/assets/images/company/monlogistics.jpg'),
				},
				{
					id: 5,
					title: 'SendMN',
					img: require('@/assets/images/company/Sendmn.jpg'),
				},
				{
					id: 6,
					title: 'Xacbank',
					img: require('@/assets/images/company/xacbank.png'),
				},
				{
					id: 7,
					title: 'Octasys',
					img: require('@/assets/images/company/octasys.png'),
				},
				{
					id: 7,
					title: 'Хуримын ордон',
					img: require('@/assets/images/company/wedding.jpg'),
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
