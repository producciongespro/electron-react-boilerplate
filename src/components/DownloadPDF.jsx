import React from "react";
import { jsPDF } from "jspdf";
import { formatDate } from "../utils/utils";

export default function DownloadPDF() {
  const informe = {
    titulo: "Informe final de visita",
    fecha: formatDate(new Date(), "dd/mm/yyyy"),
    cuerpo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veritatis totam placeat sunt earum facilis repellendus voluptatem, corporis accusantium! Quas qui ipsam fuga ratione amet, expedita officiis aut omnis aliquam?",
    recomendacion: "Optio veritatis totam placeat sunt earum facilis repellendus voluptatem, corporis accusantium! Quas qui ipsam fuga ratione amet.",
    usuario: "Pepito Mora"
  };

  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 10;
    const textWidth = pageWidth - margin * 2; // Adjust the margin to fit text better
    const lineHeight = 10; // Approximate line height in the PDF

    // Set text color to green for the title
    doc.setTextColor(0, 128, 0);
    doc.setFontSize(22); // Equivalent to H1
    doc.text(informe.titulo, margin, 20);

    // Draw a purple line between the title and the date
    doc.setDrawColor(128, 0, 128);
    doc.line(margin, 25, pageWidth - margin, 25);

    // Add a line break (space) between the decorative line and the date
    const spaceBetweenLineAndDate = 10;

    // Set text color back to black for the rest of the text
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12); // Default text size
    doc.text(`Fecha: ${informe.fecha}`, margin, 25 + spaceBetweenLineAndDate);

    doc.setFontSize(16); // Equivalent to H3
    doc.text(`Usuario: ${informe.usuario}`, margin, 35 + spaceBetweenLineAndDate);

    doc.setFontSize(12); // Default text size
    const bodyText = doc.splitTextToSize(informe.cuerpo, textWidth);
    const bodyTextYPosition = 45 + spaceBetweenLineAndDate;
    doc.text(bodyText, margin, bodyTextYPosition);

    // Calculate the new vertical position for recText
    const bodyTextHeight = bodyText.length * lineHeight;
    const recTextYPosition = bodyTextYPosition + bodyTextHeight + 5; // Adding 5 for extra space

    doc.setFontSize(16); // Equivalent to H3
    doc.text("Conclusión:", margin, recTextYPosition);

    doc.setFontSize(12); // Default text size
    const recText = doc.splitTextToSize(informe.recomendacion, textWidth);
    doc.text(recText, margin, recTextYPosition + lineHeight);
    
    doc.save("informe.pdf");
  };

  return <button onClick={handleDownloadPdf}>Descarga informe</button>;
}
