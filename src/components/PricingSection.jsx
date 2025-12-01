import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { pricingCategories } from "../data/pricing";

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState(pricingCategories[0].id);

  const activeCategory =
    pricingCategories.find((c) => c.id === activeTab) || pricingCategories[0];

  const handleSelectPlan = (planName) => {
    const message = `Halo, saya tertarik dengan paket ${planName}. Bisa jelaskan lebih detail?`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="pricing" className="py-24 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">
            Layanan & Harga
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Paket Website Premium
          </h3>
          <p className="text-gray-500">
            Siap naik level? Pilih paket yang sesuai dengan kebutuhan bisnis
            Anda. Konsultasi gratis untuk hasil maksimal!
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-2 overflow-x-auto no-scrollbar pb-4">
          {pricingCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === category.id
                  ? "bg-gray-900 text-white shadow-lg transform scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <div className="text-center mb-10">
          <h4 className="text-xl font-bold text-gray-800">
            {activeCategory.title}
          </h4>
          <p className="text-gray-500">{activeCategory.description}</p>
        </div>

        {/* Pricing Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-3 gap-8 items-start"
          >
            {activeCategory.plans.map((plan, index) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-8 border ${
                  plan.highlight
                    ? "bg-gray-900 text-white shadow-2xl scale-105 z-10 border-gray-900"
                    : "bg-white text-gray-900 border-gray-200 hover:shadow-xl"
                } transition-all duration-300 h-full flex flex-col`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 right-0 left-0 -mt-4 text-center">
                    <span className="bg-gradient-to-r from-primary-500 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Paling Laris
                    </span>
                  </div>
                )}
                <h4
                  className={`text-xl font-bold mb-2 ${
                    plan.highlight ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h4>
                <div className="text-3xl font-extrabold mb-4">{plan.price}</div>
                <p
                  className={`mb-8 text-sm ${
                    plan.highlight ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {plan.description}
                </p>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check
                        className={`w-5 h-5 mr-3 shrink-0 ${
                          plan.highlight
                            ? "text-primary-400"
                            : "text-primary-600"
                        }`}
                      />
                      <span className="text-sm text-left">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSelectPlan(plan.name)}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors mt-auto ${
                    plan.highlight
                      ? "bg-primary-500 hover:bg-primary-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                  }`}
                >
                  Pilih Paket
                </button>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 text-center bg-primary-50 p-6 rounded-xl border border-primary-100">
          <p className="text-gray-700 font-medium">
            <span className="font-bold text-primary-700">Catatan:</span> Harga
            dapat berubah sesuai fitur khusus. Diskon 15% untuk pembayaran penuh
            di awal!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
