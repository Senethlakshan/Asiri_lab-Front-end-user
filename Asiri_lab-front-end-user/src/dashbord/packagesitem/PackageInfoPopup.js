import React from 'react';
import { FaTimes } from 'react-icons/fa';

function PackageInfoPopup({ pkg, onClose }) {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white px-20 py-20 rounded-lg">
                <h3 className="font-bold">Package: {pkg.name}</h3>
                <p className="mt-2 text-gray-600">Price: ${pkg.price}</p>
                <p className="mt-2 text-gray-600">Details: {pkg.description}</p>
                <div className="flex justify-center mt-4">
                    <button
                        className="mr-2 px-3 py-1 rounded-lg bg-red-600 text-white"
                        onClick={onClose}
                        title="Close"
                    >
                        <FaTimes />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PackageInfoPopup;
