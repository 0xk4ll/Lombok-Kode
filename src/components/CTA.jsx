import React from "react";

const CTA = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gray-900 relative overflow-hidden scroll-mt-28"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Siap Transformasi Digital?
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Diskusikan proyek Anda sekarang. Kami siap membantu Anda mencapai
          target bisnis dengan solusi digital yang tepat.
        </p>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-full transition-all shadow-lg shadow-primary-500/30 transform hover:-translate-y-1"
        >
          Mulai Konsultasi Gratis
        </a>
      </div>
    </section>
  );
};

export default CTA;
