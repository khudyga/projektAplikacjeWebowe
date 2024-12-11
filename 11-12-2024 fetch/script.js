const input = document.querySelector('#searchP')
const btnSearch = document.querySelector('#searchBtnP')
const btnRnd = document.querySelector('#BtnRndP')
const img = document.querySelector('#imgP')
const nameP = document.querySelector('#name')
const categoryP = document.querySelector('#category')
const typeP = document.querySelector('#type')
const rarityP = document.querySelector('#rarity')
const hpP = document.querySelector('#hp')
const infoP = document.querySelector('.infoP')
const warning = document.querySelector('#warning')

infoP.style.display = 'none'

const random = () => {
	fetch('https://api.tcgdex.net/v2/en/cards')
		.then(response => response.json())
		.then(data => {
			const randomCard = data[Math.floor(Math.random() * data.length)]
			nameP.innerHTML = randomCard.name
			indeks = randomCard.id
			console.log(indeks)

			const tcgdex = new TCGdex('en')
			;(async () => {
				const card = await tcgdex.fetch('cards', indeks)
				console.log(card.name)
				console.log(card.image)

				const obraz2 = card.image
				url = 'https://assets.tcgdex.net/en/swsh/swsh3/136/{quality}.{extension}'
				img.src = obraz2 + '/high.png'

				categoryP.innerHTML = card.category
				typeP.innerHTML = card.types
				rarityP.innerHTML = card.rarity

				if (card.category == 'Trainer') {
					hpP.innerHTML = 'Trenerzy nie posiadają HP'
					typeP.innerHTML = 'cTrenerzy nie posiadają typu'
				} else if (card.category == 'Energy') {
					hpP.innerHTML = 'Energie nie posiadają HP'
					typeP.innerHTML = 'Energie nie posiadają typu'
				} else {
					hpP.innerHTML = card.hp
					typeP.innerHTML = card.types
				}
			})()
		})
		.catch(error => console.error('Błąd w pobieraniu danych:', error))
}

const search = () => {
	name2 = input.value
	name3 = name2.charAt(0).toUpperCase() + name2.slice(1)
	console.log(name3)
	fetch('https://api.tcgdex.net/v2/en/cards')
		.then(response => response.json())
		.then(data => {
			// const randomCard = data[Math.floor(Math.random() * data.length)]
			// nameP.innerHTML = randomCard.name
			// indeks = randomCard.id
			// console.log(indeks)

			const tcgdex = new TCGdex('en')
			;(async () => {
				const card2 = await tcgdex.fetch('cards', name3)

				if (card2 === undefined) {
					infoP.style.display = 'none'
					img.style.display = 'none'
					warning.innerHTML = 'Podana nazwa jest niepoprawna!'
				} else if (card2.name === undefined) {
					infoP.style.display = 'none'
					img.style.display = 'none'
					warning.innerHTML = 'Nie podano nazwy!'
				} else {
					// console.log(card2.name)
					// console.log(card2.image)
					infoP.style.display = 'block'
					img.style.display = 'block'
					warning.innerHTML = ''

					const obraz = card2.image
					img.src = obraz + '/high.png'

					nameP.innerHTML = card2.name
					categoryP.innerHTML = card2.category

					categoryP.innerHTML = card2.category
					typeP.innerHTML = card2.types
					rarityP.innerHTML = card2.rarity

					if (card2.category == 'Trainer') {
						hpP.innerHTML = 'Trenerzy nie posiadają HP'
						typeP.innerHTML = 'Trenerzy nie posiadają typu'
					} else if (card2.category == 'Energy') {
						hpP.innerHTML = 'Energie nie posiadają HP'
						typeP.innerHTML = 'Energie nie posiadają typu'
					} else {
						hpP.innerHTML = card2.hp
						typeP.innerHTML = card2.types
					}
				}
			})()
		})
		.catch(error => console.error('Błąd w pobieraniu danych:', error))
}

btnRnd.addEventListener('click', random)
btnSearch.addEventListener('click', search)
