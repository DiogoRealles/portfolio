export default function footerYear(){
  const dateFooter = document.querySelector('[data-js="yearFooter"]');
  const date = new Date().getFullYear();

  dateFooter.innerHTML = date;
}
