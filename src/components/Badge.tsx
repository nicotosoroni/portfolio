interface BadgeProps {
  text: string;
}

const Badge = ({ text }: BadgeProps) => {
  return (
    <span className="bg-blue-900 text-blue-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm ">
      {text}
    </span>
  );
};

export default Badge;
