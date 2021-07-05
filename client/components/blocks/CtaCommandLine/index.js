import { CopyBlock, nord } from 'react-code-blocks';

const CtaCommandLine = ({ title, text, theme, commandLine }) => {
  return (
    <div className={`bg-${theme}`}>
      <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className={`text-3xl font-extrabold text-black sm:text-4xl`}>
          {title && <span className="block">{title}</span>}
          {text && <span className={`block text-white`}>{text}</span>}
        </h2>
        <div className="py-12 lg:flex-shrink-0 flex items-center justify-center">
          <div className="block md:w-2/5 w-full shadow-2xl text-center">
            <CopyBlock
              text={commandLine}
              language="bash"
              codeBlock
              theme={nord}
              showLineNumbers={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

CtaCommandLine.defaultProps = {};

export default CtaCommandLine;
