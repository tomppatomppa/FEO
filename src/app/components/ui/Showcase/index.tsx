import CldImage from "../../CldImage";

const items = [
  {
    year: "2024",
    name: "TIKA I NEPAL",
    description: `Explore the rich tapestry of Nepalese childhood through our
        captivating documentary, offering a glimpse into the daily lives and
        routines of children in Nepal. Join us as we delve into their unique
        experiences, rituals, and adventures, shedding light on the joys,
        challenges, and cultural nuances that shape their world`,
  },
  {
    year: "2024",
    name: "TIKA I NEPAL",
    description: `Explore the rich tapestry of Nepalese childhood through our
        captivating documentary, offering a glimpse into the daily lives and
        routines of children in Nepal. Join us as we delve into their unique
        experiences, rituals, and adventures, shedding light on the joys,
        challenges, and cultural nuances that shape their world`,
  },
];

export const Showcase = () => {
  return (
    <div className="px-4 md:p-20">
      {items.map((item, i) => (
        <Item key={i} {...item} />
      ))}
    </div>
  );
};

interface ItemProps {
  year: string;
  name: string;
  description: string;
}
const Item = ({ year, name, description }: ItemProps) => {
  return (
    <div className="flex flex-col max-w-4xl my-24">
      <div className="text-center">
        <h2>{year}</h2>
        <h1 className="text-2xl font-bold my-4">{name}</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-8 ">
        <CldImage
          id="sheep"
          title="Sheep"
          alt="Sheep"
          src="samples/sheep.jpg"
          width={1600}
          height={1067}
          sizes="(max-width: 640px) 100vw,
                      (max-width: 768px) 80vw,
                      (max-width: 1024px) 60vw,
                      50vw"
        />
        <h3 className="text-sm">{description}</h3>
      </div>
    </div>
  );
};
