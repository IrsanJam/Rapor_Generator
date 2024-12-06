import React from 'react';
import useData from '../../../hooks/useData';
import { useParams } from 'react-router-dom';
import { formattedDate } from '../../../utils/function';

const Raport = () => {
  const { id } = useParams();
  const { data } = useData(id);

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
                  <div className="subpage">{currentSubpageContent}</div>
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
                  <div id="petunjukPengisian" className="mt-[44px] text-justify">
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
                  <div id="dataPesertaDidik" className="mt-[44px] mx-auto">
                    <table className="student-data">
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
    <div className="font-normal avoid-break">
      <DynamicDocument data={data} />
    </div>
  );
};

export default Raport;
