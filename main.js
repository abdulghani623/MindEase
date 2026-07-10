/* MindEase — main.js | Founded by Abdul Ghani */
'use strict';

/* ---- Dark Mode ---- */
(function(){
  var t = localStorage.getItem('me-theme') || 'light';
  document.documentElement.setAttribute('data-theme', t);
})();

function toggleTheme(){
  var cur = document.documentElement.getAttribute('data-theme');
  var nxt = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', nxt);
  localStorage.setItem('me-theme', nxt);
  var btn = document.getElementById('theme-btn');
  if(btn) btn.textContent = nxt === 'dark' ? '☀️' : '🌙';
}

/* ---- Mobile Nav ---- */
function toggleNav(){
  var el = document.getElementById('nav-links');
  if(!el) return;
  var open = el.classList.toggle('open');
  var btn = document.querySelector('.hamburger');
  if(btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
}
// Close nav on outside click
document.addEventListener('click', function(e){
  var nav = document.getElementById('nav-links');
  var ham = document.querySelector('.hamburger');
  if(nav && nav.classList.contains('open') && !nav.contains(e.target) && ham && !ham.contains(e.target)){
    nav.classList.remove('open');
  }
});

/* ---- Reading Progress Bar ---- */
function initProgress(){
  var bar = document.getElementById('progress-bar');
  if(!bar) return;
  function update(){
    var h = document.body.scrollHeight - window.innerHeight;
    bar.style.width = h > 0 ? (window.scrollY / h * 100) + '%' : '0%';
  }
  window.addEventListener('scroll', update, {passive:true});
  update();
}

/* ---- FAQ Accordion ---- */
function initFAQ(){
  document.querySelectorAll('.faq-q').forEach(function(btn){
    btn.addEventListener('click', function(){
      var ans = btn.nextElementSibling;
      var open = ans.classList.contains('open');
      // close all
      document.querySelectorAll('.faq-a').forEach(function(a){ a.classList.remove('open'); });
      document.querySelectorAll('.faq-q').forEach(function(b){ b.setAttribute('aria-expanded','false'); });
      if(!open){
        ans.classList.add('open');
        btn.setAttribute('aria-expanded','true');
      }
    });
  });
}

/* ---- Blog Search ---- */
var BLOG_POSTS = [
  {title:'What is Anxiety Disorder?', url:'anxiety-disorder.html', cat:'Anxiety', keywords:'anxiety disorder gad panic social worry fear'},
  {title:'Symptoms of Depression', url:'depression-symptoms.html', cat:'Depression', keywords:'depression sadness hopeless fatigue mood'},
  {title:'How to Reduce Stress Naturally', url:'stress-management.html', cat:'Stress', keywords:'stress management natural relief exercise breathing'},
  {title:'Panic Attack vs Anxiety Attack', url:'panic-attack-vs-anxiety-attack.html', cat:'Anxiety', keywords:'panic attack anxiety difference symptoms'},
  {title:'CBT Techniques for Anxiety', url:'cbt-techniques-anxiety.html', cat:'Therapy', keywords:'cbt cognitive behavioral therapy techniques exercises'},
  {title:'How to Improve Sleep Quality', url:'improve-sleep-quality.html', cat:'Sleep', keywords:'sleep insomnia quality habits hygiene better'},
  {title:'Signs of Burnout', url:'signs-of-burnout.html', cat:'Burnout', keywords:'burnout signs symptoms work stress exhaustion'},
  {title:'Social Anxiety Symptoms', url:'social-anxiety-symptoms.html', cat:'Anxiety', keywords:'social anxiety symptoms shyness fear people'},
  {title:'Mindfulness for Beginners', url:'mindfulness-for-beginners.html', cat:'Mindfulness', keywords:'mindfulness meditation beginner guide practice'},
  {title:'When Should You See a Therapist?', url:'when-to-see-a-therapist.html', cat:'Therapy', keywords:'therapist psychologist when help professional'}
];

function initSearch(){
  var input = document.getElementById('blog-search');
  var results = document.getElementById('search-results');
  if(!input || !results) return;
  input.addEventListener('input', function(){
    var q = input.value.trim().toLowerCase();
    results.innerHTML = '';
    if(q.length < 2) return;
    var matches = BLOG_POSTS.filter(function(p){
      return p.title.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q) || p.keywords.includes(q);
    });
    if(matches.length === 0){
      results.innerHTML = '<p style="color:var(--txt3);font-size:14px;padding:12px 0">No articles found for "'+q+'". Try different keywords.</p>';
      return;
    }
    var html = '<div class="related-grid">' + matches.map(function(p){
      return '<a href="'+p.url+'" class="related-card"><div class="rc-cat">'+p.cat+'</div><h4>'+p.title+'</h4></a>';
    }).join('') + '</div>';
    results.innerHTML = html;
  });
}

/* ---- Newsletter ---- */
function handleNewsletter(e, successId){
  e.preventDefault();
  var ok = document.getElementById(successId || 'nl-ok');
  if(ok){ ok.style.display = 'block'; ok.textContent = '✅ Thank you! You have been subscribed.'; }
  e.target.reset();
  return false;
}

/* ---- Contact Form ---- */
function handleContact(e){
  e.preventDefault();
  var ok = document.getElementById('contact-ok');
  if(ok){ ok.style.display = 'block'; }
  e.target.reset();
  return false;
}

/* ---- Share ---- */
function share(platform){
  var url = encodeURIComponent(location.href);
  var title = encodeURIComponent(document.title);
  var map = {
    twitter:'https://twitter.com/intent/tweet?url='+url+'&text='+title,
    facebook:'https://www.facebook.com/sharer/sharer.php?u='+url,
    whatsapp:'https://wa.me/?text='+title+'%20'+url,
    linkedin:'https://www.linkedin.com/sharing/share-offsite/?url='+url
  };
  if(platform === 'copy'){
    navigator.clipboard.writeText(location.href).then(function(){
      alert('Link copied to clipboard!');
    });
    return;
  }
  if(map[platform]) window.open(map[platform], '_blank', 'width=620,height=420,noopener');
}

/* ---- Set theme icon on load ---- */
function setThemeIcon(){
  var btn = document.getElementById('theme-btn');
  if(btn) btn.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
}

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', function(){
  setThemeIcon();
  initProgress();
  initFAQ();
  initSearch();
});
