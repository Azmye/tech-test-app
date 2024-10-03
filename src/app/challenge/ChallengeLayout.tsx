import { FaUserCircle } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "../../redux/store";
import { FaUser } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";

export default function ChallengeLayout() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="flex flex-row">
      <div className="w-2/12 shadow-md h-dvh flex flex-col">
        <div className="mt-5 flex flex-col items-center border-b ">
          <span className="text-sky-500">
            <FaUserCircle fontSize={150} />
          </span>

          <h5>{user?.detail.fullname}</h5>
        </div>

        <nav className="w-full p-2">
          <NavLink
            to={"/challenge/dashboard"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-blue-500 text-white"
                  : "bg-neutral-100 text-neutral-500"
              } w-full inline-block p-2 rounded-md`
            }
          >
            Dashboard
          </NavLink>
        </nav>

        <div className="border-t mt-auto">
          <NavLink
            to={"/challenge/profile"}
            className={({ isActive }) =>
              `${
                isActive ? " text-blue-500" : "bg-neutral-100 text-neutral-500"
              } w-full p-2 rounded-md flex items-center gap-2`
            }
          >
            <span>
              <FaUser />
            </span>{" "}
            Profile
          </NavLink>

          <NavLink
            to={"/challenge/profile"}
            className={({ isActive }) =>
              `${
                isActive ? " " : "bg-neutral-100 text-neutral-500"
              } w-full p-2 rounded-md flex items-center gap-2`
            }
          >
            <span>
              <CiLogout />
            </span>
            Logout
          </NavLink>

          <div className="bg-gray-800 text-white p-2">
            <h5>Test MKSolusi</h5>
          </div>
        </div>
      </div>
      <div className="w-10/12 p-2 px-10">
        <Outlet />
      </div>
    </div>
  );
}
