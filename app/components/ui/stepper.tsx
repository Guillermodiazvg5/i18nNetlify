import {
  StateStepper,
  StepperProps,
  statesStepper,
} from '@mitimiti/types/register';
import { Link } from '@remix-run/react';
import { FaRegDotCircle, FaRegCircle } from 'react-icons/fa';
import { IoCheckmarkCircle } from 'react-icons/io5';

const getIcon = (status: StateStepper) => {
  switch (status) {
    case statesStepper.COMPLETE:
      return (
        <IoCheckmarkCircle className="text-base w-8 h-8 p-0 shrink-0  text-pink-900  flex items-center justify-center rounded-full" />
      );
    case statesStepper.PENDING:
      return (
        <FaRegCircle className="w-8 h-8 shrink-0 text-gray-100  flex items-center justify-center rounded-full" />
      );
    case statesStepper.PROGRESS:
      return (
        <FaRegDotCircle className="w-8 h-8 shrink-0 text-pink-900  flex items-center justify-center rounded-full" />
      );
    default:
      return (
        <FaRegCircle className="w-8 h-8 shrink-0 text-gray-100  flex items-center justify-center rounded-full" />
      );
  }
};

const getLine = (status: StateStepper) => {
  switch (status) {
    case statesStepper.COMPLETE:
      return <div className="w-full h-[2px] rounded-lg bg-pink-900" />;
    default:
      return <div className="w-full h-[2px] rounded-lg bg-gray-100" />;
  }
};
const Stepper = ({ steps }: StepperProps) => {
  if (!steps || steps.length === 0) return null;

  return (
    <>
      <div className="flex items-start max-w-screen-lg mx-auto w-full">
        {steps.map(({ status, label, redirectTo }, index) => (
          <>
            {index === 0 ? (
              <div className="w-full">
                <div className="flex items-center w-full">
                  <Link to={redirectTo}>{getIcon(status)}</Link>
                  {steps.length > 1 ? getLine(status) : null}
                </div>
                <div className="mt-2 mr-4 ">
                  <h6 className="text-base font-normal text-gray-700">
                    {label}
                  </h6>
                  <p className="text-xs text-gray-400">{status}</p>
                </div>
              </div>
            ) : null}
            {index > 0 && index < steps.length - 1 ? (
              <div className="w-full">
                <div className="flex items-center w-full">
                  <Link to={redirectTo}>{getIcon(status)}</Link>
                  {steps.length > 1 ? getLine(status) : null}
                </div>
                <div className="mt-2 mr-4">
                  <h6 className="text-base font-normal text-gray-700">
                    {label}
                  </h6>
                  <p className="text-xs text-gray-400">{status}</p>
                </div>
              </div>
            ) : null}
            {index === steps.length - 1 && index !== 0 ? (
              <div>
                <div className="flex items-center">
                  <Link to={redirectTo}>{getIcon(status)}</Link>
                </div>
                <div className="mt-2">
                  <h6 className="text-base font-normal text-gray-700">
                    {label}
                  </h6>
                  <p className="text-xs text-gray-400">{status}</p>
                </div>
              </div>
            ) : null}
          </>
        ))}
      </div>
    </>
  );
};

export default Stepper;
