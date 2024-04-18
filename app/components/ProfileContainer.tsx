import { P } from './ui/typography/p';
import { Button } from './ui/button';
import { useTranslation } from '@mitimiti/hooks/use-translation';
import { H2 } from './ui/typography/h2';

const ProfileContainer = () => {
    const { t } = useTranslation();
    const commonTexts = t('modalCompleteProfile', { returnObjects: true }) as {
        titleModal: string;
        paragraphModal: string;
        buttonComplete: string;
    };

    return (
        <div className="m-8">
            <H2 className="text-center">{commonTexts.titleModal} </H2>
            <P className="mb-4 text-center">{commonTexts.paragraphModal}</P>

            <div className="flex justify-center mb-4">
                <Button>{commonTexts.buttonComplete} </Button>
            </div>
        </div>
    );
};

export default ProfileContainer;
