const initOptions = () => {
	const optionsContainer = document.querySelector('.options')
	const options = document.querySelectorAll('.option')

	optionsContainer.style.setProperty('--total-options', options.length)

	optionsContainer.addEventListener('click', (event) => {
		const clickOption = event.target.closest('.option')

		if (!clickOption || clickOption.classList.contains('active')) return

		options.forEach((option) => {
			option.classList.remove('active')
		})

		clickOption.classList.add('active')
	})
}

document.addEventListener('DOMContentLoaded', initOptions)
