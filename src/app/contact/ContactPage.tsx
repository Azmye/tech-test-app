export default function ContactPage() {
  return (
    <div>
      <section className="pt-24 mb-10">
        <div
          className="map-container"
          style={{ width: "100%", height: "400px" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4693254030685!2d106.8011759!3d-6.2016491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6bc16c000e3%3A0x517c15afb89b7026!2sJDC%20Business%20Center!5e0!3m2!1sen!2sid!4v1727923942504!5m2!1sen!2sid"
            width={"100%"}
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </section>

      <section className="mx-auto max-w-7xl pt-14 pb-10">
        <div className="flex flex-row gap-10">
          <div className="w-1/2">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-1/2 outline-none border bg-neutral-100 p-2"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Email Address"
                className="w-1/2 outline-none border bg-neutral-100 p-2"
              />
            </div>

            <div className="mb-4">
              <textarea
                placeholder="Message"
                rows={10}
                className="w-full outline-none border bg-neutral-100 p-2"
              />
            </div>

            <button className="bg-slate-900 text-white p-2 px-4 rounded-sm">
              Send
            </button>
          </div>

          <div className="w-1/2 flex flex-col items-end">
            <div className="mb-5">
              <h5 className="text-xl mb-4">GET IN TOUCH</h5>
              <div className="ml-auto w-14 border-b-[3px] border-slate-900" />
            </div>

            <div className="border-b text-end pb-5 mb-5">
              <p className="text-sm text-neutral-500">
                We’re happy to answer any questions you have or provide you with
                an estimate. Just contact us in address below, or send us a
                message in the form aside.
              </p>
            </div>

            <div className="border-b text-end pb-5 mb-5">
              <p className="text-sm text-neutral-500">
                JDC Buliding 6th Floor, Jl. Gatot Subroto Kav. 53 Jakarta 10260.
              </p>
            </div>

            <div className="text-end">
              <p className="text-sm text-neutral-500">info@mksolusi.id</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
