import React, { useRef } from "react";
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";

const certificates = [
  {
    title: "INSPIRE AWARD (State Level, Telangana)",
    issuer: "Department of Science & Technology, Govt. of India",
    year: "2022",
    description: "Selected for innovation competition at the state level.",
    image: null, // Add image path if available
  },
  {
    title: "International Essay Competition (Go4Guru) - 1st Place",
    issuer: "Go4Guru",
    year: "2021",
    description: "Secured 1st place in an international essay competition.",
    image: null,
  },
  // Add more certificates as needed
];

export default function Certificates() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {certificates.map((cert, i) => {
            const color = "#6366f1"; // Indigo for certificates
            const targetScale = 1 - (certificates.length - i) * 0.05;
            return (
              <CertificateCard
                key={`c_${i}`}
                i={i}
                title={cert.title}
                issuer={cert.issuer}
                year={cert.year}
                description={cert.description}
                image={cert.image}
                color={color}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function CertificateCard({
  i,
  title,
  issuer,
  year,
  description,
  image,
  color,
  progress,
  range,
  targetScale,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
      >
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image section - placeholder if no image */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden flex items-center justify-center bg-gray-800">
            {image ? (
              <motion.img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            ) : (
              <span className="text-gray-400 text-lg">No Image</span>
            )}
            {/* Certificate number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Certificate {i + 1}
            </div>
          </div>
          {/* Content section */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <div className="text-sm text-gray-400 mb-2">
                {issuer} &middot; {year}
              </div>
              <p className="mb-2 text-gray-200">{description}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
