## Info
Since my presentation, I was able to fix the issue of the animations (had nothing to do with CloudFront and everything to do with the browsers I was using). Apparently, the opacity style is not supported for percentages in all browsers (which I had the last keyframe set to 100%) so it was not reaching 100% opacity. Accordingly,m I changed it to 1, and deployed again, and that fixed the issue. Figured this out from the docs about opacity under browser compatibility. ([Opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity#browser_compatibility)).

I did not have the time to fix the IntersectionObserver, however I know why it's not working. Since the images do not load immediately, their containing sections have a height of 0 (or at least small enough) which causes all of them to initially be on the screen before the images load. This isn't apparent to the user, because the images load fast enough for them to view, but not for the observer, since the observer callback would execute first. A couple solutions:
- Set a fixed min-height on the containing section, this would then cause not all of the sections to be on screen at once, but wouldn't look the nicest since the content of the sections varies
- Only fire the callback of the images are loaded, but this would be a lot more involved and has potential performance hits due to having to load the images manually
- Put the observer on the surrounding main tag, as opposed to each section, and set the threshold so it only loads (appends a new section) when a certain portion has been intersected. This is actually how inifinite scroll would work, as it would load more, causing less of the parent to be intersecting, and create a continuous flow of items.

The last piece I added was the sphere of skills I have. The sphere has an image (svg) for some technologies I have knowledge of. This was actually something I had started writing before for a portfolio I started a while ago, but took it and adapted it to React, along with adding some animation to it.

My portfolio is hosted at [https://portfolio.jaig.dev](https://portfolio.jaig.dev) using AWS CloudFront and AWS S3.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
