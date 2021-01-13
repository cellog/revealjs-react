import './App.css';
import {
  RevealJS,
  Slide,
  PrismHighlightPlugin,
  NotesPlugin,
  Code,
} from '@gregcello/revealjs-react';
import { Example } from '@gregcello/revealjs-react/example.macro';
import 'reveal.js/dist/theme/moon.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-highlight/prism-line-highlight';
import 'prismjs/plugins/line-highlight/prism-line-highlight.css';

const plugins = [PrismHighlightPlugin, NotesPlugin];

const Main = () => (
  <Slide>
    <Example>
      <Code language="typescript" lineNumbers="3-5">
        {{
          code: `
const f: number = 2
const f: number = 2
const f: number = 2
const f: number = 2
const f: number = 2
const f: number = 2
const f: number = 2
const f: number = 2
const f: number = 2
const f: number = 2
const f: number = 2
const f: number = 2
const f: number = 2
const f: number = 2
const f: number = 2
const f: number = 2
const f: number = 2
const f: number = 2
const f: number = 2
const f: number = 2
const f: number = 2
const f: number = 2
const f: number = 2
const f: number = 2
const f: number = 2
const f: number = 2
const f: number = 2
const f: number = 2
`,
        }}
      </Code>
    </Example>
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
