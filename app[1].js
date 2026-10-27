const $=id=>document.getElementById(id);
const T={
fa:{tagline:"شارژ و بسته اینترنت افغانستان",demo:"نسخه آزمایشی",eyebrow:"از فرانسه به افغانستان",heroTitle:"برای عزیزانت شارژ بفرست",heroCopy:"اپراتور را انتخاب کن، شماره را وارد کن و کریدت یا بسته اینترنت را انتخاب کن.",demoNoticeTitle:"حالت آزمایشی:",demoNotice:"هیچ پولی دریافت نمی‌شود و هیچ شارژ واقعی ارسال نمی‌شود.",recipientTitle:"مشخصات دریافت‌کننده",operatorLabel:"اپراتور موبایل",phoneLabel:"شماره موبایل افغانستان",productTitle:"نوع شارژ",airtime:"کریدت",data:"بسته اینترنت",productHelp:"قیمت‌ها نمونه هستند و به تأمین‌کننده واقعی متصل نیستند.",summaryTitle:"خلاصه سفارش",operatorSummary:"اپراتور",phoneSummary:"شماره دریافت‌کننده",productSummary:"محصول",total:"مبلغ نمونه",checkout:"ثبت سفارش آزمایشی",paymentNote:"پرداخت بانکی هنوز فعال نیست. برای فعال‌سازی باید درگاه پرداخت تأییدشده به سرور متصل شود.",newOrder:"سفارش جدید",footerNote:"نسخه نمایشی — بدون پرداخت و ارسال واقعی",phoneError:"شماره را درست وارد کن: ۹ رقم که با 7 شروع شود.",orderCreated:"سفارش ثبت شد",demoResult:"سفارش آزمایشی ذخیره شد. هیچ پولی دریافت نشد و شارژ واقعی ارسال نشد.",cancelled:"پرداخت لغو شد. اگر پرداخت انجام نشده، می‌توانی سفارش تازه بسازی.",success:"پرداخت ثبت شد؛ وضعیت سفارش را بررسی کن.",productsA:[["100 AFN","کریدت ۱۰۰ افغانی","€1.20"],["250 AFN","کریدت ۲۵۰ افغانی","€2.80"],["500 AFN","کریدت ۵۰۰ افغانی","€5.00"],["1000 AFN","کریدت ۱۰۰۰ افغانی","€9.60"]],productsD:[["1 GB","بسته ۱ گیگابایت","€2.00"],["3 GB","بسته ۳ گیگابایت","€4.50"],["5 GB","بسته ۵ گیگابایت","€6.50"],["10 GB","بسته ۱۰ گیگابایت","€11.00"]]},
fr:{tagline:"Crédit mobile et forfaits Internet Afghanistan",demo:"Démo",eyebrow:"De la France vers l’Afghanistan",heroTitle:"Envoyez du crédit à vos proches",heroCopy:"Choisissez l’opérateur, saisissez le numéro et sélectionnez du crédit ou un forfait Internet.",demoNoticeTitle:"Mode démo :",demoNotice:"Aucun paiement n’est encaissé et aucun crédit réel n’est envoyé.",recipientTitle:"Coordonnées du destinataire",operatorLabel:"Opérateur mobile",phoneLabel:"Numéro mobile afghan",productTitle:"Type de recharge",airtime:"Crédit",data:"Forfait Internet",productHelp:"Prix fictifs, non connectés à un fournisseur réel.",summaryTitle:"Récapitulatif",operatorSummary:"Opérateur",phoneSummary:"Numéro du destinataire",productSummary:"Produit",total:"Montant indicatif",checkout:"Créer une commande démo",paymentNote:"Le paiement par carte n’est pas activé. Une solution approuvée doit être connectée au serveur.",newOrder:"Nouvelle commande",footerNote:"Démo — sans paiement ni recharge réelle",phoneError:"Saisissez un numéro valide : 9 chiffres commençant par 7.",orderCreated:"Commande créée",demoResult:"Commande de démo enregistrée. Aucun paiement encaissé et aucune recharge réelle envoyée.",cancelled:"Paiement annulé. Vous pouvez créer une nouvelle commande.",success:"Paiement enregistré ; vérifiez le statut de la commande.",productsA:[["100 AFN","Crédit 100 AFN","€1.20"],["250 AFN","Crédit 250 AFN","€2.80"],["500 AFN","Crédit 500 AFN","€5.00"],["1000 AFN","Crédit 1 000 AFN","€9.60"]],productsD:[["1 GB","Forfait 1 Go","€2.00"],["3 GB","Forfait 3 Go","€4.50"],["5 GB","Forfait 5 Go","€6.50"],["10 GB","Forfait 10 Go","€11.00"]]}
};
let lang="fa",kind="airtime",products=[],selectedIndex=2,config={appMode:"demo"};
const ops={Roshan:{fa:"روشن",fr:"Roshan"},AWCC:{fa:"افغان بیسیم",fr:"AWCC"},Etisalat:{fa:"اتصالات",fr:"Etisalat"},Salaam:{fa:"سلام",fr:"Salaam"},ATOMA:{fa:"اتوما",fr:"ATOMA"}};
function tr(k){return T[lang][k]||k}
function currentProducts(){return T[lang][kind==="airtime"?"productsA":"productsD"]}
function applyLang(){
 document.documentElement.lang=lang==="fa"?"fa":"fr";document.documentElement.dir=lang==="fa"?"rtl":"ltr";
 $("langToggle").textContent=lang==="fa"?"Français":"دری";
 document.querySelectorAll("[data-i18n]").forEach(e=>{if(T[lang][e.dataset.i18n])e.textContent=T[lang][e.dataset.i18n]});
 $("modePill").textContent=tr("demo");renderProducts();updateSummary();
}
function renderProducts(){
 const list=currentProducts();$("products").innerHTML="";
 list.forEach((p,i)=>{const b=document.createElement("button");b.type="button";b.className="product-card"+(i===selectedIndex?" selected":"");b.setAttribute("aria-pressed",i===selectedIndex?"true":"false");
 for(const [tag,txt] of [["strong",p[0]],["span",p[1]],["b",p[2]]]){const e=document.createElement(tag);e.textContent=txt;b.appendChild(e)}
 b.onclick=()=>{selectedIndex=i;renderProducts();updateSummary()};$("products").appendChild(b)});
}
function updateSummary(){
 $("summaryOperator").textContent=ops[$("operator").value][lang];
 const phone=$("phone").value.replace(/\D/g,"");$("summaryPhone").textContent=phone?"+93 "+phone:"+93 —";
 const p=currentProducts()[selectedIndex]||currentProducts()[0];$("summaryProduct").textContent=p[1];$("summaryPrice").textContent=p[2];
}
document.querySelectorAll(".segment").forEach(b=>b.onclick=()=>{kind=b.dataset.kind;selectedIndex=kind==="airtime"?2:0;document.querySelectorAll(".segment").forEach(x=>x.classList.toggle("active",x===b));renderProducts();updateSummary()});
$("langToggle").onclick=()=>{lang=lang==="fa"?"fr":"fa";applyLang()};
$("operator").onchange=updateSummary;
$("phone").oninput=()=>{$("phone").value=$("phone").value.replace(/\D/g,"").slice(0,9);$("phoneError").hidden=true;updateSummary()};
$("checkout").onclick=async()=>{
 const phone=$("phone").value.trim();if(!/^7\d{8}$/.test(phone)){$("phoneError").textContent=tr("phoneError");$("phoneError").hidden=false;$("phone").focus();return}
 const p=currentProducts()[selectedIndex];const all=[...T.fa.productsA,...T.fa.productsD];const kindIndex=(kind==="airtime"?selectedIndex:4+selectedIndex);
 const ids=["airtime-100","airtime-250","airtime-500","airtime-1000","data-1gb","data-3gb","data-5gb","data-10gb"];
 const button=$("checkout");button.disabled=true;button.textContent=lang==="fa"?"در حال ثبت…":"Création…";
 try{
  const r=await fetch("/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phone,operator:$("operator").value,productId:ids[kindIndex],language:lang})});
  const data=await r.json();if(!r.ok)throw new Error(data.error||"Request failed");
  if(data.checkoutUrl){window.location.href=data.checkoutUrl;return}
  $("resultTitle").textContent=tr("orderCreated");$("resultText").textContent=(lang==="fa"?"شماره سفارش: ":"Référence : ")+data.orderId;
  $("resultNote").textContent=tr("demoResult");$("result").hidden=false;$("result").scrollIntoView({behavior:"smooth",block:"center"});
 }catch(e){$("phoneError").textContent=e.message;$("phoneError").hidden=false}
 finally{button.disabled=false;button.textContent=tr("checkout")}
};
$("newOrder").onclick=()=>{$("result").hidden=true;$("phone").value="";updateSummary();window.scrollTo({top:0,behavior:"smooth"})};
$("year").textContent=new Date().getFullYear();
(async()=>{try{const r=await fetch("/api/config");config=await r.json();if(config.paymentConfigured&&config.appMode!=="demo"){$("checkout").textContent=lang==="fa"?"رفتن به پرداخت امن":"Payer par carte";$("paymentNote").textContent=lang==="fa"?"پرداخت از طریق صفحه امن Stripe انجام می‌شود. شارژ واقعی هنوز تا اتصال API تأمین‌کننده غیرفعال است.":"Le paiement se fait via Stripe Checkout. La recharge réelle reste désactivée jusqu’à l’intégration du fournisseur.";}}catch{}applyLang();
 const params=new URLSearchParams(location.search);if(params.get("payment")==="cancelled"){$("result").hidden=false;$("resultTitle").textContent=tr("orderCreated");$("resultText").textContent=tr("cancelled");$("resultNote").textContent="";}else if(params.get("payment")==="success"&&params.get("order")){$("result").hidden=false;$("resultTitle").textContent=tr("orderCreated");$("resultText").textContent=tr("success");$("resultNote").textContent=lang==="fa"?"بازگشت از صفحه پرداخت به‌تنهایی اثبات نهایی پرداخت نیست؛ وضعیت از سرور و webhook بررسی می‌شود.":"Le retour du navigateur ne prouve pas à lui seul le paiement ; le serveur vérifie le webhook.";}})();
