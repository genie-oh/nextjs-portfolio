import ImageTextCard from "../Parts/ImageTextCard";

const SalesPoint = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {Array(4)
                    .fill(0)
                    .map((v, idx) => {
                        return (
                            <ImageTextCard
                                imgUrl="/img/sales_point/architect.svg"
                                title={"title" + idx}
                                text={"text" + idx}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default SalesPoint;
