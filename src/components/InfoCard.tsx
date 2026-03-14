import type { infoCardsDataProps } from "../data/infoCards.ts";

interface infoCardsProps extends infoCardsDataProps {
  className?: string;
}

function InfoCard({
  title,
  description,
  icon,
  isIconResponsive,
  className,
}: infoCardsProps) {
  return (
    <li
      className={`p-6 md:p-8 ${!isIconResponsive ? "box-shadow-1 rounded-2xl" : ""} ${className ?? ""}`}
    >
      {isIconResponsive ? (
        <div
          className={`flex flex-col md:flex-row lg:flex-col gap-8 md:gap-10 lg:gap-12 `}
        >
          <div className={`flex  items-center  min-w-16 min-h-16`}>
            <img alt="" src={icon} className="w-16 h-16 " />
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-preset-4 text-blue-900 text-left">{title}</p>
            <p className="text-preset-6-regular text-grey-500">{description}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 ">
          <div className="flex gap-4">
            <img src={icon} alt="" />
            <p className="text-preset-5 text-blue-900">{title}</p>
          </div>
          <p className="text-preset-6-regular text-grey-500">{description}</p>
        </div>
      )}
    </li>
  );
}

export default InfoCard;
