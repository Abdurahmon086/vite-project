import { CgProfile } from "react-icons/cg";
import { CiGlobe, CiLocationOn, CiSearch } from "react-icons/ci";
import { FaAngleRight, FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { IoIosArrowDown } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";

import Logo from "./assets/logo.svg";

import "swiper/css";
import "swiper/css/navigation";
import "./app.css";
import LittleCard from "./components/littleCard";
import MainCard from "./components/mainCard";
import ShopCard from "./components/shopCard";
import { FcLike } from "react-icons/fc";

function App() {
    const data: string[] = [
        "Избранные",
        "Акции",
        "Новинки",
        "Fast Food",
        "Азиатская",
        "Кофейня",
        "Пиццерия",
        "Бургерная",
    ];

    const mainBtn: string =
        "bg-[#ececee] hover:bg-[#e0e0e4] py-[14px] px-[16px]  font-semibold rounded-[12px] cursor-pointer  transition-all";
    const mainTitle: string = "text-[#1a1a18] text-[34px] font-extrabold";
    return (
        <>
            <header>
                <div className="fixed bg-white z-50 w-full flex items-center gap-[60px] border-y-[1px]">
                    <a href="/" className="pl-7">
                        <img src={Logo} alt="logo" width={172} height={49} />
                    </a>
                    <div className="flex items-center gap-[20px]">
                        <form className="flex items-center gap-2">
                            <label className="relative">
                                <div className="absolute left-3 top-[16px]">
                                    <CiSearch fontSize={16} />
                                </div>

                                <input
                                    type="text"
                                    className="w-[358px] h-[48px] py-[14px] px-[40px] outline-none border border-[#e5e5ea] rounded-xl"
                                    placeholder="Заведение, блюдо, товар или кухня"
                                />
                            </label>
                            <button
                                className="text-[#131314] rounded-xl bg-[#fae100] font-semibold hover:bg-[#e7d320] py-[14px] px-[16px] "
                                style={{ lineHeight: "20px" }}
                            >
                                Найти
                            </button>
                        </form>
                        <button className="flex items-center bg-[#f6f6fb] py-[14px] px-4 rounded-xl border border-[#e5e5ea] hover:bg-[#e0e0e4] transition-all">
                            <CiLocationOn fontSize={20} />
                            <p className="px-2 max-w-[204px] line-clamp-1 text-left" style={{ lineHeight: "20px" }}>
                                Tashkent shahar Yunusobod
                            </p>
                            <IoIosArrowDown fontSize={16} />
                        </button>
                    </div>
                    <div className="flex items-center ml-auto">
                        <button
                            className="w-[113px] h-[78px] border-l border-[#f6f6fb] flex flex-col items-center justify-center text-[#8e8e93] text-sm"
                            style={{ lineHeight: "17px" }}
                        >
                            <CiGlobe fontSize={24} />
                            <p>Русский</p>
                        </button>
                        <button
                            className="w-[113px] h-[78px] border-l border-[#f6f6fb] flex flex-col items-center justify-center text-[#8e8e93] text-sm"
                            style={{ lineHeight: "17px" }}
                        >
                            <CgProfile fontSize={24} />
                            <p> Профиль</p>
                        </button>
                    </div>
                </div>
            </header>
            <main className="container  pt-[128px] pb-[120px] flex flex-col gap-[56px]">
                <section>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={14}
                        slidesPerView={6}
                        navigation={true}
                        className=" flex gap-[12px]"
                    >
                        {[...Array(10)].map((_) => {
                            return (
                                <SwiperSlide
                                    className="scrollerImg"
                                    style={{ width: "min-content", marginRight: "14px" }}
                                >
                                    <div className="cursor-pointer w-[178px] h-[121px] w-f">
                                        <img
                                            src="https://media.express24.uz/r/567/385/BOIFNnS-VFqt1V1x2HnJ_.jpg"
                                            alt="image 10"
                                            className=" rounded-[10px] object-cover"
                                        />
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </section>
                <section>
                    <div className="flex justify-between items-center mb-6">
                        <h3 className={mainTitle} style={{ lineHeight: "41px" }}>
                            Магазины
                        </h3>
                        <a href="#" className="text-[#8e8e93] flex items-center" style={{ lineHeight: "20px" }}>
                            Показать все <FaAngleRight fontSize={18} />
                        </a>
                    </div>
                    <div className="">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={14}
                            slidesPerView={5}
                            navigation={true}
                            className="flex gap-[12px] relative"
                        >
                            {[...Array(15)].map((_, i) => (
                                <SwiperSlide
                                    key={i}
                                    className="scrollerLittleCard"
                                    style={{ width: "min-content", marginRight: "14px" }}
                                >
                                    <LittleCard />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
                <section>
                    <h3 className={mainTitle} style={{ lineHeight: "41px" }}>
                        Рестораны
                    </h3>
                    <div className="flex justify-between mt-6">
                        <ul className="flex gap-2">
                            {data.map((item, i) => {
                                return (
                                    <li
                                        key={i}
                                        className="flex items-center gap-1 py-[14px] px-[16px] rounded-[14px] cursor-pointer bg-[#f3f3f8] hover:bg-[#e0e0e4]"
                                        style={{ lineHeight: "20px" }}
                                    >
                                        {i == 0 ? <FcLike fontSize={16} /> : ""}
                                        {item}
                                    </li>
                                );
                            })}
                        </ul>
                        <button
                            className="flex items-center gap-3 py-[14px] px-[16px] rounded-[14px] cursor-pointer bg-[#f3f3f8] hover:bg-[#e0e0e4]"
                            style={{ lineHeight: "20px" }}
                        >
                            Еще <IoIosArrowDown fontSize={16} color="#8e8e93" />
                        </button>
                    </div>
                    <div className="mt-5">
                        <div className="flex flex-wrap gap-9">
                            {[...Array(21)].map((_, i) => (
                                <>
                                    <MainCard key={`mainCard-${i}`} />
                                    {i === 11 && (
                                        <div className="">
                                            <h4 className="font-bold text-[22px] mb-3" style={{ lineHeight: "26px" }}>
                                                Освежающие напитки
                                            </h4>
                                            <div className="flex gap-4">
                                                {[...Array(6)].map((_, index) => (
                                                    <ShopCard key={`shopCard-${index}`} />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </>
                            ))}
                        </div>
                    </div>
                </section>
                <button className={mainBtn} style={{ lineHeight: "20px" }}>
                    Показать еще
                </button>
            </main>
            <footer className="bg-[#f6f6fb] ">
                <div className="container py-10 text-[14px] text-[#8e8e93] flex flex-col gap-[49px]">
                    <ul className="flex gap-8 ">
                        <li>
                            <a href="#">О нас</a>
                        </li>
                        <li>
                            <a href="#">Контакты </a>
                        </li>
                        <li>
                            <a href="#">Пользовательское соглашение</a>
                        </li>
                    </ul>
                    <div className="flex justify-between items-center">
                        <p className="text-base">Служба поддержки: +998 71 200 40 01</p>
                        <div className="flex items-center">
                            <ul className="flex items-center">
                                <li className="px-[6px]">
                                    <a href="#" className="w-[18px] h-[18px]">
                                        <FaInstagram fontSize={18} />
                                    </a>
                                </li>
                                <li className="px-[6px]">
                                    <a href="#" className="w-[18px] h-[18px]">
                                        <FaFacebookF fontSize={18} />
                                    </a>
                                </li>
                                <li className="px-[6px]">
                                    <a href="#" className="w-[18px] h-[18px]">
                                        <FaTelegramPlane fontSize={18} />
                                    </a>
                                </li>
                            </ul>
                            <p className="px-[6px]">Ⓒ 2024 Express24</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default App;
