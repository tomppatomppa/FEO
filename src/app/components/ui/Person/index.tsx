import { PersonCard } from "./PersonCard";

const persons = [
  {
    name: "Martti Suosalo",
    role: "Näyttelijä",
    src: "feo-video-resources/fx10pcrptlj82yuj7srm",
    description:
      "Martti Suosalo is an award-winning actor, whose most beloved performances have been seen in plays such as Stones in His Pockets, Defending the Caveman, Diary of a Madman, The Overcoat and At your service, as well as in numerous films.",
  },
  {
    name: "Martti Suosalo",
    role: "Kuvaaja, Ohjaaja, Tuottaja",
    src: "feo-video-resources/fx10pcrptlj82yuj7srm",
    description:
      "Martti Suosalo is an award-winning actor, whose most beloved performances have been seen in plays such as Stones in His Pockets, Defending the Caveman, Diary of a Madman, The Overcoat and At your service, as well as in numerous films.",
  },
];

export const Person = () => {
  return (
    <div className="py-2">
      <div className="flex justify-center my-12">
        <strong className="text-4xl">TEAM</strong>
      </div>
      <div className="flex flex-col gap-4 lg:flex-row mx-auto max-w-6xl md:gap-8">
        {persons.map((person, i) => (
          <PersonCard key={i} {...person} />
        ))}
      </div>
    </div>
  );
};
