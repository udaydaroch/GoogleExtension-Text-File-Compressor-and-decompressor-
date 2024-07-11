// Huffman coding implementation

class Node {
  constructor(char, freq) {
    this.char = char;
    this.freq = freq;
    this.left = null;
    this.right = null;
  }
}

function calculateFrequency(data) {
  const frequency = {};
  for (const char of data) {
    if (!frequency[char]) {
      frequency[char] = 0;
    }
    frequency[char]++;
  }
  return frequency;
}

function buildHuffmanTree(frequency) {
  const heap = Object.entries(frequency).map(([char, freq]) => new Node(char, freq));
  heap.sort((a, b) => a.freq - b.freq);

  while (heap.length > 1) {
    const left = heap.shift();
    const right = heap.shift();
    const merged = new Node(null, left.freq + right.freq);
    merged.left = left;
    merged.right = right;
    heap.push(merged);
    heap.sort((a, b) => a.freq - b.freq);
  }

  return heap[0];
}

function generateHuffmanCodes(node, prefix = '', codebook = {}) {
  if (node) {
    if (node.char !== null) {
      codebook[node.char] = prefix;
    }
    generateHuffmanCodes(node.left, prefix + '0', codebook);
    generateHuffmanCodes(node.right, prefix + '1', codebook);
  }
  return codebook;
}

function compressFile(data) {
  const frequency = calculateFrequency(data);
  const huffmanTree = buildHuffmanTree(frequency);
  const codebook = generateHuffmanCodes(huffmanTree);
  const encodedData = data.split('').map(char => codebook[char]).join('');
  const encodedBytes = encodedData.match(/.{1,8}/g).map(byte => parseInt(byte.padEnd(8, '0'), 2));
  return JSON.stringify({ codebook, encodedBytes });
}

function decompressFile(compressedData) {
  const { codebook, encodedBytes } = JSON.parse(compressedData);
  const reversedCodebook = Object.entries(codebook).reduce((acc, [char, code]) => {
    acc[code] = char;
    return acc;
  }, {});

  const encodedData = encodedBytes.map(byte => byte.toString(2).padStart(8, '0')).join('');
  let code = '';
  let decodedData = '';
  for (const bit of encodedData) {
    code += bit;
    if (reversedCodebook[code]) {
      decodedData += reversedCodebook[code];
      code = '';
    }
  }
  return decodedData;
}
