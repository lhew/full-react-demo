# full-react-demo


### What are the ways of evaluating FE performance?
It can be evaluated using your own computer and/or using proper softwares that aims on testing page speed, memory allocation, error tracking, accessibility and more.




## What are the tools that are essential in developing FE appLilications with high quality?
 - Google Lighthouse, for insights about page speed, accessibility and checkmarks about best practices
 - Error tracking / Availability checking - Tools like Sentry, New Relic, Datadog, etc

## What are the different ways of rendering pages and what are the use-case/pros and cons for each one?
### Client-side rendering
For an example, a page that (in general) contains a trigger javascript, that renders under a certain container of the page, the necessary scriptsto load the page.
#### Pros
 - Easier to bundle than a backend application (static files + some server  like nginx does the job)
 - Ideal for small projects and scenarios where loading time is not key

#### Cons
 - Limited access to backend features
 - Accessing third parties are mostly dependant on some rest implementation
 - Difficult to implement SEO features, since the content is rendered after the page load
 - Page normally is fully loaded after the javascript calls other resources, such as css pages and other javascript files
 
### Server-side rendering
A page that renders a resource (text, html, etc) by processing data on the backend

### Pros
 - SEO Friendly -  since the content is printed in the body of the page response
 - Performant -  Reduces load time of assets, since their calls are printed in the body of the requested page
### Cons
 - Performance tunning - Requires monitoring on page performance, since rendering (in node, for example) is a blocking operation



### How can we ensure that FE is working well in production?
 - With Automated tests before shipping code
 - Peer review (Merge requests)
 - A culture of testing, and keeping the bar high for that
 - A feature-flags - to help managers liberating a certin feature to a small number of users
 - Monitoring tools - such as sentry, new relic, etc

### What are the parameters to take into account before adding a new library to the project?
 - Reliability from community - Is the library well known and made by a trusted author?
 - Number of stars/bugs - it might indicate how used the library is and how often mantainers fixes and add things to it
 - Project duration - A very new module/repository might not be a good candidate to add a new library, since there's a few people using and author motivation might drift away
 - Auditing - package should be passing audit features
 
 
## Choose one component from CheapTickets.nl and explain what information do you need in order to be able to implement that component.
(couldn't copy item here)
### Destinations card

```
{
  "showDate": "2021-07-05",
  "onClick": () => /*function that does location.href or triggers ga function*/,
  "destination": "FCO,CAG,FLR,MIL,NAP",
  "departure": "AMS,EIN,RTM",
  "title": "Main title",
  "description": "La dolce vita",
   "endDate": "2021-09-20",
  "startDate": "2021-06-01
  "stripe offer": "Text above main image",
  "cardImage": "image-from-db.jpg",
  "withRemarks": true|false
  className: "someclass-helper otherclass-helper"
}
```

