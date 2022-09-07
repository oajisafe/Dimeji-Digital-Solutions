const WritingSamples = () => {
  const samples = [
    "5 keys of Success in Marketing a GREAT Movie",
    "How to Level Up Your Value",
    "Why must i defend thinking that my life matters?",
    "Social Clout",
    "Black. Lives. Still. Matter",
  ];

  return (
    <section className="h-full bg-[#BFB1C4] py-20 px-5">
      <div className="max-w-[50rem] m-auto font-primary text-white">
        <div className="flex justify-center">
          <h2 className="text-center font-medium text-5xl pb-10">
            Writing Samples
            <span className="block w-full h-[5px] mt-3 rounded-full bg-white"></span>
          </h2>
        </div>
        <div className="text-lg font-primary flex flex-col gap-5">
          <p className="md:w-[90%] w-full">
            Here is a collection of different writing samples I've done in the
            past. Please get in touch with me for more or discuss how i can help
            turn your idea into words.
          </p>
          {samples.map((sample, index) => {
            return (
              <p key={index}>
                <span className="border-b border-white pb-0.5">"{sample}"</span>{" "}
                by Dimeji Ajisafe
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WritingSamples;
