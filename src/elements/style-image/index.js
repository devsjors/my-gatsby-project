import React from 'react';
import PropTypes from 'prop-types';

import ConditionalWrapper from './_conditional-wrapper';

const StyledImage = ({ src, border, align, size, classes, offset }) => {
  return (
    <ConditionalWrapper
      className={classes}
      condition={align === 'right'}
      size={size}
      offset={offset}
    >
      <div className={border}>
        <img src={src} alt="high-five" />
      </div>
    </ConditionalWrapper>
  );
};

export default StyledImage;

StyledImage.defaultProps = {
  classes: null,
  offset: null,
};

StyledImage.propTypes = {
  src: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
  align: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  classes: PropTypes.string,
  offset: PropTypes.string,
};
