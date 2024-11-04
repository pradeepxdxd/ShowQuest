import React, { useState } from "react";

export default function PreviewImage({ file }) {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    if (typeof reader.result === "string") setPreviewImage(reader?.result);
  };

  return (
    <div style={{ margin: "5px" }}>
      {previewImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={previewImage}
          alt="preview image"
          style={{ width: "300px", height: "400px" }}
        />
      )}
    </div>
  );
}
