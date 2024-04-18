export const statesStepper = {
  COMPLETE: 'completado',
  PENDING: 'pendiente',
  PROGRESS: 'progreso',
};

export type StateStepper = 'completado' | 'pendiente' | 'progreso';

export type StepperProps = {
  steps: {
    label: string;
    redirectTo: string;
    status: StateStepper;
  }[];
};
