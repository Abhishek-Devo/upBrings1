// app/gallery/page.tsx
import Navbar from '@/components/Navbar';
import Image from 'next/image';

const GalleryPage = () => {
  const galleryItems = [
    { id: 1, image: '/images/gallery/port-6.jpg', title: 'Hygiene', description: 'Teaching unprivileged children the importance of hygiene.' },
    { id: 2, image: '/images/gallery/port-1.jpg', title: 'Education', description: 'Giving unprivileged children basic education.' },
    { id: 3, image: '/images/gallery/port-2.jpg', title: 'Women Health', description: 'Teaching unprivileged girls importance of menstrual health.' },
    { id: 4, image: '/images/gallery/port-3.jpg', title: 'Food Distribution', description: 'Distributing food among unprivileged children.' },
    { id: 5, image: '/images/gallery/port-4.jpg', title: 'Stationary Distribution', description: 'Distributing Stationary among unprivileged children.' },
    { id: 6, image: '/images/gallery/port-5.jpg', title: 'Mental Health', description: 'Teaching unprivileged children about mental health.' },
  ];

  return (
    <>
    <Navbar/>    
    <br/>
    <br/>
    <div className="w-full py-8 text-center">
      <h1 className="text-5xl uppercase leading-tight pb-8 text-gray-800 tracking-wide">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryItems.map((item) => (
          <div key={item.id} className="relative overflow-hidden shadow-lg cursor-pointer group h-64">
            <Image 
              src={item.image} 
              alt={item.title} 
              layout="fill" 
              objectFit="cover" 
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300">
              <div className="text-center p-4">
                <h2 className="text-2xl uppercase mb-2">{item.title}</h2>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default GalleryPage;
