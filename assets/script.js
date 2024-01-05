// Klaviaturadan ədədləri almaq üçün prompt-dan istifadə edirik
let yigilanBal = parseFloat(prompt("Semestr ərzində yığılan balı daxil edin:"));
let imtahanBal = parseFloat(prompt("İmtahan balını daxil edin:"));

// Bal hesablaması
let cem = yigilanBal + imtahanBal;

// Tələbənin növbəti sessiyaya buraxılmasını təyin etmək
if (yigilanBal >= 40 && imtahanBal >= 60 && cem >= 51 && cem <= 100) {
  console.log("Tələbə növbəti sessiyaya buraxılmağa nail oldu.");
} else {
  console.log("Tələbə növbəti sessiyaya buraxılmamalıdır.");
}