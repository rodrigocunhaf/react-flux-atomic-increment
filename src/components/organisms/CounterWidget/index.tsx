import React from 'react';
import {
  CounterControllerProps,
  CounterController,
} from '../../molecules/Counter/CounterController';
import {
  CounterLogos,
  CounterLogosProps,
} from '../../molecules/Counter/CounterLogos';
import { CounterSection } from '../../molecules/Counter/CounterSection';

export type CounterWidgetProps = {
  counterSectionTitle: string;
  counterController: CounterControllerProps;
  counterLogos: CounterLogosProps;
};

const CounterWidget = ({
  counterController,
  counterSectionTitle,
  counterLogos,
}: CounterWidgetProps) => (
  <CounterSection counterSectionTitle={counterSectionTitle}>
    <CounterLogos logoList={counterLogos.logoList} />
    <CounterController
      controllerButtons={counterController.controllerButtons}
    />
  </CounterSection>
);

export { CounterWidget };
