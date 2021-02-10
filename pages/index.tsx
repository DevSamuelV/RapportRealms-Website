import { BigRedButton } from "../ui/Button/BigButton";
import { useRouter } from "next/router";
import { Title } from "../ui/Title/Title";
import { Button } from "../ui/Button/Button";

export default function Home() {
  const router = useRouter();

  const Join = async () => {
    router.push("Join");
  };

  return (
    <div className="w-full">
      <div className="rounded-xl ml-4 mr-4 p-2 text-white bg-gray-900">
        <h2 className="font-extrabold text-6xl text-center">Rapport Realms</h2>
        <h5 className="mt-3 font-semibold text-2xl text-center">
          Join The Rapport Realms Today
        </h5>

        <div className="mt-3 flex justify-center">
          <BigRedButton text="Join" onClick={() => Join()} />
        </div>
      </div>

      {/* <div className="flex flex-row">
        <div className="p-3 ml-5 mt-5 float-left bg-white shadow-md rounded-2xl w-full">
          <Title size="text-3xl" center={true} text="Jailed" />

          <div className="flex justify-center">
            <img
              className="m-2 h-20 w-20 rounded-xl"
              src="https://lh3.googleusercontent.com/proxy/KuEXT8v-QgBl_TuxSYvK5VdA_-iTy33QH3_F4kqa8BsSSvuGfzTi8pFbryHc5uYRAoDCjyzO2AJNORonUo-lxsVvxkwMfs0x4DIRKi4YQ-sQ"
              alt="Jailed Users"
            />
          </div>
        </div>

        <div className="p-3 ml-5 mt-5 float-right bg-white shadow-md rounded-2xl w-full">
          <Title size="text-3xl" center={true} text="News" />

          <div className="flex justify-center">
            <img
              className="m-2 h-20 w-20 rounded-xl"
              src="https://pbs.twimg.com/profile_images/1272909264366043140/cpisl8tB.jpg"
              alt="Mc News"
            />
          </div>

          <div className="mt-3 flex justify-center">
            <Button disabled={true} text="Check out the News" onClick={null} />
          </div>
        </div>
      </div> */}
    </div>
  );
}
