import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Home: NextPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const posts = [
    {
      title: "'Amazingly simple to use'",
      img: "https://images.unsplash.com/photo-1571666522201-5b39e6d0cd29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGpvYiUyMG9mZmVyZWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      content:
        "I was hesitant when I first discovered Covrd, but after receiving beautifully written cover letters in mere seconds, I'm a believer.",
    },
    {
      title: "'The boost I needed during my job search'",
      img: "https://images.unsplash.com/photo-1653669486563-aa9ad3cf59d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8am9iJTIwb2ZmZXJlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      content:
        "I felt helpless during my job search, but Covrd's unique service allowed me to stand out from the rest of the crowd.",
    },
    {
      title: "'This site saved me from unemployment'",
      img: "https://images.unsplash.com/photo-1461938337379-4b537cd2db74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGpvYiUyMG9mZmVyZWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      content:
        "I've never been a good writer, so when I heard about Covrd, I immediately jumped onto the service. Now, I have two job offers.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="isolate bg-gradient-to-r from-purple-200 to-blue-300">
        <main>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  We'll write your next cover letter.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Get your first cover letter in just a few seconds. It's that easy.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link href="/register" className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Try for Free
                  </Link>
                  <Link
                    href="/about"
                    className="text-base font-semibold leading-7 text-gray-900"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mx-8 mb-10 grid gap-2 lg:grid-cols-3">
              {posts.map((items, key) => (
                <div
                  className="w-full rounded-lg shadow-md lg:max-w-sm"
                  key={key}
                >
                  <img
                    className="object-cover w-full h-48"
                    src={items.img}
                    alt="image"
                  />
                  <div className="p-4">
                    <h4 className="text-l font-semibold text-blue-600">
                      {items.title}
                    </h4>
                    <p className="mb-2 leading-normal">{items.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;
