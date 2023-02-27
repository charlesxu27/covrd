import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import FormProvider from "../../contexts/FormContext";

export default async function pdfHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check if the request method is POST
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const data: any = {
    userName: "Molly Doe",
    hiringManagerName: "Rick Smith",
    userAddress: "1701 SW Western Blvd, Corvallis, OR, 97331",
    companyAddress: "1500 SW Jeffeson St, Corvallis, OR, 97331",
    letterContent:
      "I am writing to express my interest in the IT job at Oregon State University. As a highly motivated and detail-oriented individual, I am confident that I have the skills and experience needed to excel in this role. With a strong background in computer science and a passion for technology, I am eager to contribute to the university's mission and support its students and faculty. I am particularly impressed with Oregon State University's commitment to using technology to enhance education and drive innovation. I am eager to join this dynamic and forward-thinking community and help support the university's IT needs. Thank you for considering my application. I look forward to the opportunity to further discuss my qualifications and how I can be of value to your team.",
  };

  // Define the axios request config
  const config = {
    responseType: "arraybuffer", // Required to receive the PDF response as a binary array
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post("http://localhost:5555/pdf", data); // add config?

    // Create a blob object from the binary array response
    const buffer =  Buffer.from(response.data, "binary");

    res.setHeader(
      "Content-Type",
      "application/pdf",
    );
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
