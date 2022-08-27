import React from 'react'
import QRCode from "react-qr-code";

export default function Header({handlePrint}) {
  return (
    <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
    <div>
        <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">Invoicer</h1>
    </div>
    <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
    <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={handlePrint}
    viewBox={`0 0 256 256`}
    />
    </div>
    </header>
  )
}
