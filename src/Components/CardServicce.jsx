
// eslint-disable-next-line no-unused-vars
export default function CardServicce({number, text, skill, icon}) {
  return (
    <div className="bg-secondColor p-3 rounded-sm mt-4 xl:w-3/4" id="service">
        <div className="flex justify-between">
            <h1 className="text-3xl font-bold">{number}</h1> <img src={icon} alt="" />
        </div>
        <div className="mt-2">
         {text}
        </div>
        <div className="text-2xl font-semibold mt-2">{skill}</div>
    </div>
  )
}
