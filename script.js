const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.keys')
const display = calculator.querySelector('.display')

const calculate = (n1, operator, n2) => {
  const first = parseFloat(n1)
  const second = parseFloat(n2)

  if (operator === 'add') return first + second
  if (operator === 'subtract') return first - second
  if (operator === 'multiply') return first * second
  if (operator === 'divide') return first / second
  return second
}

keys.addEventListener('click', e => {
  if (!e.target.matches('button')) return

  const key = e.target
  const action = key.dataset.action
  const keyContent = key.textContent
  const displayedNum = display.textContent
  const previousKeyType = calculator.dataset.previousKeyType

  // Number key
  if (!action) {
    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))

    if (
      displayedNum === '0' ||
      previousKeyType === 'operator' ||
      previousKeyType === 'calculate'
    ) {
      display.textContent = keyContent
    } else {
      display.textContent += keyContent
    }

    calculator.dataset.previousKeyType = 'number'

    // change clear button to CE
    const clearButton = calculator.querySelector('[data-action=clear]')
    clearButton.textContent = 'CE'
  }

  // Operator key
  else if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = displayedNum

    // allow operator chaining
    if (
      firstValue &&
      operator &&
      previousKeyType !== 'operator' &&
      previousKeyType !== 'calculate'
    ) {
      const calcValue = calculate(firstValue, operator, secondValue)
      display.textContent = calcValue
      calculator.dataset.firstValue = calcValue
    } else {
      calculator.dataset.firstValue = displayedNum
    }

    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))
    key.classList.add('is-depressed')

    calculator.dataset.previousKeyType = 'operator'
    calculator.dataset.operator = action
  }

  // Decimal
  else if (action === 'decimal') {
    if (!displayedNum.includes('.')) {
      display.textContent = displayedNum + '.'
    } else if (
      previousKeyType === 'operator' ||
      previousKeyType === 'calculate'
    ) {
      display.textContent = '0.'
    }
    calculator.dataset.previousKeyType = 'decimal'
  }

  // Clear
  else if (action === 'clear') {
    if (key.textContent === 'AC') {
      calculator.dataset.firstValue = ''
      calculator.dataset.modValue = ''
      calculator.dataset.operator = ''
      calculator.dataset.previousKeyType = ''
    } else {
      key.textContent = 'AC'
    }

    display.textContent = '0'

    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))

    calculator.dataset.previousKeyType = 'clear'
  }

  // Calculate
  else if (action === 'calculate') {
    let firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    let secondValue = displayedNum

    if (firstValue) {
      if (previousKeyType === 'calculate') {
        firstValue = displayedNum
        secondValue = calculator.dataset.modValue
      }

      display.textContent = calculate(firstValue, operator, secondValue)
    }

    calculator.dataset.modValue = secondValue
    calculator.dataset.previousKeyType = 'calculate'

    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))
  }
})
