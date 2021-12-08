import React from 'react';
import ReactDOM from 'react-dom';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { PDFDocument } from './PDFDocument';
import useFetch from './useFetch';

const info = {
  title: "ISO-5055 Compliance Report",
  appName: "ISO5055",
  version: "MyVersion",
  castAIP: "8.3.29",
  date: "Apr 26 2021",
}

function App() {
  const data = useFetch('http://localhost:7000/data');

  return (
    <div className="App">
      {data &&  <PDFDownloadLink 
        document = {<PDFDocument info={info} data={data} />}
        filename = "test.pdf"
        style = {{
          textDecoration: "none",
          padding: "10px",
          color: "#ffffff",
          backgroundColor: "#365F91",
          border: "1px solid #365F91"
        }}
      >
        Download
      </PDFDownloadLink>}
      {/* <PDFViewer height="740px" width="100%">
        <PDFDocument info={info} data={data} />
      </PDFViewer> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

