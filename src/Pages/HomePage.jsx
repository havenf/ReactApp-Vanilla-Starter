import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";


function HomePage() {

  useEffect(() => {

  }, [])

  return (
    <section className="home-page">
        Home Page
    </section>
  )
}

export default observer(HomePage)