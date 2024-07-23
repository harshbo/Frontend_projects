const htmlEditor = document.getElementById('html-editor');
const cssEditor = document.getElementById('css-editor');
const jsEditor = document.getElementById('js-editor');
const preview = document.getElementById('preview');

function updatePreview() {
    const htmlContent = htmlEditor.value;
    const cssContent = `<style>${cssEditor.value}</style>`;
    const jsContent = `<script>${jsEditor.value}<\/script>`;
    
    const previewContent = `
        ${htmlContent}
        ${cssContent}
        ${jsContent}
    `;
    
    preview.srcdoc = previewContent;
}

htmlEditor.addEventListener('input', updatePreview);
cssEditor.addEventListener('input', updatePreview);
jsEditor.addEventListener('input', updatePreview);
