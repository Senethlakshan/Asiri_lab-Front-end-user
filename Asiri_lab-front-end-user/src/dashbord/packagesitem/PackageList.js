import React, { useState, useEffect, useRef } from 'react';
import { FaTrashAlt, FaEdit, FaPlus, FaTimes } from 'react-icons/fa';
import PackageInfoPopup from './PackageInfoPopup';
import PaymentPopup from './PaymentPopup';

function PackageList() {
  const [packages, setPackages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const sliderRef = useRef(null);

  // Fetch packages data from the backend
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch('/api/packages');
        const data = await response.json();
        setPackages(data.packages);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPackages();
  }, []);

  useEffect(() => {
    const sliderElement = sliderRef.current;
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight' && currentSlide < Math.ceil(packages.length / 6) - 1) {
        setCurrentSlide((prevSlide) => prevSlide + 1);
      } else if (event.key === 'ArrowLeft' && currentSlide > 0) {
        setCurrentSlide((prevSlide) => prevSlide - 1);
      }
    };

    sliderElement.addEventListener('keydown', handleKeyDown);

    return () => {
      sliderElement.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide, packages.length]);

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  const handleNextSlide = () => {
    if (currentSlide < Math.ceil(packages.length / 6) - 1) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  const handleOpenDescription = (pkg) => {
    setSelectedPackage(pkg);
  };

  const handleCloseDescription = () => {
    setSelectedPackage(null);
  };

  const handleBuyPackage = (pkg) => {
    setSelectedPackage(pkg);
    setShowPaymentPopup(true);
  };

  const handleClosePaymentPopup = () => {
    setShowPaymentPopup(false);
    setSelectedPackage(null);
  };

  const startCardIndex = currentSlide * 6;
  const visiblePackages = packages.slice(startCardIndex, startCardIndex + 6);

  return (
    <div className="h-327px">
      <div
        className="container overflow-hidden"
        ref={sliderRef}
        tabIndex="0"
        style={{ outline: 'none' }}
      >
        <div
          className="grid grid-cols-3 gap-4 mt-2"
          style={{
            transform: `translateX(-${currentSlide * (100 / 3)}%)`,
            transition: 'transform 0.3s ease-in-out',
            gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
          }}
        >
          {visiblePackages.map((pkg) => (
            <div
              key={pkg._id}
              className="bg-gray-200 p-4 rounded-md transition-transform duration-300 transform hover:scale-105 relative"
            >
              <h3 className="font-bold">{pkg.name}</h3>
              <p className="mt-2 text-gray-600">${pkg.price}</p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <button
                    className="mr-2 px-3 py-1 rounded-lg bg-green-600 text-white"
                    title="Delete"
                    onClick={() => handleBuyPackage(pkg)}
                  >
                    Buy
                  </button>
                </div>
                <div>
                  <button
                    className="text-gray-600 hover:text-gray-800 flex"
                    onClick={() => handleOpenDescription(pkg)}
                    title="Show Description"
                  >
                    More Details<FaPlus className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          className={`mr-2 px-3 py-1 rounded-lg ${
            currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'bg-blue-500 text-white'
          }`}
          title="Previous Slide"
          onClick={handlePrevSlide}
          disabled={currentSlide === 0}
        >
          Prev
        </button>
        <button
          className={`mr-2 px-3 py-1 rounded-lg ${
            currentSlide >= Math.ceil(packages.length / 6) - 1
              ? 'opacity-50 cursor-not-allowed'
              : 'bg-blue-500 text-white'
          }`}
          title="Next Slide"
          onClick={handleNextSlide}
          disabled={currentSlide >= Math.ceil(packages.length / 6) - 1}
        >
          Next
        </button>
      </div>
      {selectedPackage && (
        <PackageInfoPopup pkg={selectedPackage} onClose={handleCloseDescription} />
      )}
      {showPaymentPopup && selectedPackage && (
        <PaymentPopup
          pkg={selectedPackage}
          onClose={handleClosePaymentPopup}
        />
      )}
    </div>
  );
}

export default PackageList;
