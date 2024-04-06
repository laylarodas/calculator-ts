export function formatCurrency(quantity: number){
    return new Intl.NumberFormat('en-EN', {style: 'currency', currency: 'EUR'}).format(quantity)
}