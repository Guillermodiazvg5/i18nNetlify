import { FC, PropsWithChildren } from 'react';

type Props = {
  readonly children: React.ReactNode;
  readonly headerChat: () => JSX.Element;
  readonly footerChat: () => JSX.Element;
};
const LayoutChat: FC<PropsWithChildren<Props>> = ({
  children,
  headerChat,
  footerChat,
}) => {
  return (
    <div className="h-full  flex flex-col justify-normal items-center">
      {headerChat ? (
        <div className="w-full flex flex-col">{headerChat()}</div>
      ) : null}
      <div className="w-full h-full overflow-auto bg-gray-10">{children}</div>
      {footerChat ? (
        <div className="w-full flex flex-row p-3 border-t-[1px]">
          {footerChat()}
        </div>
      ) : null}
    </div>
  );
};

export default LayoutChat;
