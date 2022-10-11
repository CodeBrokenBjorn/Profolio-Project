Note:My Read me ain't best so I am trying my best xD ahahah.

To set up this project first require to install tailwindcss by installing tailwindcss
Code: npm install -D tailwindcsss
then you need create config file.
Code: npx tailwindcss init 

Then you need configure the file to CSS "content: ["./src/**/*.{html,js}"] The way of how I done it ====> "./src/style.css"

Need create a css file within "src" example of code.
@tailwind base;
@tailwind components;
@tailwind utilities;

Note to able to run the code and access the code you need to input this code in right place "$ npx tailwindcss -i ./src/styles.css -o ./dist/output.css --watch"

Simple and easy, takes ages to set it up though plus some thing are not so clear.


