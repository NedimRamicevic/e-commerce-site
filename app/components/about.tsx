import React from 'react'

const skills = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "Python" },
    { skill: "React" },
    { skill: "Next.js" },
    { skill: "Tailwind CSS" },
    { skill: "Git" },
    { skill: "GitHub" },
  ]

function About() {
  return (
    <section id="about">
  <div className="my-12 mx-12 gap-8 pb-12 md:pt-16 md:pb-48 bg-white text-black">
    <h1 className="text-center font-bold pb-5 text-4xl">
      About Me
      <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
    </h1>
    <div
      className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left"
    >
      <div className="md:w-1/2">
        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
          Get to know me!
        </h1>
        <p>
          Hi, my name is Nedim and I am aFront-End Developer
          <span className="font-bold"> highly ambitious</span>,
          <span className="font-bold">self-motivated </span> 
          software engineer based in
          Istanbul.
        </p>
        <br />
        <p>
          I graduated from International University of Sarajevo, Sarajevo in
          2016 with a BS in Industrial Engineering and have been working in the
          field ever since.
        </p>
        <br />
        <p>
          I have a wide range of hobbies and passions that keep me busy. From
          reading, playing sports, traveling, to learning new things, I am
          always seeking new experiences and love to keep myself engaged and
          learning new things.
        </p>
        <br />
        <p>
          I believe that you should never stop growing and that&#39;s what I
          strive to do, I have a passion for technology and a desire to always
          push the limits of what is possible. I am excited to see where my
          career takes me and am always open to new opportunities. 🙂
        </p>
      </div>
      <div className="text-center md:w-1/2 md:text-left flex flex-col gap-8">
        <h1 className="text-2xl font-bold mb-6">My Skills</h1>
        <div
          className="flex flex-wrap flex-row justify-center z-10 md:justify-start"
        >
            {
                skills.map((skill, idx) => (
                    <div key={idx} className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">
                        {skill.skill}
                    </div>
                ))
            }
          
        </div>
        <div className="flex flex-col gap-4">
          <a href="https://www.linkedin.com/in/nedim-ramazanoğlu/">LinkedIn</a>
          <a href="github.com/NedimRamicevic"  >Github</a>
          <a href="https://portfolio-taupe-zeta-24.vercel.app/">Portfolio</a>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default About