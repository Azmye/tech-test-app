import { FaCogs, FaHdd, FaTools } from "react-icons/fa";
import { FaDesktop, FaLightbulb, FaSitemap } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const SERVICES = [
  {
    icon: <FaDesktop fontSize={20} />,
    title: "Software Development",
    description:
      "Custom Development , Integration, Data Migration & Enhancement & Mobile Application",
  },
  {
    icon: <FaCogs fontSize={20} />,
    title: "System Integration",
    description:
      "Data Center Consolidation , Network & Security & Server and Storage",
  },
  {
    icon: <FaHdd fontSize={20} />,
    title: "Hardware",
    description:
      "Making a great and innovative products or custom it based on your needs, we provide hardware solutions to help solving your problems.",
  },
  {
    icon: <FaTools fontSize={20} />,
    title: "Maintenance & Support",
    description:
      "Offsite Support Staffing , Onsite Support Staffing & Project Based Support",
  },
  {
    icon: <FaSitemap fontSize={20} />,
    title: "Network & Telecommunication",
    description:
      "We will help all the needs of network installation and preparation based on your needs, taking into account what is needed and what is more efficient.",
  },
  {
    icon: <FaLightbulb fontSize={20} />,
    title: "Network & Telecommunication",
    description:
      "We will help all the needs of network installation and preparation based on your needs, taking into account what is needed and what is more efficient.",
  },
];

export default function AboutPage() {
  const { pathname } = useLocation();

  return (
    <div className="">
      <section className="pt-28 pb-5 bg-neutral-200">
        <div className="mx-auto max-w-7xl flex flex-row justify-between py-2">
          <h5 className="text-xl">About</h5>
          <div className="flex flex-row">
            <p>Home</p>
            <p>{` » `}</p>
            <p className="text-neutral-500">{pathname.split("/")}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl py-10 flex flex-row flex-wrap">
          {SERVICES.map((item, index) => (
            <div className="py-5 w-4/12" key={index}>
              <div className="flex flex-row">
                <div className="w-1/5">
                  <div className="w-fit h-fit p-5 overflow-hidden rounded-full bg-slate-700  text-white flex justify-center items-center">
                    {item.icon}
                  </div>
                </div>
                <div className="w-4/5">
                  <h5 className="font-semibold text-neutral-500 mb-2">
                    {item.title}
                  </h5>
                  <p className="text-sm w-3/4">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="bg-fixed bg-top bg-cover bg-[url('https://mksolusi.id/wp-content/uploads/2019/07/working-freelancer-germany.jpeg')] h-[500px]">
          <div className="bg-black/70 h-full flex items-center justify-center">
            <div className="py-10 mx-auto w-3/5 text-center">
              <h5 className="text-2xl text-white border-b-4 border-white w-fit mx-auto pb-4 mb-5">
                More About Us
              </h5>
              <p className="mb-5 text-white">
                PT Multi Karya Solusi is an Information Technology solutions
                company that includes Information Technology Consultation and
                Planning, Application System Development, Integration of
                communication devices and networks as well as maintenance and
                repair of system devices with coverage in various fields in the
                public and private sectors.
              </p>
              <p className="mb-5 text-white">
                With the support of experienced experts PT MKS provides the best
                solutions, technical support and quality assurance for customer
                satisfaction by applying the philosophy that our success is the
                result of partnerships from customers and principals.
              </p>
              <p className="mb-5 text-white">
                We highly value commitment and professionalism and uphold the
                code of ethics and customer loyalty, therefore customer trust
                and satisfaction is an absolute thing for us in running the
                business wheel.
              </p>
              <button className="px-4 py-2 bg-blue-950 text-white text-sm">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
