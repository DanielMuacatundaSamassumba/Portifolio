/* eslint-disable react/prop-types */


export default function CardFirstSetion({ image, text, number }) {
    return (
        <div className="flex flex-col w-10/12 h-36 bg-secondColor mt-3 p-4 rounded-sm xl:w-80">
            <div className="flex justify-end">
                <img src={image} alt="" className="w-16" />
            </div>
            <div className="flex justify-evenly items-center">
                <h1 className="text-4xl font-bold text">
                    { number}
                    </h1> 
                <p className="text-2xl">
                   {text}
                </p>
            </div>
        </div>
    )
}
