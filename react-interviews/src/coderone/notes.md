CoderOne: "The React Interview Questions You need to Know"

1. How to pass data from child to parent
    -declare state and handleChange on parent
    -pass as props to child
    -setup child to pass the data

2. How to render an element outside of component tree
    - use createPortal
    - apply the portal in the document
    - set the destination in index.html by using id and getElementbyID

3. Code splitting
    - use lazyloading and Suspense
    - instead of importing element on top, import it inside a const using lazyloading

4. What is the best way to add global store to react app
    -use Redux

5. Basic React SSR implementation
    - next js