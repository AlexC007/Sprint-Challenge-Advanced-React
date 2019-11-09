- [ ] Why would you use class component over function components (removing hooks from the question)?

One reason is that using class components might make it easier for other developers to read and understand. Also when using class components you have access to react.component class which allows you to use very useful properties such as useState with a larger scope and lifecycle hooks.

- [ ] Name three lifecycle methods and their purposes.
The three Methods are Mounting, where you start to build your constructor, adding state, render, componentdidmount etc; Update, where you setState and add methods you want your componet do to when operating; Un-mount where you component ends render to the screen. 

- [ ] What is the purpose of a custom hook?

Custom hook allows to build a component that accesses and uses data such as non-visual behaviours and stateful logic, you may need to use or alter in a variety of places through your app.

- [ ] Why is it important to test our apps?

Although an app may be functional it may have small errors or bugs you may not notice, by testing you will be made aware of these bugs that may harm your app when adding more data or users. It encourges you to right more structurally sound code, therefore avoiding later errors.