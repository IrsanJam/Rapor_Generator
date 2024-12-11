import React, { useEffect } from 'react';
import useData from '../../../hooks/useData';
import { useParams } from 'react-router-dom';
import { formattedDate } from '../../../utils/function';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Raport = () => {
  const { id } = useParams();
  const { data } = useData(id);
  const handleDownload = async () => {
    const pages = document.querySelectorAll('.page_background, .page');
    const pdf = new jsPDF('p', 'mm', 'a4');
    let isFirstPage = true;

    for (const page of pages) {
      const canvas = await html2canvas(page, { scale: 3 });
      const imgData = canvas.toDataURL('image/png', 0.7);
      const imgWidth = 210; // A4 width in mm
      const imgHeight = 290; // A4 height in mm

      if (!isFirstPage) {
        pdf.addPage();
      }
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      isFirstPage = false;
    }

    pdf.save('document.pdf');
  };

  const DynamicDocument = ({ data }) => {
    let currentPageContent = [];
    let currentSubpageContent = [];

    return (
      <div>
        {data.map((item, index) => {
          switch (item.key) {
            case 'break':
              // Render the current page if it has content
              const page = (
                <div
                  className={index === currentSubpageContent.length ? 'page' : 'page_background'}
                  key={`page-${index}`}
                >
                  <div key={`subpage-${index}`} className="subpage ">
                    {currentSubpageContent}
                  </div>
                </div>
              );
              currentPageContent = []; // Reset for the next page
              currentSubpageContent = []; // Reset for the next subpage
              return page;

            case 'logo':
              currentSubpageContent.push(
                <div
                  key={index}
                  className={`flex justify-${
                    item.alignment === 'right'
                      ? 'end'
                      : item.alignment === 'left'
                      ? 'start'
                      : 'center'
                  } `}
                >
                  <img className="logo" src={item.value} alt={`Gambar ${index}`} />
                </div>
              );
              break;

            case 'h1':
              // When adding an h1, we can treat it as content for the current page
              currentSubpageContent.push(
                <p className={`title text-${item.alignment}`} key={index}>
                  {item.value}
                </p>
              );
              break;

            case 'h2':
              // When adding an h2, we can treat it as content for the current page
              currentSubpageContent.push(
                <p className={`text-[18px] text-${item.alignment}`} key={index}>
                  {item.value}
                </p>
              );
              break;

            case 'text_box':
              currentSubpageContent.push(
                <div className>
                  <p className="text-center p-3">{item.title}</p>
                  <table className="cover-name">
                    <tr>
                      <td
                        className={`text-center ${
                          item.title.includes('NIS')
                            ? 'font-normal'
                            : 'font-weight-bold text-[18px]'
                        } `}
                      >
                        {item.value}
                      </td>
                    </tr>
                  </table>
                </div>
              );
              break;
            case 'ministry':
              currentSubpageContent.push(
                <div className="ministry-container text-uppercase m-t-58">
                  <p>{item.paraghraph1}</p>
                  <p>{item.paraghraph2}</p>
                </div>
              );
              break;

            case 'instruction':
              const instructions = item.value
                .split('.')
                .map((text) => text.trim())
                .filter((text) => text.length > 0); // Hilangkan string kosong

              currentSubpageContent.push(
                <div className="opacity-100" key={index}>
                  <div className="title-container">
                    <p className="title">{item.title}</p>
                  </div>
                  <div id="petunjukPengisian" className="mt-[44px] text-justify text-[13px]">
                    <p>{item.head}</p>
                    <ol className="list-decimal pl-16 mt-5">
                      {instructions.map((instruction, idx) => (
                        <li key={idx}>{instruction}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              );

              break;

            case 'school_data':
              currentSubpageContent.push(
                <div>
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
              );
              break;

            case 'student_data':
              currentSubpageContent.push(
                <div>
                  <div className="title-container">
                    <p className="title">Keterangan tentang Diri Peserta Didik</p>
                  </div>
                  <div id="dataPesertaDidik" className="mt-[44px]">
                    <table className="student-data ml-[30px]">
                      <tr>
                        <td>1.</td>
                        <td>Nama Peserta Didik (Lengkap)</td>
                        <td>:</td>
                        <td>{item.name ? item.name : 'Nama Siswa'}</td>
                      </tr>
                      <tr>
                        <td>2.</td>
                        <td>NIPD / NISN</td>
                        <td>:</td>
                        <td>{item.nipd ? item.nipd : '123456'}</td>
                      </tr>
                      <tr>
                        <td>3.</td>
                        <td>Tempat, Tanggal Lahir</td>
                        <td>:</td>
                        <td>{item.birthplace ? item.birthplace : 'Tangerang, 1 Januari 2010'}</td>
                      </tr>
                      <tr>
                        <td>4.</td>
                        <td>Jenis Kelamin</td>
                        <td>:</td>
                        <td>{item.gender ? item.gender : 'Laki-laki'}</td>
                      </tr>
                      <tr>
                        <td>5.</td>
                        <td>Agama</td>
                        <td>:</td>
                        <td>{item.religion ? item.religion : 'Islam'}</td>
                      </tr>
                      <tr>
                        <td>6.</td>
                        <td>Alamat Peserta Didik</td>
                        <td>:</td>
                        <td>{item.address ? item.address : 'Jl. Keluarga No. 1, Tangerang'}</td>
                      </tr>
                      <tr>
                        <td colSpan="3">&nbsp;</td>
                        <td>
                          {item.sub_district
                            ? item.sub_district
                            : 'Kelurahan A, Kecamatan B, Kota C'}
                        </td>
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
                        <td>{item.father_name ? item.father_name : 'Mr. Doe'}</td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td>b. Ibu</td>
                        <td>:</td>
                        <td>{item.mother_name ? item.mother_name : 'Mrs. Doe'}</td>
                      </tr>
                      <tr>
                        <td>8.</td>
                        <td>alamat</td>
                        <td>:</td>
                        <td>
                          {item.full_address_parent
                            ? item.full_address_parent
                            : 'Jl. Keluarga No. 2, Tangerang'}
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              );
              break;

            case 'pas_photo_ttd':
              currentSubpageContent.push(
                <div id="tanda-tangan-container" className="mt-[33px]">
                  <div id="tandaTangan">
                    <table className="tanda-tangan text-[11px]">
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
                        <td>
                          {item.city}, {formattedDate}
                        </td>
                      </tr>
                      <tr>
                        <td>{item.position},</td>
                      </tr>
                      <tr>
                        <td className="ttd">&nbsp;</td>
                      </tr>
                      <tr>
                        <td>{item.name}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              );
              break;

            case 'pas_photo':
              currentSubpageContent.push(
                <div id="tanda-tangan-container" className="mt-[33px]">
                  <div id="tandaTangan">
                    <table className={`flex justify-${item.alignment} items-center text-center`}>
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
                      </tr>
                    </table>
                  </div>
                </div>
              );
              break;

            case 'student_data_head_tk':
              currentSubpageContent.push(
                <div id="dataSiswa" className="text-[11px]">
                  <table>
                    <tr>
                      <td className="w-[15%]">Nama Peserta Didik</td>
                      <td className="w-[2%]">:</td>
                      <td className="w-[40%]">{item.name}</td>
                      <td className="w-[15%]">Fase/Kelas</td>
                      <td className="w-[2%]">:</td>
                      <td className="w-[24%]">{item.class}</td>
                    </tr>
                    <tr>
                      <td>NIPD</td>
                      <td>:</td>
                      <td>{item.nipd}</td>
                      <td>Semester</td>
                      <td>:</td>
                      <td>{item.semester}</td>
                    </tr>
                    <tr>
                      <td colSpan="3">&nbsp;</td>
                      <td>Tahun Pelajaran</td>
                      <td>:</td>
                      <td>{item.academic_year}</td>
                    </tr>
                  </table>
                </div>
              );
              break;

            case 'student_data_head':
              currentSubpageContent.push(
                <div id="" className="text-[11px]">
                  <table>
                    <tr>
                      <td className="w-[15%]">Nama Peserta Didik</td>
                      <td className="w-[2%]">:</td>
                      <td className="w-[40%]">{item.name}</td>
                      <td className="w-[15%]">Fase/Kelas</td>
                      <td className="w-[2%]">:</td>
                      <td className="w-[24%]">{item.class}</td>
                    </tr>
                    <tr>
                      <td>NISN</td>
                      <td>:</td>
                      <td>{item.nisn}</td>
                      <td>Semester</td>
                      <td>:</td>
                      <td>{item.semester}</td>
                    </tr>

                    <tr>
                      <td>NIPD</td>
                      <td>:</td>
                      <td>{item.nipd}</td>
                      <td>Tahun Pelajaran</td>
                      <td>:</td>
                      <td>{item.academic_year ? item.academic_year : ''}</td>
                    </tr>
                  </table>
                </div>
              );

              break;
            case 'table_intra':
              currentSubpageContent.push(
                <div id="kurikulumMerdeka" className="m-t-22" key={index}>
                  <p className="komponen-rapor uppercase">INTRAKULIKULER</p>
                  <div className="m-t-16 m-b-16">
                    <table className="table-border page-break-auto">
                      <thead>
                        <tr style={{ backgroundColor: '#C6E0B4' }}>
                          {(item.headers || []).map((header, index) => (
                            <th key={index} className={header.width || ''}>
                              {header.label || 'Header Tidak Tersedia'}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {(item.data || []).length > 0 ? (
                          item.data.map((row, index) => (
                            <React.Fragment key={index}>
                              <tr>
                                <td
                                  className="text-center align-middle"
                                  rowSpan={row.deskripsi?.length || 1}
                                >
                                  {index + 1}
                                </td>
                                <td
                                  className="align-middle no-bold"
                                  rowSpan={row.deskripsi?.length || 1}
                                >
                                  {row.mataPelajaran || 'Mata Pelajaran Tidak Tersedia'}
                                </td>
                                <td
                                  className="align-middle no-bold text-center"
                                  rowSpan={row.deskripsi?.length || 1}
                                >
                                  {row.nilaiAkhir !== undefined ? row.nilaiAkhir : '-'}
                                </td>
                                <td className="align-middle no-bold">
                                  {row.deskripsi?.[0] || 'Deskripsi Tidak Tersedia'}
                                </td>
                              </tr>
                              {row.deskripsi?.slice(1).map((desc, i) => (
                                <tr key={`${index}-${i}`}>
                                  <td className="align-middle no-bold">{desc}</td>
                                </tr>
                              ))}
                            </React.Fragment>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={item.headers?.length || 1} className="text-center">
                              Data Tidak Tersedia
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
              break;

            case 'table_qurani':
              currentSubpageContent.push(
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
                        {/* Tilawah Section */}
                        <tr>
                          <td className="text-center align-top border border-gray-300" rowSpan={4}>
                            1
                          </td>
                          <td colSpan="3" className="border border-gray-300 font-bold">
                            {item.tilawah.title}
                          </td>
                        </tr>
                        {item.tilawah.section.map((section) => (
                          <tr key={section.id}>
                            <td className="border border-gray-300">{section.id}</td>
                            <td className="border border-gray-300">{section.title}</td>
                            <td className="border border-gray-300">{section.description}</td>
                          </tr>
                        ))}

                        {/* Tahfidz Section */}
                        <tr>
                          <td className="text-center align-top border border-gray-300" rowSpan={4}>
                            2
                          </td>
                          <td colSpan="3" className="border border-gray-300 font-bold">
                            {item.tahfidz.title}
                          </td>
                        </tr>
                        {item.tahfidz.section.map((section, index) => (
                          <tr key={section.id}>
                            <td className="border border-gray-300">{section.id}</td>
                            <td className="border border-gray-300">{section.title}</td>
                            {/* RowSpan Description: Ditambahkan sekali saja */}
                            {index === 0 && (
                              <td
                                className="!border-collapse border-gray-300"
                                rowSpan={item.tahfidz.section.length}
                              >
                                {item.tahfidz.description}
                              </td>
                            )}
                          </tr>
                        ))}

                        {/* Akhlak Mulia Section */}
                        <tr>
                          <td colSpan="4" className="font-bold">
                            {item.akhlak_mulia.title}
                          </td>
                        </tr>
                        {item.akhlak_mulia.section.map((section, index) => (
                          <tr key={index}>
                            <td className="border border-gray-300">{index + 1}</td>
                            <td colSpan="2" className="border border-gray-300">
                              {section.title}
                            </td>
                            <td className="border border-gray-300">{section.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
              break;

            case 'table':
              currentSubpageContent.push(
                <div id="kurikulumMerdeka" className="m-t-22" key={index}>
                  <p className="komponen-rapor uppercase">{item.title || 'Judul Tidak Tersedia'}</p>
                  <div className="m-t-16 m-b-16">
                    <table className="table-border page-break-auto">
                      <thead>
                        <tr style={{ backgroundColor: '#C6E0B4' }}>
                          {(item.headers || []).map((header, index) => (
                            <th key={index} className={header.width || ''}>
                              {header.label || 'Header Tidak Tersedia'}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {(item.data || []).length > 0 ? (
                          item.data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                              {(item.headers || []).map((header, colIndex) => (
                                <td key={colIndex} className="align-middle no-bold">
                                  {row[header.key] !== undefined ? row[header.key] : '-'}
                                </td>
                              ))}
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={item.headers?.length || 1} className="text-center">
                              Data Tidak Tersedia
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
              break;

            case 'table_digital':
              currentSubpageContent.push(
                <div id="kurikulumMerdeka" className="m-t-22" key={index}>
                  <p className="komponen-rapor uppercase">{item.title || 'Judul Tidak Tersedia'}</p>
                  <div className="m-t-16 m-b-16">
                    <table className="table-border page-break-auto">
                      <thead>
                        <tr style={{ backgroundColor: '#C6E0B4' }}>
                          {(item.headers || []).map((header, index) => (
                            <th key={index} className={header.width || ''}>
                              {header.label || 'Header Tidak Tersedia'}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {(item.data || []).length > 0 ? (
                          item.data.map((row, index) => (
                            <React.Fragment key={index}>
                              <tr>
                                <td
                                  className="text-center align-middle"
                                  rowSpan={row.deskripsi?.length || 1}
                                >
                                  {index + 1}
                                </td>
                                <td className="align-middle no-bold w-[30%]">
                                  {row.learning_obj || ''}
                                </td>
                                <td className=" italic align-middle no-bold">
                                  {row.deskripsi?.[0] || 'Deskripsi Tidak Tersedia'}
                                </td>
                              </tr>
                              {row.deskripsi?.slice(1).map((desc, i) => (
                                <tr key={`${index}-${i}`}>
                                  <td className="align-middle no-bold ">{desc}</td>
                                </tr>
                              ))}
                            </React.Fragment>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={item.headers?.length || 1} className="text-center">
                              Data Tidak Tersedia
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
              break;

            case 'table_refleksi':
              currentSubpageContent.push(
                <div id="kurikulumMerdeka" className="m-t-22" key={index}>
                  <p className="komponen-rapor uppercase">{item.title || 'Judul Tidak Tersedia'}</p>
                  <div className="m-t-16 m-b-16">
                    <table className="table-border page-break-auto">
                      <thead>
                        <tr style={{ backgroundColor: '#C6E0B4' }}>
                          {(item.headers || []).map((header, index) => (
                            <th key={index} className={`${header.width} italic || ''`}>
                              {header.label || 'Header Tidak Tersedia'}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {(item.data || []).length > 0 ? (
                          item.data.map((row, index) => (
                            <React.Fragment key={index}>
                              <tr>
                                <td
                                  className="text-center align-middle"
                                  rowSpan={row.deskripsi?.length || 1}
                                >
                                  {index + 1}
                                </td>
                                <td className="align-middle no-bold w-[30%]">
                                  {row.softskill || ''}
                                </td>
                                <td className=" italic align-middle no-bold">
                                  {row.deskripsi?.[0] || 'Deskripsi Tidak Tersedia'}
                                </td>
                              </tr>
                              {row.deskripsi?.slice(1).map((desc, i) => (
                                <tr key={`${index}-${i}`}>
                                  <td className="align-middle no-bold ">{desc}</td>
                                </tr>
                              ))}
                            </React.Fragment>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={item.headers?.length || 1} className="text-center">
                              Data Tidak Tersedia
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
              break;

            case 'table_kehadiran':
              currentSubpageContent.push(
                <div id="kurikulumMerdeka" className="m-t-22" key={index}>
                  <p className="komponen-rapor uppercase">{item.title || 'Judul Tidak Tersedia'}</p>
                  <div className="m-t-16 m-b-16">
                    <table className="table-border page-break-auto w-full">
                      <thead>
                        <tr style={{ backgroundColor: '#C6E0B4' }}>
                          <th key={index} colSpan={2} className="w-full">
                            Kehadiran
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {(item.data || []).length > 0 ? (
                          item.data.map((row, index) => (
                            <React.Fragment key={index}>
                              <tr>
                                <td className="align-middle no-bold w-[45%] text-center">
                                  {row.status || ''}
                                </td>
                                <td className="  align-middle no-bold w-[45%] text-center ">
                                  {row.deskripsi?.[0] || 'Deskripsi Tidak Tersedia'}
                                </td>
                              </tr>
                              {row.deskripsi?.slice(1).map((desc, i) => (
                                <tr key={`${index}-${i}`}>
                                  <td className="align-middle no-bold ">{desc}</td>
                                </tr>
                              ))}
                            </React.Fragment>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={item.headers?.length || 1} className="text-center">
                              Data Tidak Tersedia
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
              break;
            case 'refleksi':
              currentSubpageContent.push(
                <div id="refleksiWaliKelas" className="mt-6 ">
                  <p className="komponen-rapor uppercase">REFLEKSI WALI KELAS</p>
                  <div className="mt-2 mb-4 w-full">
                    <table className="table-border table-catatan w-[100%]">
                      <tbody>
                        <tr>
                          <td>{item.value}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              );
              break;

            case 'validation':
              currentSubpageContent.push(
                <div className="mt-[33px]">
                  <table className="unvalidated">
                    <tr>
                      <td className="uppercase">Dokumen rapor ini belum divalidasi</td>
                    </tr>
                  </table>
                </div>
              );
              break;

            case 'pindah_sekolah1':
              currentSubpageContent.push(
                <div>
                  <div>
                    <p className="uppercase text-lg font-bold text-center">
                      Keterangan Pindah Sekolah
                    </p>
                    <p className="text-sm font-bold text-center">
                      Nama Peserta Didik: {Array.from({ length: 46 }, () => '.').join('')}
                    </p>
                    <div id="keluar" className="mt-6">
                      <div className="mt-4 mb-4">
                        <table className="table-border w-full">
                          <thead>
                            <tr>
                              <th className="uppercase text-center" colSpan={4}>
                                Keluar
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-center w-[15%]">Tanggal</td>
                              <td className="text-center w-[15%]">Kelas yang Ditinggalkan</td>
                              <td className="text-center w-[35%]">
                                Sebab-Sebab Keluar atau Atas Permintaan (Tertulis)
                              </td>
                              <td className="text-center w-[35%]">
                                Tanda Tangan Kepala Sekolah, Stempel Sekolah, dan Tanda Tangan Orang
                                Tua/Wali
                              </td>
                            </tr>
                            {Array.from({ length: 3 }, (_, j) => (
                              <React.Fragment key={j}>
                                <tr>
                                  <td className="text-center" rowSpan={8}>
                                    &nbsp;
                                  </td>
                                  <td className="text-center" rowSpan={8}>
                                    &nbsp;
                                  </td>
                                  <td className="" rowSpan={8}>
                                    &nbsp;
                                  </td>
                                  <td className="no-border-y pt-4">
                                    {Array.from({ length: 26 }, () => '.').join('')},{' '}
                                    {Array.from({ length: 36 }, () => '.').join('')}
                                  </td>
                                </tr>
                                <tr>
                                  <td className="no-border-y">Kepala Sekolah,</td>
                                </tr>
                                <tr>
                                  <td className="ttd no-border-y">&nbsp;</td>
                                </tr>
                                <tr>
                                  <td className="no-border-y">
                                    {Array.from({ length: 66 }, () => '.').join('')}
                                  </td>
                                </tr>
                                <tr>
                                  <td className="no-border-y">NIP</td>
                                </tr>
                                <tr>
                                  <td className="no-border-y">Orang Tua/Wali,</td>
                                </tr>
                                <tr>
                                  <td className="ttd no-border-y">&nbsp;</td>
                                </tr>
                                <tr>
                                  <td className="no-border-top">
                                    {Array.from({ length: 66 }, () => '.').join('')}
                                  </td>
                                </tr>
                              </React.Fragment>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              );
              break;

            case 'pindah_sekolah2':
              currentSubpageContent.push(
                <div>
                  <div>
                    <p className="uppercase text-2xl font-bold text-center">
                      Keterangan Pindah Sekolah
                    </p>
                    <p className="text-sm font-bold text-center">
                      Nama Peserta Didik:
                      {Array.from({ length: 46 }, (_, i) => '.').join('')}
                    </p>
                    <div id="keluar" className="mt-5">
                      <div className="mt-4 mb-4">
                        <table className="table-border w-full">
                          <thead>
                            <tr>
                              <th className=" w-[5%]">No</th>
                              <th className="uppercase w-[95%]  text-center" colSpan="3">
                                Masuk
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {Array.from({ length: 3 }, (_, j) => (
                              <React.Fragment key={j}>
                                <tr>
                                  <td className="no-border-y text-center py-4">1</td>
                                  <td className="no-border-y py-4 w-[25%]">Nama Peserta Didik</td>
                                  <td className="no-border-y text-center py-4 w-[38%]">
                                    {Array.from({ length: 71 }, (_, i) => '.').join('')}
                                  </td>
                                  <td className="no-border-y py-4 w-[32%]">
                                    {Array.from({ length: 26 }, (_, i) => '.').join('')},{' '}
                                    {Array.from({ length: 36 }, (_, i) => '.').join('')}
                                  </td>
                                </tr>
                                <tr>
                                  <td className="no-border-y text-center">2</td>
                                  <td className="no-border-y">Nomor Induk</td>
                                  <td className="no-border-y text-center">
                                    {Array.from({ length: 71 }, (_, i) => '.').join('')}
                                  </td>
                                  <td className="no-border-y">Kepala Sekolah,</td>
                                </tr>
                                <tr>
                                  <td className="no-border-y text-center">3</td>
                                  <td className="no-border-y">Nama Sekolah</td>
                                  <td className="no-border-y text-center">
                                    {Array.from({ length: 71 }, (_, i) => '.').join('')}
                                  </td>
                                  <td className="no-border-y">&nbsp;</td>
                                </tr>
                                <tr>
                                  <td className="no-border-y text-center">4</td>
                                  <td className="no-border-y">Masuk di Sekolah Ini:</td>
                                  <td className="no-border-y text-center">
                                    {Array.from({ length: 71 }, (_, i) => '.').join('')}
                                  </td>
                                  <td className="no-border-y">&nbsp;</td>
                                </tr>
                                <tr>
                                  <td className="no-border-y text-center">&nbsp;</td>
                                  <td className="no-border-y">a. Tanggal</td>
                                  <td className="no-border-y text-center">
                                    {Array.from({ length: 71 }, (_, i) => '.').join('')}
                                  </td>
                                  <td className="no-border-y">&nbsp;</td>
                                </tr>
                                <tr>
                                  <td className="no-border-y text-center">&nbsp;</td>
                                  <td className="no-border-y">b. Di Kelas</td>
                                  <td className="no-border-y text-center">
                                    {Array.from({ length: 71 }, (_, i) => '.').join('')}
                                  </td>
                                  <td className="no-border-y">
                                    {Array.from({ length: 66 }, (_, i) => '.').join('')}
                                  </td>
                                </tr>
                                <tr>
                                  <td className="no-border-top text-center pb-4">5</td>
                                  <td className="no-border-top pb-4">Tahun Pelajaran</td>
                                  <td className="no-border-top text-center pb-4">
                                    {Array.from({ length: 71 }, (_, i) => '.').join('')}
                                  </td>
                                  <td className="no-border-top pb-4">NIP</td>
                                </tr>
                              </React.Fragment>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              );
              break;

            case 'space_top':
              currentSubpageContent.push(<div className="mt-[33px]"></div>);
              break;

            case 'space_bottom':
              currentSubpageContent.push(<div className="mb-[33px]"></div>);
              break;

            default:
              return null;
          }
        })}

        {/* Render any remaining content after the loop */}
        {currentPageContent.length > 0 || currentSubpageContent.length > 0 ? (
          <div className="page_background">
            <div className="subpage">{currentSubpageContent}</div>
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <>
      <button
        className="top-5 text-white rounded-md left-5  relative z-[111] px-5 py-2 bg-zinc-700"
        onClick={handleDownload}
      >
        Generate PDF
      </button>
      <div
        id="content-to-pdf"
        className="font-normal avoid-break max-h-screen overflow-hidden mt-[-28px] px-5 hover:overflow-y-scroll"
      >
        <DynamicDocument data={data} />
      </div>
    </>
  );
};

export default Raport;
