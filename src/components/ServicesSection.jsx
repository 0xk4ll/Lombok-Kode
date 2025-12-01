import React from "react";
import { motion } from "framer-motion";
import { servicesData } from "../data/services";

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Us Intro */}
        <div className="max-w-4xl mx-auto mb-20 text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">
              Tentang Kami
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Partner Digital Anda di Lombok
            </h3>
          </div>
          <div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Lombok Kode adalah tim kreatif dan teknis berbasis di Lombok
              dengan visi global. Kami merancang pengalaman digital yang
              sederhana, menyenangkan, dan berdampak nyata bagi pertumbuhan
              bisnis Anda.
            </p>
            <p className="mt-4 text-gray-500">
              Kami melayani pemilik bisnis, agensi travel, hingga mahasiswa yang
              ingin membangun portofolio profesional.
            </p>
          </div>
        </div>

        {/* Keunggulan Grid */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900">Keunggulan Kami</h3>
          <p className="text-gray-500">
            Mengapa ratusan klien mempercayakan website mereka kepada kami?
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h4>
              <p className="text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
