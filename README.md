# File Compressor Chrome Extension

## Overview

The File Compressor Chrome Extension allows users to compress and decompress files using Huffman coding. This extension provides a simple and efficient way to handle file compression directly within your browser.

## Features

- Compress files using Huffman coding.
- Decompress files that were compressed using the extension.
- Download compressed and decompressed files.
- User-friendly interface with Bootstrap styling.

## How It Works

1. **Compression**: Select a file to compress. The extension reads the file, applies Huffman coding to compress it, and provides an option to download the compressed file.
2. **Decompression**: Select a compressed file. The extension reads the file, decompresses it using Huffman decoding, and provides an option to download the decompressed file.

## Technologies Used

- **HTML**: Structure of the popup interface.
- **CSS**: Basic styling along with Bootstrap for enhanced UI.
- **JavaScript**: Logic for file handling, Huffman coding, and Chrome extension functionality.
- **Chrome Extensions API**: Integration with Chrome browser.

## Getting Started

### Prerequisites

- Google Chrome browser

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/file-compressor-extension.git

2. **Navigate to the cloned directory**
   ``` bash
   cd {name of directory}
3. **Open Chrome and go to `chrome://extensions/`
4. **Enable "Developer mode" by clicking the toggle switch in the top right corner**
5. **Click the "Load Unpacked" buttton and select the cloned directory.**

## Usage 
1. Click on the File COmpression icon in the Chrome toolbar.
2. In the popup windwo:
   - **To Compress a File:**
     - Click the "Choose File" Button and select the file you want to compression ( must be .txt file)
     - Click the "Compress" button.
     - Once the file is compressed, a download button will appear to download the compressed file.
   - **To Decompress a File**
     - CLick the "Choose File" button and select the compressed file you want to decompress.
     - Click the "Decompress" button.
     - Once the file is decompressed, a download link will appear to download  the decompressed file.
  
