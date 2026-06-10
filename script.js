const tombolPesan = document.querySelectorAll(".pesanBtn");
const cartList = document.getElementById("cartList");
const totalHarga = document.getElementById("totalHarga");
const darkModeBtn = document.getElementById("darkModeBtn");
const searchInput = document.getElementById("searchInput");
const kartulayanan = document.querySelectorAll(".kartulayanan");
const formOrder = document.getElementById("formOrder");
const namaCustomer = document.getElementById("namaCustomer");
const requestDesain = document.getElementById("requestDesain");
const nomorWA = document.getElementById("nomorWA");
const jenisDesain = document.getElementById("jenisDesain");
const ukuranDesain = document.getElementById("ukuranDesain");
const warnaDesain = document.getElementById("warnaDesain");

let total = 0;

tombolPesan.forEach(function(button){
    button.addEventListener("click", function(){
        const nama = button.getAttribute("data-name");
        const harga = parseInt(button.getAttribute("data-price"));

        total += harga;
        totalHarga.textContent = total;
    
        console.log("Item ditambahkan:", nama);
        console.log("Harga:", harga);
        console.log("Total harga saat ini:", total);
        
        alert(nama + " berhasil masuk ke pesanan.");
    });
});

formOrder.addEventListener("submit", function(event){
    event.preventDefault();
    const nama = namaCustomer.value;
    const wa = nomorWA.value;
    const jenis = jenisDesain.value;
    const ukuran = ukuranDesain.value;
    const warna = warnaDesain.value;
    const request = requestDesain.value;

    if(nama === "" || wa === "" || jenis === "" || ukuran === "" || warna === "" || request === ""){
        console.warn("Submit dibatalkan: Masih ada data yang kosong.");
        alert("Data pesanan masih ada yang kosong.");
        return;
    }

    console.log("Data pesanan baru:", { nama, wa, jenis, ukuran, warna, request });

    const li = document.createElement("li");
    li.innerHTML = `
    <div class="boxPesanan">
        <h3>${jenis}</h3>
        <p>Customer : ${nama}</p>
        <button class="detailBtn">Detail Pesanan</button>
        <div class="detailPesanan">
            <p><strong>Nomor WA :</strong> ${wa}</p>
            <p><strong>Jenis Desain :</strong> ${jenis}</p>
            <p><strong>Ukuran :</strong> ${ukuran}</p>
            <p><strong>Konsep Warna :</strong> ${warna}</p>
            <p><strong>Request Tambahan :</strong> ${request}</p>
        </div>
        <button class="hapusBtn">Hapus Pesanan</button>
    </div>`;

    cartList.appendChild(li);
    console.log("Pesanan berhasil ditambahkan ke daftar.");

    const hapusBtn = li.querySelector(".hapusBtn");
    hapusBtn.addEventListener("click", function(){
        console.log("Pesanan dihapus:", jenis);
        li.remove();
    });

    const detailBtn = li.querySelector(".detailBtn");
    const detailPesanan = li.querySelector(".detailPesanan");

    detailBtn.addEventListener("click", function(){
        detailPesanan.classList.toggle("showDetail");
    });

    namaCustomer.value = "";
    nomorWA.value = "";
    jenisDesain.value = "";
    ukuranDesain.value = "";
    warnaDesain.value = "";
    requestDesain.value = "";
});

searchInput.addEventListener("input", function(){
    const keyword = searchInput.value.toLowerCase();
    console.log("Mencari:", keyword);
    
    kartulayanan.forEach(function(card){
        const judul = card.querySelector("h2").textContent.toLowerCase();
        if(judul.includes(keyword)){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

darkModeBtn.addEventListener("click", function(){
    document.body.classList.toggle("dark");
    console.log("Mode layar diubah.");
});