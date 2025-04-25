import Deduplication from "./components/Deduplication"
import StaleTime from "./components/StaleTime"
import WithoutTanstackQuery from "./components/WithoutTanstackQuery"
import WithTanstackQuery from "./components/WithTanstackQuery"

const App = () => {
  return (
    <div>
      {/* <WithoutTanstackQuery/> */}
      {/* <WithTanstackQuery /> */}
      {/* <Deduplication />
      <Deduplication /> */}
      <StaleTime />
    </div>
  )
}

export default App