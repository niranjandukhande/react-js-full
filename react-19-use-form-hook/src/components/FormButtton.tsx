import { useFormStatus } from "react-dom"
const FormButtton = () => {
  const { pending } = useFormStatus()
  console.log(pending)
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  )
}

export default FormButtton
