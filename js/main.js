// Smooth scroll
document.querySelectorAll(‘a[href^=”#”]’).forEach(a=>a.addEventListener(‘click’,function(e){
e.preventDefault();
const t=document.querySelector(this.getAttribute(‘href’));
t&&t.scrollIntoView({behavior:‘smooth’,block:‘start’})
}));

// Header shadow on scroll
const header=document.querySelector(’.header’);
let lastScroll=0;

window.addEventListener(‘scroll’,()=>{
const scroll=window.pageYOffset;
header.style.boxShadow=scroll>100?‘0 4px 6px rgba(0,0,0,.1)’:‘0 1px 3px rgba(0,0,0,.1)’;
lastScroll=scroll
});

// Animate on scroll
const obs=new IntersectionObserver((entries)=>{
entries.forEach(e=>{
if(e.isIntersecting){
e.target.style.opacity=‘1’;
e.target.style.transform=‘translateY(0)’
}
})
},{threshold:.1,rootMargin:‘0px 0px -50px 0px’});

document.querySelectorAll(’.service-card’).forEach((card,i)=>{
card.style.opacity=‘0’;
card.style.transform=‘translateY(20px)’;
card.style.transition=`all .6s ease ${i*.1}s`;
obs.observe(card)
});

// Email validation
const emailInput=document.querySelector(’#email’);
if(emailInput){
emailInput.addEventListener(‘blur’,function(){
const pattern=/^[^\s@]+@[^\s@]+.[^\s@]+$/;
this.style.borderColor=this.value&&!pattern.test(this.value)?’#ef4444’:’’
})
}

// Track clicks (for analytics if needed)
document.querySelectorAll(‘a[href^=“tel:”]’).forEach(l=>l.addEventListener(‘click’,()=>console.log(‘Phone clicked’)));
const wa=document.querySelector(’.whatsapp-btn’);
if(wa)wa.addEventListener(‘click’,()=>console.log(‘WhatsApp clicked’));

// Form success message
const form=document.querySelector(’.contact-form’);
if(form){
form.addEventListener(‘submit’,function(e){
console.log(‘Form submitted’);
// Netlify handles the rest
})
}

console.log(‘Keser Hausmeisterservice - Ready’);
