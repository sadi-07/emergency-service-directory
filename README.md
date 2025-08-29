Question-01:- What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:- 
1. By using getElementById, we can call an element from a html file by its Id name. It is an exceptional method as we can call only one element by a Id. An Id is a unique systax here.
2. By using getElementByClassName, we can call elements from a html file by its Class name. We can call more than one element if they owns same class name. It return live HTMLCollections.
3. By using querySelector, we can call an element from a html file by its Class name. But it only catches the first element that has the required class name. Other elements remains uncalled.
4. By using querySelectorAll, we can call elements from a html file by its class name. It selects all the elements with same class name, but it is not live like getElementsByClassName. Its a static.


Question-02:- How do you create and insert a new element into the DOM?

Answer:-
1. create the element by using "document.createElement()"
2. add content or attributes like- text, box, div etc.
3. insert that created element into the DOM by using "appendChild, replaceChild"


Question-03:- What is Event Bubbling and how does it work?

Answer:- Event bubbling is a process where an event starts from the target element that we actually interact with and then bubbles up to its parent elements. It bubbles up to the document unless stopped.
If one div contains another div, then it also contains another div also and it repeats, then if we call function in the most child element it automatically bubbles through its parent div's.


Question-04:- What is Event Delegation in JavaScript? Why is it useful?

Answer:- Event Delegation is a process where we can attach single listener to a parent element instead of attaching multiple child elements.
It is useful because of its speed performance, also it keeps code clean.


Question-05:- What is the difference between preventDefault() and stopPropagation() methods?

Answer:- preventDefault stops the browser’s default action.
stopPropagation stops the event from moving through the DOM.
