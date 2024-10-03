import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "../../../redux/store";

export default function ChallengeProfilePage() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <h5 className="text-3xl font-semibold text-black/80">Profile</h5>

      <div className="p-3 w-full shadow-md rounded-md flex flex-row mt-5">
        <div className="w-2/12">
          <div className="text-sky-500">
            <FaUserCircle fontSize={150} />
          </div>
        </div>
        <div className="w-10/12">
          <h5 className="border-b mb-2">Username : {user?.username}</h5>
          <h5 className="border-b mb-2">Fullname : {user?.detail.fullname}</h5>
          <h5 className="border-b mb-2">
            Employment : {user?.roles.map((role) => role.name).join(", ")}
          </h5>
        </div>
      </div>
    </div>
  );
}
