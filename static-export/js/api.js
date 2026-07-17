// APEX AGENT - Python Backend Bridge
// Configure your Python backend URL here
const API_BASE = localStorage.getItem('apex_api') || 'http://localhost:9999/api';

function setApiBase(url){ localStorage.setItem('apex_api', url); location.reload(); }
window.setApiBase = setApiBase;

async function apiCall(path, body){
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body || {})
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch(e){
    return { error: e.message, offline: true };
  }
}

async function chatWithAI(message, history=[]){
  const r = await apiCall('/chat', { prompt: message, history });
  if (r.offline) {
    // Fallback: canned response so UI still works standalone
    return { reply: `[OFFLINE MODE] Backend not connected at ${API_BASE}. Start your Python server or set new URL via setApiBase('http://...'). Your message: "${message}"` };
  }
  return r;
}

async function runTool(tool, target, options={}){
  const r = await apiCall('/tool', { tool, target, options });
  if (r.offline) {
    return { output: `[SIMULATED - backend offline]\n$ ${tool} ${target}\n\nConnecting to ${target}...\nScanning ports...\n[+] Port 22/tcp open  ssh\n[+] Port 80/tcp open  http\n[+] Port 443/tcp open https\n\nConnect Python backend at ${API_BASE} for real execution.` };
  }
  return r;
}

async function getStats(){
  const r = await apiCall('/stats', {});
  if (r.offline) return { scans: 142, threats: 8, tools: 50, uptime: '24/7' };
  return r;
}

window.chatWithAI = chatWithAI;
window.runTool = runTool;
window.getStats = getStats;
