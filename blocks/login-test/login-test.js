export default function decorate(block) {
  const iframe = document.createElement('iframe');
  iframe.src = 'http://localhost:4502/content/dam/formsanddocuments/form-without-model/jcr:content?wcmmode=disabled'; 
  iframe.width = '100%';
  iframe.height = '600';
  iframe.style.border = 'none';

  block.innerHTML = ''; // Clear placeholder text
  block.appendChild(iframe);
}
