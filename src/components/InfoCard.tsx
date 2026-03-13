import type { infoCardsDataProps } from "../data/infoCards.ts";

interface InfoCardProps extends infoCardsDataProps {
  variant: "row" | "col";
}

function InfoCard({
  title,
  description,
  icon,
  iconBg,
  isIconResponsive,
  variant,
}: InfoCardProps) {
  return (
    <div className="p-6 md:p-8">
      {isIconResponsive ? (
        <div className={`flex flex-${variant} gap-8 md:gap-10 lg:gap-12`}>
          <div
            className={`flex items-center justify-center  w-16 h-16`}
            style={{ backgroundColor: iconBg }}
          >
            <img alt="" src={icon} />
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-preset-4 text-blue-900 text-left">{title}</p>
            <p className="text-preset-6-regular text-grey-500">{description}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <img src={icon} alt="" />
            <p className="text-preset-5 text-blue-900">{title}</p>
          </div>
          <p className="text-preset-6-regular text-grey-500">{description}</p>
        </div>
      )}
    </div>
  );
}

export default InfoCard;
