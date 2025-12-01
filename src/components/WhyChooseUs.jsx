import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Users, Star, Clock, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Users,
    label: "49+ Proyek Berhasil",
    desc: "Digunakan UMKM hingga Korporat",
  },
  {
    icon: Star,
    label: "Ulasan Bintang 5",
    desc: "Kepuasan klien adalah prioritas",
  },
  { icon: Clock, label: "Tepat Waktu", desc: "Selesai sesuai jadwal" },
  {
    icon: ShieldCheck,
    label: "Garansi & Dukungan",
    desc: "Layanan purna jual responsif",
  },
];

const features = [
  "Copywriting & Konsultasi Gratis",
  "Kualitas Standar Internasional",
  "Paket Lengkap: desain, dev, domain, server",
  "Dukungan Berkelanjutan: garansi error",
  "Pendekatan Solutif & Efektif",
  "Harga Transparan Tanpa Biaya Tersembunyi",
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Proof Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
            >
              <div className="w-12 h-12 mx-auto bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-4">
                <stat.icon size={24} />
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-1">
                {stat.label}
              </h4>
              <p className="text-xs text-gray-500">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-primary-900/10 mix-blend-multiply"></div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Team Meeting Lombok"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">
              Kenapa Memilih Kami?
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Lebih dari Sekadar Pembuatan Website
            </h3>
            <p className="text-lg text-gray-500 mb-8">
              Kami tidak hanya membuat website, tetapi memastikan website Anda
              membantu mencapai tujuan bisnis dan konversi.
            </p>

            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center text-gray-700 font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary-500 mr-3" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
