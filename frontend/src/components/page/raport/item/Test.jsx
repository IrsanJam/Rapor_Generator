import React from 'react';

const Test = () => {
  return (
    <div className="font-normal avoid-break">
      <div className="page ">
        <div className="subpage">
          <div className="title-container">
            <img
              className="logo mx-auto"
              src="data:image/png;base64,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"
            />
            <p className="title">Rapor</p>
            <p className="title text-uppercase">Sekolah Dasar Auliya</p>
          </div>
          <div id="dataSiswa" className="name-container mt-[185px]">
            <p>Nama Peserta Didik</p>
            <table className="cover-name">
              <tr>
                <td className="font-weight-bold text-[18px]">John Doe</td>
              </tr>
            </table>
            <p>NISN</p>
            <table className="cover-name">
              <tr>
                <td>123456789</td>
              </tr>
            </table>
          </div>
          <div className="ministry-container text-uppercase mt-[58px]">
            <p>Kementerian Pendidikan dan Kebudayaan</p>
            <p>Republik Indonesia</p>
          </div>
        </div>
      </div>
      /////////////////////////////////////////////////////
      <div className="page">
        <div className="subpage page_background opacity-100 normal-margin">
          <div className="title-container">
            <p className="title">Petunjuk Pengisian</p>
          </div>
          <div id="petunjukPengisian " className="mt-[44px] ">
            <p>
              Rapor merupakan ringkasan hasil penilaian terhadap seluruh aktivitas pembelajaran yang
              dilakukan peserta didik dalam kurun waktu tertentu. Rapor dipergunakan selama peserta
              didik yang bersangkutan mengikuti seluruh program pembelajaran di Sekolah Dasar Auliya
              tersebut. Berikut ini petunjuk untuk mengisi rapor:
            </p>
            <ol>
              <li>
                Identitas sekolah diisi dengan data yang sesuai dengan keberadaan Sekolah Dasar
                Auliya.
              </li>
              <li>Keterangan tentang diri peserta didik diisi lengkap.</li>
              <li>Rapor dilengkapi dengan pas foto peserta didik ukuran (3 x 4) cm berwarna.</li>
              <li>
                Deskripsi sikap spiritual dan sikap sosial diambil dari catatan (jurnal)
                perkembangan sikap peserta didik yang ditulis oleh guru mata pelajaran, guru BK, dan
                wali kelas.
              </li>
              <li>
                Capaian peserta didik dalam pengetahuan dan keterampilan ditulis dalam bentuk angka,
                predikat, dan deskripsi untuk masing-masing mata pelajaran.
              </li>
              <li>
                Laporan ekstrakurikuler diisi dengan nama dan nilai kegiatan ekstrakurikuler yang
                diikuti oleh peserta didik.
              </li>
              <li>
                Saran-saran diisi dengan hal-hal yang perlu mendapatkan perhatian peserta didik.
              </li>
              <li>
                Prestasi diisi dengan jenis prestasi peserta didik yang diraih dalam bidang akademik
                dan nonakademik.
              </li>
              <li>
                Ketidakhadiran ditulis dengan data akumulasi ketidakhadiran peserta didik karena
                sakit, izin, atau alpa/tanpa keterangan selama satu semester.
              </li>
              <li>
                Tanggapan orang tua/wali adalah tanggapan atas pencapaian hasil belajar peserta
                didik.
              </li>
              <li>
                Keterangan pindah keluar sekolah diisi dengan alasan kepindahan. Sedangkan pindah
                masuk diisi dengan sekolah asal.
              </li>
              <li>
                KKM (Kriteria Ketuntasan Minimal) diisi dengan nilai minimal pencapaian ketuntasan
                kompetensi belajar peserta didik yang ditetapkan oleh satuan pendidikan.
              </li>
              <li>Nilai diisi dengan nilai pencapaian kompetensi belajar peserta didik.</li>
              <li>
                Predikat untuk aspek pengetahuan dan keterampilan diisi dengan huruf A, B, C, atau D
                sesuai panjang interval dan KKM yang sudah ditetapkan oleh satuan pendidikan.
              </li>
              <li>
                Predikat untuk aspek sikap diisi dengan Sangat Baik, Baik, Cukup, atau Kurang.
              </li>
              <li>Deskripsi diisi uraian tentang pencapaian kompetensi peserta didik.</li>
              <li>Tabel interval predikat berdasarkan KKM.</li>
            </ol>
          </div>
        </div>
      </div>
      ////////////////////////////////////////////////////////////////
      <div className="page_background">
        <div className="subpage normal-margin">
          <div className="title-container">
            <p className="title">Rapor</p>
            <p className="title text-uppercase">Sekolah Dasar Auliya</p>
          </div>
          <div id="dataSekolah">
            <table className="unit-data">
              <tr>
                <td>Nama Yayasan</td>
                <td>:</td>
                <td className="font-weight-bold">Yayasan Auliya Insan Utama</td>
              </tr>
              <tr>
                <td>Nama Sekolah</td>
                <td>:</td>
                <td className="font-weight-bold">Sekolah Dasar Auliya</td>
              </tr>
              <tr>
                <td>NPSN</td>
                <td>:</td>
                <td>12345678</td>
              </tr>
              <tr>
                <td>NIS/NSS/NDS</td>
                <td>:</td>
                <td>123456</td>
              </tr>
              <tr>
                <td>Alamat</td>
                <td>:</td>
                <td>Jl. Pendidikan No. 1, Tangerang</td>
              </tr>
              <tr>
                <td>Telepon</td>
                <td>:</td>
                <td>(021) 1234567</td>
              </tr>
              <tr>
                <td>Satuan Pendidikan</td>
                <td>:</td>
                <td>Sekolah Dasar</td>
              </tr>
              <tr>
                <td>Kelurahan/Desa</td>
                <td>:</td>
                <td>Kelurahan A</td>
              </tr>
              <tr>
                <td>Kecamatan</td>
                <td>:</td>
                <td>Kecamatan B</td>
              </tr>
              <tr>
                <td>Kota/Kabupaten</td>
                <td>:</td>
                <td>Kota C</td>
              </tr>
              <tr>
                <td>Provinsi</td>
                <td>:</td>
                <td>Provinsi D</td>
              </tr>
              <tr>
                <td>Website</td>
                <td>:</td>
                <td>www.sekolahdasarauliya.com</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>:</td>
                <td>info@sekolahdasarauliya.com</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      //////////////////////////////////////////////
      <div className="page_background">
        <div className="subpage normal-margin">
          <div className="title-container">
            <p className="title">Keterangan tentang Diri Peserta Didik</p>
          </div>
          <div id="dataPesertaDidik" className="mt-[44px]">
            <table className="student-data">
              <tr>
                <td>1.</td>
                <td>Nama Peserta Didik (Lengkap)</td>
                <td>:</td>
                <td>John Doe</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>NIPD / NISN</td>
                <td>:</td>
                <td>123456 / 123456789</td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Tempat, Tanggal Lahir</td>
                <td>:</td>
                <td>Tangerang, 1 Januari 2010</td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Jenis Kelamin</td>
                <td>:</td>
                <td>Laki-laki</td>
              </tr>
              <tr>
                <td>5.</td>
                <td>Agama</td>
                <td>:</td>
                <td>Islam</td>
              </tr>
              <tr>
                <td>6.</td>
                <td>Alamat Peserta Didik</td>
                <td>:</td>
                <td>Jl. Pendidikan No. 1, RT 01 RW 02</td>
              </tr>
              <tr>
                <td colSpan="3">&nbsp;</td>
                <td>Kelurahan A, Kecamatan B, Kota C</td>
              </tr>
              <tr>
                <td>7.</td>
                <td>Nama Orang Tua</td>
                <td>:</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>a. Ayah</td>
                <td>:</td>
                <td>Mr. Doe</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>b. Ibu</td>
                <td>:</td>
                <td>Mrs. Doe</td>
              </tr>
              <tr>
                <td>8.</td>
                <td>Alamat Orang Tua</td>
                <td>:</td>
                <td>Jl. Keluarga No. 2, Tangerang</td>
              </tr>
              <tr>
                <td colSpan="3">&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </table>
          </div>
          <div id="tanda-tangan-container" className="mt-[33px]">
            <div id="tandaTangan">
              <table className="tanda-tangan">
                <tr>
                  <td rowSpan="4">
                    <table className="pas-foto">
                      <tr>
                        <td>
                          Pas Foto
                          <br />
                          3x4 cm
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td>Tangerang Selatan, 1 Januari 2024</td>
                </tr>
                <tr>
                  <td>Kepala Sekolah,</td>
                </tr>
                <tr>
                  <td className="ttd">&nbsp;</td>
                </tr>
                <tr>
                  <td>Dr. Jane Smith</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      ////////////////////////////////////////////
      <div className="watermark">
        <div className="background-container"></div>
        <div className="page_background">
          <div className="subpage">
            <p className="text-uppercase text-[22px] font-weight-bold text-center">Rapor</p>
            <p className="text-uppercase text-[18px] font-weight-bold text-center">
              Sekolah Dasar Auliya
            </p>
            <div id="dataSiswa" className="text-[11px]">
              <table>
                <tr>
                  <td className="w-[15%]">Nama Peserta Didik</td>
                  <td className="w-[2%]">:</td>
                  <td className="w-[40%]">John Doe</td>
                  <td className="w-[15%]">Fase/Kelas</td>
                  <td className="w-[2%]">:</td>
                  <td className="w-[24%]">Kelas 5</td>
                </tr>
                <tr>
                  <td>NISN</td>
                  <td>:</td>
                  <td>123456789</td>
                  <td>Semester</td>
                  <td>:</td>
                  <td>Semester 1</td>
                </tr>
                <tr>
                  <td colSpan="3">&nbsp;</td>
                  <td>Tahun Pelajaran</td>
                  <td>:</td>
                  <td>2023/2024</td>
                </tr>
              </table>
            </div>
            <div id="kurikulumMerdeka" className="m-t-22">
              <p className="komponen-rapor">INTRAKURIKULER</p>
              <div className="m-t-16 m-b-16">
                <table className="table-border page-break-auto">
                  <tr style={{ backgroundColor: '#C6E0B4' }}>
                    <th className="w-[3%]">No</th>
                    <th className="w-[37%]">Elemen Capaian Pembelajaran</th>
                    <th className="w-[60%]">Deskripsi</th>
                  </tr>
                  <tr>
                    <td className="text-center align-middle" rowSpan="2">
                      1
                    </td>
                    <td className="align-middle no-bold" rowSpan="2">
                      Matematika
                    </td>
                    <td className="align-middle no-bold">Baik</td>
                  </tr>
                  <tr>
                    <td className="align-middle no-bold">Cukup</td>
                  </tr>
                  <tr>
                    <td className="text-center align-middle" rowSpan="2">
                      2
                    </td>
                    <td className="align-middle no-bold" rowSpan="2">
                      Bahasa Indonesia
                    </td>
                    <td className="align-middle no-bold">Sangat Baik</td>
                  </tr>
                  <tr>
                    <td className="align-middle no-bold">Baik</td>
                  </tr>
                </table>
              </div>
            </div>

            <div id="islami-dan-qurani" className="mt-22 avoid-break">
              <p className="komponen-rapor">ISLAMI DAN QURANI</p>
              <div className="mt-4 mb-8">
                <table className="table-border">
                  <thead>
                    <tr style={{ backgroundColor: '#C6E0B4' }}>
                      <th className="w-1/12 border border-gray-300">No</th>
                      <th className="w-3/12 border border-gray-300" colSpan="2">
                        Elemen
                      </th>
                      <th className="w-8/12 border border-gray-300">Deskripsi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Tarbia Qurania Section */}
                    <tr>
                      <td colSpan="4" className="font-bold">
                        Tarbia Islamia Asasia
                      </td>
                    </tr>

                    {/* Tilawah Section */}
                    <tr>
                      <td className="text-center align-top border border-gray-300" rowSpan="4">
                        1
                      </td>
                      <td colSpan="3" className="border border-gray-300 font-bold">
                        Tilawah
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300">a.</td>
                      <td className="border border-gray-300">Tajwid (Hukum Bacaan)</td>
                      <td className="border border-gray-300">
                        Deskripsi Tajwid untuk [Nama Siswa]
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300">b.</td>
                      <td className="border border-gray-300">Tahsin (Kelancaran Bacaan)</td>
                      <td className="border border-gray-300">
                        Deskripsi Tahsin untuk [Nama Siswa]
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300">c.</td>
                      <td className="border border-gray-300">Khataman (Ketuntasan Bacaan)</td>
                      <td className="border border-gray-300">
                        Deskripsi Khataman untuk [Nama Siswa]
                      </td>
                    </tr>

                    {/* Tahfidz Section */}
                    <tr>
                      <td className="text-center align-top border border-gray-300" rowSpan="3">
                        2
                      </td>
                      <td colSpan="3" className="border border-gray-300 font-bold">
                        Tahfidz
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300">a</td>
                      <td className="border border-gray-300">Surah Al-Fatihah (1)</td>
                      <td className="border border-gray-300" rowSpan="2">
                        Deskripsi Tahfidz untuk [Nama Siswa]
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300">b</td>
                      <td className="border border-gray-300">Surah Al-Baqarah (286)</td>
                    </tr>

                    {/* Tadabur Section */}
                    <tr>
                      <td className="text-center align-top border border-gray-300" rowSpan="3">
                        3
                      </td>
                      <td colSpan="3" className="border border-gray-300 font-bold">
                        Tadabur
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300">a</td>
                      <td className="border border-gray-300">Surah Al-Kahf (110)</td>
                      <td className="border border-gray-300" rowSpan="2">
                        Deskripsi Tadabur untuk [Nama Siswa]
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300">b</td>
                      <td className="border border-gray-300">Surah Al-Mulk (30)</td>
                    </tr>

                    {/* Tarbia Khuluqia Section */}
                    <tr>
                      <td colSpan="4" className="font-bold">
                        Akhlak Mulia
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300">1</td>
                      <td colSpan="2" className="border border-gray-300">
                        Kejujuran
                      </td>
                      <td className="border border-gray-300">
                        Deskripsi Kejujuran untuk [Nama Siswa]
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300">2</td>
                      <td colSpan="2" className="border border-gray-300">
                        Kedisiplinan
                      </td>
                      <td className="border border-gray-300">
                        Deskripsi Kedisiplinan untuk [Nama Siswa]
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300">3</td>
                      <td colSpan="2" className="border border-gray-300">
                        Tanggung Jawab
                      </td>
                      <td className="border border-gray-300">
                        Deskripsi Tanggung Jawab untuk [Nama Siswa]
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div id="kompetensi" className="text-[22px] avoid-break">
              <p className="komponen-rapor">KOMPETENSI</p>
              <div className="m-t-4 m-b-8">
                <table className="table-border">
                  <tr style={{ backgroundColor: '#C6E0B4' }}>
                    <th className="w-[3%]">No</th>
                    <th className="w-[42%]">Kompetensi</th>
                    <th className="w-[55%]">Deskripsi</th>
                  </tr>
                  <tr>
                    <td className="text-center">1</td>
                    <td>Kompetensi Matematika</td>
                    <td>John menunjukkan pemahaman yang baik dalam matematika.</td>
                  </tr>
                  <tr>
                    <td className="text-center">2</td>
                    <td>Kompetensi Bahasa Indonesia</td>
                    <td>John mampu membaca dan menulis dengan baik.</td>
                  </tr>
                </table>
              </div>
            </div>
            <div id="ekstrakurikuler" className="text-[22px]">
              <p className="komponen-rapor">EKSTRAKURIKULER</p>
              <div className="m-t-8 m-b-16">
                <table className="table-border">
                  <tr style={{ backgroundColor: '#C6E0B4' }}>
                    <th className="w-[3%]">No</th>
                    <th className="w-[42%]">Ekstrakurikuler</th>
                    <th className="w-[20%]">Predikat</th>
                    <th className="w-[55%]">Deskripsi</th>
                  </tr>
                  <tr>
                    <td className="text-center">1</td>
                    <td>Basket</td>
                    <td className="text-center">Baik</td>
                    <td>John aktif dalam kegiatan basket dan menunjukkan kemajuan.</td>
                  </tr>
                  <tr>
                    <td className="text-center">2</td>
                    <td>Musik</td>
                    <td className="text-center">Sangat Baik</td>
                    <td>John memiliki bakat dalam bermain alat musik.</td>
                  </tr>
                </table>
              </div>
            </div>
            <div id="prestasi" className="text-[22px]">
              <p className="komponen-rapor">PRESTASI JUARA</p>
              <div className="mt-[8px] mb-[16px]">
                <table className="table-border">
                  <tr style={{ backgroundColor: '#C6E0B4' }}>
                    <th className="w-[3%]">No</th>
                    <th className="w-[42%]">Kejuaraan</th>
                    <th className="w-[55%]">Deskripsi</th>
                  </tr>
                  <tr>
                    <td className="text-center">1</td>
                    <td>Juara 1 Lomba Matematika</td>
                    <td>John berhasil meraih juara 1 dalam lomba matematika tingkat sekolah.</td>
                  </tr>
                </table>
              </div>
            </div>
            <div id="ketidakhadiran" className="text-[22px]">
              <p className="komponen-rapor">KEHADIRAN</p>
              <div className="m-t-8 m-b-16">
                <table className="table-border">
                  <tr style={{ backgroundColor: '#C6E0B4' }}>
                    <th className="text-center w-[100%]" colSpan="2">
                      Kehadiran
                    </th>
                  </tr>
                  <tr>
                    <td className="text-center w-[45%]">Jumlah Hari Efektif</td>
                    <td className="text-center w-[55%]">180 hari</td>
                  </tr>
                  <tr>
                    <td className="text-center">Sakit</td>
                    <td className="text-center">2 hari</td>
                  </tr>
                  <tr>
                    <td className="text-center">Izin</td>
                    <td className="text-center">1 hari</td>
                  </tr>
                  <tr>
                    <td className="text-center">Alpa</td>
                    <td className="text-center">0 hari</td>
                  </tr>
                </table>
              </div>
            </div>
            <div id="refleksiWaliKelas" className="text-[22px]">
              <p className="komponen-rapor">REFLEKSI WALI KELAS</p>
              <div className="m-t-8 m-b-16">
                <table className="table-border table-catatan w-[100%]">
                  <tr>
                    <td>
                      John adalah siswa yang sangat aktif dan berprestasi. Dia menunjukkan kemajuan
                      yang baik dalam semua mata pelajaran.
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="mt-[33px]">
              <table className="tanda-tangan">
                <tr>
                  <td>&nbsp;</td>
                  <td>Tangerang Selatan, 1 Januari 2024</td>
                </tr>
                <tr>
                  <td>Mengetahui,</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>Orang Tua/Wali,</td>
                  <td>Wali Kelas,</td>
                </tr>
                <tr>
                  <td className="ttd">&nbsp;</td>
                  <td className="ttd">&nbsp;</td>
                </tr>
                <tr>
                  <td>Mr. Doe</td>
                  <td>Ms. Smith</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      ///////////////////////////////////////
      <div className="page_background">
        <div className="subpage">
          <p className="text-uppercase text-[22px] font-weight-bold text-center">
            Keterangan Pindah Sekolah
          </p>
          <p className="fs-14 font-weight-bold text-center">Nama Peserta Didik: John Doe</p>
          <div id="keluar" className="text-[22px]">
            <div className="m-t-16 m-b-16">
              <table className="table-border">
                <tr>
                  <th className="text-uppercase" colSpan="4">
                    Keluar
                  </th>
                </tr>
                <tr>
                  <td className="text-center w-[15%]">Tanggal</td>
                  <td className="text-center w-[15%]">Kelas yang Ditinggalkan</td>
                  <td className="text-center w-[35%]">
                    Sebab-Sebab Keluar atau Atas Permintaan (Tertulis)
                  </td>
                  <td className="text-center w-[35%]">
                    Tanda Tangan Kepala Sekolah, Stempel Sekolah, dan Tanda Tangan Orang Tua/Wali
                  </td>
                </tr>
                <tr>
                  <td className="text-center">1 Januari 2024</td>
                  <td className="text-center">Kelas 5</td>
                  <td>Keluar untuk melanjutkan pendidikan di sekolah lain.</td>
                  <td className="no-border-y pt-[15px]">____________________</td>
                </tr>
                <tr>
                  <td className="text-center">2</td>
                  <td className="text-center">Kelas 5</td>
                  <td>Alasan pribadi.</td>
                  <td className="no-border-y pt-[15px]">____________________</td>
                </tr>
                <tr>
                  <td className="text-center">3</td>
                  <td className="text-center">Kelas 5</td>
                  <td>Alasan kesehatan.</td>
                  <td className="no-border-y pt-[15px]">____________________</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      ////////////////////////////////////
      <div className="page_background">
        <div className="subpage">
          <p className="text-uppercase text-[22px] font-weight-bold text-center">
            Keterangan Pindah Sekolah
          </p>
          <p className="fs-14 font-weight-bold text-center">Nama Peserta Didik: John Doe</p>
          <div id="keluar" className="text-[22px]">
            <div className="m-t-16 m-b-16">
              <table className="table-border">
                <tr>
                  <th className="w-[5%]">No</th>
                  <th className="w-[95%] text-uppercase" colSpan="3">
                    Masuk
                  </th>
                </tr>
                <tr>
                  <td className="no-border-y text-center pt-[15px]">1</td>
                  <td className="no-border-y pt-[15px] w-[25%]">Nama Peserta Didik</td>
                  <td className="no-border-y text-center pt-[15px] w-[38%]">John Doe</td>
                  <td className="no-border-y pt-[15px] w-[32%]">____________________</td>
                </tr>
                <tr>
                  <td className="no-border-y text-center">2</td>
                  <td className="no-border-y">Nomor Induk</td>
                  <td className="no-border-y text-center">123456</td>
                  <td className="no-border-y">Kepala Sekolah,</td>
                </tr>
                <tr>
                  <td className="no-border-y text-center">3</td>
                  <td className="no-border-y">Nama Sekolah</td>
                  <td className="no-border-y text-center">Sekolah Dasar Auliya</td>
                  <td className="no-border-y">&nbsp;</td>
                </tr>
                <tr>
                  <td className="no-border-y text-center">4</td>
                  <td className="no-border-y">Masuk di Sekolah Ini:</td>
                  <td className="no-border-y text-center">1 Januari 2020</td>
                  <td className="no-border-y">&nbsp;</td>
                </tr>
                <tr>
                  <td className="no-border-y text-center">&nbsp;</td>
                  <td className="no-border-y">a. Tanggal</td>
                  <td className="no-border-y text-center">1 Januari 2020</td>
                  <td className="no-border-y">&nbsp;</td>
                </tr>
                <tr>
                  <td className="no-border-y text-center">&nbsp;</td>
                  <td className="no-border-y">b. Di Kelas</td>
                  <td className="no-border-y text-center">Kelas 1</td>
                  <td className="no-border-y">&nbsp;</td>
                </tr>
                <tr>
                  <td className="no-border-top text-center pb-[15px]">5</td>
                  <td className="no-border-top pb-[15px]">Tahun Pelajaran</td>
                  <td className="no-border-top text-center pb-[15px]">2020/2021</td>
                  <td className="no-border-top pb-[15px]">NIP </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* /////////// */}
    </div>
  );
};

export default Test;
