import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { useFormContext } from "../../contexts/FormContext";

export default async function pdfHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check if the request method is POST
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }


  // Define the axios request config
  const config = {
    responseType: "arraybuffer", // Required to receive the PDF response as a binary array
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post("http://localhost:5555/pdf", FormData); // add config?

    // Create a blob object from the binary array response
    const buffer = Buffer.from(response.data, "binary");

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="coverletter.pdf"'
    );

    // Return the PDF as the response
    res.status(200).send(buffer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
