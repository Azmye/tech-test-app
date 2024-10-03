import { FaDesktop } from "react-icons/fa6";
import CardService from "../components/CardService";
import { FaCogs, FaSitemap, FaTools } from "react-icons/fa";
import CardSlider from "../components/CardSlider";

const SERVICES = [
  {
    icon: <FaDesktop />,
    title: "Software Development",
    description:
      "Custom Development , Integration, Data Migration & Enhancement & Mobile Application",
  },
  {
    icon: <FaCogs />,
    title: "System Integration",
    description:
      "Data Center Consolidation , Network & Security & Server and Storage",
  },
  {
    icon: <FaTools />,
    title: "Maintenance & Support",
    description:
      "Offsite Support Staffing , Onsite Support Staffing & Project Based Support",
  },
  {
    icon: <FaSitemap />,
    title: "Network & Telecommunication",
    description:
      "We will help all the needs of network installation and preparation based on your needs, taking into account what is needed and what is more efficient.",
  },
];

export default function Page() {
  return (
    <div className="container">
      <section className="h-dvh bg-no-repeat bg-cover bg-[url('https://mksolusi.id/wp-content/uploads/2019/07/software-development-1.jpg')]">
        <h1 className="mx-auto max-w-7xl text-7xl text-white pt-48">
          PT Multi Karya Solusi
        </h1>
      </section>

      <section className="mx-auto py-14 max-w-7xl flex flex-row gap-8">
        {SERVICES.map((item, index) => (
          <CardService
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>

      <section>
        <div className="bg-fixed bg-top bg-cover bg-[url('https://mksolusi.id/wp-content/uploads/2019/07/working-freelancer-germany.jpeg')] h-[500px]">
          <div className="bg-black/70 h-full flex items-center justify-center">
            <div className="py-10 mx-auto w-3/5 text-center">
              <h5 className="text-2xl text-white border-b-4 border-white w-fit mx-auto pb-4 mb-5">
                Profile
              </h5>
              <p className="mb-5 text-white">
                PT Multi Karya Solusi is an Information Technology solutions
                company that includes Information Technology Consultation and
                Planning, Application System Development, Integration of
                communication devices and networks as well as maintenance and
                repair of system devices with coverage in various fields in the
                public and private sectors.
              </p>
              <button className="px-4 py-2 bg-blue-950 text-white text-sm">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto py-14 max-w-7xl">
        <h5 className="pb-3 border-b-[3px] border-b-blue-900 w-fit mx-auto text-xl font-semibold">
          Customers
        </h5>

        <CardSlider />
      </section>
    </div>
  );
}
