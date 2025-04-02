import { FormEvent, useRef, useState } from "react"
type formData = {
  name: string
  email: string
  password: string
}

const Form = () => {
  const [submittedData, setSubmittedData] = useState<formData>({
    name: "",
    email: "",
    password: "",
  })

  const name = useRef<HTMLInputElement>(null)
  const email = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const nameValue = name.current!.value
    const emailValue = email.current!.value
    const passwordValue = password.current!.value

    setSubmittedData({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your name" ref={name} />
      <input type="email" placeholder="Enter your email" ref={email} />
      <input type="password" placeholder="Enter your password" ref={password} />
      <button type="submit">Submit</button>

      <section>
        <h1>Submitted Data:</h1>
        <p>Name: {submittedData.name}</p>
        <p>Email: {submittedData.email}</p>
        <p>Password: {submittedData.password}</p>
      </section>
    </form>
  )
}

export default Form
