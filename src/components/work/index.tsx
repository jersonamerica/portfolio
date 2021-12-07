import { useEffect, useState } from "react";
import { getExperiences } from "services";
import moment from "moment";

import "./work.scss";

interface Experiences {
  id: string;
  position: string;
  company: string;
  jobDate: Array<string>;
}

const WorkExperiences = () => {
  const [experiences, setExperiences] = useState<Array<Experiences>>([]);
  useEffect(() => {
    getExperiences().then((result) => setExperiences(result));
  }, []);

  return (
    <section className="experiences-wrapper">
      <h1>Experiences</h1>
      <div className="work-experiences">
        {experiences.map((exp) => {
          const [from, to] = exp.jobDate;
          return (
            <div className="workexp-row" key={exp.id}>
              <h2 className="company">{exp.company}</h2>
              <p className="position">{exp.position}</p>
              <p className="date">
                {moment(from).format("MMM YYYY")} -{" "}
                {moment(to).format("MMM YYYY")}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkExperiences;
