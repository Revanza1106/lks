import {React,useState} from 'react'
import BlogList from '../components/BlogList';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BLog = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    const handlePostClick = (post) => {
      setSelectedPost(post);
    };
  
    const blogData = [
      {
        id: 1,
        title: 'Mengecat dengan produk kami',
        summary: ' Kami memulai perjalanan ke dunia seni lukis dan dekorasi yang transformatif, umumnya dikenal sebagai "mengecet". Blog menggali signifikansi dan kesenian di balik proses ini, menekankan potensinya untuk menghidupkan kembali dan menyegarkan ruang.',
        content: 'Mengecat bukan hanya sekadar menambah warna pada dinding atau permukaan, tetapi juga merupakan cara yang efektif untuk menciptakan suasana yang berbeda dalam ruangan. Warna memiliki pengaruh yang kuat terhadap suasana hati dan perasaan seseorang. Beberapa warna mungkin menenangkan dan menenangkan, sementara yang lainnya bisa merangsang dan energik. Misalnya, warna biru lembut sering digunakan di kamar tidur untuk menciptakan suasana yang tenang dan nyaman, sementara warna merah dan oranye sering digunakan di dapur atau ruang makan untuk meningkatkan nafsu makan.',
        image: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 2,
        title: 'Panduan Desain Rumah: Tips dan Inspirasi untuk Mewujudkan Hunian Impian Anda',
        summary: 'Desain rumah merupakan salah satu aspek penting dalam menciptakan lingkungan hunian yang nyaman, estetis, dan berfungsi dengan baik. Memiliki rumah dengan desain yang tepat dapat mencerminkan kepribadian dan gaya hidup pemiliknya. Artikel ini akan memberikan panduan, tips, dan inspirasi untuk membantu Anda merancang dan mewujudkan desain rumah impian.',
        content: 'Desain rumah merupakan salah satu aspek penting dalam menciptakan lingkungan hunian yang nyaman, estetis, dan berfungsi dengan baik. Memiliki rumah dengan desain yang tepat dapat mencerminkan kepribadian dan gaya hidup pemiliknya. Artikel ini akan memberikan panduan, tips, dan inspirasi untuk membantu Anda merancang dan mewujudkan desain rumah impian.Sebelum memulai proses desain, pertimbangkan kebutuhan dan gaya hidup Anda. Pertanyaan-pertanyaan yang perlu Anda jawab adalah: Berapa banyak anggota keluarga? Apakah Anda lebih suka ruang terbuka atau tata letak yang lebih terpisah? Bagaimana dengan gaya desain yang Anda sukai, apakah itu minimalis, klasik, modern, atau campuran dari beberapa gaya?Desain rumah yang baik haruslah berfokus pada fungsionalitas dan tata ruang. Pertimbangkan bagaimana Anda akan menggunakan setiap ruangan dan bagaimana arus lalu lintas di rumah akan berlangsung. Pastikan ada cukup ruang untuk aktivitas keluarga dan juga ruang pribadi untuk setiap anggota keluarga.',
        image: 'https://images.pexels.com/photos/4491459/pexels-photo-4491459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      },
      {
        id: 3,
        title: 'Mengecat dengan  roll',
        summary: ' Kami memulai perjalanan ke dunia seni lukis dan dekorasi yang transformatif, umumnya dikenal sebagai "mengecet". Blog menggali signifikansi dan kesenian di balik proses ini, menekankan potensinya untuk menghidupkan kembali dan menyegarkan ruang.',
        content: 'Mengecat bukan hanya sekadar menambah warna pada dinding atau permukaan, tetapi juga merupakan cara yang efektif untuk menciptakan suasana yang berbeda dalam ruangan. Warna memiliki pengaruh yang kuat terhadap suasana hati dan perasaan seseorang. Beberapa warna mungkin menenangkan dan menenangkan, sementara yang lainnya bisa merangsang dan energik. Misalnya, warna biru lembut sering digunakan di kamar tidur untuk menciptakan suasana yang tenang dan nyaman, sementara warna merah dan oranye sering digunakan di dapur atau ruang makan untuk meningkatkan nafsu makan.',
        image: 'https://images.pexels.com/photos/5691610/pexels-photo-5691610.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 4,
        title: 'Mengecat dengan produk kami',
        summary: 'Kami memulai perjalanan ke dunia seni lukis dan dekorasi yang transformatif, umumnya dikenal sebagai "mengecet". Blog menggali signifikansi dan kesenian di balik proses ini, menekankan potensinya untuk menghidupkan kembali dan menyegarkan ruang.',
        content: 'Mengecat bukan hanya sekadar menambah warna pada dinding atau permukaan, tetapi juga merupakan cara yang efektif untuk menciptakan suasana yang berbeda dalam ruangan. Warna memiliki pengaruh yang kuat terhadap suasana hati dan perasaan seseorang. Beberapa warna mungkin menenangkan dan menenangkan, sementara yang lainnya bisa merangsang dan energik. Misalnya, warna biru lembut sering digunakan di kamar tidur untuk menciptakan suasana yang tenang dan nyaman, sementara warna merah dan oranye sering digunakan di dapur atau ruang makan untuk meningkatkan nafsu makan.',
        image: 'https://images.pexels.com/photos/5691601/pexels-photo-5691601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      
    ];
  
    return (
        <>
        <Navbar/>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-500"> Blog</h1>
        {selectedPost ? (
          <div className="border p-4 shadow-xl">
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-[500px] object-cover mb-2"
            />
            <h2 className="text-xl font-bold">{selectedPost.title}</h2>
            <p className="mt-2">{selectedPost.content}</p>
          </div>
          
        ) : (
          <BlogList posts={blogData} onPostClick={handlePostClick} />
        )}
      </div>
      <Footer/>
      </>
    );
  };

export default BLog