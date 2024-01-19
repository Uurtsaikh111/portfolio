export function About() {
  return (
    <div className="container px-[80px] py-[96px] bg-gray-100">
      <div className="flex flex-col gap-[48px] px-[32px] py-[0px] items-center">
        <h2 className=" px-[20px] py-[4px] bg-gray-200 rounded-xl">About me</h2>
        <div className="flex justify-between w-[100%] gap-[48px]">
          <img
            className="w-[400px] h-[480px] shadow-[-23px_23px_0px_0px_#00000024]"
            src="Picabout.png"
            alt=""
          />
          <div className="w-[48%] flex flex-col gap-[24px] items-start self-stretch">
            <h5>Curious about me? Here you have it:</h5>
            <div className="flex flex-col items-start gap-[16px] self-stretch">
              <p>
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </p>
              <p>
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </p>
              <p>
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>
              <p>
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
              </p>
              <p>Finally, some quick bits about me.</p>
              <div className="flex gap-[20px]">
                <div>
                  <p className="flex flex-col gap-[10px]">
                    B.E. in Computer Engineering
                  </p>
                  <p>Full time freelancer</p>
                </div>
                <div>
                  <p className="flex flex-col gap-[10px]">Avid learner</p>
                  <p>Aspiring indie hacker</p>
                </div>
              </div>
              <p>
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
