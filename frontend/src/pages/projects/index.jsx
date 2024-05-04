import ItemsProjeto from "../../components/ItemsProjeto";

export default function Projects() {
    return (
        <>
            <section className="min-h-screen-calc px-10 sm:px-20 pb-20">
                <div className="flex items-center mb-6">
                    <select className="block appearance-none bg-black py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline cursor-pointer before:">
                        <option value="" className="bg-white text-black selection:bg-white text-center">filtrar</option>
                        <option value="" className="bg-white text-black selection:bg-white">node</option>
                    </select>
                    <div className="inline-block bg-down_arrow bg-center bg-cover w-6 h-6"></div>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <ItemsProjeto key={i} ordem={i}></ItemsProjeto>
                    ))}
                </ul>
            </section>
        </>
    )
}