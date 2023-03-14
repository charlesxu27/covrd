import { useState } from "react";

export default function SubmitButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);

    try {
      // Make the fetch request to the API route
      const response = await fetch("/api/pdf", {
        method: "POST",
        body: JSON.stringify({
          FormData,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Create a blob object from the response
      const blob = await response.blob();

      // Create a URL object from the blob object
      const url = URL.createObjectURL(blob);

      // Use the URL object to display the PDF in an iframe or redirect the user to download the PDF
      // Example 1: Display the PDF in an iframe
      const iframe = document.createElement("iframe");
      iframe.src = url;
      document.body.appendChild(iframe);

      // Example 2: Redirect the user to download the PDF
      const link = document.createElement("a");
      link.href = url;
      link.download = "example.pdf";
      link.click();

      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleClick} disabled={isLoading}>
        {isLoading ? "Loading..." : "Download PDF"}
      </button>
    </div>
  );
}
