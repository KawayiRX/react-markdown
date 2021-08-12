import { PrismTheme } from 'prism-react-renderer'

export default {}
// <?xml version="1.0" encoding="UTF-8"?>
// <style-scheme version="1.0" name="One Dark">
//   <style name="Text" foreground="#abb2bf" background="#282c34"/>
//   <style name="Link" underlineStyle="SingleUnderline"/>
//   <style name="Selection" background="#3e4451"/>
//   <style name="LineNumber" foreground="#4b5363"/>
//   <style name="SearchResult" background="#324365"/>
//   <style name="SearchScope" background="#3e4451"/>
//   <style name="Parentheses" underlineColor="#61afef" underlineStyle="SingleUnderline"/>
//   <style name="ParenthesesMismatch" foreground="#000000" background="#c678dd"/>
//   <style name="AutoComplete" background="#3e4451"/>
//   <style name="CurrentLine" background="#3a3f4b"/>
//   <style name="CurrentLineNumber" foreground="#777c87"/>
//   <style name="Occurrences" background="#324365"/>
//   <style name="Occurrences.Unused" underlineColor="#d19a66" underlineStyle="DashUnderline"/>
//   <style name="Occurrences.Rename" background="#e06c75"/>
//   <style name="Number" foreground="#d19a66"/>
//   <style name="String" foreground="#98c379"/>
//   <style name="Type" foreground="#61afef"/>
//   <style name="Local"/>
//   <style name="Global"/>
//   <style name="Field" foreground="#e06c75"/>
//   <style name="Static" foreground="#61afef" italic="true"/>
//   <style name="VirtualMethod" foreground="#61afef" italic="true"/>
//   <style name="Function" foreground="#61afef"/>
//   <style name="Keyword" foreground="#c678dd"/>
//   <style name="PrimitiveType" foreground="#c678dd"/>
//   <style name="Operator" foreground="#c678dd"/>
//   <style name="Overloaded Operator" foreground="#c678dd"/>
//   <style name="Punctuation"/>
//   <style name="Preprocessor" foreground="#c678dd"/>
//   <style name="Label" foreground="#e06c75" bold="true"/>
//   <style name="Comment" foreground="#5c6370" italic="true"/>
//   <style name="Doxygen.Comment" foreground="#5c6370" italic="true"/>
//   <style name="Doxygen.Tag" foreground="#61afef"/>
//   <style name="VisualWhitespace" foreground="#3c4049"/>
//   <style name="QmlLocalId" foreground="#61afef"/>
//   <style name="QmlExternalId"/>
//   <style name="QmlTypeId" foreground="#61afef"/>
//   <style name="QmlRootObjectProperty" foreground="#61afef"/>
//   <style name="QmlScopeObjectProperty" foreground="#61afef"/>
//   <style name="QmlExternalObjectProperty"/>
//   <style name="JsScopeVar"/>
//   <style name="JsImportVar" foreground="#d19a66"/>
//   <style name="JsGlobalVar" foreground="#d19a66"/>
//   <style name="QmlStateName" foreground="#61afef"/>
//   <style name="Binding" foreground="#c678dd"/>
//   <style name="DisabledCode" foreground="#5c6370"/>
//   <style name="AddedLine" foreground="#98c379"/>
//   <style name="RemovedLine" foreground="#e06c75"/>
//   <style name="DiffFile" foreground="#61afef"/>
//   <style name="DiffLocation" foreground="#d19a66"/>
//   <style name="DiffFileLine" foreground="#000000" background="#e5c07b"/>
//   <style name="DiffContextLine" foreground="#000000" background="#56b6c2"/>
//   <style name="DiffSourceLine" foreground="#000000" background="#be5046"/>
//   <style name="DiffSourceChar" foreground="#000000" background="#e06c75"/>
//   <style name="DiffDestLine" foreground="#000000" background="#789353"/>
//   <style name="DiffDestChar" foreground="#000000" background="#98c379"/>
//   <style name="LogChangeLine" foreground="#e06c75"/>
//   <style name="LogAuthorName" foreground="#61afef"/>
//   <style name="LogCommitDate" foreground="#98c379"/>
//   <style name="LogCommitHash" foreground="#e06c75"/>
//   <style name="LogCommitSubject"/>
//   <style name="LogDecoration" foreground="#c678dd"/>
//   <style name="Warning" underlineColor="#d19a66" underlineStyle="SingleUnderline"/>
//   <style name="WarningContext" underlineColor="#d19a66" underlineStyle="DotLine"/>
//   <style name="Error" underlineColor="#e06c75" underlineStyle="SingleUnderline"/>
//   <style name="ErrorContext" underlineColor="#e06c75" underlineStyle="DotLine"/>
//   <style name="Declaration"/>
//   <style name="FunctionDefinition"/>
//   <style name="OutputArgument" italic="true"/>
//   <style name="LastStyleSentinel"/>
// </style-scheme>

// var theme = {
//   plain: {
//     color: "#bfc7d5",
//     backgroundColor: "#292d3e"
//   },
//   styles: [{
//     types: ["comment"],
//     style: {
//       color: "rgb(105, 112, 152)",
//       fontStyle: "italic"
//     }
//   }, {
//     types: ["string", "inserted"],
//     style: {
//       color: "rgb(195, 232, 141)"
//     }
//   }, {
//     types: ["number"],
//     style: {
//       color: "rgb(247, 140, 108)"
//     }
//   }, {
//     types: ["builtin", "char", "constant", "function"],
//     style: {
//       color: "rgb(130, 170, 255)"
//     }
//   }, {
//     types: ["punctuation", "selector"],
//     style: {
//       color: "rgb(199, 146, 234)"
//     }
//   }, {
//     types: ["variable"],
//     style: {
//       color: "rgb(191, 199, 213)"
//     }
//   }, {
//     types: ["class-name", "attr-name"],
//     style: {
//       color: "rgb(255, 203, 107)"
//     }
//   }, {
//     types: ["tag", "deleted"],
//     style: {
//       color: "rgb(255, 85, 114)"
//     }
//   }, {
//     types: ["operator"],
//     style: {
//       color: "rgb(137, 221, 255)"
//     }
//   }, {
//     types: ["boolean"],
//     style: {
//       color: "rgb(255, 88, 116)"
//     }
//   }, {
//     types: ["keyword"],
//     style: {
//       fontStyle: "italic"
//     }
//   }, {
//     types: ["doctype"],
//     style: {
//       color: "rgb(199, 146, 234)",
//       fontStyle: "italic"
//     }
//   }, {
//     types: ["namespace"],
//     style: {
//       color: "rgb(178, 204, 214)"
//     }
//   }, {
//     types: ["url"],
//     style: {
//       color: "rgb(221, 221, 221)"
//     }
//   }]
// };

export const reactLiveHome: PrismTheme = {
  plain: {
    color: '#e5c07b',
    backgroundColor: '#282c34'
  },
  styles: [
    {
      types: ['prolog', 'comment', 'doctype', 'cdata'],
      style: {
        color: '#5c6370'
      }
    },
    {
      types: ['property', 'constant', 'symbol'],
      style: { color: '#61afef' }
    },
    {
      types: ['inserted'],
      style: {
        color: 'rgb(178, 204, 214)'
      }
    },
    {
      types: ['tag'],
      style: { color: '#e06c75' }
    },
    {
      types: ['function'],
      style: { color: '#61afef' }
    },
    {
      types: ['text'],
      style: { color: '#abb2bf' }
    },
    {
      types: ['punctuation'],
      style: { color: 'rgb(221, 221, 221)' }
    },

    {
      types: ['attr-name'],
      style: { color: '#d19a66' }
    },
    {
      types: ['class-name'],
      style: { color: 'rgb(255, 203, 107)' }
    },
    {
      types: ['operator'],
      style: { color: '#c678dd' }
    },
    {
      types: ['number', 'boolean'],
      style: { color: '#d19a66' }
    },
    {
      types: ['string', 'char', 'builtin', 'insterted'],
      style: {
        color: '#98c379'
      }
    },
    {
      types: ['entity', 'url', 'string', 'variable', 'language-css', 'attr-value'],
      style: {
        color: '#98c379'
      }
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgb(255, 85, 85)'
      }
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic'
      }
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold'
      }
    },
    {
      types: ['regex', 'important'],
      style: {
        color: '#98c379'
      }
    },
    {
      types: ['atrule', 'keyword'],
      style: {
        color: '#c678dd'
      }
    },
    {
      types: ['punctuation', 'symbol'],
      style: {
        opacity: 0.7
      }
    }
  ]
}
