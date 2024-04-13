import ImageApp from "@/components/imageApp";
import { createClient } from "@/utils/supabase/server";
import "remixicon/fonts/remixicon.css";

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div>
        <main>
          <ImageApp />
          <div>
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Edit
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Creat Face
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
