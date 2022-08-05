import React from 'react';
import { LogoFrame } from '../../../atoms/Frames/LogoFrame';
import { ParagraphyFrame } from '../../../atoms/Frames/ParagraphyFrame';
import { DrawLogo, DrawLogoProps } from '../../../atoms/Logos/DrawLogo';
import { ListLogo } from '../../../atoms/Logos/ListLogo';
import { ListLogoItem } from '../../../atoms/Logos/ListLogoItem';
import { Paragraphy } from '../../../atoms/Typography/Paragraphy';

export type CounterLogosProps = {
  logoList: DrawLogoProps[];
};

const CounterLogos = ({ logoList }: CounterLogosProps) => (
  <ListLogo>
    {logoList.map((logo) => (
      <ListLogoItem key={logo.id}>
        <LogoFrame>
          <DrawLogo
            logoDescription={logo.logoDescription}
            logoFileName={logo.logoFileName}
          />
        </LogoFrame>
        <ParagraphyFrame>
          <Paragraphy>{logo.logoName}</Paragraphy>
        </ParagraphyFrame>
      </ListLogoItem>
    ))}
  </ListLogo>
);

export { CounterLogos };
