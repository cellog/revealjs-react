import './App.css';
import {
  RevealJS,
  Slide,
  PrismHighlightPlugin,
  NotesPlugin,
  Code,
} from '@gregcello/revealjs-react';
import Prism from 'prismjs';
import { Example } from '@gregcello/revealjs-react/example.macro';
import 'reveal.js/dist/theme/moon.css';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-highlight/prism-line-highlight';
import 'prismjs/plugins/line-highlight/prism-line-highlight.css';

const plugins = [PrismHighlightPlugin, NotesPlugin];

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
      </RevealJS>
    </div>
  );
}

export default App;
