import { Button } from '@mitimiti/components/ui/button';
import { Input } from '@mitimiti/components/ui/input';
import { LuSend } from 'react-icons/lu';

const ChatInput = () => {
  return (
    <div className="w-full relative inline-block">
      <Input className="w-full" placeholder="Escribe tu mensaje aqui..." />
      <Button className="h-[30px] p-2 absolute right-2 top-1/2 transform -translate-y-1/2">
        <LuSend />
      </Button>
    </div>
  );
};

export default ChatInput;
