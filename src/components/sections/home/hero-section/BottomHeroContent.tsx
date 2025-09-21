export default function BottomHeroContent() {
  const services = ['UI/UX Design', 'Product Design', 'Motion Design', 'Brand Design & Strategy', 'Web Development (Low-Code + AI)'];
  return (
    <section className="section border py-[256px]">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="justify-center text-white text-4xl font-medium leading-[48px]">Senior UI/UX & Product Designer.</h1>
          <p className="max-w-[580px] text-center justify-center text-neutral-400 text-lg font-normal leading-7">
            I design scalable, aesthetic digital experiences across brand, product, and web, driven by strategy and clean execution.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-medium text-gray-800">{service}</h3>
            </div>
          ))}
        </div>
        <div className="border p-3"></div>
        <div className="border p-3"></div>
        <div className="border p-3"></div>
      </div>
    </section>
  );
}
