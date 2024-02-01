import React from "react";
import {useRouter} from "next/navigation";

const AddToCartModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
}> = ({isOpen, onClose}) => {

    const router = useRouter();

    const handleAddMoreItemsClick = () => {
        onClose();
        router.push('/');
    };

    const handleGoToCartClick = () => {
        onClose();
        router.push('/cart');
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <p className="text-black">Item Successfully Added.</p>
                <button
                    className="mt-4 px-4 py-2 bg-blue-500 mr-2 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                    onClick={handleAddMoreItemsClick}
                >
                    Add Other Items
                </button>

                <button
                    className="mt-4 px-4 py-2 ml-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                    onClick={handleGoToCartClick}
                >
                    Go To Cart
                </button>
            </div>
        </div>
    );
};

export default AddToCartModal;
