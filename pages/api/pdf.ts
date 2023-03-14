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
    userName: "John Smith",
    hiringManagerName: "Steve Jobs",
    companyName: "Apple",
    companyAddress: "Apple Park, Cupertino, CA, 99999",
    letterContent:
      "I am writing to express my deep interest in joining Apple as a software engineer. As a current student at Oregon State University, I have developed a solid foundation in computer science and programming, particularly in Python. Over the years, I have taken on numerous challenging projects that have helped me hone my skills and build a strong foundation for a career in software engineering. \n\nOne of the most notable projects that I have worked on is creating a board game with a GUI using Python. This project involved a complex set of requirements that forced me to not only utilize my programming skills but also hone my problem-solving ability. Through this project, I learned the importance of working through tough problems and persevering even when solutions don’t come quickly. \n\nIn addition, I have participated in various web development hackathons, which have allowed me to program with a team and gain real-world experience in a fast-paced, collaborative environment. I was part of a team that built an iOS app that tracks daily water intake, which required us to work together closely to deliver the project on time. This experience has taught me how to collaborate effectively with others, communicate complex technical ideas, and make meaningful contributions to a team effort. \n\nI am confident that my skills and experience would make me a valuable addition to Apple as a software engineer. I am excited about the opportunity to apply my talents to challenging projects and to work alongside some of the most innovative and forward-thinking professionals in the industry. Thank you for your time and consideration. I look forward to the opportunity to further discuss my qualifications with you.",
  };

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
