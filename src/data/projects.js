// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'SendMN V2.0',
		category: 'Мобайл апп',
		img: require('@/assets/images/project/sendmn.png'),
	},
	{
		id: 2,
		title: 'TMS 4.0',
		category: 'Дотоод систем',
		img: require('@/assets/images/project/tms.png'),
	},
	{
		id: 3,
		title: 'Mongolian Properties',
		category: 'Вебсайт',
		img: require('@/assets/images/project/mongolian_properties.png'),
	},
	{
		id: 4,
		title: 'Хуримын Ордон',
		category: 'Вебсайт',
		img: require('@/assets/images/project/wedding.png'),
	},
	{
		id: 5,
		title: 'Caak.mn V2.0',
		category: 'Вебсайт',
		img: require('@/assets/images/project/caak.png'),
	},
	{
		id: 6,
		title: 'Etender',
		category: 'Дотоод систем',
		img: require('@/assets/images/project/etender.png'),
	},
];

export default projects;
