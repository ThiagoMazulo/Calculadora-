const input1 = document.getElementById('num1')
const input2 = document.getElementById('num2')
const inputTotal = document.getElementById('total')

function calcular(){
    const val1 = Number(input1.value)
    const val2 = Number(input2.value)
    const total = val1 + val2
    inputTotal.value = total
}