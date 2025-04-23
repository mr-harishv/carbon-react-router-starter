import { AspectRatio, Column } from '@carbon/react';

export const Footer = () => {
  return (
    <Column sm={4} md={8} lg={8} className="cs--footer">
      <AspectRatio ratio="16x9">
        <p>Footer</p>
        <p>Copyright IBM 2025</p>
      </AspectRatio>
    </Column>
  );
};
