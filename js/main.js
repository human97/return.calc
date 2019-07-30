/* Формула для вкладов с ежемесячной капитализацией
 Доходность=Сумма*(1+(Год.проц./12))**Месяцев*/

function count() { // функция расчета доходности для вкладов с ежемесячной капитализацией
	let returnDep = (rangeSum.value * ((1 + rp / 12) ** rangeMonth.value)) - rangeSum.value; //доходность депозита под 6.5%
	//returnDeposit.value = returnDep.toFixed();
	returnDeposit.value = returnDep.toLocaleString('ru-RU', {
		style: 'currency',
		currency: 'RUB',
		minimumIntegerDigits: '1',
		minimumFractionDigits: '0',
		maximumFractionDigits: '0'
	});

	let rpcRadio = document.querySelectorAll('.percent'); // выбор тарифа
	for (let i = 0; i < rpcRadio.length; i++) {
		if (rpcRadio[i].checked) {
			rpValue = rpcRadio[i].value; //годовая %ставка из radio для формулы
			let rp100 = rpValue * 100; //годовая %ставка из radio
			document.querySelector('#percent__right').textContent = rp100 + '% годовых';
		}
	}

	returnCity = (rangeSum.value * ((1 + rpValue / 12) ** rangeMonth.value)) - rangeSum.value;

	returnCityMoney.value = returnCity.toLocaleString('ru-RU', {
		style: 'currency',
		currency: 'RUB',
		minimumIntegerDigits: '1',
		minimumFractionDigits: '0',
		maximumFractionDigits: '0'
	});

	/* let height = ((returnCityMoney.value+rangeSum.value)/ rangeSum.value) * 100 + 'px';
      document.querySelector('.block2__right').style.height = height;
*/
}

let allInputNumber = document.querySelectorAll('input'); // все input - это число
allInputNumber.forEach(function (e) {
	allInputNumber = parseFloat(e.value);
	console.log(typeof allInputNumber)
});

let outsum = document.querySelector('#outsum');
let rangeSum = document.querySelector('#rangeSum'); //сумма вклада

rangeSum.oninput = function () {
	outsum.value = rangeSum.value;
}


let outMonth = document.querySelector('#outMonth');
let rangeMonth = document.querySelector('#rangeMonth');

rangeMonth.oninput = function () {
	outMonth.value = rangeMonth.value;
}


let rp = 0.065; // фиксированная годовая проц.ставка для депозита/100
let returnDeposit = document.querySelector('#return__deposit'); //вывод доходности депозита под 6.5%
let returnCityMoney = document.querySelector('#return__cityMoney'); //вывод доходности города денег согласно тарифу



rangeSum.onchange = count; // расчет происходит при изменении ползунка сумма
rangeMonth.onchange = count; // расчет происходит при изменении ползунка срок
document.querySelector('#btn').onclick = count; // расчёт доходности при клике на btn


/*
a.oninput = function(){
	b.value = this.value
}
b.oninput = function(){
	a.value = this.value
}
*/