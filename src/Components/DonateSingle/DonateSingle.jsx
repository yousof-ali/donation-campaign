


const DonateSingle = ({ item }) => {
    const { img, category, title, donate_taka, textColor, bgColor, btnBgColor } = item
    return (
        <div style={{ backgroundColor: bgColor }} className="lg:flex gap-4 items-center rounded-xl">
            <div className="lg:w-1/2 lg:h-full">
                <img className="w-full h-full rounded-t-lg" src={img} alt="" />
            </div>
            <div className="p-2 space-y-2 ml-4 py-8 ">
                <button className="btn" style={{ color: textColor, backgroundColor: btnBgColor }}>{category}</button>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-xl" style={{ color: textColor }}>${donate_taka}</p>
                <button className="text-white p-2 rounded-md" style={{ backgroundColor: textColor }}>Vew Details</button>
            </div>
        </div>
    );
};

export default DonateSingle;