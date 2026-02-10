"use client";
import Products from "./Products";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ExampPle() {
  return (
    <>
    <div className="bg-[url('./assets/coffe.png')] bg-cover bg-center h-screen flex items-center justify-center">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              announcing our next day of free coffee for all!{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              Enjoy the best coffee in town with us
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">
              we are dedicated to providing you with the best coffee experience
              possible. Our team of expert baristas carefully selects and roasts
              our beans to ensure that every cup of coffee we serve is of the
              highest quality. Whether you prefer a classic espresso or a creamy
              latte, we have something for everyone. Come visit us and discover
              your new favorite coffee today!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <Link to="/products"> Grab a cup</Link>
              </a>
            </div>
          </div>
        </div>
      </div>

      
    </div>
    <div>
        <Products />
      </div>
      </>
  );
}
