import { H1 } from '@mitimiti/components/ui/typography/h1';
import { P } from '@mitimiti/components/ui/typography/p';

const HomeProd = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen bg-purple-900 text-white">
        <img
          className="absolute top-0 left-0 w-[5em] h-[12em] lg:w-[10em] lg:h-[20em]"
          alt="Ellipse"
          src="https://hrbgecxfmpekzsgwdphj.supabase.co/storage/v1/object/public/assets/home/Ellipse%201.svg"
        />
        <img
          className="absolute top-0 right-0 w-[8em] h-[12em] lg:w-[10em] lg:h-[20em]"
          alt="Palm"
          src="https://hrbgecxfmpekzsgwdphj.supabase.co/storage/v1/object/public/assets/home/palm.svg"
        />
        <img
          className="absolute bottom-0 left-5 w-[6em] h-[10em] lg:w-[10em] lg:h-[20em]"
          alt="Cactus"
          src="https://hrbgecxfmpekzsgwdphj.supabase.co/storage/v1/object/public/assets/home/cactus.svg"
        />
        <img
          className="absolute bottom-0 right-6 w-[10em] h-[4em] lg:w-[20em] lg:h-[9em]"
          alt="Ellipse"
          src="https://hrbgecxfmpekzsgwdphj.supabase.co/storage/v1/object/public/assets/home/Ellipse%202.svg"
        />
        <div>
          <P className="-mb-10 text-[18px]">Vamos</P>
          <H1 className="-mb-12 text-[80px]">miti</H1>
          <H1 className="text-[80px]">miti</H1>
        </div>
      </div>
    </>
  );
};

export default HomeProd;
