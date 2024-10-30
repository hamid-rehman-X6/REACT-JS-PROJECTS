import React, { useState } from "react";
import QRCode from "react-qr-code";

const QrCode = () => {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  const handleGenerate = () => {
    setQrCode(input);
    setInput("");
  };
  return (
    <>
      <div>
        <h2>QR Code</h2>

        <input
          type="text"
          name="input-vaue"
          value={input}
          placeholder="Enter the Value"
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          disabled={input && input.trim !== "" ? false : true}
          onClick={handleGenerate}
        >
          Generate
        </button>
      </div>
      <QRCode style={{ marginTop: "20px" }} value={qrCode} size={300} />
    </>
  );
};

export default QrCode;
