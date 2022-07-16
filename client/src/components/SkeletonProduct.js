import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonProduct = ({
  width = 1200,
  heading = { width: 0, height: 0 },
  row = 2,
  column = 4,
  padding = 12,
  borderRadius = 6,
  ...props
}) => {
  const list = [];

  let height;

  for (let i = 1; i <= row; i++) {
    for (let j = 0; j < column; j++) {
      const itemWidth = (width - padding * (column + 1)) / column;

      const x = padding + j * (itemWidth + padding);

      const height1 = itemWidth;

      const height2 = 20;

      const height3 = 20;

      const space = padding + height1 + (padding / 2 + height2) + height3 + padding * 4;

      const y1 = padding + heading.height + padding * 2 + space * (i - 1);

      const y2 = y1 + padding + height1;

      const y3 = y2 + padding / 2 + height2;

      const y4 = y3 + padding / 2 + height3;

      list.push(
        <>
          <rect
            x={x}
            y={y1}
            rx={borderRadius}
            ry={borderRadius}
            width={itemWidth - 5}
            height={height1 - 30}
          />
          <rect
            x={x}
            y={y2 - 20}
            rx={borderRadius}
            ry={borderRadius}
            width={itemWidth * 0.95}
            height={height2}
          />
          <rect
            x={x}
            y={y3 - 15}
            rx={borderRadius}
            ry={borderRadius}
            width={itemWidth * 0.6}
            height={height3 - 3}
          />
          <rect
            x={x}
            y={y4}
            rx={borderRadius}
            ry={borderRadius}
            width={itemWidth * 0.4}
            height={height3 - 5}
          />
        </>,
      );

      if (i === row) {
        height = y3 + height3;
      }
    }
  }

  return (
    <ContentLoader viewBox={`0 0 ${width} ${height}`} width={width} height={height} {...props}>
      {heading && (
        <rect x={padding} y={padding} rx={0} ry={0} width={heading.width} height={heading.height} />
      )}
      {list}
    </ContentLoader>
  );
};

export default SkeletonProduct;
