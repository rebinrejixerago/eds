export default function decorate(block) {
  const iframe = document.createElement('iframe');
  iframe.src = 'https://medium.com/@toimrank/edge-delivery-services-overview-5c32b974321a'; 
  iframe.width = '100%';
  iframe.height = '600';
  iframe.style.border = 'none';

  block.innerHTML = ''; // Clear placeholder text
  block.appendChild(iframe);
}
