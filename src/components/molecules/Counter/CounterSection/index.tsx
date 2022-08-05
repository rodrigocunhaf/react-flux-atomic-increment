import React from 'react';
import { ContentFrame } from '../../../atoms/Frames/ContentFrame';
import { PrimaryHeader } from '../../../atoms/Typography/PrimaryHeader';

const CounterSection = ({
  children,
  counterSectionTitle,
}: {
  children: React.ReactNode;
  counterSectionTitle: string;
}) => (
  <ContentFrame>
    <PrimaryHeader>{counterSectionTitle}</PrimaryHeader>
    {children}
  </ContentFrame>
);

export { CounterSection };
