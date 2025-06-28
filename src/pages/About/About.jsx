import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Data Science Enthusiast, Innovator, Mentor
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="Balichak Suman profile"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm{" "}
                <span className="font-bold text-white">Balichak Suman</span>, a
                dedicated B.Tech student specializing in Data Science, passionate
                about IoT, technology, and entrepreneurship. I thrive on building
                innovative solutions and mentoring others.
              </p>
              <p className="text-white">
                My objective is to contribute to cutting-edge projects and empower
                others through technology and creative problem-solving. I believe
                in continuous learning and making a positive impact through my
                work.
              </p>
              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    "Seeking opportunities to contribute to impactful projects and
                    drive innovation in the field of Data Science and IoT."
                  </p>
                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Balichak Suman
                    </cite>
                    <div className="flex flex-col gap-1 text-white text-sm">
                      <span>Email: balichaksumann@gmail.com</span>
                      <span>Phone: +91 6302662448</span>
                      <span>
                        Location: Church Gagilapur, Hyderabad, India - 500043
                      </span>
                      <span>LinkedIn: linkedin.com/in/balichaksuman</span>
                      <span>GitHub: github.com/balichak-suman</span>
                      <span>Portfolio: balichaksuman.in</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
