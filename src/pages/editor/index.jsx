/** @format */

// /** @format */

// import React, { useState } from 'react';
// import CodeMirror from '@uiw/react-codemirror';
// import { json } from '@codemirror/lang-json';
// import { EditorView } from '@codemirror/view';
// import { javascript } from '@codemirror/lang-javascript';
// import { linter, lintGutter } from '@codemirror/lint';
// const jsonParseLinter = (str) => {
//   try {
//     JSON.parse(str);
//   } catch (e) {
//     if (!(e instanceof SyntaxError)) throw e;
//     console.log('e', e.message);
//     console.dir(e);
//     const pos = getErrorPosition(e, str);
//     return [
//       {
//         from: pos,
//         message: e.message,
//         severity: 'error',
//         to: pos
//       }
//     ];
//   }
//   return [];
// };
// function getErrorPosition(error, doc) {
//   let m;
//   // eslint-disable-next-line no-cond-assign
//   if ((m = error.message.match(/at position (\d+)/))) {
//     return Math.min(+m[1], doc.length);
//   }
//   // eslint-disable-next-line no-cond-assign
//   if ((m = error.message.match(/at line (\d+) column (\d+)/))) {
//     return Math.min(doc.line(+m[1]).from + +m[2] - 1, doc.length);
//   }
//   return 0;
// }
// function App() {
//   const onChange = React.useCallback((value, viewUpdate) => {
//     // console.log('value:', value, typeof value);
//     const res = jsonParseLinter(value);
//     if (res.length) {
//       setErrorResponse({
//         jsonError: res
//       });
//     } else {
//       setErrorResponse({
//         jsonError: []
//       });
//     }
//   }, []);
//   const [view, setView] = useState();
//   const [errorResponse, setErrorResponse] = useState({
//     jsonError: []
//   });

//   // console.log('editor', editor.current);

//   const handleCreate = (view, state) => {
//     console.log('create', view, state);
//     setView(view);
//   };

//   function errorMarker(view) {
//     const diagnostics = [];

//     /** this should be replaced by the above one */
//     errorResponse.jsonError.map((error) => diagnostics.push(error));

//     return diagnostics;
//   }

//   return (
//     <CodeMirror
//       value={JSON.stringify(
//         {
//           type: 'page',
//           title: '标题',
//           body: '内容部分'
//         },
//         null,
//         2
//       )}
//       height="90vh"
//       extensions={[json(), linter(errorMarker), lintGutter()]}
//       onChange={onChange}
//       theme="dark"
//       // onCreateEditor={handleCreate}
//     />
//   );
// }
// export default App;

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

// import Editor from '@monaco-editor/react';
import loader from '@monaco-editor/loader';
// import Editor, { loader } from '@monaco-editor/react';

function App() {
  useEffect(() => {
    loader.config({
      paths: { vs: './editor-min' },
      'vs/nls': {
        availableLanguages: {
          '*': 'de'
        }
      }
    });
    loader.init().then((monaco) => {
      monaco.editor.create(document.getElementById('container'), {
        value: JSON.stringify({ name: 'tom' }),
        language: 'json'
      });
    });
  }, []);

  return (
    // <Editor height="90vh" defaultLanguage="json" defaultValue="{name: tom}" />
    <div id="container" style={{ height: '90vh' }} />
  );
}

export default App;
