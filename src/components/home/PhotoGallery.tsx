import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Photo {
  id: string;
  title: string;
  category: string;
  src: string;
}

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const photos: Photo[] = [
    {
      id: 'photo-1',
      title: 'Studio Lighting Setup',
      category: 'Behind the Scenes',
      src: '/whatsapp-image-2022-10-24-at-15-54-56-thumb-mab7ujii.jpeg'
    },
    {
      id: 'photo-2',
      title: 'Camera Equipment',
      category: 'Production Gear',
      src: '/whatsapp-image-2022-10-24-at-15-54-57-thumb-mab7uxep.jpeg'
    },
    {
      id: 'photo-3',
      title: 'On Location Filming',
      category: 'Production',
      src: '/whatsapp-image-2022-10-24-at-15-54-58-thumb-mab7uz2u.jpeg'
    },
    {
      id: 'photo-4',
      title: 'Studio Session',
      category: 'Production',
      src: '/whatsapp-image-2022-10-24-at-15-54-59-thumb-mab7v0n5.jpeg'
    },
    {
      id: 'photo-5',
      title: 'Production Setup',
      category: 'Behind the Scenes',
      src: '/whatsapp-image-2022-10-24-at-15-54-561-thumb-mab7v227.jpeg'
    },
    {
      id: 'photo-6',
      title: 'Camera Equipment',
      category: 'Production Gear',
      src: '/whatsapp-image-2022-10-24-at-15-54-571-thumb-mab7v3d6.jpeg'
    },
    {
      id: 'photo-7',
      title: 'Field Production',
      category: 'Documentary',
      src: '/whatsapp-image-2022-10-24-at-15-54-581-thumb-mab7v4wp.jpeg'
    },
    {
      id: 'photo-8',
      title: 'Studio Interview',
      category: 'Production',
      src: '/whatsapp-image-2022-10-24-at-15-55-04-thumb-mab7v76i.jpeg'
    },
    {
      id: 'photo-9',
      title: 'Camera Setup',
      category: 'Production Gear',
      src: '/whatsapp-image-2022-10-24-at-15-55-05-thumb-mab7v8ti.jpeg'
    },
    {
      id: 'photo-10',
      title: 'Production Monitor',
      category: 'Equipment',
      src: '/whatsapp-image-2022-10-24-at-15-55-06-thumb-mab7vaul.jpeg'
    },
    {
      id: 'photo-11',
      title: 'Location Shoot',
      category: 'Documentary',
      src: '/whatsapp-image-2022-10-24-at-15-56-35-thumb-mab7vcny.jpeg'
    },
    {
      id: 'photo-12',
      title: 'Field Recording',
      category: 'Production',
      src: '/whatsapp-image-2022-11-07-at-16-50-23-thumb-mab7ve6y.jpeg'
    },
    {
      id: 'photo-13',
      title: 'Production Team',
      category: 'Behind the Scenes',
      src: '/whatsapp-image-2022-11-07-at-16-50-24-thumb-mab7vgi2.jpeg'
    },
    {
      id: 'photo-14',
      title: 'Community Filming',
      category: 'Documentary',
      src: '/whatsapp-image-2022-11-07-at-16-50-25-thumb-mab7vivq.jpeg'
    },
    {
      id: 'photo-15',
      title: 'Rural Documentary',
      category: 'Documentary',
      src: '/whatsapp-image-2022-11-07-at-16-50-31-thumb-mab7vke1.jpeg'
    },
    {
      id: 'photo-16',
      title: 'Team Meeting',
      category: 'Behind the Scenes',
      src: '/whatsapp-image-2022-11-07-at-17-00-57-thumb-mab7vm0x.jpeg'
    }
  ];

  const handlePhotoClick = (photo: Photo, index: number) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
    setSelectedPhoto(photos[(currentIndex === 0 ? photos.length - 1 : currentIndex - 1)]);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
    setSelectedPhoto(photos[(currentIndex === photos.length - 1 ? 0 : currentIndex + 1)]);
  };

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className='mb-12 md:mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold tracking-tight mb-4'>Our Work</h2>
          <p className='text-gray-400 max-w-3xl'>
            A glimpse into our production process and behind-the-scenes moments.
            From studio sessions to field documentaries, we capture stories that matter.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <Dialog key={photo.id}>
              <DialogTrigger asChild>
                <div 
                  className="relative aspect-square overflow-hidden cursor-pointer group"
                  onClick={() => handlePhotoClick(photo, index)}
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold">{photo.title}</h3>
                    <p className="text-gray-300 text-sm">{photo.category}</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-4xl bg-black border-gray-800">
                <div className="relative aspect-video w-full">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <h3 className="text-white font-bold text-xl">{photo.title}</h3>
                    <p className="text-gray-400">{photo.category}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={handlePrevious}
                      className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={handleNext}
                      className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}