import { FC, PropsWithChildren } from 'react';
import img from '@assets/images/image-container.png';

type Props = {
  readonly srcImage?: string;
};
const LayoutAccount: FC<PropsWithChildren<Props>> = ({
  srcImage = img,
  children,
}) => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="grid grid-cols-1 md:grid-cols-[30%_minmax(70%,1fr)] lg:grid-cols-[30%_minmax(70%,1fr)] h-full">
        <img
          className="aspect-video object-cover w-full md:h-full bg-cover bg-center"
          src={srcImage}
          alt="img-font-layout"
        />
        <div className="w-full h-full">{children}</div>
      </div>
    </div>
  );
};

export default LayoutAccount;
