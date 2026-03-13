import Header from "./components/Header";
import { infoCardsData } from "./data/infoCards";
import InfoCard from "./components/InfoCard";

function App() {
  return (
    <>
      <Header></Header>
      <main className="gradient-1 flex flex-col items-center">
        <section>
          <div>
            <ul className="flex flex-col">
              {infoCardsData
                .filter((card) => card.isIconResponsive)
                .map((card) => (
                  <InfoCard
                    id={card.id}
                    key={card.id}
                    title={card.title}
                    description={card.description}
                    icon={card.icon}
                    iconBg={card.iconBg}
                    isIconResponsive={card.isIconResponsive}
                    variant="col"
                  />
                ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
