import Oops from "../assets/oops.png";

export default function NotFound() {
  return (
    <div className="no-results">
      <img src={Oops} alt="imagen 404" className="no-results__icon" />
      <p className="no-results__text">Página no encontrada</p>
    </div>
  );
}
