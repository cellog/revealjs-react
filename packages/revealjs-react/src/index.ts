/*!
 * revealjs-react 1.0.0
 * MIT licensed
 *
 * Copyright (C) 2020 Blake Nedved, https://blakeanedved.github.io/
 */
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  BlockQuote,
  Div,
  FigCaption,
  Figure,
  Footer,
  Header,
  Li,
  Main,
  Ol,
  P,
  Span,
  Ul,
} from './components/SimpleComponents';
import type {
  HProps,
  BlockQuoteProps,
  DivProps,
  FigCaptionProps,
  FigureProps,
  FooterProps,
  HeaderProps,
  LiProps,
  MainProps,
  OlProps,
  PProps,
  SpanProps,
  UlProps,
} from './components/SimpleComponents';
import Example from './components/Example';
import type { ExampleProps } from './components/Example';
import Audio from './components/Audio';
import type { AudioProps } from './components/Audio';
import Fragment from './components/Fragment';
import type { FragmentProps } from './components/Fragment';
import Code from './components/Code';
import type { CodeProps } from './components/Code';
import IFrame from './components/Iframe';
import type { IFrameProps } from './components/Iframe';
import Image from './components/Image';
import type { ImageProps } from './components/Image';
import Link from './components/Link';
import type { LinkProps } from './components/Link';
import Note from './components/Note';
import type { NoteProps } from './components/Note';
import RevealJS from './components/RevealJS';
import type { RevealJSProps } from './components/RevealJS';
import Slide from './components/Slide';
import type { SlideProps } from './components/Slide';
import Video from './components/Video';
import type { VideoProps } from './components/Video';
import { RevealContext } from './components/RevealProvider';

// hooks
import useReveal from './hooks/useReveal';

// plugins
import UntypedHighlightPlugin, {
  HighlightOptions,
} from './plugins/HighlightPlugin';
import UntypedMathPlugin from './plugins/MathPlugin';
import UntypedMarkdownPlugin from './plugins/MarkdownPlugin';
import UntypedNotesPlugin from './plugins/NotesPlugin';
import UntypedSearchPlugin from './plugins/SearchPlugin';
import UntypedZoomPlugin from './plugins/ZoomPlugin';

const HighlightPlugin: RevealPlugin<HighlightOptions> = UntypedHighlightPlugin;
const MathPlugin: RevealPlugin = UntypedMathPlugin;
const MarkdownPlugin: RevealPlugin = UntypedMarkdownPlugin;
const NotesPlugin: RevealPlugin = UntypedNotesPlugin;
const SearchPlugin: RevealPlugin = UntypedSearchPlugin;
const ZoomPlugin: RevealPlugin = UntypedZoomPlugin;
import PrismHighlightPlugin, {
  addCustomPrismLanguage,
  enablePrismLineNumbers,
} from './plugins/PrismHighlightPlugin';
import type {
  CustomPrismHighlightPlugin,
  PrismOptions,
  PrismLanguages,
  PrismPlugins,
  PrismThemes,
} from './plugins/PrismHighlightPlugin';

// types for reveal.js
import type {
  RevealPlugin,
  RevealPluginDefinition,
  RevealPluginList,
  RevealConfig,
  RevealNavigate,
  RevealRoutes,
  RevealSlideCoordinates,
  RevealSlideSize,
  ExtractPluginExtraConfig,
  RevealPlugins,
  FragmentTransitions,
} from '../types/reveal.js';
import type Reveal from '../types/reveal.js';

export {
  enablePrismLineNumbers,
  useReveal,
  RevealContext,
  Audio,
  BlockQuote,
  Code,
  Div,
  Example,
  FigCaption,
  Figure,
  Footer,
  Fragment,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Header,
  IFrame,
  Image,
  Li,
  Link,
  Main,
  Note,
  Ol,
  P,
  RevealJS,
  Slide,
  Span,
  Ul,
  Video,
  addCustomPrismLanguage,
  PrismHighlightPlugin,
  HighlightPlugin,
  MathPlugin,
  MarkdownPlugin,
  SearchPlugin,
  ZoomPlugin,
  NotesPlugin,
};

export type {
  PrismLanguages,
  PrismPlugins,
  PrismThemes,
  CustomPrismHighlightPlugin,
  RevealPlugin,
  RevealPluginDefinition,
  RevealPlugins,
  RevealPluginList,
  Reveal,
  RevealConfig,
  RevealNavigate,
  RevealRoutes,
  RevealSlideCoordinates,
  RevealSlideSize,
  FragmentTransitions,
  HighlightOptions,
  PrismOptions,
  ExtractPluginExtraConfig,
  AudioProps,
  BlockQuoteProps,
  CodeProps,
  DivProps,
  ExampleProps,
  FigCaptionProps,
  FigureProps,
  FooterProps,
  FragmentProps,
  HProps,
  HeaderProps,
  IFrameProps,
  ImageProps,
  LiProps,
  LinkProps,
  MainProps,
  NoteProps,
  OlProps,
  PProps,
  RevealJSProps,
  SlideProps,
  SpanProps,
  UlProps,
  VideoProps,
};
