
const salesData = [
  { name: "East (Matt)", sales: [45.00, 50.00, 47.00] },
  { name: "West (Mike)", sales: [95.00, 73.00, 40.00] },
  { name: "Westshore (Mark)", sales: [10.00, 32.00, 24.00] },
  { name: "Metro (Milt)", sales: [86.00, 74.00, 80.00] },
];

function salesByPerson() {
  let result = "";
  for (const entry of salesData) {
    const totalSales = entry.sales.reduce((acc, monthSale) => acc + monthSale, 0);
    result += `${entry.name}: $${totalSales.toFixed(2)}\n`;
  }
  alert("Total Sales by Person/Campus (Q1):\n" + result);
}

function bestAndWorst() {
  let bestPerson = "";
  let worstPerson = "";
  let bestSales = -1;
  let worstSales = Number.MAX_VALUE;

  for (const entry of salesData) {
    const totalSales = entry.sales.reduce((acc, monthSale) => acc + monthSale, 0);
    if (totalSales > bestSales) {
      bestSales = totalSales;
      bestPerson = entry.name;
    }
    if (totalSales < worstSales) {
      worstSales = totalSales;
      worstPerson = entry.name;
    }
  }

  alert(`Best Salesperson: ${bestPerson} ($${bestSales.toFixed(2})\nWorst Salesperson: ${worstPerson} ($${worstSales.toFixed(2})`);
}

function commissionsByMonth() {
  let result = "";
  for (const entry of salesData) {
    const totalSales = entry.sales.reduce((acc, monthSale) => acc + monthSale, 0);
    const totalCommissions = (totalSales * 0.13).toFixed(2);
    result += `${entry.name}: $${totalCommissions}\n`;
  }
  alert("Total Commissions by Person/Campus (Q1):\n" + result);
}
