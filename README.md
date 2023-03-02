# Currency converter app

Hello,

Before running the project, please ensure that you have installed the required node modules by running `npm install`, followed by `npm start`.

I would like to share some thoughts I've had while writing this   project:

- It has been a while since I last used react and I have never worked with styles components or react query. So if you find anything unusual, it is because of that
- I'm not sure about best practices for file naming with styled-components, where to keep style files etc. I tried to look at few git repos, but everyone seems to have slightly different aproach
- I faced a CORS issue on the cnb.cz resource, which was a bit confusing to me since the task description seemed to focus on writing a React app. To resolve the issue, I added a proxy to package.json to route the request through the dev server. This is not the most robust solution, but it was quick and easy and does resolve the problem. (or maybe I am just missing some request header which would fix this?)
