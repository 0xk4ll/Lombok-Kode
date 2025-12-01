import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonialsData } from "../data/testimonials";

const Testimonials = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">
            Testimonials
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-8 right-8 text-primary-100 w-10 h-10" />
              <div className="flex items-center mb-6">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                "{item.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
