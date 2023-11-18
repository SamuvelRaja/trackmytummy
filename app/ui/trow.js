export default function Trow({user}) {
  return (
    <tr>
      <td className="p-2">{user.id}</td>
      <td className="p-2">{user.name}</td>
      <td className="p-2">{user.username}</td>
      <td className="p-2">{user.address.city}</td>
      <td className="p-2">{user.address.geo.lat}</td>
      <td className="p-2">{user.address.geo.lat}</td>
      <td className="p-2">{user.website}</td>
    </tr>
  )
}