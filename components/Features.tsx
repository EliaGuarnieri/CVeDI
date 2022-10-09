import {
  CodeBracketIcon,
  RectangleGroupIcon,
  SparklesIcon,
  MagnifyingGlassCircleIcon
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Ripasso HTML e CSS",
    icon: CodeBracketIcon,
  },
  {
    name: "Implementazione interfacce responsive",
    icon: RectangleGroupIcon,
  },
  {
    name: "Analisi e utilizzo del framework Bootstrap",
    icon: () => <img src="/bootstrap.svg" height="24" width="24" />,
  },
  {
    name: "Nuovi elemententi in HTML5 e CSS3",
    icon: SparklesIcon,
  },
  {
    name: "Search Engine Optimization",
    icon: MagnifyingGlassCircleIcon,
  },
  {
    name: "Javascript per l'utilizzo dei componenti di Bootstrap",
    icon: () => <img src="/jslogo.svg" height="24" width="24" />,
  },
];



function Features() {
  return (
    <>
      <div className="grid grid-cols-1 gap-3 my-12">
        {features.map(({ icon: Icon, ...feature }, i) => (
          <div
            className="flex items-center space-x-4"
            key={feature.name.split(" ").join("-")}
          >
            <div>
              <Icon
                className="block w-8 h-8"
                style={{ height: 24, width: 24 }}
                aria-hidden="true"
              />
            </div>
            <div>
              <div className="my-0 font-small dark:text-white">
                {feature.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Features;
