import { Button } from '@mitimiti/components/ui/button';
import { useToast } from '@mitimiti/components/ui/use-toast';
import Experience from '@mitimiti/components/ui/experience';
import { Toaster } from '@mitimiti/components/ui/toaster';

export const NotificationExperience = () => {
  const { toast } = useToast();

  return (
    <>
      <Toaster />
      <Button
        className="m-4"
        onClick={() => {
          toast({
            description: <Experience />,
          });
        }}
      >
        Show notification
      </Button>
    </>
  );
};
