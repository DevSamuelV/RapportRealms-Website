import { BigRedButton } from "../ui/Button/BigButton";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const Join = async () => {
    router.push("Join");
  };

  return (
    <div>
      <div className="rounded-xl ml-4 mr-4 p-2 text-white bg-gray-900">
        <h2 className="font-extrabold text-6xl text-center">Rapport Realms</h2>
        <h5 className="mt-3 font-semibold text-2xl text-center">
          Join The Rapport Realms Today
        </h5>

        <div className="mt-3 flex justify-center">
          <BigRedButton text="Join" onClick={() => Join()} />
        </div>
      </div>
    </div>
  );
}
