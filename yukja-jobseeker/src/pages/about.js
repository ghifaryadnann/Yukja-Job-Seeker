import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="pt-32">
      <div className="container md:px-12 px-5">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-semibold" data-aos="fade-right">
              Tentang Kami
            </h2>
            <p
              className="text-sm font-light mt-4 lg:w-full md:w-[90%] w-full"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              Yukja didirikan pada tahun 2023. Alasan kenapa didirikan
              Yukja ini adalah untuk membantu freelancer, pengusaha
              indonesia agar menemukan pekerjaan yang mereka inginkan. Yukja
              juga didukung oleh banyak perusahaan karena mereka juga
              membutuhkan banyak tenaga kerja.
            </p>
            <p
              className="text-sm font-light mt-3 lg:w-full md:w-[90%] w-full"
              data-aos="fade-right"
              data-aos-delay="250"
            >
              Bedanya dengan fiverr.com? sebenarnya hampir sama, namun Yukja
              ini hanya untuk orang indonesia atau orang yang tinggal di
              Indonesia. Pekerjaanya pun banyak dan beragam, mulai dari QA, Web
              Developer, Wordpress, Desain Grafis, dan lain - lain.
            </p>
          </div>
          <div
            className="w-full md:w-1/2 lg:w-[45%] md:mt-0 mt-4"
            data-aos="flip-left"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              alt="image"
              className="max-w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
