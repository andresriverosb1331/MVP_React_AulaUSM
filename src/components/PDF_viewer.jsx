import React from 'react';

const DocumentViewer = () => {
  return (
    <div className="document-viewer">
      <h2>Recursos del Curso</h2>
      <ul>
        <li>
          <a
            href="../assets/test.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="document-link"
          >
            Ver PDF: test.pdf ARCHIVO DE PRUEBA
          </a>
        </li>
        <li>
          <a
            href="../assets/placeholder.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="document-link"
          >
            Ver PDF: placeholder
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DocumentViewer;
