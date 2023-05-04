import React, { useState } from "react";
import QRCode from "qrcode";
import "./App.css";

function App() {
  const [qrCodeData, setqrCodeData] = useState("");
  const [qrCodeImage, setqrCodeImage] = useState("");
  const genrateQr = () => {
    QRCode.toDataURL(qrCodeData, (err, url) => {
      if (err) console.log("Error occured");
      setqrCodeImage(url);
    });
  };
  return (
    <>
      <h1 className="mainHeading">QR Code Genrator</h1>
      <div className="box">
        <input
          type="text"
          value={qrCodeData}
          placeholder="Enter something..."
          onChange={(e) => {
            setqrCodeData(e.target.value);
          }}
        />
        <button onClick={genrateQr}>Genrate</button>
      </div>
      <div className="QRconatiner">
        <img src={qrCodeImage} alt="" />
        <a href={qrCodeImage} download="qrcode.png">
          <button>Download</button>
        </a>
      </div>
    </>
  );
}

export default App;
