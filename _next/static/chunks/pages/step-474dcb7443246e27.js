(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[264],{9539:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/step",function(){return s(8815)}])},6127:function(e,n,s){"use strict";s.d(n,{Z:function(){return a}});var t=s(5893);function a(){return(0,t.jsxs)("footer",{className:"footer has-text-centered is-size-7 py-6",children:[(0,t.jsxs)("p",{className:"mb-3",children:[(0,t.jsx)("em",{children:"The Great NCP Program Riddle"})," was created and paid for by a 3rd party, not the North Canton Playhouse."]}),(0,t.jsx)("p",{children:"The author is solely to blame for all shenanigans and any frustration or outrage caused by this game."})]})}},3526:function(e,n,s){"use strict";s.d(n,{Z:function(){return l}});var t=s(5893),a=s(5675),i=s.n(a);function r(){return(0,t.jsx)("nav",{className:"navbar is-primary",role:"navigation","aria-label":"main navigation",children:(0,t.jsxs)("div",{className:"navbar-brand ml-5",children:[(0,t.jsx)("div",{className:"navbar-item px-0",children:(0,t.jsx)(i(),{src:"/images/ncp.svg",alt:"Logo",width:36,height:36,priority:!0})}),(0,t.jsx)("span",{className:"navbar-item is-size-3 has-text-weight-bold m-1",children:"Program Riddle"})]})})}var o=s(6127);function l(e){let{children:n}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{}),(0,t.jsx)("main",{children:(0,t.jsx)("div",{className:"container",children:n})}),(0,t.jsx)(o.Z,{})]})}},8815:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var t=s(5893),a=s(3526),i=s(5283),r=s(1163),o=s(7294);function l(){let e=(0,r.useRouter)(),[n,s]=(0,o.useState)(""),l=parseInt("string"==typeof e.query.step?e.query.step:"0"),h=i.Z[l];function c(){if(!0===h.answerOnlyNeedsToContain&&n.includes(h.answer)||n===h.answer){e.replace("complete?step=".concat(l),new Date().getTime().toString());return}alert("That's not it \uD83D\uDE15 Try again!")}return(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)("h2",{children:["Step ",l+1]}),h.question,(0,t.jsx)("input",{className:"input mb-5",type:h.inputType,inputMode:"number"===h.inputType?"numeric":void 0,onChange:e=>s(e.target.value.toUpperCase().trim()),onKeyPress:e=>{"Enter"===e.key&&c()}}),(0,t.jsx)("div",{className:"is-flex is-justify-content-end",children:(0,t.jsx)("button",{className:"button is-primary right",disabled:""===n,onClick:c,children:"Submit"})})]})}},5283:function(e,n,s){"use strict";var t=s(5893);let a=[{question:(0,t.jsx)(t.Fragment,{children:"(QR Code scan in the program)"}),answer:"",inputType:"",completionMessage:"You found the correct QR code! I'm glad you never gave it up! \uD83D\uDE09"},{question:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{children:["The NCP is full of nice people. Never a mean girl in sight! On Wednesdays, we only listen to one ",(0,t.jsx)("span",{className:"pink",children:"colorful"})," singer."]}),(0,t.jsx)("p",{children:"What day was this singer born?"})]}),answer:"1979-09-08",inputType:"date",completionMessage:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{children:["The NCP's summer musical for 2023 is ",(0,t.jsx)("strong",{children:"Mean Girls"}),"!"]}),(0,t.jsxs)("p",{children:["Anyone who has seen Mean Girls knows that on Wednesdays, we wear"," ",(0,t.jsx)("span",{className:"pink",children:"pink"}),". And since you're so clever, you know that the singer ",(0,t.jsx)("span",{className:"pink",children:"P!NK"})," ","was born on September 8th, 1979."]})]})},{question:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{children:"I smell something rotten! Last person on the moon is a rotten egg!"}),(0,t.jsx)("p",{children:"Who is the rotten egg?"})]}),answer:"EUGENE CERNAN",inputType:"text",completionMessage:"The last person to walk on the moon was Apollo 17 commander Eugene Cernan on December 14, 1972 \uD83C\uDF1D"},{question:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{children:"Speaking of eggs, I know Gaston eats a ton of them!"}),(0,t.jsxs)("p",{children:["If we are to believe his song, how many eggs did Gaston eat every ",(0,t.jsx)("em",{children:"week"})," when he was a lad?"]})]}),answer:"336",inputType:"number",completionMessage:"When Gaston was a lad, he ate 4 dozen eggs every morning to help him get large. That's over 3,700 calories! That's enough eggs to feed an entire 18th-century French provincial town \uD83C\uDF73"},{question:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{children:["The NCP is ",(0,t.jsx)("em",{children:"not"})," doing ",(0,t.jsx)("em",{children:"Cats the Musical"})," this year. However, there is a cat named Hazel in today's program."]}),(0,t.jsx)("p",{children:"Hazel's fur pattern has a special name. What is it? (Don't think too hard. Slow and steady wins the race.)"})]}),answer:"TORT",answerOnlyNeedsToContain:!0,inputType:"text",completionMessage:'In Japan, "torties" are thought to protect ships from bad storms and shipwrecks, and even ghosts \uD83D\uDC7B'},{question:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{children:"In 1995, the NCP moved to Hoover High School. Hoover shares a mascot with an NFL team."}),(0,t.jsx)("p",{children:"What is the capital city of this NFL team's state?"})]}),answer:"PAUL",answerOnlyNeedsToContain:!0,inputType:"text",completionMessage:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{children:"Historians say that Vikings didn't actually wear horned helmets. But I'd like to think they did! \uD83D\uDE1C"}),(0,t.jsx)("p",{children:"There's only 1 step left!"})]})},{question:(0,t.jsx)("p",{children:"What is the last name of the main character of the NCP's first ever production in 1976?"}),answer:"DENNIS",inputType:"text",completionMessage:"You did it!"}];n.Z=a},1163:function(e,n,s){e.exports=s(6885)}},function(e){e.O(0,[675,774,888,179],function(){return e(e.s=9539)}),_N_E=e.O()}]);