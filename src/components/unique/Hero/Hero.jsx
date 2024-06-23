import bannerImg from "../../../assets/images/banner-img.png";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bannerImg})` }}
      className="bg-cover bg-center bg-no-repeat relative"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 pt-[268px] pb-[80px] pl-[200px] text-white">
        <h2 className="font-bold text-4xl">Computer Engineering</h2>
        <p className="text-lg">142,765 Computer Engineers follow this</p>
      </div>
    </section>
  );
};

export default Hero;
