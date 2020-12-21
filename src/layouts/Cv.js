import React from "react";
import "../styles/Cv.css";
import PageOne from "../componets/Cv_page_one";
import PageSecond from "../componets/Cv_page_second";
import { PDFViewer } from "@react-pdf/renderer";
// import { MyDocument } from '../pdf/Finales Zertifikat_FbW25-2.pdf'

const Cv = () => {
  return (
    <>
      <PageOne />
      <PageSecond />
      {/* <PDFViewer /> */}
     
    </>
  );
};

export default Cv;
