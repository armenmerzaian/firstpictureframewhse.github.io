import React from 'react'
import AboutSectionTitle from '../components/AboutSectionTitle';
import ValuesIconCard from '../components/ValuesIconCard';

export default function OurValues() {
  return (
    <div
      id=""
      className="laptop:px-[118px] pb-14 tablet:py-28 laptop:pb-32 px-4"
    >
      <div className="max-w-[1200px] mx-auto">
        <AboutSectionTitle title="Our Values" />
        <div className="flex flex-col laptop:flex-row gap-6 laptop:gap-8 mt-12">
          <ValuesIconCard
            value="Dedicated to Customer Care"
            text="It is important that your item be designed and framed right the first
          time. We focus on delivering an excellent experience for each and
          every one of our customers by understanding and meeting their needs"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              width="48"
              fill="#fff64d"
            >
              <path d="M3.4 40q-.65 0-1.075-.425Q1.9 39.15 1.9 38.5v-3.2q0-1.75.9-3.175Q3.7 30.7 5.3 30q3.65-1.6 6.575-2.3Q14.8 27 17.9 27q3.1 0 6 .7t6.55 2.3q1.6.7 2.525 2.125.925 1.425.925 3.175v3.2q0 .65-.425 1.075Q33.05 40 32.4 40Zm32.4 0q.5-.1.8-.525.3-.425.3-1.075v-3.1q0-3.15-1.6-5.175t-4.2-3.275q3.45.4 6.5 1.175t4.95 1.775q1.65.95 2.6 2.35.95 1.4.95 3.15v3.2q0 .65-.425 1.075Q45.25 40 44.6 40ZM17.9 23.95q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1Zm18-7.5q0 3.3-2.1 5.4-2.1 2.1-5.4 2.1-.55 0-1.225-.075T25.95 23.6q1.2-1.25 1.825-3.075.625-1.825.625-4.075t-.625-3.975Q27.15 10.75 25.95 9.3q.55-.15 1.225-.25t1.225-.1q3.3 0 5.4 2.1 2.1 2.1 2.1 5.4ZM4.9 37h26v-1.7q0-.8-.475-1.55T29.25 32.7q-3.6-1.6-6.05-2.15-2.45-.55-5.3-.55-2.85 0-5.325.55T6.5 32.7q-.7.3-1.15 1.05-.45.75-.45 1.55Zm13-16.05q1.95 0 3.225-1.275Q22.4 18.4 22.4 16.45q0-1.95-1.275-3.225Q19.85 11.95 17.9 11.95q-1.95 0-3.225 1.275Q13.4 14.5 13.4 16.45q0 1.95 1.275 3.225Q15.95 20.95 17.9 20.95Zm0-4.5Zm0 13.55Z" />
            </svg>
          </ValuesIconCard>
          <ValuesIconCard
            value="Custom Framing Expertise"
            text="We are experts in wholesale custom, large volume, and production
                runs. We have the technology, equipment, and staff to produce
                any quantity of items for whatever you may need. We don't take
                this task lightly, we strive to achieve perfection in every
                frame."
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              width="48"
              fill="#fff64d"
            >
              <path d="M7 43.95q-1.2 0-2.1-.875Q4 42.2 4 40.95V11q0-1.2.9-2.1Q5.8 8 7 8h9l6.95-7q.4-.4 1.05-.4t1.05.4L32 8h9q1.2 0 2.1.9.9.9.9 2.1v29.95q0 1.25-.9 2.125t-2.1.875Zm0-3h34V11H7v29.95Zm6.5-5q-.65 0-1.075-.425Q12 35.1 12 34.45V17.5q0-.65.425-1.075Q12.85 16 13.5 16h21q.65 0 1.075.425Q36 16.85 36 17.5v16.95q0 .65-.425 1.075-.425.425-1.075.425Z" />
            </svg>
          </ValuesIconCard>
        </div>
      </div>
    </div>
  );
}
