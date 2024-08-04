import imageOne from "../assets/Images/servicefirst.png";
import imageTwo from "../assets/Images/servicesecond.png";
import imageThird from "../assets/Images/servicethird.png";
import imageFour from "../assets/Images/servicefour.png";
import imageFive from "../assets/Images/servicefive.png";

const LogisticsServices = () => {
  const services = [
    {
      id: 1,
      title:
        "We are a logistics company that performs several activities in order to provide a better, stable reliable and fast supply chain for our customers.",
      imageUrl: imageOne,
    },
    {
      id: 2,
      title: "Courier Pick Up and Delivery (Mostly Douala)",
      description:
        "We specialize in door-to-door pick-up and delivery of parcels on short notice for businesses that function in a fast-paced environment who rely on our services to meet customer and client demands — and improve overall satisfaction.",
      imageUrl: imageTwo,
    },
    {
      id: 3,
      title: "Custom Declaration and Clearance",
      description:
        "We also handle declarations of goods to Customs authorities when entering or leaving a country.",
      imageUrl: imageThird,
    },
    {
      id: 4,
      title: "Express Logistics",
      description:
        "Your package arrives on time and within a very short period and limited to small packages determined by weight and documents.",
      imageUrl: imageFour,
    },
    {
      id: 5,
      title: "Container Shipment",
      description:
        "We also provide international container shipping to convey any kind of goods overseas.",
      imageUrl: imageFive,
    },
  ];

  return (
    <div className="p-8 bg-gradient-to-b from-[#C07A1033] to-[#C07A1033]">
      <div className="mx-auto max-w-7xl">
       
        {services.map((service, index) => (
          <section
            key={index}
            className={`mb-8 overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center ${
              index % 2 !== 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            {index % 2 === 0 ? (
              <>
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                  <div className="max-w-xl mx-auto text-center ltr:sm:text-left rtl:sm:text-right">
                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                      {service.title}
                    </h2>
                    <p className="hidden text-gray-500 md:mt-4 md:block">
                      {service.description}
                    </p>
                  </div>
                </div>
                <img
                  alt={service.title}
                  src={service.imageUrl}
                  className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
                />
              </>
            ) : (
              <>
                <img
                  alt={service.title}
                  src={service.imageUrl}
                  className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
                />
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                  <div className="max-w-xl mx-auto text-center ltr:sm:text-left rtl:sm:text-right">
                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                      {service.title}
                    </h2>
                    <p className="hidden text-gray-500 md:mt-4 md:block">
                      {service.description}
                    </p>
                  </div>
                </div>
              </>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default LogisticsServices;
