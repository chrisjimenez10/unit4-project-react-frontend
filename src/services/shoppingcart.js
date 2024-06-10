//Total Price Logic

//Functions
const arrayOfPriceService = (array) => {
    let arrayWithPricesOnly;
    arrayWithPricesOnly = array.map((item)=>{
        return parseFloat(item.price);
      });
      return arrayWithPricesOnly;
};

const sumOfPriceService = (array) => {
    let singleSumValue;
    singleSumValue = array.reduce((accumulator, currentValue)=>{
        return (accumulator + currentValue);
      }, 0);
      return singleSumValue;
};

//Export
export {arrayOfPriceService, sumOfPriceService};