import { skills } from "../constants"
import ProgressBar from "./ProgressBar"


const Skills = () => {
  return (
    <section className="px-4 md:px-28 mt-16 md:mt-40" id="skills">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 md:mb-24 text-center">My Skills</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
            <div>
                {
                    skills.slice(0, skills.length/2).map((skill, i) => (
                        <div key={i} className="mb-12">
                            <div className="flex items-center justify-between">
                                <h1 className="mb-2">{ skill.title }</h1>
                                <h1>{ skill.percent }</h1>
                            </div>
                            
                            <ProgressBar width={skill.style} />
                        </div>
                    ))
                }
            </div>

            <div>
                {
                    skills.slice(skills.length/2, skills.length).map((skill, i) => (
                        <div key={i} className="mb-12">
                            <div className="flex items-center justify-between">
                                <h1 className="mb-2">{ skill.title }</h1>
                                <h1>{ skill.percent }</h1>
                            </div>
                            
                            <ProgressBar width={skill.style} />
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skills