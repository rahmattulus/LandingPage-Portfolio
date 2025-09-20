import Spline from "@splinetool/react-spline";

export const Hero = () => {
  return (
    <section className="min-h-screen flex p-2 lg:mt-0 flex-col lg:flex-row items-center justify-between">
      
        <div
          className="max-w-xl ml-[5%] z-10 mt-[70%] md:mt-[40%] lg:mt-0 items-center"
          data-aos="zoom-out-right-down"
          data-aos-easing="linear"
          data-aos-duration="1250"
        >
          {/* Box with gradiem */}
          <div
            className="relative w-[95%] sm:w-48 h-9 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,0.4)]
            rounded-full"
          >
            <div className="insert-[3px] bg-black rounded-full flex justify-center items-center h-9 ">
              <h4>WELCOME TO</h4>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-3xl md:text-5xl sm:text-4xl my-8">
              RAHMAT'S
              <br />
              PORTFOLIO
            </h2>

            <p className="text-base tracking-wider text-gray sm:text-lg max-w-[25rem]">
              Saya percaya bahwa setiap ide bisa tumbuh jadi sesuatu yang luar biasa. Lewat halaman ini, saya ingin menunjukkan karya-karya terbaik, hasil eksplorasi, dan perjalanan saya dalam dunia WEB. Yuk, scroll ke bawah dan temukan cerita di balik setiap proyek!
            </p>
          </div>
        </div>

        {/* 3d element */}
        <Spline
          className=" absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1000"
          scene="https://prod.spline.design/QTAaFsEBluyFJsWV/scene.splinecode"
        />
      
    </section>
  );
};
