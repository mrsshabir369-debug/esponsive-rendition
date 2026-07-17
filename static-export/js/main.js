// APEX AGENT - Main JS (no build step needed)

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Welcome popup
window.addEventListener('load', () => {
  const p = document.getElementById('welcomePopup');
  if (p && !sessionStorage.getItem('apex_seen')) {
    setTimeout(() => p.classList.add('on'), 900);
  }
});
function closePopup(){ 
  document.getElementById('welcomePopup')?.classList.remove('on');
  sessionStorage.setItem('apex_seen','1');
}

// Terminal typing
const TERM_LINES = [
  "nmap -sV -A target.com",
  "sqlmap -u 'https://target.com?id=1' --dbs",
  "hydra -l admin -P wordlist.txt ssh://192.168.1.1",
  "apex ai --mode=dan 'find rce in this code'"
];
function initTerminal(){
  const el = document.getElementById('termLine');
  if (!el) return;
  let idx = 0, char = 0, deleting = false;
  const tick = () => {
    const line = TERM_LINES[idx];
    if (!deleting) {
      el.textContent = line.slice(0, char++);
      if (char > line.length) { deleting = true; setTimeout(tick, 1400); return; }
    } else {
      el.textContent = line.slice(0, char--);
      if (char < 0) { deleting = false; idx = (idx+1) % TERM_LINES.length; }
    }
    setTimeout(tick, deleting ? 30 : 60);
  };
  tick();
}
initTerminal();

// Mobile nav toggle (if used)
function toggleNav(){ document.getElementById('mobileNav')?.classList.toggle('on'); }
window.closePopup = closePopup;
window.toggleNav = toggleNav;
