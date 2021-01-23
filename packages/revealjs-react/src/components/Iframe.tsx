import React from 'react';
import { MakeProps, getClassNameProps } from './BaseComponent';

export interface IFrameProps {
  height?: number;
  src: string;
  lazy?: boolean;
  preload?: boolean;
  width?: number;
}

function IFrame({
  autoAnimateId,
  fragmentIndex,
  height,
  lazy,
  preload,
  src,
  width,
  ...props
}: MakeProps<IFrameProps, 'iframe'>) {
  return (
    <iframe
      {...getClassNameProps(props)}
      data-id={autoAnimateId}
      src={lazy ? undefined : src}
      data-src={lazy ? src : undefined}
      data-preload={preload}
      width={width}
      height={height}
      data-fragment-index={fragmentIndex}
    />
  );
}

export default IFrame;
