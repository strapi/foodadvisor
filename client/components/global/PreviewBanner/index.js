const PreviewBanner = () => {
  return (
    <div className="px-4 py-4 bg-secondary md:py-4 md:px-4 lg:py-8 lg:px-8 flex items-center justify-center">
      <div className="items-center justify-center flex">
        <div className="flex-1 pr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="flex-row"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
              fill="#ffffff"
            />
          </svg>
        </div>

        <p className="max-w-3xl text-lg leading-6 text-white">
          You are in preview mode -
          <a className="px-2 underline" href={`/api/exit-preview`}>
            Turn off to safely browse the website again
          </a>
        </p>
      </div>
    </div>
  );
};

export default PreviewBanner;
