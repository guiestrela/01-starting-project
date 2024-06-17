import { useState} from 'react';

import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConsept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';

function App() {
  const [selectTopic, setSelectedTopic] = useState('components');

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'JSX', 'Props', 'state'
    setSelectedTopic(selectedButton);
  }
  return (
    <div> 
        <Header />
      <main>
        <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key ={conceptItem.title} {...conceptItem}/>)}          
        </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {!selectTopic ? <p>Please select a topic</p>: null}
          {selectTopic ? (<div id='tab-contend'>            
            <h3>{EXAMPLES[selectTopic].title}</h3>
            <p>{EXAMPLES[selectTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectTopic].code}
              </code>
            </pre>
          </div>) : null}
        </section>        
      </main>
    </div>
  );
}

export default App;
