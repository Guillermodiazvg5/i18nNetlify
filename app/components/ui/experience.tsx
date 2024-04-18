import { Button } from '@mitimiti/components/ui/button';
import { CardDescription, CardTitle } from '@mitimiti/components/ui/card';
import { Avatar } from '@mitimiti/components/ui/avatar';
import { useTranslation } from '@mitimiti/hooks/use-translation';
import { P } from '@mitimiti/components/ui/typography/p';

const Experience = () => {
  const { t } = useTranslation();
  const commonTexts = t('experience', { returnObjects: true }) as {
    howItwas: string;
    date: string;
    buttonIgnore: string;
    buttonComment: string;
  };

  return (
    <div className="flex justify-center ">
      <div className="p-2 max-w-[556px] max-h-[160px] ">
        <div className="flex">
          <Avatar
            classNameWrapper="mr-2 mt-2 w-[32px] h-[32px]"
            alt="user"
            fallback="FC"
          />
          <CardTitle className="m-2">
            <P className="text-lg">{commonTexts.howItwas}</P>
          </CardTitle>
        </div>

        <CardDescription className=" mb-2  mt-2 ml-16">
          <P className="text-sm text-gray-400">{commonTexts.date}</P>
        </CardDescription>
        <div className="flex justify-end">
          <Button className="mr-4" variant="outline">
            <P className="text-sm">{commonTexts.buttonIgnore}</P>
          </Button>
          <Button className="mr-2">
            <P className="text-sm">{commonTexts.buttonComment}</P>{' '}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
