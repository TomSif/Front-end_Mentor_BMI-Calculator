import Header from "./components/Header";
import { infoCardsData } from "./data/infoCards";
import InfoCard from "./components/InfoCard";

function App() {
  return (
    <>
      <Header></Header>
      <main className=" flex flex-col items-center overflow-hidden mt-22 ">
        <section className="w-full flex flex-col items-end justify-between md:flex-row gap-12 md:gap-16 lg:px-36  lg:pb-24.5 transform md:-translate-x-10 lg:translate-x-0 relative lg:mt-13.5">
          <img
            className="hidden lg:flex absolute -top-13 right-43 w-21.25 h-50 z-10"
            src="/images/pattern-curved-line-left.svg"
            alt=""
          />

          <div className=" w-full md:max-w-109  lg:max-w-141">
            <img src="/images/image-man-eating.webp" alt="man eating" />
          </div>
          <div className="flex flex-col  md:max-w-82.75 lg:max-w-116 w-full  px-6 md:px-0 md:mb-8 lg:mb-11 gap-8 z-20">
            <h2 className="text-preset-3    lg:text-preset-2   text-blue-900       ">
              What your BMI result means
            </h2>
            <p className="   text-preset-6-regular  text-grey-500  ">
              A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
              Maintaining a healthy weight may lower your chances of
              experiencing health issues later on, such as obesity and type 2
              diabetes. Aim for a nutritious diet with reduced fat and sugar
              content, incorporating ample fruits and vegetables. Additionally,
              strive for regular physical activity, ideally about 30 minutes
              daily for five days a week.
            </p>
          </div>
        </section>
        <section className="w-full gradient-1 lg:rounded-r-3xl transform lg:-translate-x-9.5">
          <ul className=" lg:mx-32 flex flex-col lg:flex-row ">
            {infoCardsData
              .filter((card) => card.isIconResponsive)
              .map((card) => (
                <InfoCard
                  id={card.id}
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  isIconResponsive={card.isIconResponsive}
                />
              ))}
          </ul>
        </section>
        <section className="flex flex-col gap-14 mt-18 pl-4.75 pr-7.25 relative lg:mx-36 lg:mb-26 mb-24">
          <div className="flex flex-col items-center lg:items-start text-center xl:w-[50%] xl:text-left gap-8 xl:absolute xl:top-0 xl:left-0">
            <h3 className="text-preset-3 lg:text-preset-2 text-blue-900">
              Limitations of BMI
            </h3>
            <p className="text-preset-6-regular text-grey-500">
              Although BMI is often a practical indicator of healthy weight, it
              is not suited for every person. Specific groups should carefully
              consider their BMI outcomes, and in certain cases, the measurement
              may not be beneficial to use.
            </p>
            <img
              className="hidden xl:flex absolute top-52 left-41 w-21.25 h-50 z-10"
              src="/images/pattern-curved-line-right.svg"
              alt=""
            />
          </div>
          <ul className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 xl:gap-6 xl:ml-47.5">
            {infoCardsData
              .filter((card) => !card.isIconResponsive)
              .map((card, index) => (
                <InfoCard
                  id={card.id}
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  isIconResponsive={card.isIconResponsive}
                  className={`xl:col-span-2
                  ${index === 0 ? "xl:col-start-4" : ""}
                  ${index === 1 ? "xl:col-start-3" : ""}
                  ${index === 3 ? "xl:col-start-1" : ""}
                  ${index === 4 ? "md:col-span-2 md:justify-self-center md:max-w-[calc(50%-0.5rem)] xl:max-w-none" : ""}
                  `}
                />
              ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
