import React from 'react';
import ReactDOM from 'react-dom';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { PDFDocument } from './PDFDocument';
import useFetch from './useFetch';

const info = {
  title: "Report",
  content: "AAD Applications",
  date: "Dec 10 2021",
}

function App() {
  const data = useFetch('/cast-health-engineering-dashboard-2.3.0-SNAPSHOT-637/rest/AAD/applications');
  console.log(data);
  return (
    <div className="App">
      {/* {data && <PDFDownloadLink 
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
      </PDFDownloadLink>} */}
      <PDFViewer height="740px" width="100%">
        <PDFDocument info={info} data={data} />
      </PDFViewer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

