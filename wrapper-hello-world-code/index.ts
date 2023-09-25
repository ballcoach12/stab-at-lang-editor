import {CodeEditor} from './src/code-editor';

document.addEventListener('DOMContentLoaded', () => {
  console.log(`(hello-world-code) Successfully loaded`);
  const btn = document.getElementById('toggle-theme-btn');
  const codeditor = document.getElementById('code-editor') as CodeEditor;
  
  if(codeditor && btn) {
    btn.onclick = (e) => {
      codeditor.setTheme(codeditor.theme === 'dark' ? 'light' : 'dark');
    }
  }
})