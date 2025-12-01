import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left z-10"
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 font-semibold text-sm tracking-wide uppercase">
              Mitra Digital Terpercaya Lombok
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
              Wujudkan Website Premium yang <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-amber-500">
                Mewakili Identitas Bisnis Anda
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Dari bisnis hingga personal branding — kami membantu Anda tampil
              percaya diri di dunia digital dengan website yang elegan, cepat,
              dan mudah dikelola.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="group px-8 py-4 bg-gray-900 text-white rounded-full font-semibold transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30 flex items-center gap-2"
              >
                Konsultasi Gratis Sekarang
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                Lihat Portofolio Kami
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Modern Workspace Lombok"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating Card Element */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-8 left-8 right-8 z-20 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20"
              >
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      Studi Kasus Terbaru
                    </p>
                    <h3 className="text-xl font-bold text-gray-900">
                      Gili Adventures
                    </h3>
                  </div>
                  <div className="text-primary-600 font-bold text-3xl">
                    +300%
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-400 flex justify-between">
                  <span>Leads Booking</span>
                  <span>Kenaikan Trafik</span>
                </div>
              </motion.div>
            </div>

            {/* Decor Elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-300/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
