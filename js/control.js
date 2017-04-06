// Задача. Вам дан массив объектов пользователей. Создайте функцию
// которая принимает этот объект выводит в консоль какое количество пользователей она приняла 
// дальше функция должна нам создать два массива один состоящий из мужчин второй массив состоящий из женщин
// чей возраст попадает в промежуток от 30 - 50. также эти оба массива должны быть отсортированы по возрасту от меньшего к большему.
// массивы вывести в консоль. Всех кто не попадает под указанный промежуток возраста должны быть собраны также в отдельном массиве и отсортированны
// также вывести в консоль количество отдельно женщин и отдельно мужчин  попавших в возростной промежуток и не попавших в него. 
// А сама функция должна вернуть через return  объект состоящий из 3-х ключей содержащие обработанные массивы. Примерно в таком виде
// return {
// 	'man_from_30_to_50': [],
// 	'wooman_from_30_to_50': [],
// 	'not_accept_from_30_to_50': [],
// } 

var users = [
	{
		name: 'Denis',
		age: 28,
		male: 'man'
	},
	{
		name: 'Ira',
		age: 50,
		male: 'wooman'
	},
	{
		name: 'Ivan',
		age: 32,
		male: 'man'
	},
	{
		name: 'Maksim',
		age: 46,
		male: 'man'
	},
	{
		name: 'Olga',
		age: 28,
		male: 'wooman'
	},
	{
		name: 'Oksana',
		age: 53,
		male: 'wooman'
	},
	{
		name: 'Dmitry',
		age: 28,
		male: 'man'
	},
	{
		name: 'Ludmila',
		age: 19,
		male: 'wooman'
	},
	{
		name: 'Larisa',
		age: 28,
		male: 'wooman'
	},
	{
		name: 'Natalia',
		age: 49,
		male: 'wooman'
	},
	{
		name: 'Valera',
		age: 63,
		male: 'man'
	},
	{
		name: 'Andrey',
		age: 33,
		male: 'man'
	},
	{
		name: 'Svetlana',
		age: 26,
		male: 'wooman'
	},
	{
		name: 'Raisa',
		age: 47,
		male: 'wooman'
	},
	{
		name: 'Oksana',
		age: 21,
		male: 'wooman'
	},
	{
		name: 'Elena',
		age: 38,
		male: 'wooman'
	},
	{
		name: 'Pavel',
		age: 32,
		male: 'man'
	},
	{
		name: 'Evgeny',
		age: 33,
		male: 'man'
	},
	{
		name: 'Stas',
		age: 28,
		male: 'man'
	},
	{
		name: 'Katya',
		age: 27,
		male: 'wooman'
	},
	{
		name: 'Valentina',
		age: 24,
		male: 'wooman'
	},
	{
		name: 'Olga',
		age: 17,
		male: 'wooman'
	},
	{
		name: 'Nikolay',
		age: 57,
		male: 'man'
	},
	{
		name: 'Vitaliy',
		age: 28,
		male: 'man'
	},
	{
		name: 'Konstantin',
		age: 30,
		male: 'man'
	}
];
function getFilterUserFromAgeAndMale(users){
	var length = users.length;
	console.log(`Количество пользователей принятых в обработку: ${length}`);

	var usersManFrom30To50 = [],
		usersWoomanFrom30To50 = [],
		usersNoAcceptFrom30To50 = [],
		allUsersFrom30To50 = [];

	var ManOutInterval = 0,
		WoomanOutInterval = 0;

	function sortUsersAge(prev, next) {
		return prev['age'] - next['age'];	
	}
	function filterAgeFrom30To50(arr) {
		return arr.age >= 30 && arr.age <= 50;
	}

	for (var i = 0; i < users.length; i++) {
		if (!filterAgeFrom30To50(users[i])) {
			usersNoAcceptFrom30To50.push(users[i]);
			if (filterMaleMan(users[i])){
				ManOutInterval++;
			} if (filterMaleWommen(users[i])) {
				WoomanOutInterval++;
			}
		}
	}

	console.log(`Все пользователи вне возрастного промежутка:`, usersNoAcceptFrom30To50.sort(sortUsersAge));
	console.log(`Мужчины не попавшие в интервал от 30 до 50лет - ${ManOutInterval} человек`);
	console.log(`Женщины не попавшие в интервал от 30 до 50лет - ${WoomanOutInterval} человек`);

	function filterMaleMan(arr) {
		return arr.male == 'man';
	}
	function filterMaleWommen(arr) {
		return arr.male == 'wooman';
	}

	usersManFrom30To50 = users.filter(filterAgeFrom30To50).filter(filterMaleMan);
	console.log(`Мужчины в возрасте от 30 до 50:`, usersManFrom30To50.sort(sortUsersAge));
	usersWoomanFrom30To50 = users.filter(filterAgeFrom30To50).filter(filterMaleWommen);
	console.log(`Женщины в возрасте от 30 до 50:`, usersWoomanFrom30To50.sort(sortUsersAge));

	return {
 		usersManFrom30To50,
 		usersWoomanFrom30To50,
 		usersNoAcceptFrom30To50,
 	} 	
}
console.log(getFilterUserFromAgeAndMale(users));