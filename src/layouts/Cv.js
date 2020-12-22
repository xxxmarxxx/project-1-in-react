import React from "react";
import "../styles/Cv.css";
import PageOne from "../componets/Cv_page_one";
import PageSecond from "../componets/Cv_page_second";
import { Document } from 'react-pdf';

const Cv = () => {
  return (
    <>
      <PageOne />
      <PageSecond />
      <Document 
      file="../pdf/Finales Zertifikat_FbW25-2.pdf"
      
      >
        </Document>
    </>
  );
};

export default Cv;
