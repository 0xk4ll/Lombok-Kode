import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

const PortfolioGrid = () => {
  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">
              Portofolio
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Karya Terpilih Kami
            </h3>
            <p className="mt-2 text-gray-500">
              Studi kasus nyata bagaimana kami membantu klien berkembang.
            </p>
          </div>
          <a
            href="#"
            className="hidden md:block text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            Lihat Semua Proyek &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary-300 text-sm font-medium mb-1">
                  {project.category}
                </span>
                <h4 className="text-white text-xl font-bold mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-300 text-sm line-clamp-2">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a
            href="#"
            className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            Lihat Semua Proyek &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
