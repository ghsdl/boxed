"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[527],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=i(r),k=a,d=m["".concat(s,".").concat(k)]||m[k]||c[k]||l;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7598:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return c}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=["components"],u={title:"Result<Ok, Error>",sidebar_label:"Result"},s=void 0,i={unversionedId:"result",id:"result",title:"Result<Ok, Error>",description:"The Result can replace exception flows.",source:"@site/docs/result.md",sourceDirName:".",slug:"/result",permalink:"/boxed/result",editUrl:"https://github.com/swan-io/boxed/edit/main/docs/docs/result.md",tags:[],version:"current",frontMatter:{title:"Result<Ok, Error>",sidebar_label:"Result"},sidebar:"docs",previous:{title:"Option",permalink:"/boxed/option"},next:{title:"AsyncData",permalink:"/boxed/async-data"}},p={},c=[{value:"Create a Result value",id:"create-a-result-value",level:2},{value:".map(f)",id:"mapf",level:2},{value:".mapError(f)",id:"maperrorf",level:2},{value:".flatMap(f)",id:"flatmapf",level:2},{value:".flatMapError(f)",id:"flatmaperrorf",level:2},{value:".getWithDefault(defaultValue)",id:"getwithdefaultdefaultvalue",level:2},{value:".isOk()",id:"isok",level:2},{value:".isError()",id:"iserror",level:2},{value:".toOption()",id:"tooption",level:2},{value:".match()",id:"match",level:2},{value:".tap(func)",id:"tapfunc",level:2},{value:".tapOk(func)",id:"tapokfunc",level:2},{value:".tapError(func)",id:"taperrorfunc",level:2},{value:"Result.all(results)",id:"resultallresults",level:2},{value:"Result.allFromDict(results)",id:"resultallfromdictresults",level:2},{value:"Interop",id:"interop",level:2},{value:"Result.fromExecution(() =&gt; value)",id:"resultfromexecution--value",level:3},{value:"Result.fromPromise(promise)",id:"resultfrompromisepromise",level:3},{value:"Result.fromOption(option, valueIfNone)",id:"resultfromoptionoption-valueifnone",level:3},{value:"TS Pattern interop",id:"ts-pattern-interop",level:2}],m={toc:c};function k(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Result")," can replace exception flows."),(0,l.kt)("p",null,"Exceptions can be tricky to handle: there's nothing in the type system that tracks if an error has been handled, which is error prone, and adds to your mental overhead. ",(0,l.kt)("inlineCode",{parentName:"p"},"Result")," helps as it ",(0,l.kt)("strong",{parentName:"p"},"makes the value hold the success state"),", making it dead-simple to track with a type-system."),(0,l.kt)("p",null,"Just like the ",(0,l.kt)("inlineCode",{parentName:"p"},"Option")," type, the ",(0,l.kt)("inlineCode",{parentName:"p"},"Result")," type is a box that can have two states:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Ok(value)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Error(error)"))),(0,l.kt)("h2",{id:"create-a-result-value"},"Create a Result value"),(0,l.kt)("p",null,"To create a result, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Error")," constructors:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { Result } from "@swan-io/boxed";\n\nconst ok = Result.Ok(1);\nconst notOk = Result.Error("something happened");\n')),(0,l.kt)("p",null,"You can convert an option to a ",(0,l.kt)("inlineCode",{parentName:"p"},"Result"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { Result, Option } from "@swan-io/boxed";\n\nconst a = Result.fromOption(Option.Some(1), "NotFound"); // Ok<1>\nconst b = Result.fromOption(Option.None(), "NotFound"); // Error<"NotFound">\n')),(0,l.kt)("p",null,"You get interop with exceptions and promises:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'// Let\'s say you have some function that throws an error\nconst init = (id: string) => {\n  if (id.length !== 24) {\n    throw new Error();\n  }\n  return new Client({ id });\n};\n\nconst result = Result.fromExecution(() => init(id));\n// Here, result will either be:\n// - Ok(client)\n// - Error(error)\n\n// It works with promises too:\n\nconst value = await Result.fromPromise(() => fetch("/api"));\n// `value` will either be:\n// - Ok(res)\n// - Error(error)\n')),(0,l.kt)("p",null,"The result type provides a few manipulation functions:"),(0,l.kt)("h2",{id:"mapf"},".map(f)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Result<A, E>.map<B>(f: (value: A) => B): Result<B, E>\n")),(0,l.kt)("p",null,"If the result is ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok(value)")," returns ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok(f(value))"),", otherwise returns ",(0,l.kt)("inlineCode",{parentName:"p"},"Error(error)"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Result.Ok(2).map((x) => x * 2); // Result.Ok(4)\n")),(0,l.kt)("h2",{id:"maperrorf"},".mapError(f)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Result<A, E>.mapError<F>(f: (value: E) => F): Result<A, F>\n")),(0,l.kt)("p",null,"If the result is ",(0,l.kt)("inlineCode",{parentName:"p"},"Error(error)")," returns ",(0,l.kt)("inlineCode",{parentName:"p"},"Error(f(error))"),", otherwise returns ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok(value)"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Result.Error(2).mapError((x) => x * 2); // Result.Error(4)\n")),(0,l.kt)("h2",{id:"flatmapf"},".flatMap(f)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Result<A, E>.flatMap<B, F>(f: (value: A) => Result<B, F>): Result<B, F | E>\n")),(0,l.kt)("p",null,"If the result is ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok(value)")," returns ",(0,l.kt)("inlineCode",{parentName:"p"},"f(value)"),", otherwise returns ",(0,l.kt)("inlineCode",{parentName:"p"},"Error(error)"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'Result.Ok(1).flatMap((x) =>\n  x > 1 ? Result.Error("some error") : Result.Ok(2),\n);\n// Ok(2)\n\nResult.Ok(2).flatMap((x) =>\n  x > 1 ? Result.Error("some error") : Result.Ok(2),\n);\n// Error("some error")\n')),(0,l.kt)("h2",{id:"flatmaperrorf"},".flatMapError(f)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Result<A, E>.flatMapError<B, F>(f: (value: E) => Result<B, F>): Result<A | B, F>\n")),(0,l.kt)("p",null,"If the result is ",(0,l.kt)("inlineCode",{parentName:"p"},"Error(error)")," returns ",(0,l.kt)("inlineCode",{parentName:"p"},"f(error)"),", otherwise returns ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok(value)"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'Result.Error(2).flatMapError((x) => {\n  if (x > 1) {\n    return Result.Error("some error");\n  } else {\n    return Result.Ok(2);\n  }\n});\n')),(0,l.kt)("h2",{id:"getwithdefaultdefaultvalue"},".getWithDefault(defaultValue)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Result<A, E>.getWithDefault(defaultValue: A): A\n")),(0,l.kt)("p",null,"If the result is ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok(value)")," returns ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),", otherwise returns ",(0,l.kt)("inlineCode",{parentName:"p"},"defaultValue"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Result.Ok(2).getWithDefault(1); // 2\nResult.Error(2).getWithDefault(1); // 1\n")),(0,l.kt)("h2",{id:"isok"},".isOk()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Result<A, E>.isOk(): boolean\n")),(0,l.kt)("p",null,"Type guard. Checks if the result is ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok(value)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Result.Ok(2).isOk(); // true\nResult.Error(2).isOk(); // false\n\nif (result.isOk()) {\n  const value = result.get();\n}\n")),(0,l.kt)("h2",{id:"iserror"},".isError()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Result<A, E>.isError(): boolean\n")),(0,l.kt)("p",null,"Type guard. Checks if the result is ",(0,l.kt)("inlineCode",{parentName:"p"},"Error(error)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Result.Ok(2).isError(); // false\nResult.Error().isError(); // true\n\nif (result.isError()) {\n  const value = result.getError();\n}\n")),(0,l.kt)("h2",{id:"tooption"},".toOption()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Result<A, E>.toOption(): Option<A>\n")),(0,l.kt)("p",null,"If the result is ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok(value)")," returns ",(0,l.kt)("inlineCode",{parentName:"p"},"Some(value)"),", otherwise returns ",(0,l.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Result.Ok(2).toOption(); // Some(2)\nResult.Error(2).toOption(); // None\n")),(0,l.kt)("h2",{id:"match"},".match()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Result<A, E>.match<B>(config: {\n  Ok: (value: A) => B;\n  Error: (error: E) => B;\n}): B\n")),(0,l.kt)("p",null,"Match the result state"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'const valueToDisplay = result.match({\n  Ok: (value) => value,\n  Error: (error) => {\n    console.error(error);\n    return "fallback";\n  },\n});\n')),(0,l.kt)("h2",{id:"tapfunc"},".tap(func)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Result<A, E>.tap(func: (result: Result<A, E>) => unknown): Result<A, E>\n")),(0,l.kt)("p",null,"Executes ",(0,l.kt)("inlineCode",{parentName:"p"},"func")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"result"),", and returns ",(0,l.kt)("inlineCode",{parentName:"p"},"result"),". Useful for logging and debugging."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"result.tap(console.log).map((x) => x * 2);\n")),(0,l.kt)("h2",{id:"tapokfunc"},".tapOk(func)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Result<A, E>.tapOk(func: (value: A) => unknown): Result<A, E>\n")),(0,l.kt)("p",null,"Executes ",(0,l.kt)("inlineCode",{parentName:"p"},"func")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"ok"),", and returns ",(0,l.kt)("inlineCode",{parentName:"p"},"result"),". Useful for logging and debugging. No-op if ",(0,l.kt)("inlineCode",{parentName:"p"},"result")," is an error."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"result.tapOk(console.log).map((x) => x * 2);\n")),(0,l.kt)("h2",{id:"taperrorfunc"},".tapError(func)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Result<A, E>.tapError(func: (error: E) => unknown): Result<A, E>\n")),(0,l.kt)("p",null,"Executes ",(0,l.kt)("inlineCode",{parentName:"p"},"func")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"error"),", and returns ",(0,l.kt)("inlineCode",{parentName:"p"},"result"),". Useful for logging and debugging. No-op if ",(0,l.kt)("inlineCode",{parentName:"p"},"result")," is ok."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"result.tapError(console.log).map((x) => x * 2);\n")),(0,l.kt)("h2",{id:"resultallresults"},"Result.all(results)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"all(options: Array<Result<A, E>>): Result<Array<A>, E>\n")),(0,l.kt)("p",null,'Turns an "array of results of value" into a "result of array of value".'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'Result.all([Result.Ok(1), Result.Ok(2), Result.Ok(3)]);\n// Ok([1, 2, 3])\nResult.all([Result.Error("error"), Result.Ok(2), Result.Ok(3)]);\n// Error("error")\n')),(0,l.kt)("h2",{id:"resultallfromdictresults"},"Result.allFromDict(results)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"allFromDict(options: Dict<Result<A, E>>): Result<Dict<A>, E>\n")),(0,l.kt)("p",null,'Turns a "dict of results of value" into a "result of dict of value".'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'Result.allFromDict({ a: Result.Ok(1), b: Result.Ok(2), c: Result.Ok(3) });\n// Ok({a: 1, b: 2, c: 3})\n\nResult.allFromDict({\n  a: Result.Error("error"),\n  b: Result.Ok(2),\n  c: Result.Ok(3),\n});\n// Error("error")\n')),(0,l.kt)("h2",{id:"interop"},"Interop"),(0,l.kt)("h3",{id:"resultfromexecution--value"},"Result.fromExecution(() => value)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"fromExecution<A, E>(func: () => A) => Result<A, E>\n")),(0,l.kt)("p",null,"Takes a function returning ",(0,l.kt)("inlineCode",{parentName:"p"},"Value")," that can throw an ",(0,l.kt)("inlineCode",{parentName:"p"},"Error")," and returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"Result<Value, Error>")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'Result.fromExecution(() => 1); // Future(Ok(1))\nResult.fromExecution(() => {\n  throw "Something went wrong";\n}); // Future<Error<"Something went wrong">>\n')),(0,l.kt)("h3",{id:"resultfrompromisepromise"},"Result.fromPromise(promise)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"fromPromise<A, E>(promise: Promise<A>) => Promise<Result<A, E>>\n")),(0,l.kt)("p",null,"Takes a ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<Value>")," that can fail with ",(0,l.kt)("inlineCode",{parentName:"p"},"Error")," and returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<Result<Value, Error>>")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"await Result.fromPromise(Promise.resolve(1)); // Future(Ok(1))\nawait Result.fromPromise(Promise.reject(1)); // Future<Error<1>>\n")),(0,l.kt)("h3",{id:"resultfromoptionoption-valueifnone"},"Result.fromOption(option, valueIfNone)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"fromPromise<A, E>(option: Option<A>, valueWhenNone: E): Result<A, E>\n")),(0,l.kt)("p",null,"Takes a function returning ",(0,l.kt)("inlineCode",{parentName:"p"},"Value")," that can throw an ",(0,l.kt)("inlineCode",{parentName:"p"},"Error")," and returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"Result<Value, Error>")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'const a = Result.fromOption(Option.Some(1), "NotFound"); // Ok<1>\nconst b = Result.fromOption(Option.None(), "NotFound"); // Error<"NotFound">\n')),(0,l.kt)("h2",{id:"ts-pattern-interop"},"TS Pattern interop"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { match, select } from "ts-pattern";\nimport { Result } from "@swan-io/boxed";\n\nmatch(myResult)\n  .with(Result.pattern.Ok(select()), (value) => console.log(value))\n  .with(Result.pattern.Error(select()), (error) => {\n    console.error(error);\n    return "fallback";\n  })\n  .exhaustive();\n')))}k.isMDXComponent=!0}}]);