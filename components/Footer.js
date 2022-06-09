export default function Footer({totalLocations}) {
    return(
    <footer className="p-3 justify-evenly bg-emerald-500">
      <nav>
        <p>{totalLocations} Locations World Wide</p>
      </nav>
    </footer>
    )
  }