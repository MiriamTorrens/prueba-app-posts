import Noresults from "../assets/no-results.png";
import { PropsNoResults } from "../types";

export default function NoResults({ query }: PropsNoResults) {
  return (
    <div className="no-results">
      <img
        src={Noresults}
        alt="icono sin resultado"
        className="no-results__icon"
      />
      <p className="no-results__text">
        No se encontraron resultados para{" "}
        <span className="no-results__query">{query}</span>
        <br />
        Inténtalo de nuevo
      </p>
    </div>
  );
}
