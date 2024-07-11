document.getElementById('compressBtn').addEventListener('click', () => {
  const fileInput = document.getElementById('fileInput');
  const resultDiv = document.getElementById('result');
  const downloadLink = document.getElementById('downloadLink');
  
  if (fileInput.files.length === 0) {
    alert('Please select a file to compress');
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    const content = event.target.result;
    const compressed = compressFile(content);
    const blob = new Blob([compressed], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    
    resultDiv.classList.remove('d-none');
    resultDiv.innerText = 'File compressed successfully!';
    
    downloadLink.classList.remove('d-none');
    downloadLink.href = url;
    downloadLink.download = 'compressed.bin';
    downloadLink.innerText = 'Download Compressed File';
  };

  reader.readAsText(file);
});

document.getElementById('decompressBtn').addEventListener('click', () => {
  const fileInput = document.getElementById('fileInput');
  const resultDiv = document.getElementById('result');
  const downloadLink = document.getElementById('downloadLink');
  
  if (fileInput.files.length === 0) {
    alert('Please select a file to decompress');
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    const content = event.target.result;
    const decompressed = decompressFile(content);
    const blob = new Blob([decompressed], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    resultDiv.classList.remove('d-none');
    resultDiv.innerText = 'File decompressed successfully!';
    
    downloadLink.classList.remove('d-none');
    downloadLink.href = url;
    downloadLink.download = 'decompressed.txt';
    downloadLink.innerText = 'Download Decompressed File';
  };

  reader.readAsText(file);
});
