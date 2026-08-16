"use client";

import { useState, useEffect } from "react";
import jsPDF from "jspdf";
import Link from "next/link";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";

interface LineItem {
  description: string;
  amount: string;
}

const CURRENCIES = ["USD", "INR", "EUR", "GBP"];
const PAYMENT_METHODS = ["PayPal", "Bank Transfer", "Other"];
const STATUS_OPTIONS = ["Paid", "Pending", "Draft"];

function generateInvoiceNumber() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `SOCH-${y}${m}${d}-${rand}`;
}

export default function ReceiptGeneratorPage() {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  
  // Multi-line items
  const [items, setItems] = useState<LineItem[]>([{ description: "", amount: "" }]);
  
  // Tax, Discount & Status
  const [taxRate, setTaxRate] = useState("");
  const [discountRate, setDiscountRate] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("Paid");

  const [currency, setCurrency] = useState("USD");
  const [invoiceNumber, setInvoiceNumber] = useState(generateInvoiceNumber());
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const [otherMethod, setOtherMethod] = useState("");
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");
  const [pdfPreviewUrl, setPdfPreviewUrl] = useState("");

  // Calculations
  const subtotal = items.reduce((acc, item) => acc + (parseFloat(item.amount) || 0), 0);
  const taxAmount = (subtotal * (parseFloat(taxRate) || 0)) / 100;
  const discountAmount = (subtotal * (parseFloat(discountRate) || 0)) / 100;
  const finalTotal = Math.max(0, subtotal + taxAmount - discountAmount).toFixed(2);

  // Re-generate preview whenever form inputs change
  useEffect(() => {
    try {
      const doc = buildPdf();
      const uri = doc.output("datauristring");
      setPdfPreviewUrl(uri);
    } catch (err) {
      console.error("Preview generation error:", err);
    }
  }, [clientName, clientEmail, clientPhone, items, taxRate, discountRate, paymentStatus, currency, invoiceNumber, paymentMethod, otherMethod]);

  function addItem() {
    setItems([...items, { description: "", amount: "" }]);
  }

  function removeItem(index: number) {
    if (items.length === 1) return;
    setItems(items.filter((_, i) => i !== index));
  }

  function updateItem(index: number, field: keyof LineItem, value: string) {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  }

  function buildPdf(): jsPDF {
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // Watermark (restrained bounds and subtle opacity to avoid header clashing)
    doc.saveGraphicsState();
    // @ts-ignore
    doc.setGState(new (doc as any).GState({ opacity: 0.04 }));
    doc.setFont("helvetica", "bold");
    doc.setFontSize(36);
    doc.setTextColor(0, 0, 0);
    for (let y = 140; y < pageHeight - 60; y += 120) {
      for (let x = 0; x < pageWidth; x += 250) {
        doc.text("sochona.", x, y, { angle: 25 });
      }
    }
    doc.restoreGraphicsState();

    // Header Branding
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(20, 20, 20);
    doc.text("sochona.", 40, 55);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(90, 90, 90);
    doc.text("connect@sochona.net", 40, 72);

    // Invoice Meta & Status Badge
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(20, 20, 20);
    doc.text("RECEIPT", pageWidth - 40, 55, { align: "right" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(90, 90, 90);
    doc.text(`Invoice #: ${invoiceNumber}`, pageWidth - 40, 72, { align: "right" });
    doc.text(`Date: ${new Date().toLocaleDateString()}`, pageWidth - 40, 86, { align: "right" });

    // Status Badge on PDF
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    const badgeText = paymentStatus.toUpperCase();
    const badgeWidth = doc.getTextWidth(badgeText) + 16;
    doc.setFillColor(paymentStatus === "Paid" ? 220 : 240, paymentStatus === "Paid" ? 252 : 240, paymentStatus === "Paid" ? 231 : 240);
    doc.roundedRect(pageWidth - 40 - badgeWidth, 96, badgeWidth, 18, 4, 4, "F");
    doc.setTextColor(paymentStatus === "Paid" ? 20 : 100, paymentStatus === "Paid" ? 83 : 100, paymentStatus === "Paid" ? 43 : 100);
    doc.text(badgeText, pageWidth - 40 - badgeWidth / 2, 108, { align: "center" });

    doc.setDrawColor(220, 220, 220);
    doc.line(40, 125, pageWidth - 40, 125);

    // Billed To
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(20, 20, 20);
    doc.text("Billed To", 40, 145);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    doc.text(clientName || "-", 40, 162);
    doc.text(clientEmail || "-", 40, 177);
    if (clientPhone) doc.text(clientPhone, 40, 192);

    // Table Header
    const tableTop = 220;
    doc.setFillColor(245, 245, 245);
    doc.rect(40, tableTop, pageWidth - 80, 24, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(20, 20, 20);
    doc.text("Description", 50, tableTop + 16);
    doc.text("Amount", pageWidth - 50, tableTop + 16, { align: "right" });

    // Table Rows
    let currentY = tableTop + 40;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);

    items.forEach((item) => {
      const descLines = doc.splitTextToSize(item.description || "-", pageWidth - 180);
      doc.text(descLines, 50, currentY);
      doc.text(`${currency} ${parseFloat(item.amount || "0").toFixed(2)}`, pageWidth - 50, currentY, { align: "right" });
      currentY += Math.max(descLines.length * 12, 16) + 10;
    });

    doc.setDrawColor(220, 220, 220);
    doc.line(40, currentY, pageWidth - 40, currentY);
    currentY += 20;

    // Totals Section
    const rightAlignX = pageWidth - 50;
    const labelX = pageWidth - 180;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(90, 90, 90);
    doc.text("Subtotal", labelX, currentY);
    doc.text(`${currency} ${subtotal.toFixed(2)}`, rightAlignX, currentY, { align: "right" });
    currentY += 16;

    if (taxRate && parseFloat(taxRate) > 0) {
      doc.text(`Tax (${taxRate}%)`, labelX, currentY);
      doc.text(`${currency} ${taxAmount.toFixed(2)}`, rightAlignX, currentY, { align: "right" });
      currentY += 16;
    }

    if (discountRate && parseFloat(discountRate) > 0) {
      doc.text(`Discount (${discountRate}%)`, labelX, currentY);
      doc.text(`-${currency} ${discountAmount.toFixed(2)}`, rightAlignX, currentY, { align: "right" });
      currentY += 16;
    }

    // Final Total
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(20, 20, 20);
    doc.text("Total", labelX, currentY + 4);
    doc.text(`${currency} ${finalTotal}`, rightAlignX, currentY + 4, { align: "right" });
    currentY += 35;

    const finalMethod = paymentMethod === "Other" ? otherMethod : paymentMethod;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(90, 90, 90);
    doc.text(`Payment Method: ${finalMethod || "-"}`, 40, currentY);

    // Footer
    doc.setFontSize(9);
    doc.setTextColor(140, 140, 140);
    doc.text("Thank you for your business.", 40, pageHeight - 40);

    return doc;
  }

  function handleDownload() {
    const doc = buildPdf();
    doc.save(`${invoiceNumber}.pdf`);
  }

  async function handleEmailToSelf() {
    setSending(true);
    setMessage("");
    const doc = buildPdf();
    const pdfBase64 = doc.output("datauristring").split(",")[1];

    const res = await fetch("/api/admin/receipt/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pdfBase64, invoiceNumber, clientName }),
    });

    setMessage(res.ok ? "Receipt emailed to yourself." : "Failed to send email. Try downloading instead.");
    setSending(false);
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <Link href="/admin/leads" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Leads
        </Link>
        <h1 className="text-2xl font-semibold mb-8">Receipt Generator & Preview</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-6 space-y-5 bg-neutral-950 border border-white/10 rounded-3xl p-6 sm:p-8">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-white/50 mb-1 block">Client Name</label>
                <input value={clientName} onChange={(e) => setClientName(e.target.value)} className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-white/30" />
              </div>
              <div>
                <label className="text-xs text-white/50 mb-1 block">Client Email</label>
                <input value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-white/30" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-white/50 mb-1 block">Client Phone (optional)</label>
                <input value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-white/30" />
              </div>
              <div>
                <label className="text-xs text-white/50 mb-1 block">Payment Status</label>
                <select value={paymentStatus} onChange={(e) => setPaymentStatus(e.target.value)} className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-white/30">
                  {STATUS_OPTIONS.map((st) => <option key={st} value={st}>{st}</option>)}
                </select>
              </div>
            </div>

            {/* Line Items Section */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <label className="text-xs text-white/50 block font-medium">Line Items</label>
                <button type="button" onClick={addItem} className="flex items-center gap-1 text-xs text-white hover:text-white/80 bg-white/10 px-2.5 py-1 rounded-lg transition-colors">
                  <Plus className="w-3 h-3" /> Add Item
                </button>
              </div>

              {items.map((item, index) => (
                <div key={index} className="flex gap-2 items-center bg-neutral-900/50 p-3 rounded-2xl border border-white/5">
                  <input
                    placeholder="Description"
                    value={item.description}
                    onChange={(e) => updateItem(index, "description", e.target.value)}
                    className="flex-grow bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-white/30"
                  />
                  <input
                    placeholder="Amount"
                    type="number"
                    value={item.amount}
                    onChange={(e) => updateItem(index, "amount", e.target.value)}
                    className="w-28 bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-white/30"
                  />
                  {items.length > 1 && (
                    <button type="button" onClick={() => removeItem(index)} className="p-2 text-red-400 hover:text-red-300 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Tax & Discount Optional Inputs */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div>
                <label className="text-xs text-white/50 mb-1 block">Tax Rate % (Optional)</label>
                <input type="number" placeholder="e.g. 10" value={taxRate} onChange={(e) => setTaxRate(e.target.value)} className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-white/30" />
              </div>
              <div>
                <label className="text-xs text-white/50 mb-1 block">Discount % (Optional)</label>
                <input type="number" placeholder="e.g. 5" value={discountRate} onChange={(e) => setDiscountRate(e.target.value)} className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-white/30" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="text-xs text-white/50 mb-1 block">Currency</label>
                <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-white/30">
                  {CURRENCIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="col-span-2">
                <label className="text-xs text-white/50 mb-1 block">Invoice #</label>
                <input value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-white/30" />
              </div>
            </div>

            <div>
              <label className="text-xs text-white/50 mb-1 block">Payment Method</label>
              <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-white/30">
                {PAYMENT_METHODS.map((m) => <option key={m} value={m}>{m}</option>)}
              </select>
              {paymentMethod === "Other" && (
                <input value={otherMethod} onChange={(e) => setOtherMethod(e.target.value)} placeholder="Specify method" className="w-full mt-2 bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-white/30" />
              )}
            </div>

            <div className="flex gap-3 pt-4">
              <button onClick={handleDownload} className="flex-1 py-3 bg-white text-black font-medium rounded-xl hover:bg-neutral-200 transition-colors text-sm">
                Download PDF
              </button>
              <button onClick={handleEmailToSelf} disabled={sending} className="flex-1 py-3 bg-neutral-800 border border-white/10 text-white font-medium rounded-xl hover:bg-neutral-700 transition-colors disabled:opacity-50 text-sm">
                {sending ? "Sending..." : "Email to Myself"}
              </button>
            </div>

            {message && <p className="text-sm text-white/60 text-center">{message}</p>}
          </div>

          {/* Live PDF Preview Pane */}
          <div className="lg:col-span-6 bg-neutral-950 border border-white/10 rounded-3xl p-6 flex flex-col h-[750px]">
            <h2 className="text-sm font-medium text-white/70 mb-4">Live PDF Preview</h2>
            <div className="flex-grow w-full rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
              {pdfPreviewUrl ? (
                <iframe src={`${pdfPreviewUrl}#view=FitH`} className="w-full h-full border-none" title="PDF Preview" />
              ) : (
                <div className="flex items-center justify-center h-full text-white/40 text-sm">Generating preview...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}