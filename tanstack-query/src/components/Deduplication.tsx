import { useQuery } from "@tanstack/react-query"

const getRandomNumber = () => {
    return Promise.resolve(Math.random())
}

const Deduplication = () => {
    const {data} = useQuery({
        queryKey: ['randomNummber'],
        queryFn: getRandomNumber
    })
  return (
    <div>Random Number: {data}</div>
  )
}

export default Deduplication