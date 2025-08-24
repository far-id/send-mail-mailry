# Daily Commit

**Daily Commit** adalah project iseng tapi serius yang tugasnya ngecek aktivitas commit kamu di GitHub setiap hari, lalu ngirimin email berupa motivasi atau pujian.  
Bedanya, semua pesan diwarnai dengan **semangat kemerdekaan Indonesia**.  

Kalau nggak commit? Email bakal nyentil kamu ala orasi perjuangan

Kalau rajin commit? Email-nya bakal pujian heroik ala proklamasi  

---

## 🔧 Arsitektur Project

Project ini dibangun dengan 4 komponen utama:

1. **Frontend**  
   Dibuat menggunakan [Bolt](https://bolt.new/~/sb1-qqzjgx67) (source code).  
   Link Deploy: [https://github-credential-ma-fzxv.bolt.host/](https://github-credential-ma-fzxv.bolt.host/)  
   
   Apa yang ada di sini:
   - Halaman registrasi user (GitHub username + email + token)
   - Cek kalo akun kamu terdaftar + kirim email penyemangat kamu
   - Hapus akun kamu dari sistem.  

2. **Backend (Workflow Automation)**  
   Menggunakan [n8n](https://n8n.io/) dengan flow seperti di gambar.  
   - Register account  
   - Check & delete account 
   - Generate email motivasi/pujian bertema perjuangan  
   - Kirim email ke user  

   ![n8n Flow](n8n-workflow.png)  

3. **Database**  
   Menggunakan [Supabase](https://supabase.com) untuk menyimpan data user (email, GitHub username, token).

4. **Email Sender (kode di repo ini)**  
   Repo GitHub ini berisi kode untuk meng-handle proses **send email**.  
   Bagian ini adalah jembatan terakhir sebelum semangat kemerdekaan digital masuk ke inbox kamu.

---

## 🚀 Cara Kerja

1. User daftar via frontend (Bolt deploy).  
2. Data user disimpan di **Supabase** melalui **n8n**.  
3. Setiap hari, scheduler di **n8n** jalan → cek jumlah commit di GitHub.  
4. LLM + Image Generator dipakai buat bikin pesan motivasi ala pejuang kemerdekaan.  
5. Backend n8n memanggil service **send email** (kode repo ini).  
6. Email dikirim ke user → bikin semangat commit lagi demi "kemerdekaan repo".  

---

## 📌 Fitur yang Ada

- Register / delete akun.  
- Cek jumlah commit harian tiap user.  
- Kirim email berisi teks motivasi / pujian ala semangat perjuangan.  
- Gambar ketika kamu ada commit dan ketika ga ada commit.  

---

## 📬 Todo / Pengembangan Selanjutnya

- [ ] Cek kondisi commit untuk 7 hari terakhir (bukan cuma harian).  
- [ ] Customisasi tema email (pilih mode “Pahlawan Serius” atau “Satir Nyeleneh”).  
- [ ] Tambahin opsi unsubscribe langsung dari email.  

---

## 🧑‍💻 Tech Stack

- [Bolt](https://bolt.new) → Frontend (Source code)  
- [Bolt Deploy](https://github-credential-ma-fzxv.bolt.host/) → Frontend aktif  
- [n8n](https://n8n.io/) → Backend Automation / Workflow  
- [Supabase](https://supabase.com) → Database user  
- [Mail Sender (repo ini)] → Kirim email  

---

## ⚠️ Catatan

- Project ini dibuat untuk keperluan hackathon [IMPHNEN](https://www.facebook.com/groups/programmerhandalv2/permalink/746990074789037)  dengan tema **AI Agent Hackathon**.  
- Jadi jangan heran kalau malas ngoding.  
