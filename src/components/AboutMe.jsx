import React from "react";

const AboutMe = () => {
  return (
    <section className="h-full bg-[#BFB1C4] py-20 px-5" id="aboutMe">
      <div className="max-w-[50rem] m-auto font-primary text-white">
        <div className="flex justify-center">
          <h2 className="text-center font-medium text-5xl pb-10">
            About Me
            <span className="block w-full h-[5px] mt-3 rounded-full bg-white"></span>
          </h2>
        </div>
        <div className="flex flex-col items-center py-10 text-2xl">
          <h2>Dimeji Ajisafe</h2>
          <p>Pronounced: Dee-Meh-Gee. Ah-Gee-Sah-Fee</p>
        </div>
        <div className="text-lg font-primary flex flex-col gap-5">
          <p className="w-full">
            I’ve always been a creative individual that’s enjoyed reading,
            writing and drawing since a young age. Skip forward and add the
            advancement with technology and my passions have now turned into my
            own business!
          </p>
          <p className="w-full">
            After finishing my Masters in Digital Media and having worked at a
            couple of marketing firms, I’ve gained valuable experience in the
            field. Currently running a media/news website with a partner,
            creating unique graphic designs and updating websites keeps me
            engaged and practicing my skills. Speed is one of my specialties but
            I ensure that it doesn’t take away from the quality of my work. This
            allows me to help you get the content you need out faster which
            gives your clients/customers faster access to your brand.
          </p>
          <p className="w-full">
            In my spare time I love to read and do creative writing, I literally
            carry a notebook and kindle around with me for easy access. It’s
            important to keep my brain active and I enjoy exploring all my
            thoughts, no matter how wild they sound. I’m also a big fan of
            longboarding, walks and swimming, a healthy body leads to a clear
            and more functional mind. However, I also like those lazy days of
            eating snacks and watching an episode (or three) of a show on
            Netflix, I like to balance things out.
          </p>
          <p>
            Moving forward, I am excited to take on this new journey of helping
            others reach their goals and help grow their online business or
            awareness. The feeling that comes with each new follower, like or
            comment is great. Beyond just the temporary fix of dopamine (happy
            feelings), there’s a sense of pride that someone takes the time to
            do that. Trust me, it’s easier to just keep scrolling that to even
            double-tap (like). I look forward to meeting you and working
            together to take your business to the next level!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
