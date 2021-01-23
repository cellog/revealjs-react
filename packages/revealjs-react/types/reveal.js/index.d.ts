type RevealNavigate = () => void;
export interface RevealRoutes {
  left: boolean;
  right: boolean;
  top: boolean;
  bottom: boolean;
}
export interface RevealSlideCoordinates {
  h: number;
  v: number;
  f: number;
}
export interface RevealSlideSize {
  presentationWidth: number;
  presentationHeight: number;
}

export type FragmentTransitions =
  | 'fade-in'
  | 'fade-out'
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'fade-in-then-out'
  | 'fade-in-then-semi-out'
  | 'grow'
  | 'shrink'
  | 'strike'
  | 'highlight-red'
  | 'highlight-green'
  | 'highlight-blue'
  | 'highlight-current-red'
  | 'highlight-current-green'
  | 'highlight-current-blue';

export type TransitionAtoms =
  | 'none'
  | 'fade'
  | 'slide'
  | 'convex'
  | 'concave'
  | 'zoom';
export type TransitionSpeed = 'default' | 'fast' | 'slow';
export type BackgroundRepeat =
  | 'repeat'
  | 'repeat-x'
  | 'repeat-y'
  | 'no-repeat'
  | 'initial'
  | 'inherit';

export interface RevealDeckState {
  indexh: number;
  indexv: number;
  indexf?: number;
  overview: boolean;
  paused: boolean;
}

export interface RevealEvents {
  ready: { currentSlide: HTMLElement; indexh: number; indexv: number };
  slidechanged: {
    previousSlide: HTMLElement;
    currentSlide: HTMLElement;
    indexh: number;
    indexv: number;
  };
  slidetransitionend: {
    previousSlide: HTMLElement;
    currentSlide: HTMLElement;
    indexh: number;
    indexv: number;
  };
  resize: { scale: number; oldScale: number; size: number };
  overviewshown: never;
  overviewhidden: never;
  fragmentshown: { fragment: HTMLElement };
  fragmenthidden: { fragment: HTMLElement };
  autoslideresumed: never;
  autoslidepaused: never;
}

export type RevealEventsPrune<T extends keyof RevealEvents> = [
  RevealEvents[T],
] extends [never]
  ? T
  : never;
export type RevealEventsOther<T extends keyof RevealEvents> = [
  RevealEvents[T],
] extends [never]
  ? never
  : T;

export type RevealEventsNoData = {
  [P in keyof RevealEvents]: RevealEventsPrune<P>;
}[keyof RevealEvents];
export type RevealEventsWithData = {
  [P in keyof RevealEvents]: RevealEventsOther<P>;
}[keyof RevealEvents];

export interface RevealEventHandler {
  (event: RevealEventsNoData, handler: (event: {}) => void): void;
  <T extends RevealEventsWithData>(
    event: T,
    handler: (event: RevealEvents[T]) => void,
  ): void;
}

export default class Reveal<Plugins extends MightBeRevealPlugin[]> {
  constructor(rootEl: HTMLDivElement, config: RevealConfig<Plugins>);
  constructor(config: RevealConfig<Plugins>);
  slide: (indexh: number, indexv?: number, indexf?: number) => void;
  left: RevealNavigate;
  right: RevealNavigate;
  up: RevealNavigate;
  down: RevealNavigate;
  prev: RevealNavigate;
  next: RevealNavigate;
  prevFragment: RevealNavigate;
  nextFragment: RevealNavigate;
  availableRoutes: () => RevealRoutes;
  sync: () => void;
  layout: () => void;
  shuffle: () => void;
  getConfig: () => RevealConfig<Plugins>;
  getScale: () => number;
  getState: () => RevealDeckState;
  getComputedSlideSize: () => RevealSlideSize;
  getIndices: (slide?: HTMLElement) => RevealSlideCoordinates;
  getProgress: () => number;
  getSlideNotes: (slide?: HTMLElement) => string | null;
  getPreviousSlide: () => HTMLElement;
  getCurrentSlide: () => HTMLElement;
  getHorizontalSlides: () => HTMLElement[];
  getVerticalSlides: () => HTMLElement[];
  getTotalSlides: () => number;
  getSlidePastCount: () => number;
  getSlides: () => HTMLElement[];
  hasHorizontalSlides: () => boolean;
  hasVerticalSlides: () => boolean;
  hasNavigatedHorizontally: () => boolean;
  hasNavigatedVertically: () => boolean;
  isFirstSlide: () => boolean;
  isLastSlide: () => boolean;
  isVerticalSlide: () => boolean;
  toggleHelp: () => void;
  toggleOverview: () => void;
  toggleAutoSlide: () => void;
  togglePause: () => void;
  isOverview: () => void;
  isAutoSliding: () => void;
  isPaused: () => void;
  getRevealElement: () => HTMLElement;
  getSlidesElement: () => HTMLElement;
  getViewportElement: () => HTMLElement;
  initialize: (options?: Partial<RevealConfig<Plugins>>) => Promise<void>;
  hasPlugin: (plugin: string) => boolean;
  getPlugin: (plugin: string) => RevealPlugin | null;
  getPlugins: () => RevealPluginList;
  on: RevealEventHandler;
}

export interface RevealPluginDefinition<PluginExtraConfig = undefined> {
  id: string;
  init: <R extends Reveal<RevealPlugin[]>>(reveal: R) => void | Promise<void>;
  // dummy variable to enable inference
  ____$$pluginExtension?: PluginExtraConfig;
}

export type RevealPlugins<
  Plugins extends MightBeRevealPlugin[]
> = Plugins extends RevealPluginDefinition<infer PluginConfig>[]
  ? RevealPlugin<PluginConfig>[]
  : never;
export type MightBeRevealPlugin = () => unknown;

export type RevealPlugin<
  PluginExtraConfig = undefined
> = () => RevealPluginDefinition<PluginExtraConfig>;

export interface RevealPluginList {
  [pluginName: string]: RevealPlugin;
}

export interface RevealConfigBase<Plugins extends MightBeRevealPlugin[]> {
  plugins?: RevealPlugins<Plugins>;

  controls?: boolean;
  controlsTutorial?: boolean;
  controlsLayout?: 'bottom-right' | 'edge';
  controlsBackArrows?: 'faded' | 'hidden' | 'visible';
  progress?: boolean;
  slideNumber?:
    | boolean
    | 'h.v'
    | 'h/v'
    | 'c'
    | 'c/t'
    | ((slide: { h: number; v: number; f: number }) => string | string[]);
  showSlideNumber?: 'all' | 'print' | 'speaker';
  hashOneBasedIndex?: boolean;
  hash?: boolean;
  respondToHashChanges?: boolean;
  history?: boolean;
  keyboard?: boolean;
  keyboardCondition?: null | 'focused';
  disableLayout?: boolean;
  overview?: boolean;
  center?: boolean;
  touch?: boolean;
  loop?: boolean;
  rtl?: boolean;
  navigationMode?: 'default' | 'linear' | 'grid';
  shuffle?: boolean;
  fragments?: boolean;
  fragmentInURL?: boolean;
  embedded?: boolean;
  help?: boolean;
  pause?: boolean;
  showNotes?: boolean;
  autoPlayMedia?: boolean | null;
  preloadIframes?: boolean | null;
  autoAnimate?: boolean;
  autoAnimateMatcher?:
    | null
    | ((
        fromSlide: HTMLElement,
        toSlide: HTMLElement,
      ) => [HTMLElement, HTMLElement][]);
  autoAnimateEasing?: string;
  autoAnimateDuration?: number;
  autoAnimateUnmatched?: boolean;
  autoAnimateStyles?: string[];
  autoSlide?: number;
  autoSlideStoppable?: boolean;
  autoSlideMethod?: (() => void) | null;
  defaultTiming?: number | null;
  mouseWheel?: boolean;
  previewLinks?: boolean;
  postMessage?: boolean;
  postMessageEvents?: boolean;
  focusBodyOnPageVisibilityChange?: boolean;
  transition?: TransitionAtoms;
  transitionSpeed?: TransitionSpeed;
  backgroundTransition?: TransitionAtoms;
  pdfMaxPagesPerSlide?: number;
  pdfSeparateFragments?: boolean;
  pdfPageHeightOffset?: number;
  viewDistance?: number;
  mobileViewDistance?: number;
  display?: string;
  hideInactiveCursor?: boolean;
  hideCursorTime?: number;
  parallaxBackgroundImage?: string;
  parallaxBackgroundSize?: string;
  parallaxBackgroundHorizontal?: number;
  parallaxBackgroundRepeat?: BackgroundRepeat | '';
  parallaxBackgroundPosition?: string;
  parallaxBackgroundVertical?: number;
  width?: number;
  height?: number;
  margin?: number;
  minScale?: number;
  maxScale?: number;
}

export type NoUndefined<T> = T extends undefined ? never : T;

export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;
export type ExtractPluginExtraConfig<
  P extends MightBeRevealPlugin[]
> = P extends RevealPlugin<infer ExtraConfig>[]
  ? UnionToIntersection<NoUndefined<ExtraConfig>>
  : never;

export type RevealConfig<
  Plugins extends MightBeRevealPlugin[]
> = RevealConfigBase<Plugins> & ExtractPluginExtraConfig<Plugins>;
