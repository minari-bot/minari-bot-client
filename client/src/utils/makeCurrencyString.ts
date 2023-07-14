export function getCurrencyUnitFromSymbol(symbol : string){
    const words = symbol.split('/');
    if(words[1]) return words[1];
    return null;
}
export function makeCurrencyString(price : number, symbol : string, fixedNumber : number){
    price = Math.round(price * 10 ** fixedNumber) / (10 ** fixedNumber);
    return `${String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ${getCurrencyUnitFromSymbol(symbol)}`;
}
export function makeQuantityString(quantity : number, symbol : string, fixedNumber : number){
    const words = symbol.split('/');
    quantity = Math.round(quantity * 10 ** fixedNumber) / (10 ** fixedNumber);
    return `${String(quantity).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ${words[0]}`;

}