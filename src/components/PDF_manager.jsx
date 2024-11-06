import React from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import PDFList from './PDF_viewer';


const DocumentManager = ({nombre, documento}) => {
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
      

      <h2>{nombre}</h2>

      <div>
        <PDFList documentName={documento}/>
      </div>
      <button onClick={downloadAllPdfs} className="download-all-button">
        Descargar todos los PDFs
      </button>
    </div>
  );
};

export default DocumentManager;
