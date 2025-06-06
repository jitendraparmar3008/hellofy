import Image from "next/image";

const Broadcast = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-3/4">
            {/* <img src="/images/hellofy/Broadcast.jpg" alt="Broadcast" style={{width:"80%"}}/> */}
            <img
              src="/images/hellofy/Broadcast.jpg"
              alt="Inbox"
              className="rounded-xl xl:w-4/5 md:w-full"
            />
            {/* <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/20] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/hellofy/Broadcast.jpg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/hellofy/Broadcast.jpg"
                alt="about image"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div> */}
          </div>
          <div className="w-full px-4 lg:w-1/4">
            <div className="wow fadeInUp max-w-[560px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Broadcast
                </h3>
                <ul className="list-disc font-medium pl-5 text-base leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  <li>
                    Send campaigns in bulk and know the statistics around same
                  </li>
                  <li>Create broadcast groups by using apt filters.</li>
                </ul>
              </div>
              {/* <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Premier support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Next.js
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
                  consectetur adipiscing elit setim.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Broadcast;
