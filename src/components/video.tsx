import React from 'react';
import { BaseProps, getClassName } from './BaseComponent';

export interface VideoProps extends BaseProps {
  autoplay?: boolean;
  controls?: boolean;
  height?: number;
  lazy?: string;
  loop?: boolean;
  muted?: boolean;
  preload?: '' | 'metadata' | 'auto' | 'none';
  width?: number;
  src: string[] | string;
}

type VideoTypes =
  | '3gp'
  | 'mpg'
  | 'mpeg'
  | 'mp4'
  | 'm4a'
  | 'm4p'
  | 'ogv'
  | 'ogg'
  | 'mov'
  | 'webm';

const formatMap: {
  [P in VideoTypes]: string;
} = {
  '3gp': 'video/3gpp',
  mpg: 'audio/mpeg',
  mpeg: 'audio/mpeg',
  mp4: 'video/mp4',
  m4a: 'video/mp4',
  m4p: 'video/mp4',
  ogv: 'video/ogg',
  ogg: 'video/ogg',
  mov: 'video/quicktime',
  webm: 'video/webm',
};

function Video({
  id,
  autoplay,
  className,
  controls,
  fragment,
  fragmentStyle,
  fragmentIndex,
  height,
  lazy,
  loop,
  muted,
  preload,
  width,
  src,
}: VideoProps) {
  if (Array.isArray(src)) {
    return (
      <video
        data-id={id}
        id={id}
        className={getClassName(className, fragment, fragmentStyle)}
        data-autoplay={autoplay}
        controls={controls}
        muted={muted}
        loop={loop}
        height={height}
        width={width}
        data-fragment-index={fragmentIndex}
      >
        {src.map((element) => (
          <source
            src={lazy ? '' : element}
            data-src={lazy ? element : false}
            data-preload={preload}
            type={
              formatMap[(/\.[^.]+$/.exec(element)?.[0] as VideoTypes) || 'mp4']
            }
          />
        ))}
      </video>
    );
  }

  return (
    <video
      data-id={id}
      id={id}
      className={
        className +
        (fragment ? ' fragment' : '') +
        (fragmentStyle ? ` ${fragmentStyle}` : '')
      }
      data-autoplay={autoplay}
      src={lazy ? '' : src}
      data-src={lazy ? src : false}
      data-preload={preload}
      controls={controls}
      muted={muted}
      loop={loop}
      height={height}
      width={width}
      data-fragment-index={fragmentIndex}
    />
  );
}

export default Video;
