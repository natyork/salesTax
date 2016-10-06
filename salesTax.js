
var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {

  for (var index of salesData) {

    var companyName = index.name;
    var subTotal = add(index.sales)
    index.subTotal = subTotal;
  }
  for (var index of salesData) {

    var province = index.province;
    var taxRate = salesTaxRates[province];



    var subTax = (taxRate * index.subTotal);
    index.subTax = subTax;

    // Uncomment this to see full array of
    // updated companySalesData
    //console.log(index);

  }

  function add(salesArray) {
    var total = 0;
    for (var i in salesArray) {
      total+= salesArray[i];
    }
    return total;
  }

  var finalObj = {};
  for (var index of salesData) {
    if (!finalObj[index.name]) {
      finalObj[index.name] = {};
      finalObj[index.name].totalSales = 0;
      finalObj[index.name].totalTaxes = 0;
    }
      finalObj[index.name].totalSales += index.subTotal;
      finalObj[index.name].totalTaxes += index.subTax;

  }
  return finalObj;
}
console.log(calculateSalesTax(companySalesData,salesTaxRates));

//lovingly coded by nat and brett