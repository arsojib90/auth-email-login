import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

export default function Header() {
  const { user, logOut } = useContext(AuthContext);
  console.log("Context", user);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link className="btn btn-ghost text-xl" to="/">
          Awesome Auth
        </Link>
        <Link className="btn btn-ghost text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost text-xl" to="/orders">
          Orders
        </Link>
        <Link className="btn btn-ghost text-xl" to="/login">
          Login
        </Link>
        <Link className="btn btn-ghost text-xl" to="/register">
          Register
        </Link>
        {user?.email && (
          <span className="mx-8">
            Welcome <span className="mx-2 font-semibold">{user.email}</span>{" "}
          </span>
        )}
        {user?.email ? (
          <button
            onClick={handleSignOut}
            className="btn btn-outline btn-error font-semibold"
          >
            Sign out
          </button>
        ) : (
          <Link to="/login" className="btn btn-success  font-semibold">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
}
