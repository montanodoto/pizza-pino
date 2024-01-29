import React, { useState } from "react";
import Modal from "./Modal"; // Assume this is the generic modal component

export default function SignInComponent() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  return (
    <div>
      <button className="bg-red-500 ..." onClick={() => openModal("delivery")}>
        DELIVERY
      </button>
      <button className="bg-red-500 ..." onClick={() => openModal("pickup")}>
        PICK UP
      </button>

      {isModalOpen && (
        <Modal>
          {modalContent === "delivery" ? (
            <DeliveryModalComponent />
          ) : (
            <PickupModalComponent />
          )}
        </Modal>
      )}
    </div>
  );
}
