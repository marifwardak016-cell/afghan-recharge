// Demo catalogue only. Do not use these prices for real sales.
// In live mode, replace this module with a provider quote/catalog call based on official API docs.
const demoProducts = {
  airtime: [
    { id: "airtime-100", kind: "airtime", label_fa: "کریدت ۱۰۰ افغانی", label_fr: "Crédit 100 AFN", amount_afn: 100, price_eur_cents: 120 },
    { id: "airtime-250", kind: "airtime", label_fa: "کریدت ۲۵۰ افغانی", label_fr: "Crédit 250 AFN", amount_afn: 250, price_eur_cents: 280 },
    { id: "airtime-500", kind: "airtime", label_fa: "کریدت ۵۰۰ افغانی", label_fr: "Crédit 500 AFN", amount_afn: 500, price_eur_cents: 500 },
    { id: "airtime-1000", kind: "airtime", label_fa: "کریدت ۱۰۰۰ افغانی", label_fr: "Crédit 1 000 AFN", amount_afn: 1000, price_eur_cents: 960 }
  ],
  data: [
    { id: "data-1gb", kind: "data", label_fa: "بسته ۱ گیگابایت", label_fr: "Forfait 1 Go", amount_afn: null, data_label: "1 GB", price_eur_cents: 200 },
    { id: "data-3gb", kind: "data", label_fa: "بسته ۳ گیگابایت", label_fr: "Forfait 3 Go", amount_afn: null, data_label: "3 GB", price_eur_cents: 450 },
    { id: "data-5gb", kind: "data", label_fa: "بسته ۵ گیگابایت", label_fr: "Forfait 5 Go", amount_afn: null, data_label: "5 GB", price_eur_cents: 650 },
    { id: "data-10gb", kind: "data", label_fa: "بسته ۱۰ گیگابایت", label_fr: "Forfait 10 Go", amount_afn: null, data_label: "10 GB", price_eur_cents: 1100 }
  ]
};
function listProducts() {
  return [...demoProducts.airtime, ...demoProducts.data];
}
function getProduct(id) {
  return listProducts().find(p => p.id === id);
}
module.exports = { listProducts, getProduct };
