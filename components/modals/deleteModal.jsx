import React from "react";

const EditModal = ({ onOk, onCancel }) => {
  return (
    <div>
      <p className="text-blackColor  text-[18px]">
        Are you sure you want to delete this event?
      </p>
      <div className="flex justify-end mt-4 gap-4">
        <button
          className="px-[10px] py-[5px]  text-[14px] text-blackColor text-opacity-[0.68] bg-homeBtnBgColor rounded-[5px]   border  border-borderColor border-opacity-[0.10]  gap-1  "
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="px-[10px] py-[5px]  text-[14px] bg-red-400  rounded-[5px] text-white   gap-1"
          onClick={onOk}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EditModal;