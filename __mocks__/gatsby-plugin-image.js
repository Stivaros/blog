const React = require("react");

const GatsbyImage = jest
  .fn()
  .mockImplementation(({ image, alt, style, imgStyle }) => (
    <img
      src={image?.images?.fallback?.src || "test-image.jpg"}
      alt={alt}
      style={{ ...style, ...imgStyle }}
      data-testid="gatsby-image"
    />
  ));

module.exports = {
  GatsbyImage,
};
