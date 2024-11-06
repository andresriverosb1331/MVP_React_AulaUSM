import React from 'react';
import { FaFilePdf } from 'react-icons/fa';

const PDFList = ({ documentName }) => {
  const pdfFiles = [
    { name: documentName, url: '/assets/placeholder.pdf' },
    { name: documentName, url: '/assets/test.pdf' },
  ];

  return (
    <ul>
      {pdfFiles.map((file, index) => (
        <li key={index}>
          <a href={file.url} target="_blank" rel="noopener noreferrer">
            {`${file.name} ${index + 1} `}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PDFList;