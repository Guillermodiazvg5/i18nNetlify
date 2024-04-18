import { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { CgClose } from 'react-icons/cg';
import * as Dialog from '@radix-ui/react-dialog';

const DialogDemo = ({
  open,
  onOpenChange,
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
}) => (
  <Dialog.Root open={open} onOpenChange={onOpenChange}>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-blackOpacity-600 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-3xl bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        {children}
        <Dialog.Close asChild>
          <button
            className="absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none"
            aria-label="Close"
          >
            <CgClose className="text-blue-900" />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

DialogDemo.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default DialogDemo;
