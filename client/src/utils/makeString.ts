export function makeRoundNumber(number : number, fixedNumber : number){
    number = Math.round(number * 10 ** fixedNumber) / (10 ** fixedNumber);
    return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
export function makeCurrencyString(price : number, symbol : string, fixedNumber : number){
    return `${makeRoundNumber(price, fixedNumber)} ${symbol.split('/')[1]}`;
}
export function makeQuantityString(quantity : number, symbol : string, fixedNumber : number){
    const words = symbol.split('/');
    return `${makeRoundNumber(quantity, fixedNumber)} ${words[0]}`;
}
export function makeSymbolWithoutCurrency(symbol : string){
    return symbol.split('/')[0];
}