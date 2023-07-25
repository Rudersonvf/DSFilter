import { useContext } from "react";
import "./style.css";
import { ContextHeaderCount } from "../../utils/context-count";

export default function Header() {
  const { contextHeaderCount } = useContext(ContextHeaderCount);

  return (
    <header>
      <nav>
        <h1 className="ft-wt-bd">DSFilter</h1>
        {contextHeaderCount < 1 ? (
          ""
        ) : contextHeaderCount < 2 ? (
          <p className="ft-wt-bd">{contextHeaderCount} produto</p>
        ) : (
          <p className="ft-wt-bd">{contextHeaderCount} produtos</p>
        )}
      </nav>
    </header>
  );
}
