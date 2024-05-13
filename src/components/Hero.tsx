const Hero: React.FC = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <img className="w-24 h-24 rounded-full mx-auto" src="https://via.placeholder.com/150" alt="User avatar" />
          <h1 className="mt-4 text-4xl text-smalt-950 font-extrabold sm:text-5xl font-titre">SBSB.fr</h1>
          <h2 className="text-3xl text-smalt-700 font-extrabold sm:text-5xl font-titre">
            Simple Url Shortener
            <strong className="font-extrabold sm:block"> par Salim Benfarhat. </strong>
          </h2>

          <p className="mt-4 text-smalt-950 sm:text-xl/relaxed font-texte">
            "J'ai vu plus loin que les autres parce que je me suis juché sur les épaules de géants." - Isaac Newton
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-smalt-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-smalt-700 focus:outline-none focus:ring active:bg-smalt-500 sm:w-auto font-texte"
              href="#"
            >
              Obtenir ce boilerplate
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-smalt-600 shadow hover:text-smalt-700 focus:outline-none focus:ring active:text-smalt-500 sm:w-auto font-texte"
              href="#"
            >
              Collaborations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;