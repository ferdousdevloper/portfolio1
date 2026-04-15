import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand, FaCompress, FaPlus, FaMinus } from "react-icons/fa";

const ImageGalleryLightbox = ({ images, title }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const imageContainerRef = useRef(null);

  const openLightbox = (index) => {
    setSelectedIndex(index);
    setIsOpen(true);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const goToPrev = useCallback(() => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, [images.length]);

  const goToNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, [images.length]);

  const handleZoomIn = (e) => {
    e?.stopPropagation();
    setZoom((prev) => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = (e) => {
    e?.stopPropagation();
    setZoom((prev) => {
      const newZoom = Math.max(prev - 0.5, 1);
      if (newZoom === 1) setPosition({ x: 0, y: 0 });
      return newZoom;
    });
  };

  const handleResetZoom = (e) => {
    e?.stopPropagation();
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    if (zoom > 1) {
      setIsDragging(true);
      dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.current.x,
        y: e.clientY - dragStart.current.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "+" || e.key === "=") handleZoomIn();
      if (e.key === "-") handleZoomOut();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeLightbox, goToPrev, goToNext]);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="mt-28">
        <h3 className="text-2xl font-semibold mb-10 text-gray-900 dark:text-white flex items-center gap-3">
          <FaExpand className="text-fuchsia-600" />
          Project Screenshots
          <span className="text-sm text-gray-500 dark:text-gray-400 font-normal">
            ({images.length} images)
          </span>
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => openLightbox(i)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={img}
                  alt={`${title} screenshot ${i + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FaExpand className="text-white text-3xl transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-white text-sm">Screenshot {i + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-all z-50"
              onClick={closeLightbox}
            >
              <FaTimes className="text-2xl" />
            </button>

            <div className="absolute top-6 left-6 z-50">
              <span className="text-white/70 text-sm">
                {selectedIndex + 1} / {images.length}
              </span>
            </div>

            <button
              className="absolute left-4 md:left-8 p-4 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-all z-50"
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
            >
              <FaChevronLeft className="text-2xl" />
            </button>

            <button
              className="absolute right-4 md:right-8 p-4 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-all z-50"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <FaChevronRight className="text-2xl" />
            </button>

            <div 
              className="max-w-5xl max-h-[70vh] mx-4 relative overflow-hidden"
              ref={imageContainerRef}
              onClick={(e) => e.stopPropagation()}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              style={{ cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
            >
              <motion.img
                key={selectedIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={images[selectedIndex]}
                alt={`${title} ${selectedIndex + 1}`}
                className="w-full h-full object-contain rounded-xl shadow-2xl select-none max-h-[70vh]"
                draggable={false}
                style={{
                  transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                  transformOrigin: 'center center',
                }}
              />
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-50">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-xl rounded-full px-4 py-2">
                <button
                  type="button"
                  onClick={handleZoomOut}
                  className="w-8 h-8 rounded-full bg-white/10 text-white hover:bg-white/30 transition-all flex items-center justify-center disabled:opacity-30"
                  disabled={zoom <= 1}
                >
                  −
                </button>
                <span className="text-white text-xs min-w-[50px] text-center font-medium">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  type="button"
                  onClick={handleZoomIn}
                  className="w-8 h-8 rounded-full bg-white/10 text-white hover:bg-white/30 transition-all flex items-center justify-center disabled:opacity-30"
                  disabled={zoom >= 4}
                >
                  +
                </button>
              </div>
              <button
                type="button"
                onClick={handleResetZoom}
                className="p-2 rounded-full bg-black/60 text-white/70 hover:text-white hover:bg-white/20 transition-all"
                title="Reset"
              >
                <FaCompress className="text-xs" />
              </button>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex(i);
                    setZoom(1);
                    setPosition({ x: 0, y: 0 });
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === selectedIndex
                      ? "bg-fuchsia-500 w-8"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
              <span className="text-white/40 text-[10px]">
                Arrow keys to navigate • +/- to zoom
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGalleryLightbox;