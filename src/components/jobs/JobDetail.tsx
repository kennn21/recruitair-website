import { Button } from "../ui/button";


const JobDetail = () => {
    return(
        <div className="justify-center w-full">
      <h1 className="text-center text-3xl font-bold leading-8 text-black">
        mobile developer
      </h1>

      <div className="my-5 justify-center flex space-x-4">
        <img
          src="https://file.rendit.io/n/fwWIURrpoXzg8aDadqbM.png"
          alt="ActionRoom icon"
          id="Img1"
          className="w-5 h-5"
        />
        <div id="Title" className="text-center text-base font-light">
          Jakarta, Indonesia
        </div>

        <img
          src="https://file.rendit.io/n/4vH1vj6nOdURe5P7rnik.png"
          alt="Img"
          id="Img"
          className="w-5 h-5"
        />
        <div id="Title1" className="text-center text-base font-light">
          Years of Experience: Min 2 Years
        </div>
      </div>

      <div className="my-10 justify-center flex">
        <Button>Apply Now</Button>
      </div>

      <div className="my-15 flex flex-row w-full items-start">
        <div
          id="CTAPx"
          className="bg-[#fcfaf5] flex flex-col justify-between w-full h-[846px] items-start pt-2 pb-[466px] pl-16 rounded-lg"
        >
          <div>
            <div className="my-5 text-3xl font-sans font-medium">
              Job Description:
            </div>
            <div className="my-5 text-base font-sans font-light">
              • Design and build applications for mobile platforms.
              <br />• Ensure the performance, quality, and responsiveness of
              applications.
              <br />• Collaborate with a team to define, design, and ship new
              features.
              <br />• Identify and correct bottlenecks and fix bugs.
              <br />• Help maintain code quality, organization, and
              automatization.
              <br />• Write clean, stable, documented and tested code.
            </div>
          </div>

          <div>
            <div id="Title1" className="my-5 text-3xl font-sans font-medium">
              Requirements:
            </div>
            <div className="text-base font-sans font-light">
              • Candidate at least a Vocational / Diploma / Bachelor's Degree,
              Engineering (Computer), Computer Science/Information Technology or
              any related fields
              <br />• At least 1 year experience in Mobile Development
              <br />• Fresh Graduates are welcome to apply
              <br />• Proficiency in Android (Java / Kotlin)
              <br />• Having experience in Hybrid Mobile Development (React
              Native / Flutter / Xamarin) is preferred
              <br />• Having experience in iOS Development is a plus
              <br />• Familiar with third party libraries is a plus
              <br />• Strong knowledge in design pattern
              <br />• Experienced in Object-Oriented Programming
              <br />• Familiar with versioning tools (such as Git, Mercurial or
              SVN)
              <br />• Experience with web service integration (REST, JSON, XML)
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default JobDetail;