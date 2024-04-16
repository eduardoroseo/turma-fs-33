document.getElementById("btnSoma").addEventListener("click", function() {
    const num1 = document.getElementById("num1").value
    const num2 = document.getElementById("num2").value

    const resultado = Number(num1) + parseInt(num2)

    document.getElementById("resultado").innerHTML = `
        O resultado é: ${resultado}
    `

    document.getElementById("num1").value = ''
    document.getElementById("num2").value = ''
})