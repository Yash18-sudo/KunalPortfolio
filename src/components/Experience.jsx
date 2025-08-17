import styled from 'styled-components';
import { Container, SectionTitle } from '../styles/globalStyles';
import { motion } from 'framer-motion';

const data = [
  {
    id: 1,
    company: "Columbus Public School",
    role: "Motion Graphic Designer",
    fromDate: new Date("2023-10-01"),
    toDate: new Date(),
    tasks: [
      "Working as a Motion Graphic Designer is a fulfilling and creative journey",
      " I enjoy designing engaging visual content that captures attention, enhances the learning experience, and brings innovative storytelling. It’s a role that truly inspires me daily",
    ],
  },
  {
    id: 2,
    company: "Arena Animation",
    role: "3D Artist",
    fromDate: new Date("2023-04-01"),
    toDate: new Date("2023-09-01"),
    tasks: [
      "I love working as a 3D artist at Arena Animation Haldwani—it's creative, inspiring, and fuels my passion daily",
    ],
  },
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Experience = () => {
  const monthDiff = (dateFrom, dateTo) => {
    return (
      dateTo.getMonth() -
      dateFrom.getMonth() +
      12 * (dateTo.getFullYear() - dateFrom.getFullYear())
    );
  };

  const formatDuration = (dateFrom, dateTo) => {
  const totalMonths = monthDiff(dateFrom, dateTo);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let result = "";
  if (years > 0) {
    result += `${years} ${years > 1 ? "Years" : "Year"}`;
  }
  if (months > 0) {
    if (result) result += " ";
    result += `${months} ${months > 1 ? "Months" : "Month"}`;
  }
  return result || "Less than a month";
};


  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <SectionTitle>Work Experience</SectionTitle>

        <TimeLine>
          {data
            .sort((a, b) => b.fromDate.getTime() - a.fromDate.getTime())
            .map((ex) => (
              <TimeLineItem key={ex.id}>
                <ExperieceHeader>
                  <h3>
                    {ex.role}, {ex.company}
                  </h3>

                  <small>
                    {months[ex.fromDate.getMonth()] +
                      " " +
                      ex.fromDate.getFullYear()}{" "}
                    -{" "}
                    {ex.toDate
                      ? months[ex.toDate.getMonth()] +
                        " " +
                        ex.toDate.getFullYear()
                      : "Present"}{" "}
                    ({formatDuration(ex.fromDate, ex.toDate || new Date())})
                  </small>
                </ExperieceHeader>

                <TaskList>
                  {ex.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </TaskList>
              </TimeLineItem>
            ))}
        </TimeLine>
      </motion.div>
    </Container>
  );
};

export default Experience;

const TimeLine = styled.ul`
  list-style-type: none;
  margin: 1em 0;
  padding: 1em;
`;

const TimeLineItem = styled.li`
  padding: 0 0 2em 2em;
  border-left: 1px solid var(--accent-blue);
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: -4px;
    left: -6px;
    padding: 4px;
    border-radius: 50%;
    background-color: var(--accent-blue);
    border: 2px solid var(--accent-blue);
  }

  p {
    opacity: 0.7;
  }

  ul {
    padding: 0 1em;
  }
`;

const ExperieceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  top: -10px;

  h3 {
    font-weight: 400;
  }

  small {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const TaskList = styled.ul`
  list-style-type: circle;

  li {
    color: var(--para-gray-color);
  }
`;
