import cryptoTrack from '../resources/cryptoTracker.png';
import reLive from '../resources/projects/reLive.png';
import thereLogo from '../resources/projects/THERE - Black.png'

let codeProjects = [{url:"There", name: "There", type: "iOS App",
    technology:["Swift", "Here API", "Beacons", "Core Location", "Firebase"], img: thereLogo,
    brief:"For our graduation project, wanted to create an indoor navigation app that allowed event organizers to better " +
    "control the experience " +
    "of their conference while also letting event attendees be able to find their way from here to there in the chaos " +
    "of massive events. Sponsored by Here Technologies, we created web & mobile app to tackle on this challenging task over the course " +
    "of a few months.",
    summary:"My task for this project was to lead the development of our mobile application in our project. Our general flow " +
    "became an event organizer would use our web end to digitally create their conference, then they would place beacons around " +
    "a venue. Next they would then automatically " +
    "record beacon positions by walking around with their phone thereby creating a radio map that would be attached to their event. " +
    "The mobile app would then use the radio map to detect a user's " +
    "position based on the multitude of beacon signals around them at any given point. The user would then be able to " +
    "pick a booth and the app would navigate them towards that position. Unfortunately towards the end of the project, there " +
    "were issues in regard to the backend service we were using which resulted in our data being corrupt. What can be successfully shown " +
    "is an implementation of the Here Map engine along with custom map controls and the ability for the mobile app to programmatically " +
    "reference events created by the web interface. A navigation screen not shown in the screens is available however, user location is " +
    "drawing from GPS due to inability to acquire the correct radio map data. This project was a massive learning experience with working firsthand " +
    "with an international corporation as we went through bi-weekly meetings with our Sponsor and worked with teams from their foreign offices " +
    "For more information on this Graduation Project click on the See More above",
    sections:[
        {sectionname: "Screens", sectiondescr:"",
            pictures:["http://students.washington.edu/kpham97/thereScreenshots/1.png",
                "http://students.washington.edu/kpham97/thereScreenshots/2.png",
                "http://students.washington.edu/kpham97/thereScreenshots/3.png",
                "http://students.washington.edu/kpham97/thereScreenshots/4.png",
                "http://students.washington.edu/kpham97/thereScreenshots/5.png",
                "http://students.washington.edu/kpham97/thereScreenshots/6.png",
                "http://students.washington.edu/kpham97/thereScreenshots/7.png",
                "http://students.washington.edu/kpham97/thereScreenshots/8.png",
                "http://students.washington.edu/kpham97/thereScreenshots/9.png",
                "http://students.washington.edu/kpham97/thereScreenshots/10.png"
            ]
        }],
    link:"http://heretothere.xyz/"
    },

    {url:"bitcoin", name : "Cryptocurrency Tracker", type:"Android App",
        technology:["Java", "Retrofit", "Android MPChart", "Jackson"], img:cryptoTrack,
        brief: "Tasked over the course of a week during a challenge to create an Android Application that acts as a simple bitcoin " +
        "tracking app that notifies the user when prices go below a specific amount. This app has is made of " +
        "three sections an order book page that holds data for asks and data for bids, a graph that keeps track" +
        "of the price transactions over time and a notifications page that enables the user to choose to be notified " +
        "when a transaction goes below a specific amount",
        summary:"To access the bitcoin data I used a retrofit client to make repeated calls to the bitstamp API v2 where" +
        "I would store the data the data using a file client script implemented using Jackson object mapper to save the call from POJO" +
        "in a text document. Using the same script I implemented a load method to re-access that data. For each of the app " +
        "functions consisted of three steps: a first local load, and api call to gather new data, and then a update call to to " +
        "show the new data. The notification made a new api call every hour using native JobService and WakefulBroadCastReceiver. " +
        "The graph was rendered using the Android MPChart Library. Order book charts were rendered a Recyclerview and Adaptor.",
        sections:[
            {sectionname: "Screens", sectiondescr: "", pictures:["http://students.washington.edu/kpham97/BitcoinTracker/BitHomePage.png",
                                                                    "http://students.washington.edu/kpham97/BitcoinTracker/BitGraph.png",
                                                                    "http://students.washington.edu/kpham97/BitcoinTracker/BitNotificationPage.png",
                                                                    "http://students.washington.edu/kpham97/BitcoinTracker/BitNotification.png"]}],
        link:"https://github.com/kpham97/ILoveZappos"},
    {url:"relive", name : "Relive", type:"Android App",
        technology:["Java", "Picasso", "Facebook SDK"], img:reLive,
        brief: "Tasked in Android Mobile Development class with a small team of people to develop our own multi-page app. We " +
        "decided on playing around with the Facebook API to create a fun tool for users to view old statuses of friends. " +
        "We wanted the app to have several types of features to accompany bringing up old friends, the ability to separate out " +
        "pictures statuses and text statuses, and to quiz users on how well they remember their friends old statuses by quizzing " +
        "them to guess who posted the shown statuses. The user would then have results on how many of their friends statuses they got right. ",
        summary:"To do this we used a system of fragments and recyclersViews to display the questions / results page for the quiz game. And to " +
        "receive access to the facebook api we installed the facebook sdk and acquired a private api key. To get access to a user's friend list " +
        "we implemented a facebook log in button so that users could give permissions to the facebook graph api to read their data. Unfortunately " +
        "what this meant was that the graph api could only access the user's friends who have given their own permissions already. There was no " +
        "work around as this was a self imposed limitation by the Facebook API to control privacy from everyone but larger companies. My task in " +
        "particular for this project was to implement the api calls, the storing of the call, and to map the data to the elements in during the quiz " +
        "game. I did this using Json Objects and POJOS, where I used the POJOs to store the data after an initial API Call. I did this " +
        "to improve speed of the application, where the API would only need to be called once. To import the image directly into the RecyclerView based off " +
        "a string url in the POJO I used the Picasso library to draw the image. Last, I also implemented the settings/preferences fragment to control " +
        "settings for the quizzes using SharedPreferences.",
        sections:[
            {sectionname:"Screens", sectiondescr:"",
            pictures:["http://students.washington.edu/kpham97/relive/1.png",
                "http://students.washington.edu/kpham97/relive/2.png",
                "http://students.washington.edu/kpham97/relive/3.png",
                "http://students.washington.edu/kpham97/relive/4.png",
                "http://students.washington.edu/kpham97/relive/5.png",
                "http://students.washington.edu/kpham97/relive/6.png",
                "http://students.washington.edu/kpham97/relive/7.png"]}
                ],
        link:"https://github.com/kpham97/Android-Project-ReLive"},
    {url:"huskyquest", name : "Husky Quest", type:"iOS App",
        technology:["Swift", "Alamofire"], img:"http://students.washington.edu/kpham97/iosImage.png",
        brief: "Develop an application that tells a story. The story we chose was to develop was that of a University of Washington going through" +
        "going through the motions of university. Specifically we wanted the application to do two things, give the user the ability to have the character" +
        "feel like their living but automating their story but also allowing the user to retain control of choices should they choose to play",
        summary:"The result was a choose your own adventure style application. The application was designed using a singleton with multiple views representing various settings"+
        "and statistics. To implement the main function of the app, the story view parsed through a JSON file stored into objects with the the JSON being structured" +
        "much like a typical book. Each choice entry had a page entry that corresponded to the next event located as a specified index in the JSON",
        sections:[{sectionname:"", sectiondescr:"",pictures:[]}],
        link:"https://github.com/kpham97/HuskyQuest"},
    {url:"clank", name : "Clank Helper App", type:"Android App",
        technology:["Kotlin","Dagger"], img:"http://students.washington.edu/kpham97/androidImage.png",
        brief: "Personal project designed to assist in playing the Clank! boardgame. Purpose to serve two functions, to help keep track of resources"+
        "as well as replace the need for constant shuffling of cards ensuring more equal randomness and helps with game flow",
        summary:"Currently utilizing Kotlin and Dagger to become familiar with these technologies.",
        sections:[{sectionname:"",sectiondescr:"",pictures:[]}],
        link:""},
];

let websiteProjects = [
    {url:"airquality", name : "Air Quality", type:"Web App",
        technology:["R", "Shiny", "GGPlot", "Jsonlite", "dplyr"], img:"http://students.washington.edu/kpham97/airquality/1.png",
        brief: "Assigned to work with a team to show knowledge of the R language and it's supporting libraries, we wanted to work " +
        "with a data set that we could visually show on a page and we were curious about how the air quality was across the United States" +
        "so we decided to explore the OpenAQ index api to answer our questions." +
        "state",
        summary:"What resulted was a simple web app that displayed a map that contained the average Air Quality Index (AQI), over the " +
        "month of February in 2017. We limited the average to a month because the sheer amount of data rows that our web host ShinyApp " +
        "could handle. We decided to balance on load times and data and settled on 65,000 rows of data for the month. Implemented also due " +
        "is a comparative direct graph we used to graph the change in AQ between two cities and a graph to show their averages next to each " +
        "other. My task specfically in this group was to work on the backend server-side services of the web app. Data gathering, data storage, " +
        "mapping, etc.",
        sections:[{sectionname:"Screens", sectiondescr:"",pictures:["http://students.washington.edu/kpham97/airquality/1.png",
            "http://students.washington.edu/kpham97/airquality/2.png"]}],
        link:"https://isenen.shinyapps.io/AirQualityProject/"},
    {url:"nextstep", name : "Next Step", type:"Prototype",
        technology:["AxureRP", "Photoshop CS6"], img:"http://students.washington.edu/kpham97/nextstep/1.png",
        brief: "Assigned to think about a social problem, and ideate solutions to solve that problem, we landed on the topic of the Income " +
        "disparity with in the United States. Going further into income inequality our research showed that while unemployment in the states " +
        "was rapidly going down, low-income careers and part-time jobs were on the rise. We wanted to create a resource that enables a user " +
        "to be assessed and find other careers that would require low investment training or education that the user could pursue. Our logic " +
        "was that users could use the resource higher paying careers that they were only one certification away from that satisfied their wants " +
        "and desires in a job and they weren't limited to their current job.",
        summary:"To accomplish this task we created a prototype website through the AxureRP prototyping tool. The prototype website has a short quiz section " +
        "to acquire the interests and the skillset of the user, at the end of the quiz the user is brought to a results page that contains three " +
        "sections seperated by jobs requiring no additional training, little training, or alot of training based off what the user's assessment " +
        "they are then given an option to bookmark careers for later viewing. Also shown is a list of resources that a user can visit to acquire to " +
        "skills or lessons. My specific task for this project was the overall design, structure, and flow of the website. In terms of smaller " +
        "picture, I designed the quiz and results page for the prototype.",
        sections:[{sectionname:"Screens",sectiondescr:"",pictures:["http://students.washington.edu/kpham97/nextstep/1.png",
            "http://students.washington.edu/kpham97/nextstep/2.png",
            "http://students.washington.edu/kpham97/nextstep/3.png",
            "http://students.washington.edu/kpham97/nextstep/4.png",
            "http://students.washington.edu/kpham97/nextstep/5.png",
            "http://students.washington.edu/kpham97/nextstep/6.png",
            "http://students.washington.edu/kpham97/nextstep/7.png",
            "http://students.washington.edu/kpham97/nextstep/8.png",
            "http://students.washington.edu/kpham97/nextstep/9.png",
            "http://students.washington.edu/kpham97/nextstep/10.png",
            "http://students.washington.edu/kpham97/nextstep/11.png",
            "http://students.washington.edu/kpham97/nextstep/12.png",
            "http://students.washington.edu/kpham97/nextstep/13.png",
            "http://students.washington.edu/kpham97/nextstep/14.png",]}],
        link:"http://fmbbsg.axshare.com"},
];

let designProjects = [
    {url:"candyfacts", name : "Candy Facts", type:"Infograph",
        technology:["Adobe Illustrator"], img:"http://students.washington.edu/kpham97/InfographDesign.png",
        brief: "",
        summary:"",
        sections:[{sectionname:"Screens", sectiondescr:"",pictures:["http://students.washington.edu/kpham97/FinalInfograph.png"]}],
        link:"http://kpham97.wixsite.com/362portfolio2017"},

];

export {codeProjects,websiteProjects,designProjects};


