1. What problem does the context API help solve?

ans
Context API helps to avoid prop drilling.So you no longer pass props down through each component, instead we import them into the component where they are being used.

2. In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

ans
When an event occurs actions happen and pass a type into it.According to the type, the reducer performs operations on the state. This state inhabits the store. Store is the single source of truth because it is one place where all of the state lives.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

ans
Application state is a state that is either in a context api or a store. This state does not live on any component but instead gets "called" into a component that uses it. Component state would be where you are defining, storing, or managing state inside of the component that it is being used in.

4. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

ans
Thunk is a term that describes returning a function inside a function. This allows us to turn a synchronous process into an asynchronous process. A good use of this is when you want a series of actions to run in a specific order. Without this, our action creators should run when they are declared.

5.What is your favorite state management system you've learned and this sprint? Please explain why!!

I like using ReduxI for now because it involves much same type of code than implementing a complete react cycle. Its a good drill and hard to implement but good for big projects.
