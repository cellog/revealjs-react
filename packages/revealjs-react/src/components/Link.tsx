import React from 'react';
import { MakeProps, getClassNameProps } from './BaseComponent';
import useReveal from '../hooks/useReveal';
import Reveal, { MightBeRevealPlugin } from 'reveal.js';

export type SlideType = string | number | [number, number] | HTMLElement;

export interface LinkProps {
  children: React.ReactNode;
  href?: string;
  slide?: SlideType;
  autoAnimateId?: string;
}

function getLinkFromSlide(
  reveal: Reveal<MightBeRevealPlugin[]> | null,
  slide: HTMLElement,
) {
  if (!reveal) {
    return '#';
  }
  const indices = reveal.getIndices(slide);
  return (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    reveal.slide(indices.h, indices.v, indices.f);
  };
}

function getLink(
  reveal: Reveal<MightBeRevealPlugin[]> | null,
  href?: string,
  slide?: SlideType,
): string | ((e: React.MouseEvent) => void) {
  if (href) {
    return href;
  }
  if (!slide) {
    return '#';
  }
  if (typeof slide === 'string') {
    // slide is an id
    const slideById = document.querySelector<HTMLElement>(`#${slide}`);
    if (slideById) {
      return getLinkFromSlide(reveal, slideById);
    }
  } else if (typeof slide === 'number') {
    return `#${slide - 1}`;
  } else if (Array.isArray(slide)) {
    return `#${slide[0] - 1}/${slide[1] - 1}`;
  } else if (slide) {
    return getLinkFromSlide(reveal, slide);
  }
  return '#';
}

function Link({
  autoAnimateId,
  children,
  fragmentIndex,
  href,
  slide,
  ...props
}: MakeProps<LinkProps, 'a'>) {
  const { reveal } = useReveal();
  const onClickOrHref = getLink(reveal, href, slide);
  const onClick =
    typeof onClickOrHref === 'function' ? onClickOrHref : undefined;
  const link = typeof onClickOrHref === 'string' ? onClickOrHref : undefined;
  return (
    <a
      {...getClassNameProps(props)}
      data-id={autoAnimateId}
      href={link}
      onClick={onClick}
      data-fragment-index={fragmentIndex}
    >
      {children}
    </a>
  );
}

export default Link;
