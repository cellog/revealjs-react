import Prism from 'prismjs';
import { RevealPluginDefinition } from '../../types/reveal.js';
import {
  PrismLanguages,
  PrismPlugins,
  PrismThemes,
} from './PrismHighlightPlugin/types';
import './PrismHighlightPlugin/PrismHighlight.css';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-typescript';

window.Prism = Prism;

export interface PrismOptions<
  CustomLanguages extends string = PrismLanguages,
  CustomPlugins extends string = PrismPlugins,
  CustomThemes extends string = PrismThemes
> {
  prism?: {
    languages?: CustomLanguages[];
    plugins?: CustomPlugins[];
    theme?: CustomThemes;
  };
}
export type { PrismLanguages, PrismPlugins, PrismThemes };

export type CustomPrismHighlightPlugin<
  CustomLanguages extends string = PrismLanguages,
  CustomPlugins extends string = PrismPlugins,
  CustomThemes extends string = PrismThemes
> = () => RevealPluginDefinition<
  PrismOptions<CustomLanguages, CustomPlugins, CustomThemes>
>;

export interface ActualPrism {
  languages: Prism.Languages;
}

export function addCustomPrismLanguage(
  languageDef: (prism: ActualPrism) => void,
) {
  languageDef(Prism);
}

interface PrismPlugin extends RevealPluginDefinition<PrismOptions> {
  highlightedSlides: WeakMap<HTMLElement, true>;
}

/**
 * Given the current slide, get all of the <Code> sections, and
 * for each, scroll to the top-most highlighted line smoothly
 */
function scrollToTopmostHighlightedLine(currentSlide: Element) {
  const codeSections = currentSlide.querySelectorAll(
    'pre[class*="language-"], pre[class*="lang-"]',
  );
  for (const code of codeSections) {
    const highlight = code.querySelector<HTMLElement>('.line-highlight');
    if (!highlight || !highlight.parentElement) {
      return;
    }
    highlight.parentElement.scrollTo({
      top:
        highlight.offsetTop -
        (highlight?.parentElement?.parentElement?.scrollTop || 0) -
        30,
      behavior: 'smooth',
    });
  }
}

/*!
 * reveal.js plugin that adds syntax highlight support using Prism.js.
 */

const PrismHighlightPlugin: PrismPlugin = {
  id: 'prism-highlight',

  highlightedSlides: new WeakMap(),

  /**
   * Highlights code blocks withing the given deck.
   *
   * Note that this can be called multiple times if
   * there are multiple presentations on one page.
   */
  init(reveal) {
    reveal.on('ready', () => {
      const currentSlide = reveal.getCurrentSlide();
      PrismHighlightPlugin.highlightedSlides.set(currentSlide, true);
      Prism.highlightAllUnder(currentSlide);
      // scroll to top-most highlighted line
      scrollToTopmostHighlightedLine(currentSlide);
    });
    reveal.on('slidechanged', ({ currentSlide }) => {
      // highlight the slides just-in-time
      if (PrismHighlightPlugin.highlightedSlides.has(currentSlide)) {
        // don't highlight slides multiple times
        return;
      }
      PrismHighlightPlugin.highlightedSlides.set(currentSlide, true);
      Prism.highlightAllUnder(currentSlide);
    });
    reveal.on('slidetransitionend', () => {
      const currentSlide = reveal.getCurrentSlide();
      // scroll to top-most highlighted line
      scrollToTopmostHighlightedLine(currentSlide);
    });
  },
};

export default () => PrismHighlightPlugin;
