import React from "react";

function UserSay() {
  return (
    <section className="bg-[#C07A1033]">
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-4xl font-bold tracking-tight text-center text-[#FE9F11] sm:text-5xl">
          What our Users say
        </h2>

        <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          <blockquote className="p-6 rounded-lg shadow-sm bg-gray-50 sm:p-8">
            <div className="flex items-center gap-4">
              <img
                alt="Miracle Kenter"
                src="/assets/Images/miracleKenter.png"
                className="object-cover rounded-full w-14 h-14"
              />

              <div>
                <div className="flex justify-center gap-0.5 text-[#FE9F11]">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="mt-0.5 text-xl font-medium text-gray-900">
                  Miracle Kenter
                </p>
                <p className="mt-0.5 text-base font-medium text-gray-900">
                  Douala, Cameroon
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-700">
              `Vert nice customer service`
            </p>
          </blockquote>

          <blockquote className="p-6 rounded-lg shadow-sm bg-gray-50 sm:p-8">
            <div className="flex items-center gap-4">
              <img
                alt="Emery Geidt"
                src="/assets/Images/Emery.png"
                className="object-cover rounded-full w-14 h-14"
              />

              <div>
                <div className="flex justify-center gap-0.5 text-[#FE9F11]">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="mt-0.5 text-xl font-medium text-gray-900">
                  Emery Geidt
                </p>
                <p className="mt-0.5 text-base font-medium text-gray-900">
                  Abuja, Nigeria
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-700">
             `Delivery is so fast`
            </p>
          </blockquote>

          <blockquote className="p-6 rounded-lg shadow-sm bg-gray-50 sm:p-8">
            <div className="flex items-center gap-4">
              <img
                alt="Ann Botosh"
                src="/assets/Images/annBotosh.png"
                className="object-cover rounded-full w-14 h-14"
              />

              <div>
                <div className="flex justify-center gap-0.5 text-[#FE9F11]">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="mt-0.5 text-xl font-medium text-gray-900">
                  Ann Botosh
                </p>
                <p className="mt-0.5 text-base font-medium text-gray-900">
                  Accra, Ghana
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-700">
              `The best logistics company so far`
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default UserSay;
