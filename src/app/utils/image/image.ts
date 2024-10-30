export async function convertImageToBase64(url: string): Promise<string> {
  const response = await fetch(url);
  const blob = await response.blob();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

export function convertImageFileToBase64(imageFile: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function () {
      const base64String = reader.result;
      if (typeof base64String === "string") {
        resolve(base64String);
      } else {
        reject(new Error("Failed to convert image to base64 string"));
      }
    };

    reader.onerror = function (error) {
      reject(error);
    };

    reader.readAsDataURL(imageFile);
  });
}
