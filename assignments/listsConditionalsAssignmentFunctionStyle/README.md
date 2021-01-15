## Summary of Assignment
When you type in characters into the input field the characters appear in boxes at the bottom\
When you click on a box it's removed and the input is updated to reflect that it has been removed too\
Also tells you how many characters your input is and whether it's too short or too long (if it's less than 5 chars it's too short, if it's more than 5 chars it's too long)

## Assignment description

Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).\
Create a new component ( ValidationComponent) which receives the text length as a prop\
Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)\
Create another component ( CharComponent) and style it as an inline box ( display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).\
Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.\
When you click a CharComponent, it should be removed from the entered text.\
