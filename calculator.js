  let expr = '';
    let history = [];
 
    function append(val) {
      if (val === '()') {
        const opens  = (expr.match(/\(/g) || []).length;
        const closes = (expr.match(/\)/g) || []).length;
        expr += opens > closes ? ')' : '(';
      } else {
        expr += val;
      }
      document.getElementById('expr').textContent = expr;
      document.getElementById('result').className = 'display-result';
    }
 
    function deleteLast() {
      expr = expr.slice(0, -1);
      document.getElementById('expr').textContent = expr;
    }
 
    function clearAll() {
      expr = '';
      document.getElementById('expr').textContent = '';
      document.getElementById('result').textContent = '0';
      document.getElementById('result').className = 'display-result';
    }
 
    function calculate() {
      if (!expr) return;
      const resultEl = document.getElementById('result');
      try {
        const raw = math.evaluate(expr);
        const answer = (typeof raw === 'number')
          ? parseFloat(raw.toFixed(10)).toString()
          : raw.toString();
 
        resultEl.textContent = answer;
        resultEl.className = 'display-result';
 
        history.unshift(expr + ' = ' + answer);
        if (history.length > 4) history.pop();
        document.getElementById('history').innerHTML = history
          .map(h => '<div class="history-item">' + h + '</div>').join('');
 
        expr = answer;
        document.getElementById('expr').textContent = '';
      } catch(e) {
        resultEl.textContent = 'Invalid expression';
        resultEl.className = 'display-result error';
      }
    }
 
    document.addEventListener('keydown', e => {
      if (e.key === 'Enter')     { calculate(); return; }
      if (e.key === 'Backspace') { deleteLast(); return; }
      if (e.key === 'Escape')    { clearAll(); return; }
      if (/[\d\+\-\*\/\.\(\)\^%]/.test(e.key)) append(e.key);
    });