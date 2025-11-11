"use client"

import 'react-phone-input-2/lib/style.css';
import DomeGallery from '../../components/DomeGallery';

export function GallerySection() {

  return (
    <section
      id="gallery"
      className="py-10 md:py-20 bg-gradient-to-b from-gray-900 to-blue-900 flex items-center justify-center"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Ma gallerie</h2>
        <div style={{ width: '100%', height: '75vh' }}>
          <DomeGallery />
        </div>
      </div>
    </section>
  )
}

