// 1. Whenever working with actions, always use the name attribute
const Form = () => {
  const formAction = (formData: any) => {
    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
    }
    console.log(userData)
  }

  return (
    <form action={formAction}>
      <label htmlFor="name">Name</label>
      {/* 1 */}
      <input type="text" id="name" name="name" />
      <br />
      <label htmlFor="email">Email</label>
      {/* 1 */}
      <input type="email" id="email" name="email" />

      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
