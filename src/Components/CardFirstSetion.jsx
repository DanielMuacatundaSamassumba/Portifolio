/* eslint-disable react/prop-types */
export default function CardFirstSetion({ image, text, number }) {
    return (
        <div className="flex flex-col w-10/12 h-36 bg-secondColor mt-3 p-4 rounded-sm  xl:w-[270px] hover: cursor-pointer hover:transform hover:scale-90">
            <div className="flex justify-end">
                <img src={image} alt="" className="w-16" />
            </div>
            <div className="flex justify-evenly items-center">
                <h1 className="text-3xl font-bold text mr-2">
                    { number}
                    </h1> 
                <p className="text-2xl">
                   {text}
                </p>
            </div>
        </div>
    )
}
