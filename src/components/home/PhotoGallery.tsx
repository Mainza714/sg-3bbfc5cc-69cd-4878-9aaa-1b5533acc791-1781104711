
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
      id: "photo-1",
      title: "Urban Landscape",
      category: "Documentary",
      src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: "photo-2",
      title: "Portrait Study",
      category: "Portrait",
      src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: "photo-3",
      title: "Cultural Heritage",
      category: "Documentary",
      src: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: "photo-4",
      title: "Street Life",
      category: "Street",
      src: "https://images.unsplash.com/photo-1519575706483-221027bfbb31?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: "photo-5",
      title: "Architectural Forms",
      category: "Architecture",
      src: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: "photo-6",
      title: "Natural Patterns",
      category: "Nature",
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: "photo-7",
      title: "Urban Movement",
      category: "Street",
      src: "https://images.unsplash.com/photo-1506739901478-9d6e4d4c7913?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: "photo-8",
      title: "Light Study",
      category: "Abstract",
      src: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1600&auto=format&fit=crop"
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
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Photography Portfolio</h2>
          <p className="text-gray-400 max-w-3xl">
            A selection of our professional photography work across various genres and styles.
            Each image tells a unique story and captures a moment in time.
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
