let pyodideReady = false;
let pyodide;

async function loadPyodideAndPackages() {
    try {
        console.log("Loading Pyodide...");
        pyodide = await loadPyodide();
        pyodideReady = true;
        console.log("Pyodide loaded");
    } catch (error) {
        console.error("Failed to load Pyodide", error);
    }
    await pyodide.loadPackage("numpy");
    await pyodide.loadPackage("scikit-learn");
    await pyodide.loadPackage("pandas");
}

loadPyodideAndPackages();

document.querySelector('.run-btn').addEventListener('click', async function() {
    if (!pyodideReady) {
        alert("Pyodide is still loading. Please try again in a moment.");
        return;
    }

    const inputId = this.getAttribute('data-input-id');
    const outputId = this.getAttribute('data-output-id');
    const output = document.getElementById(outputId);
    let code = document.getElementById(inputId).value;

    // 改行文字を正しく処理
    code = code.replace(/\\n/g, '\n');

    try {
        console.log("Running Python code...");

        // 標準出力をキャプチャする設定
        await pyodide.runPythonAsync(`
            import sys
            from io import StringIO

            # 標準出力をキャプチャするための新しい StringIO オブジェクトを作成
            sys.stdout = StringIO()
        `);

        // Pythonコードの実行
        await pyodide.runPythonAsync(code);

        // キャプチャした標準出力の内容を取得
        const result = await pyodide.runPythonAsync('sys.stdout.getvalue()');

        console.log("Python code executed");
        output.innerHTML = result ? `<pre>${result}</pre>` : '<pre>Code executed successfully, but no output</pre>';
    } catch (error) {
        console.error("Error running Python code:", error);
        output.innerHTML = `<pre style="color: red;">${error}</pre>`;
    }
});

document.querySelector('.reset-btn').addEventListener('click', function() {
    const inputId = this.getAttribute('data-input-id');
    document.getElementById(inputId).value = '';
});
const TAB_STR = '  '
document.addEventListener('keydown', e => {
  if (e.target.tagName !== 'TEXTAREA' || e.keyCode !== 9) return false
  e.preventDefault()
  const slct = { left: e.target.selectionStart, right: e.target.selectionEnd }
  const lineStart = e.target.value.substr(0, slct.left).split('\n').length - 1
  const lineEnd = e.target.value.substr(0, slct.right).split('\n').length - 1
  const lines = e.target.value.split('\n')
  for (const i in lines) {
    if (i < lineStart || i > lineEnd || lines[i] === '') continue
    if (!e.shiftKey) {
      // 行頭にタブ挿入
      lines[i] = TAB_STR + lines[i]
      slct.left += i == lineStart ? TAB_STR.length : 0
      slct.right += TAB_STR.length
    } else if (lines[i].substr(0, TAB_STR.length) === TAB_STR) {
      // 行頭のタブ削除
      lines[i] = lines[i].substr(TAB_STR.length)
      slct.left -= i == lineStart ? TAB_STR.length : 0
      slct.right -= TAB_STR.length
    }
  }
  e.target.value = lines.join('\n')
  e.target.setSelectionRange(slct.left, slct.right)
  return false
});
