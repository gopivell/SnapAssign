# Instructions to view the project 

1. open file in visual studio code
2. In Terminal, run npm install
3. run http-server -p 52278
4. open http://localhost:52278/index.html in chrome or edge browser


# About the project

The project uses BabylonJs framework.
The fragments with normal perpendicular to the camera direction are assigned red color. 
So that it looks like a model's outline. 

Other method is to use the stencil buffer and draw the model with minimum 
scaling. In the second rendering, do not render the pixels already rendered 
by first render.
