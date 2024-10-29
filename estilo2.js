// script.js
let totalPago = 0;

function calcularPago() {
    const cupcake = parseInt(document.getElementById('cupcake').value) || 0;
    const minicake = parseInt(document.getElementById('minicake').value) || 0;
    const donas = parseInt(document.getElementById('donas').value) || 0;
    const volovanes = parseInt(document.getElementById('Volovanes').value) || 0;
    const empanadas = parseInt(document.getElementById('Empanadas').value) || 0;
    const miniPizzas = parseInt(document.getElementById('Mini Pizzas').value) || 0;
    const chocoBombasCafe = parseInt(document.getElementById('Choco Bombas de Cafe').value) || 0;
    const chocoBombasCocoa = parseInt(document.getElementById('Choco Bombas de Cocoa').value) || 0;
    const chocoBombasBayles = parseInt(document.getElementById('Choco Bombas de Bayles').value) || 0;
    const kit2 = parseInt(document.getElementById('Galletas Kit 2').value) || 0;
    const kit3 = parseInt(document.getElementById('Galletas Kit 3').value) || 0;
    const unitario = parseInt(document.getElementById('Galletas Unitario').value) || 0;
    const caja = parseInt(document.getElementById('Galletas Caja').value) || 0;

    const totalProductos = cupcake + minicake + donas + volovanes + empanadas + miniPizzas + chocoBombasCafe + chocoBombasCocoa + chocoBombasBayles + kit2 + kit3 + unitario + caja;
    totalPago = (cupcake * 10) + (minicake * 25) + (donas * 12) + (volovanes * 10) + (empanadas * 15) + (miniPizzas * 15) + (chocoBombasCafe * 16) + (chocoBombasCocoa * 16) + (chocoBombasBayles * 16) + (kit2 * 12) + (kit3 * 15) + (unitario * 8) + (caja * 25);

    document.getElementById('totalProductos').textContent = "Total Productos: " + totalProductos;
    document.getElementById('totalPago').textContent = "Total a Pagar: Q" + totalPago;
}

function realizarCobro() {
    const ingresoEfectivo = parseInt(document.getElementById('ingresoEfectivo').value) || 0;
    const cambio = ingresoEfectivo - totalPago;

    document.getElementById('cambio').textContent = "Cambio: Q" + cambio;
}


