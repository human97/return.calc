let outsum = document.querySelector('#outsum');
rangeSum = document.querySelector('#rangeSum');
rangeSum.oninput = function () {
	outsum.value = rangeSum.value;
}

let outMonth = document.querySelector('#outMonth');
rangeMonth = document.querySelector('#rangeMonth');
rangeMonth.oninput = function () {
	outMonth.value = rangeMonth.value;
}

// Формула для вкладов с ежемесячной капитализацией
// Доходность=Сумма*(1+(Год.проц./12))**Месяцев
let rp = 0.065; // фиксированная годовая проц.ставка для депозита/100
let rpd = rp / 12; // проц.ставка в месяц
//let rpcR=rpc/12; // проц.ставка в месяц из radio
let rpdMonth = 1 + rpd;
let returnDeposit = document.querySelector('#return__deposit');
let returnCityMoney = document.querySelector('#return__cityMoney');

function count() { // функция расчета доходности для вкладов с ежемесячной капитализацией
	rdpY = rpdMonth ** rangeMonth.value;
	returnDep = rangeSum.value * rpdMonth * rdpY;
	returnDep = returnDep - rangeSum.value;
	returnDeposit.value = returnDep.toFixed();
	rpcRadio = document.querySelectorAll('.percent');
	let rpValue; //годовая %ставка из radio для формулы
	for (let i = 0; i < rpcRadio.length; i++) {
		if (rpcRadio[i].checked) {
			rpValue = rpcRadio[i].value;
			let rp100 = rpValue * 100; //годовая %ставка из radio
			document.querySelector('#percent__right').textContent = rp100 + '% годовых';
		}
	}

	let rpc = rpValue / 12;
	let rpcMonth = 1 + rpc;
	let rdcY = rpcMonth ** rangeMonth.value;
	returnCity = rangeSum.value * rpcMonth * rdcY;
	returnCity = returnCity - rangeSum.value;
	returnCityMoney.value = returnCity.toFixed();
}

//rangeSum.onchange=count; // расчет происходит при изменении ползунка сумма
//rangeMonth.onchange=count; // расчет происходит при изменении ползунка срок
document.querySelector('#btn').onclick = count;



/*
a.oninput = function(){
	b.value = this.value
}
b.oninput = function(){
	a.value = this.value
}
*/