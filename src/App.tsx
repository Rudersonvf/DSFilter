import { useState } from "react";
import Header from "./components/Header";
import ListingBody from "./components/ListingBody";
import { ContextHeaderCount } from "./utils/context-count";

function App() {
  const [contextHeaderCount, setContextHeaderCount] = useState<number>(0);

  return (
    <ContextHeaderCount.Provider
      value={{ contextHeaderCount, setContextHeaderCount }}
    >
      <Header />
      <ListingBody />
    </ContextHeaderCount.Provider>
  );
}

export default App;
