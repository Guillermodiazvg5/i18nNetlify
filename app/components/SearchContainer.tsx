import { P } from './ui/typography/p';
import { Button } from './ui/button';
import { H2 } from './ui/typography/h2';
import { useTranslation } from '@mitimiti/hooks/use-translation';

const SearchContainer = () => {
    const { t } = useTranslation();
    const commonTexts = t('modalSearch', { returnObjects: true }) as {
        titleModal: string;
        paragraphModal: string;
        buttonPost: string;
        buttonNot: string;
    };

    return (
        <div className="m-8">
            <H2 className="text-center">{commonTexts.titleModal}</H2>
            <P className="mb-4 text-center">{commonTexts.paragraphModal}</P>
            <div className="flex justify-center mb-4">
                <Button>{commonTexts.buttonPost}</Button>
            </div>

            <div className="flex justify-center mb-4 ">
                <Button className="px-6" variant="outline">
                    {commonTexts.buttonNot}
                </Button>
            </div>
        </div>
    );
};

export default SearchContainer;
