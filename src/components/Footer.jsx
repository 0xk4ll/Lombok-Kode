import React from "react";
import {
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <span className="text-2xl font-bold tracking-tight text-white mb-6 block">
              Lombok<span className="text-primary-500">Kode</span>.
            </span>
            <p className="text-gray-400 leading-relaxed mb-6">
              Mitra digital terpercaya di Lombok. Membangun website premium yang
              estetik, fungsional, dan berdampak bagi pertumbuhan bisnis Anda.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Menu Cepat</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a
                  href="#services"
                  className="hover:text-primary-400 transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-primary-400 transition-colors"
                >
                  Portofolio
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-primary-400 transition-colors"
                >
                  Harga Paket
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary-400 transition-colors"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Layanan</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-400 transition-colors"
                >
                  Pembuatan Website
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-400 transition-colors"
                >
                  Toko Online
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-400 transition-colors"
                >
                  Optimasi SEO
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-400 transition-colors"
                >
                  Website Wisata
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center">
                <Mail size={16} className="mr-3 text-primary-500" />{" "}
                hello@lombokkode.com
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-3 text-primary-500 mt-1" /> Jl.
                Raya Mataram No. 123
                <br />
                Lombok, NTB, Indonesia
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-3 text-primary-500" /> +62 812
                3456 7890
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Lombok Kode Digital. All rights
            reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
