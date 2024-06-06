

const Bannar = () => {
    return (
        <div className="container mx-auto text-center my-10">
            <h2 className="text-4xl font-bold mx-width-10/12 mb-8">I Grow By Helping People In Need</h2>
            <div>
                <form className="border-2 md:max-w-md w-10/12 rounded-xl mx-auto flex" action="">
                    <input type="text" className="outline-none rounded-xl w-full  p-2 " placeholder="Search hear" />
                    <input type="submit" className="bg-red-500 rounded-r-xl px-4 text-white py-3" value={"Search"} />
                </form>
            </div>
        </div>
    );
};

export default Bannar;