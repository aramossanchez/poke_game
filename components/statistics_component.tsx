interface StatisticsProps {
  number: string,
  subtitle: string,
}

export default function StatisticsComponent({
  number,
  subtitle
}: StatisticsProps) {

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-secondaryColor text-6xl font-bold">{number}</p>
      <p className="text-center text-xl font-medium">{subtitle}</p>
    </div>
  )
}