import React from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const DocumentViewer = () => {
  // Lista de URLs de los PDFs
  const pdfUrls = [
    { name: "test.pdf", url: "../assets/test.pdf" },
    { name: "placeholder.pdf", url: "../assets/placeholder.pdf" }
  ];

  const downloadAllPdfs = async () => {
    const zip = new JSZip();

    // Descargar cada PDF y añadirlo al archivo ZIP
    for (const pdf of pdfUrls) {
      const response = await fetch(pdf.url);
      const blob = await response.blob();
      zip.file(pdf.name, blob);
    }

    // Generar el archivo ZIP y guardarlo
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "Documentos_Curso.zip");
    });
  };

  return (
    <div className="document-viewer">
      <button onClick={downloadAllPdfs} className="download-all-button">
        Descargar todos los PDFs
      </button>

      <h2>Recursos del Curso</h2>
      <ul>
        <li>
          <a
            href="../assets/test.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="document-link"
          >
            Ver archivo de prueba: test.pdf
          </a>
        </li>
        <li>
          <a
            href="../assets/placeholder.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="document-link"
          >
            Ver PDF: placeholder para la visualizacion de documentos.
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DocumentViewer;
