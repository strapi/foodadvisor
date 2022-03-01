import delve from "dlv";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "../../../utils/hooks";
import {
  getLocalizedData,
  listLocalizedPaths,
  localizePath,
} from "../../../utils/localize";

const localeSwitch = ({ pageData, type }) => {
  const router = useRouter();
  const lang = delve(router.query, "lang");
  const isMounted = useRef(false);
  const select = useRef();
  const [locale, setLocale] = useState(pageData.attributes.locale);
  const [showing, setShowing] = useState(false);
  const [localizedPaths, setLocalizedPaths] = useState();

  useOnClickOutside(select, () => setShowing(false));

  useEffect(() => {
    const changeLocale = async () => {
      if (!isMounted.current && lang && lang !== pageData.attributes.locale) {
        const localePage = await getLocalizedData(lang, pageData, type);
        router.push(`${localizePath(localePage, pageData.attributes.locale)}`, {
          locale: localePage.locale,
        });
      }

      setShowing(false);
      const localizations = await listLocalizedPaths(pageData, type);
      setLocalizedPaths(localizations);
    };

    setLocale(lang);
    changeLocale();

    return () => {
      isMounted.current = true;
    };
  }, [locale, router]);

  return (
    <div className="inline-block text-left" ref={select}>
      <div>
        <button
          className="md:mt-4 hover:bg-primary-50 hover:text-primary-600 focus:bg-primary-50 focus:text-primary-600 focus:outline-none flex items-center justify-between md:pl-8 cursor-pointer rounded-md"
          onClick={() => setShowing(!showing)}
        >
          <div className="w-6 h-6">
            <svg
              className="fill-current text-primary-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 490 490"
            >
              <path d="M490 245C490 109.915 380.089 0 245 0S0 109.915 0 245c0 135.085 109.911 245 245 245s245-109.915 245-245zM263.846 380.696c11.096.548 21.781 1.361 31.996 2.43-11.076 17.053-22.316 31.807-31.996 43.387v-45.817zm0-38.711v-81.591h80.86c-4.208 31.012-14.804 60.245-27.914 86.267-16.352-2.171-34.078-3.82-52.946-4.676zm0-119.946v-80.36c19.587-.4 39.945-1.888 60.783-4.753 11.631 24.771 20.063 53.417 21.66 85.113h-82.443zm0-118.966v-51.29c11.357 11.26 26.119 27.703 40.158 48.699-13.635 1.373-27.106 2.33-40.158 2.591zm-37.692-.673c-16.318-.805-31.757-2.205-46.078-4.046 16.965-24.888 34.774-43.291 46.078-53.774v57.82zm0 38.825v80.815h-89.986c1.658-32.662 10.587-62.206 22.834-87.553a619.247 619.247 0 0067.152 6.738zm0 119.17v81.003c-19.581.4-39.939 1.851-60.768 4.712-12.983-25.886-23.46-54.922-27.638-85.716h88.406zm0 119.628v55.272c-11.131-12.632-25.648-30.714-39.886-52.708 13.541-1.356 26.922-2.304 39.886-2.564zm111.038 8.844c18.508 3.238 34.063 6.762 45.881 9.837-23.907 21.36-52.737 37.222-84.641 45.727 12.172-15.038 25.844-33.717 38.76-55.564zm18.791-35.812c12.927-28.029 23.045-59.309 26.832-92.66h68.71c-2.959 39.704-17.194 76.236-39.557 106.571-10.45-3.268-29.932-8.767-55.985-13.911zm28.019-131.016c-1.427-34.133-9.499-64.953-20.987-91.989a444.866 444.866 0 0044.872-12.453c23.245 29.466 38.694 65.279 43.062 104.441h-66.947zM345.135 94.558a341.42 341.42 0 00-30.991-44.13c23.562 8.348 45.226 20.672 64.008 36.41-11.037 3.104-22.05 5.585-33.017 7.72zm-206.091-2.866c-9.782-1.944-18.654-3.915-26.181-5.776a207.72 207.72 0 0152.147-31.524c-8.691 10.813-17.559 23.385-25.966 37.3zM120.62 127.3c-12.104 27.687-20.691 59.444-22.168 94.739H39.051c4.376-39.236 19.87-75.112 43.187-104.609 8.84 2.654 21.899 6.232 38.382 9.87zM99.638 260.395c3.796 33.422 13.951 64.76 26.918 92.833-16.081 3.579-32.278 8.175-48.492 13.78-22.381-30.344-36.629-66.891-39.589-106.614h61.163zm45.423 128.115c12.212 20.697 25.116 38.605 36.803 53.259-28.391-9.075-54.009-24.2-75.627-43.689 12.978-3.859 25.933-7.066 38.824-9.57z" />
            </svg>
          </div>
        </button>
      </div>
      <div
        className={`origin-top-right absolute mt-2 w-24 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 ${
          showing ? "absolute" : "hidden"
        }`}
      >
        <div
          className="py-1 "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {localizedPaths &&
            localizedPaths.map(({ href, locale }) => (
              <a
                href={href}
                key={locale}
                locale={locale}
                className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                role="menuitem"
              >
                <span className="flex flex-col">
                  <span onClick={() => setLocale(locale)}>{locale}</span>
                </span>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default localeSwitch;
