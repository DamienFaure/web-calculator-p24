// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============
document.addEventListener('DOMContentLoaded', function() {
  const calculator = document.querySelector('.calculator')
  const keys = calculator.querySelector('.calculator__keys')
  const display = calculator.querySelector('.calculator__display')
  calculator.dataset.operator = 'none'
  let a=0;

  keys.addEventListener('click', touch => {
    if (touch.target.matches('button')) {
      const key = touch.target
      const action = key.dataset.action
      const keyContent = key.textContent
      const displayedNum = display.textContent

    if (!action) {console.log(a)
        if (displayedNum === '0' || a===1) {
          display.textContent = keyContent; a=0;
        } else {
          display.textContent = displayedNum + keyContent
        }
      }

      if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
        calculator.dataset.previousKeyType = 'operator'
        calculator.dataset.firstValue = displayedNum
        calculator.dataset.operator = action
        a=1
        console.log(a)
      }

      if (action === 'decimal') {
        display.textContent = displayedNum + '.'
      }

      if (action === 'clear') {
        display.textContent = '0'
        calculator.dataset.firstValue = '0'
      }

      if (action === 'calculate') {
        const firstValue = calculator.dataset.firstValue
        const operator = calculator.dataset.operator
        const secondValue = displayedNum
        a=1
        console.log(a)

        display.textContent = calculate(firstValue, operator, secondValue)
        calculator.dataset.firstValue = secondValue
        calculator.dataset.operator = 'none'
      }
    }
  })

  function calculate(firstValue, operator, secondValue) {
    firstValue = parseFloat(firstValue)
    secondValue = parseFloat(secondValue)

    if (operator === 'add') return firstValue + secondValue
    if (operator === 'subtract') return firstValue - secondValue
    if (operator === 'multiply') return firstValue * secondValue
    if (operator === 'divide') return firstValue / secondValue
    if (operator === 'none') return secondValue
  }
})