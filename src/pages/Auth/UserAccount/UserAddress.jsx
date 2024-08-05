import React, { useState } from "react";
import DefaultButton from "components/Button/DefaultButton";
import UserAddressCard from "components/User/UserAddressCard";
import ModalAddAddress from "components/ModalBox/ModalAddAddress";

export default function UserAddress() {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  return (
    <div className="border border-gray-300 rounded-md w-full p-[14px]">
      <div className="flex flex-row justify-between items-center">
        <h3 className="font-section-sub-heading">My Address</h3>
        <span onClick={handleShowModal}>
          <DefaultButton
            content="+"
            textColor="white"
            styles={{ width: "fit-content", marginBottom: "8px" }}
          ></DefaultButton>
        </span>
      </div>
      <hr></hr>
      <div className="md:h-[410px] md:overflow-scroll">
        <UserAddressCard isDefault={false}></UserAddressCard>
        <UserAddressCard isDefault={true}></UserAddressCard>
        <UserAddressCard isDefault={false}></UserAddressCard>
        <UserAddressCard isDefault={false}></UserAddressCard>
        <UserAddressCard isDefault={false}></UserAddressCard>
        <UserAddressCard isDefault={false}></UserAddressCard>
        <UserAddressCard isDefault={false}></UserAddressCard>
        <UserAddressCard isDefault={false}></UserAddressCard>
        <UserAddressCard isDefault={false}></UserAddressCard>
        <UserAddressCard isDefault={false}></UserAddressCard>
        <UserAddressCard isDefault={false}></UserAddressCard>
        <UserAddressCard isDefault={false}></UserAddressCard>
        <UserAddressCard isDefault={false}></UserAddressCard>
      </div>
      <ModalAddAddress
        show={showModal}
        setShow={setShowModal}
      ></ModalAddAddress>
    </div>
  );
}
