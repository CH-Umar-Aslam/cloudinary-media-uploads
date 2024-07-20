"use client";
import React, { useState } from "react";
import { Image } from "cloudinary-react";

export default function Images() {
  const [files, setFiles] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);

  const handleUplaodFile = async () => {
    if (!files) {
      console.log("no file selected");
      return;
    }
    try {
      console.log(files);
      const formData = new FormData();
      if (files.length > 0) {
        Array.from(files).forEach((file) => {
          formData.append("file", files[file]);
        });
      }
      formData.append("upload_preset", "de4zdfuy");
      console.log(formData);
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dyeetqyas/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      if (!response.ok) {
        console.log("response failed");
      }
      const data = await response.json();
      console.log(data);
      // const uploadedUrls = data.secure_url.forEach((url) => url);
      // console.log(uploadedUrls);
      // setImageUrl([...imageUrl, ...uploadedUrls]);
      // console.log("image uploaded succefully", data.secure_url);
      setFiles(null);
    } catch (error) {
      console.log("try block error ", error);
    }
    // console.log("image upload");
  };
  // console.log(file);
  return (
    <div>
      <div className="flex w-screen  rounded-lg mt-12 justify-center bg-lime-100 flex-col  max-w-3xl mx-auto  p-12">
        <h1 className="py-2">Upload Image </h1>
        <input
          className="p-2 border-2 border-slate-600 "
          type="file"
          multiple
          onChange={(e) => setFiles(e.target.files)}
          accept="image/*"
        />
        {/* <div className="mt-5 bg-indigo-100 rounded-full p-4  ">
          <lable className="flex gap-3">
            upload more than one image
            <input
              onClick={() => setMultiFile(!multiFile)}
              className="leading-10"
              type="checkbox"
            />
          </lable>
        </div> */}

        <button
          className=" bg-blue-500  rounded-full py-3 mt-12"
          onClick={handleUplaodFile}
        >
          upload image
        </button>
      </div>
      {imageUrl &&
        imageUrl?.map((url) => (
          <Image
            key={url}
            className=" mt-12 h-52 mx-auto px-[10%] rounded-lg    "
            publicId={url}
            cloudName="dyeetqyas"
            alt="Uploaded Image"
          />
        ))}
    </div>
  );
}
