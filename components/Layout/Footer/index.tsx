"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import menuData from "@/components/Layout/Header/menuData";
import Link from "next/link";




const Footer = () => {

  const sectorMenu = menuData.find((menuItem: any) => menuItem.title === "Sector");
  const sortedSubmenu = sectorMenu?.submenu
    ? [...sectorMenu.submenu].sort((a, b) => a.title.localeCompare(b.title))
    : [];

  const ServicesMenu = menuData.find((menuItem: any) => menuItem.title === "Services");
  const sortedServiceMenu = ServicesMenu?.submenu
    ? [...ServicesMenu.submenu].sort((a, b) => a.title.localeCompare(b.title))
    : [];
  // Services

  return (
    <>
      {/*<footer className="border-t border-stroke  bg-white dark:border-strokedark dark:bg-blacksection">*/}
      {/*<footer className=" bg-gradient-to-t from-[#71b7a6]/20 via-[#F8F9FF]/30 to-transparent ">*/}

      <footer className=" bg-linear-to-t from-[#F8F9FF]/20 via-[#71b7a6]/30 to-transparent ">
        <div className="mx-auto max-w-c-1390 px-6 w-full  md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-10 lg:py-10">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0 items-start">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20
                  },

                  visible: {
                    opacity: 1,
                    y: 0
                  }
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-full lg:w-1/3"
              >
                <a href="/public" className="relative">
                  <Image
                    width={200}
                    height={100}
                    src="/images/Green-Logo.png"
                    // src="/images/logo/Logo1.png"
                    alt="Logo"
                    className="dark:hidden"
                  />
                  <Image
                    width={200}
                    height={100}
                    src="/images/Green-Logo.png"
                    // src="/images/logo/Logo2.png"
                    alt="Logo"
                    className="hidden dark:block"
                  />
                </a>

                <p className="mb-4 mt-4 text-sm max-w-[260px] leading-relaxed text-gray-600 dark:text-gray-400">
                  Nigeria&apos;s leading conformity assessment and certification body — delivering globally recognised certifications, auditing, inspection, and technical outsourcing services across Africa.
                </p>

                <p className="mb-2 text-xs font-semibold uppercase tracking-[4px] text-gray-400 dark:text-gray-500">
                  contact
                </p>
                <a href="mailto:info@truemarkglobal.com"
                   className="text-sm font-medium text-black dark:text-white"
                >info@truemarkglobal.com</a>
                <p className="text-sm font-medium text-black dark:text-white mt-2">+234 0803 230 2557</p>
              </motion.div>

              <div
                className="flex text-sm w-full mt-8 pt-8 flex-col gap-8  md:flex-row md:justify-between md:gap-6 lg:w-2/3 xl:w-7/12">
                {/*className="flex text-sm w-full mt-8 pt-8 flex-col gap-8  md:flex-row md:justify-between md:gap-6 lg:w-3/2 xl:w-7/11">*/}

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20
                    },

                    visible: {
                      opacity: 1,
                      y: 0
                    }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-black dark:text-white font-bold">
                    Quick Links
                  </h4>
                  <ul>
                    <li>
                      <a
                        href="/"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/courses"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Courses
                      </a>
                    </li>
                    <li>
                      <a
                        href="/support"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Support
                      </a>
                    </li>
                  </ul>
                </motion.div>


                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20
                    },

                    visible: {
                      opacity: 1,
                      y: 0
                    }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 font-bold text-black dark:text-white">
                    Services
                  </h4>
                  <ul>
                    {sortedServiceMenu.map((item: any) => (
                      <li key={item.id} className={"mb-4"}>
                        <Link href={item.path || "#"}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>


                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20
                    },

                    visible: {
                      opacity: 1,
                      y: 0
                    }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9  font-bold text-black dark:text-white">
                    Sectors
                  </h4>

                  <ul>
                    {sortedSubmenu.map((item: any) => (
                      <li key={item.id} className={"mb-4"}>
                        <Link href={item.path || "#"}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 font-bold text-black dark:text-white">
                    Platforms
                  </h4>
                  <ul>
                    <li className="mb-4">
                      <a href="https://certify.truemarkglobal.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                        CLMEP
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="https://app.truemarkglobal.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                        Truvera
                      </a>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20
                    },

                    visible: {
                      opacity: 1,
                      y: 0
                    }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  {/*<h4 className="mb-9  font-medium text-black dark:text-white">*/}
                  {/*  Newsletter*/}
                  {/*</h4>*/}
                  {/*<p className="mb-4 w-[90%]">*/}
                  {/*  Subscribe to receive future updates*/}
                  {/*</p>*/}
                  {/*<div className="flex flex-col md:flex-row gap-4 items-center">*/}
                  {/*  <div className="relative w-full md:w-auto">*/}
                  {/*    <input*/}
                  {/*      required*/}
                  {/*      type="email"*/}
                  {/*      placeholder="Enter your email"*/}
                  {/*      className="w-full rounded-full border border-gray-500 px-8 py-3 pr-28 shadow focus:border-primary focus:outline-hidden dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"*/}
                  {/*    />*/}
                  {/*    <button*/}
                  {/*      type="submit"*/}
                  {/*      className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-[#387467] text-white font-semibold px-5 py-2 shadow-md"*/}
                  {/*    >*/}
                  {/*      Subscribe*/}
                  {/*    </button>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                </motion.div>

              </div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="flex text-sm flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20
                },

                visible: {
                  opacity: 1,
                  y: 0
                }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex items-center gap-8">
                <li>
                  <a href="/who_we_are/certification_mark_use_policy" className="hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/support" className="hover:text-primary">
                    Support
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20
                },

                visible: {
                  opacity: 1,
                  y: 0
                }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <p>
                &copy; {new Date().getFullYear()} TrueMark Global SSL. All rights reserved
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex items-center gap-6 mr-14">
                <li>
                  <a href="https://www.instagram.com/truemarkglobal.standard" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-75 transition-opacity duration-300">
                    <svg className="fill-[#387467] transition-all duration-300 hover:fill-primary" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/truemark-global" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-75 transition-opacity duration-300">
                    <svg
                      className="fill-[#387467] transition-all duration-300 hover:fill-primary"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1505)">
                        <path
                          d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1505">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
