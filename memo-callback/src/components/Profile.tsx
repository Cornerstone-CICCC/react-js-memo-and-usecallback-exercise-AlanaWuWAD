import { memo } from "react"

type Props = {
    firstname: string,
    lastname: string
}

const Profile = memo((props: Props) => {
    console.log("Rendered Profile Component")
  return (
    <div>
        <h3>firstname: {props.firstname}</h3>
        <h3>lastname: {props.lastname}</h3>
    </div>
  )
})

export default Profile