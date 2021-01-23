import './App.css';
import {
  RevealJS,
  Slide,
  PrismHighlightPlugin,
  NotesPlugin,
  Code,
  Fragment,
  Note,
  enablePrismLineNumbers,
} from '@gregcello/revealjs-react';
import { Example } from '@gregcello/revealjs-react/example.macro';
import 'reveal.js/dist/theme/moon.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-highlight/prism-line-highlight';
import 'prismjs/plugins/line-highlight/prism-line-highlight.css';
enablePrismLineNumbers();

const plugins = [PrismHighlightPlugin, NotesPlugin];

const Main = () => (
  <Slide>
    <Code language="tsx">{{ code: `<span class="hi"></span>` }}</Code>
    <Note>test 1</Note>
    <Fragment transition="highlight-blue">
      <Code language="tsx">{{ code: `<span class="hi"></span>` }}</Code>
      <Note>test 2</Note>
    </Fragment>
  </Slide>
);

function App() {
  return (
    <div className="App">
      <RevealJS plugins={plugins} history>
        <Slide>
          <Example>
            <Code language="typescript">
              {{
                code: `const f: number = 2`,
              }}
            </Code>
          </Example>
        </Slide>
        <Main />
        <Main />
        <Main />
        <Main />
        <Main />
        <Main />
      </RevealJS>
    </div>
  );
}

export default App;
