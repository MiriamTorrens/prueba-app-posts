import post from "../assets/post.png";

export default function Logo() {
    return (
        <div className="logo">
            <img className="logo__img" src={post} alt="lotoyipo" />
            <p className="logo__text">POST</p>
        </div>
    )
}