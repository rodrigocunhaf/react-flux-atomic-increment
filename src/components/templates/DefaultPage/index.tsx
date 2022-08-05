import React from 'react';
import {
  CounterWidget,
  CounterWidgetProps,
} from '../../organisms/CounterWidget';

type DefaultPageProps = {
  content: {
    counter: CounterWidgetProps;
  };
};

const DefaultPage = ({ content }: DefaultPageProps) => (
  <CounterWidget
    counterLogos={content.counter.counterLogos}
    counterController={content.counter.counterController}
    counterSectionTitle={content.counter.counterSectionTitle}
  />
);

export { DefaultPage };
