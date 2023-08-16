window.onload = function() {
  var link = document.createElement('a');
  link.href = 'https://www.hawaiicommunityfoundation.org/maui-strong';
  link.textContent = 'HAWAII HAWAII HAWAII HAWAII HAWAII';
  
  var h1 = document.createElement('h1');
  h1.appendChild(link);
  
  document.body.appendChild(h1);
};
