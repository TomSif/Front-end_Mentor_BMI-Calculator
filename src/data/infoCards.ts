export interface infoCardsDataProps {
  title: string;
  description: string;
  icon: string;
  iconBg?: string;
  id: number;
  isIconResponsive: boolean;
}

export const infoCardsData: infoCardsDataProps[] = [
  {
    id: 1,
    title: "Healthy eating",
    description:
      "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
    icon: "/images/icon-eating.svg",
    iconBg: "#FCDDED",
    isIconResponsive: true,
  },
  {
    id: 2,
    title: "Regular exercise",
    description:
      "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
    icon: "/images/icon-exercise.svg",
    iconBg: "#FDEFE1",
    isIconResponsive: true,
  },
  {
    id: 3,
    title: "Adequate sleep",
    description:
      "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
    icon: "/images/icon-sleep.svg",
    iconBg: "#DDF6F6",
    isIconResponsive: true,
  },
  {
    id: 4,
    title: "Gender",
    description:
      "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
    icon: "/images/icon-gender.svg",
    isIconResponsive: false,
  },
  {
    id: 5,
    title: "Age",
    description:
      "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
    icon: "/images/icon-age.svg",
    isIconResponsive: false,
  },
  {
    id: 6,
    title: "Muscle",
    description:
      "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
    icon: "/images/icon-muscle.svg",
    isIconResponsive: false,
  },
  {
    id: 7,
    title: "Pregnancy",
    description:
      "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
    icon: "/images/icon-pregnancy.svg",
    isIconResponsive: false,
  },
  {
    id: 8,
    title: "Race",
    description:
      "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
    icon: "/images/icon-race.svg",
    isIconResponsive: false,
  },
];
