import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



const About = () => {
  return (
    <div>
      <Navbar/>
        <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6"><span className='text-semibold text-blue-500'>Tentang</span> <span className='text-bold '>Kami</span></h2>
        <p className="text-black leading-relaxed text-xl">
        Wijaya Bersama, kami berkomitmen untuk menyediakan beragam produk berkualitas tinggi untuk memenuhi kebutuhan bangunan Anda. Sebagai salah satu penyedia terkemuka di industri ini, kami bangga telah melayani pelanggan dari berbagai latar belakang, termasuk pemilik rumah, kontraktor, arsitek, dan pengembang proyek.
        </p>
        <div className='bg-blue-500 rounded-xl'>
        <p className="text-black font-semibold leading-relaxed mt-4 text-bold ml-4 ">
          Visi:
        </p>
        <p className="text-black leading-relaxed ">
        Visi kami di Wijaya Bersama adalah menjadi mitra terpercaya dan terdepan dalam industri penyediaan produk bangunan berkualitas tinggi. Kami bermimpi untuk menciptakan lingkungan yang lebih baik dengan menyediakan solusi dan produk inovatif yang memenuhi kebutuhan beragam para pelanggan kami. Dengan terus berupaya meningkatkan standar pelayanan dan kualitas produk, kami bertujuan untuk menjadi tolok ukur keunggulan dalam industri ini.
        </p>
        </div>
        <div className='bg-blue-500 rounded-xl'>
        <p className="text-black leading-relaxed mt-4 ml-4 font-semibold">
          Misi:
        </p>
        <ul className="list-disc list-inside pl-6">
          {/* 1 */}
          <li className='text-black'>Memberikan Produk Berkualitas Tinggi: Misi kami yang utama adalah menyediakan produk berkualitas tinggi yang memenuhi standar ketat dalam keamanan, keandalan, dan performa. Kami bekerja sama dengan pemasok terpercaya dan melakukan pengujian ketat untuk memastikan bahwa setiap produk yang kami tawarkan memenuhi harapan pelanggan</li>
          {/* 2 */}
          <li className="text-black">Kepuasan Pelanggan: Fokus kami adalah memberikan kepuasan maksimal bagi setiap pelanggan yang berbisnis dengan kami. Kami mendengarkan dengan saksama kebutuhan dan permintaan pelanggan untuk memberikan solusi yang sesuai dan efektif dalam setiap proyek mereka. Kepuasan pelanggan adalah prioritas utama kami.</li>
          {/* 3 */}
          <li className="text-black">Inovasi dan Pengembangan Produk: Kami berkomitmen untuk terus berinovasi dan mengembangkan produk-produk baru yang menghadirkan nilai tambah bagi para pelanggan kami. Dengan memantau tren industri dan teknologi terkini, kami berusaha untuk menghadirkan solusi yang lebih efisien dan ramah lingkungan.</li>
          {/* 4 */}
          <li className="text-black">Keberlanjutan Lingkungan: Kami menyadari tanggung jawab kami terhadap lingkungan dan masyarakat di sekitar kami. Oleh karena itu, kami berusaha untuk mengurangi dampak lingkungan melalui pilihan produk yang ramah lingkungan dan praktik bisnis yang berkelanjutan.</li>
          {/* 5 */}
          <li className="text-black">Kemitraan yang Kokoh: Kami menganggap pelanggan, pemasok, dan rekan bisnis kami sebagai mitra yang berharga. Melalui kerja sama yang kuat dan saling menguntungkan, kami bertujuan untuk membangun hubungan jangka panjang yang dapat mendorong pertumbuhan dan kesuksesan bersama..</li>
          {/* 6 */}
          <li className="text-black">Mendorong Pertumbuhan Industri: Sebagai pemain terkemuka di industri ini, kami berusaha untuk mendorong pertumbuhan industri secara keseluruhan. Kami berkontribusi dengan berbagi pengetahuan dan pengalaman, serta berpartisipasi aktif dalam berbagai inisiatif dan kegiatan yang mendukung perkembangan industri konstruksi.</li>
          {/* Add more list items as needed */}
        </ul>
        </div>
      </div>
        <Footer/>
    </div>
  )
}

export default About