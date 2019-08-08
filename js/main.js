/* функция расчета по Формуле для вкладов с ежемесячной капитализацией
 Доходность=Сумма*(1+(Год.проц./12))**Месяцев*/
function capitalization(rate) {
	let result = (rangeSum.value * ((1 + rate / 12) ** rangeMonth.value)) - rangeSum.value
	return result
}


// функция для вывода доходности в денежном формате
function outputCapitalisation(return2) {
	let result2 = return2.toLocaleString('ru-RU', {
		style: 'currency',
		currency: 'RUB',
		minimumIntegerDigits: '1',
		minimumFractionDigits: '0',
		maximumFractionDigits: '0'
	})
	return result2
}


// функция расчета доходности для вкладов с ежемесячной капитализацией и вывода значений
function count() {

	let returnDep = capitalization(rp) //доходность депозита под 6.5%

	//returnDeposit.value = returnDep.toFixed()
	returnDeposit.value = outputCapitalisation(returnDep) // вывод доходности депозита под 6.5%

	let rpcRadio = document.querySelectorAll('.percent') // выбор тарифа

	for (let i = 0; i < rpcRadio.length; i++) {
		if (rpcRadio[i].checked) {
			rpValue = rpcRadio[i].value // годовая %ставка из radio для формулы
			let rp100 = rpValue * 100 // годовая %ставка из radio
			document.querySelector('#percent__right').textContent = rp100 + '% годовых'
		}
	}

	returnCity = capitalization(rpValue) // доходность гор.денег согласно тарифу

	returnCityMoney.value = outputCapitalisation(returnCity) // вывод доходности гор.денег согласно тарифу
}

let allInputNumber = document.querySelectorAll('input') // все input - это число
allInputNumber.forEach(function (e) {
	allInputNumber = parseFloat(e.value)
})

let outsum = document.getElementById('outsum') // вывод суммы вклада
let rangeSum = document.getElementById('rangeSum') //сумма вклада

// вывод суммы вклада, изменение цвета шкалы и вывод доходности при изменениии ползунка
rangeSum.oninput = function () {
	outsum.value = this.value
	let valRengePercent = (this.value * 100) / 5000000 //перевод в % input type range для градиента
	this.style.background = `-webkit-linear-gradient(left, #4bd1a0 0%, #4bd1a0 ${valRengePercent}%, #ebebeb ${valRengePercent}%, #ebebeb 100%)`
	count()
}


let outMonth = document.getElementById('outMonth') // вывод срока вклада в месяцах
let rangeMonth = document.getElementById('rangeMonth') // срок вклада в месяцах

// вывод срока вклада, изменение цвета шкалы и вывод доходности при изменениии ползунка 
rangeMonth.oninput = function () {
	outMonth.value = this.value
	let valRengePercent = (this.value * 100) / 60
	this.style.background = `-webkit-linear-gradient(left, #4bd1a0 0%, #4bd1a0 ${valRengePercent}%, #ebebeb ${valRengePercent}%, #ebebeb 100%)`
	count()
}

let rp = 0.065 // фиксированная годовая проц.ставка для депозита/100
let returnDeposit = document.getElementById('return__deposit') //вывод доходности депозита под 6.5%
let returnCityMoney = document.getElementById('return__cityMoney'); //вывод доходности города денег согласно тарифу


document.getElementById('btn').onclick = function(){
	count()
	alert('Вы молодец!')
}  // расчёт доходности при клике на btn

document.querySelector('.radio__btn').addEventListener('input', function(e){
	let radioLabel = e.target.className
	if(radioLabel==='percent'){
		count()
	}
})

/*
a.oninput = function(){
	b.value = this.value
}
b.oninput = function(){
	a.value = this.value
}
*/