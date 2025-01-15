function showAddItemForm() {
  const btntambah = document.getElementById("btntambah");
  btntambah.style.display = "none";
  document.getElementById("addItemForm").style.display = "block";
}

function fetchItemDetails() {
  const itemCode = document.getElementById("itemCode").value;
  const itemDetails = {
    // Rumah Sakit Permata Cirebon
    RSPC01: { name: "AMPLOP	110	X	230	MM,	(BERLOGO	PERMATA	)", price: 39000 },
    RSPC02: { name: "AMPLOP	RONTGEN	KECIL", price: 4500 },
    RSPC03: { name: "MAP EKG-	USG	BERLOGO	PERMATA", price: 3500 },
    RSPC04: { name: "KOP SURAT PERMATA", price: 80000 },
    RSPC05: { name: "ETIKET	MAKAN	PASIEN", price: 70000 },
    RSPC06: { name: "KARTU GOLONGAN	DARAH", price: 200 },
    RSPC07: { name: "030 KEU SURAT PERSETUJUAN PULANG", price: 5334 },
    RSPC08: { name: "008 FAR KARTU INTRUKSI	PENGOBATAN", price: 15000 },
    RSPC09: { name: "009 IRM TRIASE", price: 40000 },
    RSPC10: { name: "008 IRM pengantar untuk RI (2	rangkap)", price: 15000 },
    RSPC11: { name: "022 IRM daftar	pemberian	obat&alkes", price: 14500 },
    RSPC12: { name: "040 IRM observasi khusus", price: 13000 },
    RSPC13: { name: "042 IRM persetujuan umum", price: 17000 },
    RSPC14: { name: "064 IRM persetujuan tindakan	kedokteran", price: 13000 },
    RSPC15: { name: "067 IRM EDUKASI PASIEN TERINTEGRASI", price: 15000 },
    RSPC16: { name: "FORM SISIPAN 16 PENDAMPINGAN TALQIN PASIEN SAKARATUL MAUT", price: 7000 },
    RSPC17: { name: "FORM BANK DARAH", price: 36000 },
    RSPC18: { name: "FORM ASSESMENT MCU CTKI", price: 13000 },
    RSPC19: { name: "003 FORM ASUHAN KEPERAWATAN PASIEN DENGAN HEMODIALISA", price: 14000 },
    RSPC20: { name: "001 YANMED	SURAT	PEMBERITAHUAN	DOKTER", price: 4700 },
    RSPC21: { name: "001 RAD FORM PERMINTAAN PEMERIKSAAN RADIOLOGI", price: 17000 },
    RSPC22: { name: "002 IRM pengkajian dokter pasien Rajal", price: 13000 },
    RSPC23: { name: "052 IRM persetujuan restrain", price: 13000 },
    RSPC24: { name: "069 IRM SURAT RUJUKAN", price: 15000 },
    RSPC25: { name: "130 IRM INFORMED CONSENT TINDAKAN ANASTESI UMUM", price: 13000 },
    RSPC26: { name: "KARTU STOK RSPC", price: 500 },
    RSPC27: { name: "085 FORMULIR TINDAKAN REHABILITASI MEDIK", price: 14000 },
    RSPC28: { name: "070 IRM Surat Permohonan Pemeriksaan PA", price: 7000 },
    RSPC29: { name: "076/ IRM HASIL CORONARY ANGIOGRAPHY (CAG)", price: 9000 },
    RSPC30: { name: "101 IRM FORM PENGANTAR RAWAT INAP DARI IGD", price: 4666.67 },
    RSPC31: { name: "118/F/IRM/ FORM ORDER PENCAMPURAN OBAT SITOTOKSIK KEMOTERAPI", price: 15000 },
    RSPC32: { name: "124 CEKLIS EDUKASI PASCA KATETERISASI (FEMORALIS & RADIALIS)", price: 13000 },
    RSPC33: { name: "125 PENJELASAN TINDAKAN KEDOKTERAN ANGIOPLASTI KORONER", price: 13000 },
    RSPC34: { name: "063/IRJ HASIL EKG", price: 650 },
    RSPC35: { name: "004 FAR Copy Resep", price: 5000 },
    RSPC36: { name: "031 IRM serah terima jaringan (2 lembar)", price: 8000 },
    RSPC37: { name: "082/IRM CHEKLISH PEMBERIAN TRANSFUSI DARAH", price: 14000 },
    RSPC38: { name: "131 IRM INFORMED CONSENT TINDAKAN ANASTESI SPINAL/REGIONAL", price: 13000 },
    RSPC39: { name: "117/F/IRM/ LEMBAR KENDALI OBAT PASIEN KEMOTERAPI", price: 15000 },
    RSPC40: { name: "FORMULIR KLAIM RAWAT JALAN (MARKETING)", price: 13000 },
    RSPC41: { name: "001 LAB FORM PERMINTAAN PEMERIKSAAN LABORATORIUM", price: 17000 },
    RSPC42: { name: "122 PENJELASAN TINDAKAN KEDOKTERAN ANGIOGRAFI KORONER", price: 11000 },
    RSPC43: { name: "008 FAR KARTU INTRUKSI PENGOBATAN", price: 15000 },
    RSPC44: { name: "022 IRM daftar pemberian obat & alkes", price: 14500 },
    RSPC45: { name: "123 PERSETUJUAN TINDAKAN KEDOKTERAN CATH LAB", price: 13000 },
    RSPC46: { name: "AMPLOP RONTGEN BESAR", price: 8000 },
    RSPC47: { name: "FORM RETUR RANAP", price: 3500 },
    RSPC48: { name: "129 IRM INFORMED CONSENT TINDAKAN ANASTESI LOKAL", price: 3500 },
    RSPC49: { name: "043 IRM daftar kunjungan dokter", price: 13000 },
    RSPC50: { name: "051 IRM IC2 penolakan", price: 14000 },
    RSPC51: { name: "087/IRM INFORM CONCUNT KEMOTERAPI", price: 9000 },

    // Rumah Sakit Sumber Kasih
    RSSK01: { name: "Amplop RO Kecil", price: 4250 },
    RSSK02: { name: "Amplop Hasil Ultrasonografi", price: 5000 },
    RSSK03: { name: "Buku BM", price: 4250 },
    RSSK04: { name: "BAP", price: 13500 },
    RSSK05: { name: "Buku PH", price: 4500 },
    RSSK06: { name: "Void", price: 2500 },
    RSSK07: { name: "Amplop RO Besar", price: 8500 },
    RSSK08: { name: "Amplop CT Scan", price: 8500 },
    RSSK09: { name: "Buku Permintaan Deposite", price: 9000 },
    RSSK10: { name: "Buku SP Radiologi/CT Scan", price: 16000 },
    RSSK11: { name: "Surat Perintah Kerja Lembur", price: 13500 },

    // ASIA Cirebon
    ASIA01: { name: "Nota Kassa ( 3 rangkap )", price: 6000 },
    ASIA02: { name: "Nota Supermarket ( rangkap 3 )", price: 6000 },
    ASIA03: { name: "Kartu Stok", price: 100 },
    ASIA04: { name: "Amplop Asia", price: 36667 },
    ASIA05: { name: "Kontra bon", price: 16000 },
    ASIA06: { name: "Persetujuan Sewa", price: 14000 },
    ASIA07: { name: "Bon Pengembalian Barang", price: 24000 },
    ASIA08: { name: "Surat izin Istirahat", price: 1200 },
    ASIA09: { name: "Pengembalian Barang Dari Warehouse", price: 3500 },
    ASIA10: { name: "Opinion Form", price: 7500 },
    ASIA11: { name: "Cek list room ( buram 1/2 F )", price: 6000 },
    ASIA12: { name: "Form tukar off/ shift", price: 2600 },
    ASIA13: { name: "Form permohonan izin karyawan", price: 7500 },
    ASIA14: { name: "Checlist account payble", price: 2600 },
    ASIA15: { name: "Bukti pengeluaran kas", price: 6000 },
    ASIA16: { name: "Bukti penerimaan kas", price: 6000 },
    ASIA17: { name: "Form tanda terima", price: 5400 },
    ASIA18: { name: "Cach reciept", price: 5400 },
    ASIA19: { name: "Room attendent report", price: 75000 },
    ASIA20: { name: "Surat pernyataan tidak menurunkan kasur", price: 7500 },
    ASIA21: { name: "Registrasi card ", price: 7500 },
    ASIA22: { name: "Blok note hotel asri", price: 8000 },
    ASIA23: { name: "Meal poun", price: 1500 },
    ASIA24: { name: "Nota cafetaria", price: 6000 },
    ASIA25: { name: "Form pengorderan barang ( 1/4  buram )", price: 3000 },
    ASIA26: { name: "Form selisih IP ( 1/4 buram )", price: 3000 },
    ASIA27: { name: "Tanda terima kassa ( 1/4 hvs ) biru", price: 3500 },
    ASIA28: { name: "Kop surat ", price: 77000 },
    ASIA29: { name: "Tempat sumpit ", price: 120 },
    ASIA30: { name: "Form kerjasama dengan supplier", price: 7000 },
    ASIA31: { name: "Kartu seperti kartu nama / box", price: 40000 },
    ASIA32: { name: "Form pengajuan permintaan barang dan jasa bukan dagangan.", price: 15000 },
    ASIA33: { name: "Kop surat hotel Asri", price: 77000 },
  };

  if (itemDetails[itemCode]) {
    const itemName = itemDetails[itemCode].name;
    const itemPrice = itemDetails[itemCode].price.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
    addInvoiceItem(itemName, itemPrice);
  } else {
    alert("Kode barang tidak ditemukan");
  }
}

function addInvoiceItem(name, price) {
  const table = document.getElementById("invoiceItems");
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  const cell5 = row.insertCell(4);

  cell1.innerHTML = name;
  cell2.innerHTML = '<input type="number" class="form-control" value="1" min="1" onchange="updateTotal(this)" />';
  cell3.innerHTML = price;
  cell4.innerHTML = price;
  cell5.innerHTML = '<button type="button" class="btn btn-danger" onclick="removeInvoiceItem(this)">Hapus</button>';

  updateTotal();
}

function updateTotal() {
  let grandTotal = 0;
  const rows = document.getElementById("invoiceItems").rows;
  for (let i = 0; i < rows.length; i++) {
    const quantity = rows[i].cells[1].querySelector("input").value;
    const price = parseFloat(rows[i].cells[2].innerHTML.replace(/[^0-9,-]+/g, "").replace(",", "."));
    const total = quantity * price;
    rows[i].cells[3].innerHTML = total.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
    grandTotal += total;
  }
  document.getElementById("totalAmount").value = grandTotal.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
}

function addInvoiceItem(name, price) {
  const table = document.getElementById("invoiceItems");
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  const cell5 = row.insertCell(4);

  cell1.innerHTML = name;
  cell2.innerHTML = '<input type="number" class="form-control" value="1" min="1" onchange="updateTotal()" />';
  cell3.innerHTML = price;
  cell4.innerHTML = price;
  cell5.innerHTML = '<button type="button" class="btn btn-danger" onclick="removeInvoiceItem(this)">Hapus</button>';

  updateTotal();
}

function removeInvoiceItem(button) {
  const row = button.closest("tr");
  row.remove();
  updateTotal();
}

function removeInvoiceItem(button) {
  const row = button.closest("tr");
  row.remove();
  updateTotal();
}

// otomatis akan mengatur tanggal saat ini saat menambahkan invoice
$(document).ready(function () {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate().toString().padStart(2, "0")}/${(currentDate.getMonth() + 1).toString().padStart(2, "0")}/${currentDate.getFullYear()}`;
  $("#invoiceDate").val(formattedDate);
});

$("#invoiceForm").submit(function (event) {
  event.preventDefault();
  updateTotalAmount();
});

// print nota

function printNota() {
  const customerName = $("#customerName").val();
  const NoPO = $("#NoPO").val();
  const invoiceDate = $("#invoiceDate").val();
  const items = [];

  $("#invoiceItems tr").each(function () {
    const name = $(this).find("td:eq(0)").text();
    const quantity = $(this).find("td:eq(1) input").val();
    const price = $(this).find("td:eq(2)").text();
    const total = $(this).find("td:eq(3)").text();

    items.push({
      name: name,
      quantity: quantity,
      price: price,
      total: total,
    });
  });

  const totalAmount = $("#totalAmount").val();

  const invoiceContent = `
  <html>
    <head>
        <title>Nota</title>
        <style>
            body{
                font-family: Arial, sans-serif;
                margin: 20px;
            }

      .name{
        margin-top: 30px;
      }
            table{
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
            }
            th,td{
                border: 1px solid #dddddd;
                text-align: left;
                padding: 8px;
            }

            .total{
                font-weight: bold;
            }

            .ttd {
              display: flex;
              justify-content: space-around;
              font-weight: bold;
              margin-top: 5%;
            }
        </style>
    </head>

    <body>
        <h1 style="color: #304d30;">PERCETAKAN GRATIS</h1>
        <p class="name" ><strong>Nama Customer : </strong>${customerName}</p>
        <p><strong>Nomor PO : </strong>${NoPO}</p>
        <p><strong>Tanggal : </strong>${invoiceDate}</p>
        <table>
            <thead>
                <tr>
                    <th>Nama Barang</th>
                    <th>Jumlah</th>
                    <th>Harga Satuan</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                ${items
                  .map(
                    (item) => `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.quantity}</td>
                        <td>${item.price}</td>
                        <td>${item.total}</td>
                    </tr>
                    `
                  )
                  .join("")}
            </tbody>
        </table>

        <p class="total">Total Harga: ${totalAmount}</p>
    <div class="ttd">
      <p>Pengirim</p>
      <p>Penerima</p>
    </div>
    </body>
</html>
  `;

  const printWindow = window.open("", "_blank");
  printWindow.document.write(invoiceContent);
  printWindow.document.close();
  printWindow.print();
}

// print tanda terima
function printTandaTerima() {
  const customerName = $("#customerName").val();
  const NoPO = $("#NoPO").val();
  const invoiceDate = $("#invoiceDate").val();
  const items = [];

  $("#invoiceItems tr").each(function () {
    const name = $(this).find("td:eq(0)").text();
    const quantity = $(this).find("td:eq(1) input").val();

    items.push({
      name: name,
      quantity: quantity,
    });
  });

  const invoiceContent = `
  <html>
    <head>
        <title>Tanda Terima</title>
        <style>
            body{
                font-family: Arial, sans-serif;
                margin: 20px;
            }

      .name{
        margin-top: 30px;
      }
            table{
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
            }
            th,td{
                border: 1px solid #dddddd;
                text-align: left;
                padding: 8px;
            }
          .ttd {
            display: flex;
            justify-content: space-around;
            font-weight: bold;
            margin-top: 5%;
      }
        </style>
    </head>

    <body>
        <h1 style="color: #304d30;">PERCETAKAN GRATIS</h1>
        <p class="name"><strong>Nama Customer : </strong>${customerName}</p>
        <p><strong>Nomor PO : </strong>${NoPO}</p>
        <p><strong>Tanggal : </strong>${invoiceDate}</p>
        <table>
            <thead>
                <tr>
                    <th>Nama Barang</th>
                    <th>Jumlah</th>
                </tr>
            </thead>
            <tbody>
                ${items
                  .map(
                    (item) => `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.quantity}</td>
                    </tr>
                    `
                  )
                  .join("")}
            </tbody>
        </table>
    <div class="ttd">
      <p>Pengirim</p>
      <p>Penerima</p>
    </div>
    </body>
</html>
  `;

  const printWindow = window.open("", "_blank");
  printWindow.document.write(invoiceContent);
  printWindow.document.close();
  printWindow.print();
}

function showChat() {
  const sideBar = document.querySelector(".chat-container");
  sideBar.style.display = "flex";
  const btnOpen = document.querySelector(".btnSC-cntnr");
  btnOpen.style.display = "none";
}

function closeChat() {
  const hdnChat = document.querySelector(".chat-container");
  hdnChat.style.display = "none";
  const btnOpen = document.querySelector(".btnSC-cntnr");
  btnOpen.style.display = "flex";
}

const hdnChat = document.querySelector(".btnCls-cntnr");
const chatContainer = document.querySelector(".chat-container");

hdnChat.addEventListener("click", () => {
  chatContainer.classList.remove("show");
  chatContainer.classList.add("hidden");
});

function downloadInvoice() {
  const invoiceElement = document.createElement("div");
  invoiceElement.style.padding = "20px";
  invoiceElement.style.background = "white";

  const customerName = $("#customerName").val();
  const NoPO = $("#NoPO").val();
  const invoiceDate = $("#invoiceDate").val();
  const items = [];

  $("#invoiceItems tr").each(function () {
    const name = $(this).find("td:eq(0)").text();
    const quantity = $(this).find("td:eq(1) input").val();
    const price = $(this).find("td:eq(2)").text();
    const total = $(this).find("td:eq(3)").text();

    items.push({
      name: name,
      quantity: quantity,
      price: price,
      total: total,
    });
  });

  const totalAmount = $("#totalAmount").val();

  invoiceElement.innerHTML = `
    <h1 style="color: #304d30;">PERCETAKAN GRATIS</h1>
    <hr>
    <p><strong>Nama Customer:</strong> ${customerName}</p>
    <p><strong>No PO:</strong> ${NoPO}</p>
    <p><strong>Tanggal:</strong> ${invoiceDate}</p>
    <h3>Detail Barang:</h3>
    <table style="width:100%; border-collapse: collapse;">
      <tr>
        <th style="border:1px solid black; padding:8px;">Nama Barang</th>
        <th style="border:1px solid black; padding:8px;">Jumlah</th>
        <th style="border:1px solid black; padding:8px;">Harga</th>
        <th style="border:1px solid black; padding:8px;">Total</th>
      </tr>
      ${items
        .map(
          (item) => `
        <tr>
          <td style="border:1px solid black; padding:8px;">${item.name}</td>
          <td style="border:1px solid black; padding:8px;">${item.quantity}</td>
          <td style="border:1px solid black; padding:8px;">${item.price}</td>
          <td style="border:1px solid black; padding:8px;">${item.total}</td>
        </tr>
      `
        )
        .join("")}
    </table>
    <p style="margin-top:20px;"><strong>Total:</strong> ${totalAmount}</p>
  `;

  document.body.appendChild(invoiceElement);

  // html2canvas(invoiceElement).then((canvas) => {
  //   const pdf = new jsPDF();
  //   const imgData = canvas.toDataURL('image/jpeg', 1.0);
  //   pdf.addImage(imgData, 'JPEG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
  //   pdf.save(`Invoice_${customerName}_${NoPO}.pdf`);
  // });

  html2canvas(invoiceElement).then((canvas) => {
    const imgData = canvas.toDataURL("image/png", 1.0);

    const link = document.createElement("a");
    link.href = imgData;
    link.download = `Invoice_${customerName}_${NoPO}.png`;

    link.click();

    document.body.removeChild(invoiceElement);
  });
}

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
