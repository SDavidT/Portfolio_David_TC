import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  

  const languagesPlatformsSkills = ["C#", "Python", "JavaScript", ".Net", "React"];
  const  cloudSkills = ["PlayFab", "Firebase", "Azure Computer Vision", "GitHub"];
  const toolsSkills = ["Unity", "VSCode", "XCode", "Google Apps Script"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            <span className="inline-block text-gray-800">👨🏻‍💻</span> About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-center" >
            Electronics Engineer with 2+ years of experience in app development using C#, .NET, and Unity. 
            Skilled in cloud services, backend integration, and version control. 
            Certified Scrum Master with expertise in team management and agile methodologies. 
            Passionate about creating efficient, innovative solutions. 
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 💻 Programming Languages, Frameworks & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {languagesPlatformsSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> ☁️ Cloud & DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {cloudSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">🧰 Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {toolsSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Electronics Engineering, Automation and Control </strong> - Armed Forces University - ESPE
                  (2017-2022)
                </li>
                <li>
                  Relevant Coursework: Scrum Master Certification, Artificial Vision Program
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Developer at NGX Tech. (2022 - 2024){" "}
                  </h4>
                  <p>
                    Developed four cross-platform mobile apps using Unity, C#, .NET,
                    support for both iOS and Android.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Intern at Pinprexat-Precisión  (2020-2021){" "}
                  </h4>
                  <p>
                    Designed HMI interfaces connected to SQL databases to monitor weight transmitters, 
                    installed temperature calibrators, and created electrical diagrams using CAD software
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};