"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[476],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>N});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var r=a.createContext({}),m=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(r.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,r=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=m(n),k=l,N=s["".concat(r,".").concat(k)]||s[k]||d[k]||o;return n?a.createElement(N,i(i({ref:t},u),{},{components:n})):a.createElement(N,i({ref:t},u))}));function N(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=k;var p={};for(var r in t)hasOwnProperty.call(t,r)&&(p[r]=t[r]);p.originalType=e,p[s]="string"==typeof e?e:l,i[1]=p;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=n(7462),l=(n(7294),n(3905));const o={title:"Option<Value>",sidebar_label:"Option"},i=void 0,p={unversionedId:"option",id:"option",title:"Option<Value>",description:"The Option type can be used as a replacement for null and undefined when manipulating optional data. Contrary to null and undefined, an option is kind of like a box, that contains a value or not.",source:"@site/docs/option.md",sourceDirName:".",slug:"/option",permalink:"/boxed/option",draft:!1,editUrl:"https://github.com/swan-io/boxed/edit/main/docs/docs/option.md",tags:[],version:"current",frontMatter:{title:"Option<Value>",sidebar_label:"Option"},sidebar:"docs",previous:{title:"Trivia",permalink:"/boxed/trivia"},next:{title:"Result",permalink:"/boxed/result"}},r={},m=[{value:"Create an Option value",id:"create-an-option-value",level:2},{value:"Methods",id:"methods",level:2},{value:".map(f)",id:"mapf",level:3},{value:".flatMap(f)",id:"flatmapf",level:3},{value:".getWithDefault(defaultValue)",id:"getwithdefaultdefaultvalue",level:3},{value:".get()",id:"get",level:3},{value:".isSome()",id:"issome",level:3},{value:".isNone()",id:"isnone",level:3},{value:".toNull()",id:"tonull",level:3},{value:".toUndefined()",id:"toundefined",level:3},{value:".toResult(errorWhenNone)",id:"toresulterrorwhennone",level:3},{value:".match()",id:"match",level:3},{value:".tap(func)",id:"tapfunc",level:3},{value:"Statics",id:"statics",level:2},{value:"Option.all(options)",id:"optionalloptions",level:3},{value:"Option.allFromDict(options)",id:"optionallfromdictoptions",level:3},{value:"TS Pattern interop",id:"ts-pattern-interop",level:2},{value:"Cheatsheet",id:"cheatsheet",level:2}],u={toc:m},s="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Option")," type can be used as a replacement for ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," when manipulating optional data. Contrary to ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),", an option is kind of like a box, that contains a value or not."),(0,l.kt)("p",null,"It can be useful to distinguish values between each other: you can represent ",(0,l.kt)("inlineCode",{parentName:"p"},"Some(None)")," with options, whereas ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," replace the value they intend to make optional."),(0,l.kt)("p",null,"An option can have two possible states:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Some(value)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"None"))),(0,l.kt)("h2",{id:"create-an-option-value"},"Create an Option value"),(0,l.kt)("p",null,"To create an option, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"Some")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"None")," constructors:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { Option } from "@swan-io/boxed";\n\nconst aName = Option.Some("John");\nconst bName = Option.None();\n\n// You can enforce the type using a type parameter\nOption.Some<string>("John");\nOption.None<string>();\n')),(0,l.kt)("p",null,"You get interop with ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// `value` being `null` or `undefined` makes a `None`\nconst a = Option.fromNullable(value);\n\n// `value` being `null` makes a `None`\nconst b = Option.fromNull(value);\n\n// `value` being `undefined` makes a `None`\nconst c = Option.fromUndefined(value);\n")),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("p",null,"The option type provides a few manipulation functions:"),(0,l.kt)("h3",{id:"mapf"},".map(f)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Option<A>.map<B>(f: (value: A) => B): Option<B>\n")),(0,l.kt)("p",null,"If the option is ",(0,l.kt)("inlineCode",{parentName:"p"},"Some(value)")," returns ",(0,l.kt)("inlineCode",{parentName:"p"},"Some(f(value))"),", otherwise returns ",(0,l.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Examples"',title:'"Examples"'},"Option.Some(2).map((x) => x * 2);\n// Option.Some<4>\n\nOption.None().map((x) => x * 2);\n// Option.None\n")),(0,l.kt)("h3",{id:"flatmapf"},".flatMap(f)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Option<A>.flatMap<B>(f: (value: A) => Option<B>): Option<B>\n")),(0,l.kt)("p",null,"If the option is ",(0,l.kt)("inlineCode",{parentName:"p"},"Some(value)")," returns ",(0,l.kt)("inlineCode",{parentName:"p"},"f(value)"),", otherwise returns ",(0,l.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Examples"',title:'"Examples"'},"Option.Some(3).flatMap((x) => (x > 2 ? Option.None() : Option.Some(2)));\n// Option.None\n\nOption.Some(1).flatMap((x) => (x > 2 ? Option.None() : Option.Some(2)));\n// Option.Some<2>\n\noption.flatMap((value) => value.optionalProperty);\n// Option<optionalProperty>\n")),(0,l.kt)("h3",{id:"getwithdefaultdefaultvalue"},".getWithDefault(defaultValue)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Option<A>.getWithDefault(defaultValue: A): A\n")),(0,l.kt)("p",null,"If the option is ",(0,l.kt)("inlineCode",{parentName:"p"},"Some(value)")," returns ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),", otherwise returns ",(0,l.kt)("inlineCode",{parentName:"p"},"defaultValue"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Examples"',title:'"Examples"'},"Option.Some(2).getWithDefault(1);\n// 2\n\nOption.None().getWithDefault(1);\n// 1\n")),(0,l.kt)("h3",{id:"get"},".get()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Option<A>.get(): A\n")),(0,l.kt)("p",null,"Returns the value contained in ",(0,l.kt)("inlineCode",{parentName:"p"},"Some(value)"),". Only usable within a ",(0,l.kt)("inlineCode",{parentName:"p"},"isSome()")," check."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Examples"',title:'"Examples"'},"const value = option.get();\n// does not compile\n\nif (option.isSome()) {\n  const value = option.get();\n  // value\n}\n")),(0,l.kt)("h3",{id:"issome"},".isSome()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Option<A>.isSome(): boolean\n")),(0,l.kt)("p",null,"Type guard. Checks if the option is ",(0,l.kt)("inlineCode",{parentName:"p"},"Some(value)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Examples"',title:'"Examples"'},"Option.Some(2).isSome();\n// true\n\nOption.None().isSome();\n// false\n\nif (option.isSome()) {\n  const value = option.get();\n}\n")),(0,l.kt)("h3",{id:"isnone"},".isNone()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Option<A>.isNone(): boolean\n")),(0,l.kt)("p",null,"Type guard. Checks if the option is ",(0,l.kt)("inlineCode",{parentName:"p"},"None")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Examples"',title:'"Examples"'},"Option.Some(2).isNone();\n// false\n\nOption.None().isNone();\n// true\n")),(0,l.kt)("h3",{id:"tonull"},".toNull()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Option<A>.toNull(): A | null\n")),(0,l.kt)("p",null,"Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," if the option is ",(0,l.kt)("inlineCode",{parentName:"p"},"None"),", returns the value otherwise"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Examples"',title:'"Examples"'},"Option.Some(2).toNull();\n// 2\n\nOption.None().toNull();\n// null\n")),(0,l.kt)("h3",{id:"toundefined"},".toUndefined()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Option<A>.toUndefined(): A | undefined\n")),(0,l.kt)("p",null,"Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," if the option is ",(0,l.kt)("inlineCode",{parentName:"p"},"None"),", returns the value otherwise"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Examples"',title:'"Examples"'},"Option.Some(2).toUndefined();\n// 2\n\nOption.None().toUndefined();\n// undefined\n")),(0,l.kt)("h3",{id:"toresulterrorwhennone"},".toResult(errorWhenNone)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Option<A>.toResult<E>(valueWhenNone: E): Result<A, E>\n")),(0,l.kt)("p",null,"Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok")," if the option is ",(0,l.kt)("inlineCode",{parentName:"p"},"Some"),", returns ",(0,l.kt)("inlineCode",{parentName:"p"},"Error")," otherwise"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Examples"',title:'"Examples"'},'const a = Option.Some(1).toResult("NotFound");\n// Ok<1>\n\nconst b = Option.None().toResult("NotFound");\n// Error<"NotFound">\n')),(0,l.kt)("h3",{id:"match"},".match()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Option<A>.match<B>(config: {\n  Some: (value: A) => B;\n  None: () => B;\n}): B\n")),(0,l.kt)("p",null,"Match the option state"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Examples"',title:'"Examples"'},'const valueToDisplay = option.match({\n  Some: (value) => value,\n  None: () => "No value",\n});\n// value | "No value"\n')),(0,l.kt)("h3",{id:"tapfunc"},".tap(func)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Option<A>.tap(func: (option: Option<A>) => unknown): Option<A>\n")),(0,l.kt)("p",null,"Executes ",(0,l.kt)("inlineCode",{parentName:"p"},"func")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"option"),", and returns ",(0,l.kt)("inlineCode",{parentName:"p"},"option"),". Useful for logging and debugging."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Examples"',title:'"Examples"'},"option.tap(console.log).map((x) => x * 2);\n")),(0,l.kt)("h2",{id:"statics"},"Statics"),(0,l.kt)("h3",{id:"optionalloptions"},"Option.all(options)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"all(options: Array<Option<A>>): Option<Array<A>>\n")),(0,l.kt)("p",null,'Turns an "array of options of value" into a "option of array of value".'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Examples"',title:'"Examples"'},"Option.all([Option.Some(1), Option.Some(2), Option.Some(3)]);\n// Some([1, 2, 3])\n\nOption.all([Option.None(), Option.Some(2), Option.Some(3)]);\n// None\n")),(0,l.kt)("h3",{id:"optionallfromdictoptions"},"Option.allFromDict(options)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"allFromDict(options: Dict<Option<A>>): Option<Dict<A>>\n")),(0,l.kt)("p",null,'Turns a "dict of options of value" into a "option of dict of value".'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Examples"',title:'"Examples"'},"Option.allFromDict({ a: Option.Some(1), b: Option.Some(2), c: Option.Some(3) });\n// Some({a: 1, b: 2, c: 3})\n\nOption.allFromDict({ a: Option.None(), b: Option.Some(2), c: Option.Some(3) });\n// None\n")),(0,l.kt)("h2",{id:"ts-pattern-interop"},"TS Pattern interop"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Examples"',title:'"Examples"'},'import { match, P } from "ts-pattern";\nimport { Option } from "@swan-io/boxed";\n\nmatch(myOption)\n  .with(Option.pattern.Some(P.select()), (value) => console.log(value))\n  .with(Option.pattern.None, () => "No value")\n  .exhaustive();\n')),(0,l.kt)("h2",{id:"cheatsheet"},"Cheatsheet"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Input"),(0,l.kt)("th",{parentName:"tr",align:null},"Function input"),(0,l.kt)("th",{parentName:"tr",align:null},"Function output"),(0,l.kt)("th",{parentName:"tr",align:null},"Returned value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#mapf"},(0,l.kt)("inlineCode",{parentName:"a"},"map"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Some(x)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Some(y)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#mapf"},(0,l.kt)("inlineCode",{parentName:"a"},"map"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"None()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"not provided")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"not executed")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"None()"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#flatmapf"},(0,l.kt)("inlineCode",{parentName:"a"},"flatMap"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Some(x)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Some(y)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Some(y)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#flatmapf"},(0,l.kt)("inlineCode",{parentName:"a"},"flatMap"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Some(x)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"None()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"None()"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#flatmapf"},(0,l.kt)("inlineCode",{parentName:"a"},"flatMap"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"None()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"not provided")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"not executed")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"None()"))))))}d.isMDXComponent=!0}}]);