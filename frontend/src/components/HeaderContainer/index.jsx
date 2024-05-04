import ParticlesComponent from "../ParticleComponent";

export default function HeaderContainer() {
    return(
        <section className="flex items-center justify-center h-screen-calc mt-1-neg backdrop-blur bg-black z-10 animate-fade">
        <div className="flex items-center relative justify-center">
          <div className="bg-header-vetor bg-center bg-cover w-72 h-72 z-0 md:w-96 md:h-96"></div>
          <div className="text-center sm:text-left absolute sm:static sm:-ml-40 z-10">
            <h1 className="text-5xl md:text-6xl font-bold font-didot tracking-widest capitalize mb-6 leading-tight">
              full-stack<br></br>
              developer<br></br>
              portfolio</h1>
            <p>
              Eduardo Soares
            </p>
          </div>
        </div>
        <ParticlesComponent></ParticlesComponent>
        <p className="absolute bottom-0 px-5"><span className="italic">“A verdadeira arte da programação é a arte de organizar e dominar a complexidade.”</span> - Edsger W. Dijkstra</p>
      </section>
    )
}