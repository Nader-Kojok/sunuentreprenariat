interface StatCardProps {
  number: string;
  label: string;
  className?: string;
}

const StatCard = ({ number, label, className = "" }: StatCardProps) => {
  return (
    <div className={`text-center ${className}`}>
      <div className="font-poppins font-bold text-2xl md:text-3xl text-black">
        {number}
      </div>
      <div className="text-sm text-gray-600 mt-1">
        {label}
      </div>
    </div>
  );
};

export default StatCard; 