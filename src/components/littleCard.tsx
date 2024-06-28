function LittleCard() {
    return (
        <div className="cursor-pointer w-full h-[122.38px] w-f">
            <img
                src="https://cdn.express24.uz/i/700/700/uJ2Da6braCkQ94iOsI8DB.jpg"
                alt="image 10"
                className=" rounded-[10px] object-cover w-full h-full"
            />
            <div className="my-1 flex flex-col">
                <h4 className="line-clamp-1 text-black" style={{ lineHeight: "20px" }}>
                    Bob's Market
                </h4>
                <span className="text-xs text-[#8e8e93]" style={{ lineHeight: "15px" }}>
                    Продукты
                </span>
            </div>
        </div>
    );
}

export default LittleCard;
