import React from 'react';

import Heading from 'elements/heading';
import Text from 'elements/text';
import Anchor from 'elements/anchor';
import Image from 'elements/style-image';

import Test from 'images/show-brains.png';

const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row mb-12 md:mb-24 lg:mb-32">
      <div className="w-full sm:w-3/4 xl:w-1/2">
        <Heading as="h1" className="uppercase mb-6 text-black">
          Welcome to my workspace
        </Heading>
        <Text size="regular" weight="regular" className="w-3/4 md:w-1/2 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <Anchor to="/blog/" type="primary">
          Button text
        </Anchor>
      </div>

      <Image
        border="borderTopLeft"
        offset="100"
        align="right"
        size="large"
        src={Test}
      />
    </div>
  );
};

export default Intro;
