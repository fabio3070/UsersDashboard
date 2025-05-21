import SearchBox from "../ui/SearchBox";

export default function Header() {
  return (
    <div className="flex justify-between items-center w-full" role="header">
      <p className='logo'>UsersDashboard</p>
      <SearchBox />
    </div>
  )
}
