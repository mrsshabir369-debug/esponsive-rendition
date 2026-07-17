# APEX AGENT — Static Export

Pure HTML/CSS/JS clone. **No build step needed.** Runs directly in any browser.

## Termux Quick Start

```bash
cd static-export
python -m http.server 8080
# Open: http://localhost:8080
```

## Pages
- `index.html` — Landing with welcome popup + animations
- `dashboard.html` — Stats + live terminal + quick actions
- `chat.html` — AI chat (connects to Python backend)
- `scanner.html` — Nmap/SQLMap/Hydra/etc. runner
- `tools.html` — Full tool arsenal grid

## Python Backend Integration

Default backend URL: `http://localhost:9999/api`

Change from browser console:
```js
setApiBase('http://192.168.1.100:9999/api')
```

### Required Python endpoints

```python
# minimal Flask example
from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app)

@app.post('/api/chat')
def chat():
    data = request.json
    prompt = data.get('prompt','')
    # plug in your LLM here (Ollama, OpenAI, etc.)
    return jsonify({'reply': f'AI response to: {prompt}'})

@app.post('/api/tool')
def tool():
    data = request.json
    tool = data.get('tool'); target = data.get('target')
    flags = data.get('options',{}).get('flags','')
    try:
        out = subprocess.check_output(
            f'{tool} {flags} {target}', shell=True, timeout=60,
            stderr=subprocess.STDOUT
        ).decode()
    except Exception as e:
        out = str(e)
    return jsonify({'output': out})

@app.post('/api/stats')
def stats():
    return jsonify({'scans':142,'threats':8,'tools':50,'uptime':'24/7'})

if __name__=='__main__':
    app.run(host='0.0.0.0', port=9999)
```

Run: `pip install flask flask-cors && python server.py`

## Notes
- If backend is offline, UI shows simulated output — never crashes.
- All animations use pure CSS + IntersectionObserver (no framer-motion).
- Mobile responsive · Works in Termux browser · Zero dependencies.
