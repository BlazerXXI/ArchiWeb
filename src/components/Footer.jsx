/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-[#2E2F32]">
      <div className="gap-8 flex flex-col">
        <div className="[&>h2]:mb-4 [&>*]:text-[#FAFAFA] container px-2">
          <h2 className=" font-[Barlow] text-[42px] font-semibold">ArchiWeb</h2>
          <p className="footer-p">
            Archiweb is an architectural consultant based in Berlin, Germany. We
            provide solutions for your architecture and residential design
          </p>
        </div>
        <div className="[&>h2]:mb-4 [&>*]:text-[#FAFAFA] container px-2">
          <h2 className=" footer-title">Articles</h2>
          <a href="#" className="footer-p">
            7 Tips for Kids Friendly Interior
          </a>
          <a href="#" className="footer-p">
            Design Smart Tips for Changing a Room
          </a>
          <a href="#" className="footer-p">
            Eco-friendly design
          </a>
        </div>
        <div className="[&>h2]:mb-4 [&>*]:text-[#FAFAFA] container px-2 flex flex-col">
          <h2 className=" footer-title">Links</h2>
          <a href="#" className="footer-p">
            Link 1
          </a>
          <a href="#" className="footer-p">
            Link 2
          </a>
          <a href="#" className="footer-p">
            Link 3
          </a>
        </div>
        <div className="[&>h2]:mb-4 [&>*]:text-[#FAFAFA] container px-2 flex flex-col">
          <h2 className=" footer-title">Location</h2>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20330.776086351907!2d30.545225363435783!3d50.43463675411743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cfa04a0c8e5b%3A0x3b40a2bcbca08807!2z0JrQuNC10LLQvi3Qn9C10YfQtdGA0YHQutCw0Y8g0LvQsNCy0YDQsA!5e0!3m2!1sru!2sua!4v1678642880951!5m2!1sru!2sua"
          className="border-none"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
};
