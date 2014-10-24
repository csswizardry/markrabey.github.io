---
layout: post
title: The Process & The Team
date: 2014-05-01 07:52:48.000000000 -04:00
---
Just a little while ago, I wrote a post called "[Recognizing Team Dysfunctions](/blog/2014/04/21/recognizing-team-dysfunctions/)". In that post I talked about the team I currently work on, our dysfunctions, and how Scrum *should* be able to help us. As I reflect further, I think I may have missed something in there. While I'm confident that many of my opinions hold true, and many of my ideas will work, I think I put far to much blame on managers. Not managers just in my company, but in general.

As stated in the post mentioned above, I am *not* an expert in Scrum, Agile, Management, or related things. I am, however, very passionate about development, furthering my own understanding of things, and developing teams.

___

## The Process

## What's in a name?

>First, managers and stakeholders need expectations changed.<br />
>- *Me*

Wrong. Sort of.

Our team has spent a long time trying to make Scrum work for us. We have created what has actually been referred to as "our own version of Scrum".  In some cases, the processes we have adopted do actually work. That's not to say there isn't a better way. However, I believe that rather than trying to redefine a proven process, and continuously having our team frustrated that "management isn't fully on board", I really think we need to adopt a ***different*** methodology. Yes, Agile allows for flexibility, that's kind of the point, but there are several methods that are proven to work. Rather than have developers feeling like managers need to adjust there thinking, maybe the team could consider a process that managers can stick to.

Maybe what we've "adapted" Scrum to be is, in fact, the same as another process, but then we should call it what it is. By doing this, we have a clear definition of what we are *actually* doing.


## For Your Consideration...
There are several Agile development methodologies we could consider. I have been trying to read up on a few, and think any of them are at least worth considering.


##
## Kanban
Kanban, from what I've read so far is one of the most flexible methods. Although, I don't think that's what we need, it still *might* work for us. Kanban is based on 4 key principles:

1. **Start with what you do now**
	- Kanban starts with your current processes and roles, and encourages on going changes and improvements to your system. Really, it's not so much a development method, as it is a change management method.
2. **Agree to pursue incremental, evolutionary change**
	- The team (along with the company) needs to agree that small evolutionary changes to the system is the way to make valuable improvements. Large, major changes, may seem like the best solution, but in fact have a higher failure rate. This is mostly due to resistance and fear with in the company.
3. **Respect the current process, roles, responsibilities and titles**
	- Often parts of the current process are best left in tact. Also, team members often fear changes to titles and roles. By respecting the current roles, responsibilities and job titles, we can eliminate some of those initial fears that often accompany wide sweeping changes. This makes it much easier to get support from team members on the Kanban initiative. That's not to say that over the evolution of the team some of those roles won't change at some point.
4. **Leadership at all levels**
	- Every member of the team, from the most entry level programmer, right up to the owner of the company, should be encouraged to be a leader in some capacity. Everyone brings something unique to the team, and should be free to show that off.

Kanban really is about change management. Changes are introduced gradually. The end result, if the method is fully implemented should result in 6 core practices:

1. **Visualize**
	- Programmers often keep their process and work flow to themselves. Not because they are protective of it, but because work flow of knowledge is inherently invisible. It's often difficult to explain, but has the potential to be visualized. Often, like Scrum, cards are place on a board in columns, to visualize the steps in the process. Understanding the work flow makes changes easier to make.
2. **Limit Work in Progress**
	- Typically this is implemented as a pull system. Each step in the process is limited to the number of items that are allowed at one time. When a task, story, or project is completed, and other one can be pulled. This is done so developers aren't made to feel overloaded.
3. **Manage Flow**
	- The work it each state of the work flow should be monitored, measured, and reported on. This allows you to clearly see the positive or negative effects evolutionary changes have on the system.
4. **Make Policies Explicit**
	- It's nearly impossible to enforce policies that are not clearly defined. It's also difficult to effectively evaluate, discuss, and improve the process if it's not understood. A full understanding of the process leads to more rational and objective discussion of issues.
5. **Implement Feedback Loops**
	- The flow of work, the process, and the measurements of success need to be continuously discussed. This true of every step, for every member of the team, and can involve code reviews, capability measures, and operations review.
6. **Improve Collaboratively, Evolve Experimentally**
	- Small, incremental changes are those that are most likely to stick. When teams share an understanding of work, processes, and risk, they can better comprehend problems and come up with more agreeable solutions.

Many of these principles and practices would help solve a lot of our issues. The problem I see with implementing Kanban, at least for our team, is that is works best with an already defined process. We don't really have that. I see it working well if a team had *something* defined, and wanted to "tweak" it, but I don't know that it would work in our particular situation. I think we need something that is explicitly defined for us from the get-go. We can adjust it, carefully, later.

The idea of limited work in progress sounds like it would work well for us. As we are a team the both develops, and supports, a large number of existing projects, this concept could work well to manage both new features, and old errors.


##
## Scrum-ban
As the name might suggest, Scrum-ban is a hybrid of Scrum and Kanban. It's often best used for maintenance projects, or projects with frequent and unexpected work items or errors. In these types of projects, the time limit Scrum places on sprints are really of no use. However, the daily meetings and other practices can be of great value, depending on the particular project and the team working on it.

The key difference between Scrum and Kanban is that in Scrum, work is divided into sprints that are a set length of time, whereas Kanban has a continuous flow of work. Often the time lines imposed by the sprint, don't line up with the needs of the business, and getting everyone comfortable with those time lines can prove to be quite the challenge.

The potential drawback I see here is the possibility of making developers feel there is no end to the work. Constantly seeing a list of "To Do" items can potentially be overwhelming. However, I think that is the "work in progress" is limited as Kanban suggests, time and work flow would be quite manageable for developers. Come to think of it, as a developer, wouldn't you always want projects in the backlog? If the list of things to do disappeared, wouldn't your job?



##
## Lean Software Development
Derived from the manufacturing method of the same name, Lean Software Development (LSD) is fairly new method, that is gaining a lot of acceptance in the Agile community. It is based on 7 principles:

1. **Eliminate waste**
	- Anything that does not add value to the customer is regarded as waste. In order to eliminate waste, it must be properly recognized. If an activity can be bypassed, or the result achieved more efficiently, it is waste. Incomplete, or unused features are waste. Often things that don't add immediate "value" to the project are seen as waste, but are actually quite valuable in the long run. These things include adequate testing, code reviews, and clear requirements.
2. **Amplify learning**
	- Development is a constant learning process. Rather than over complicated planning, new ideas can be tried my writing code and building. Allow teams to create 'proof-of-concept' projects in order to gain more knowledge. Recognize that this code will likely not ever make it to a production environment, but some version of it may be re-factored into the final product. This adds value, by adding knowledge.
3. **Decide as late as possible**
	- Delaying decisions as much as possible allows them to be based on facts, not assumptions or predictions. All systems should be built with a great capacity for change. Planning should be concentrated on different options, and clarify confusing situations while establishing processes for rapid action.
4. **Deliver as fast as possible**
	- By delivering small iterations at a fast pace, a team is able to receive and act on feedback sooner. Smaller iterations of a product results in better learning and communication within the team. Delivering quickly, means decisions can be delayed. This means ensures that the team produces the product that fits the current need, not what was required yesterday. This means customers can delay decisions until such time they know what it is they truly require.
5. **Empower the team**
	- Rather than telling developers how to do their jobs, managers are taught to listen to developers explain what actions they might take, as well as provide suggestions for improvement. Allowing developers to find their own solutions can encourage progress, catch more errors, and remove impediments, without micro-managing.
6. **Build integrity in**
	- Conceptual integrity means the the systems components all work well together. The system is flexible, efficient, and maintainable. This can potentially be achieved by gaining an understanding of a problem while solving it at the same time. The information flow should be constant and occur directly between developers and customers or managers. One way to toward this integrity is constant refactoring of code. This keeps the code maintainable as new features are added, and forces developers to revisit solutions they have come up with in the past.
7. **See the whole**
	- Websites and software systems are not just a group of functions, and piles of code. Rather, they are the result of the interaction of those functions. Problems with software tend to increase during development. By breaking big tasks into smaller, more manageable pieces, and by standardizing the development process, the root cause of these defects could be found and removed fairly quickly.

>Think big, act small, fail fast; learn rapidly.<br >
> - ***Lean Software Development** by Mary and Tom Poppendieck (2003).*

The practices (or "tools" as the Poppendiecks call them) are a little different from those in many of Agile methods, but there are obvious similarities:

- Seeing waste
	-	learning what is valuable to the customer is not an easy task. It doesn't just mean dollars.
- Value stream mapping
	- analyzing current work flows, and create new or refined flows
- Pull systems
	- As in Kanban, a pull system creates a sort of "working backlog" with a set maximum amount of work in progress
- Queuing theory
	- by studying wait times over time, predictions can be made on when work might be completed
- Motivation
	- motivate team members to learn more, and produce better products
- Measurements
	- find and set measurable goals for the team
    - this can guide the above motivation

Personally, just from reading, I believe *Lean* would work well for my team. It would enable us to give developers the control over projects that they are looking for, while allowing managers to set reasonable time lines for project deadlines. It would also produce the visibility of projects that we are looking for. Developers would be more a part of the process than they are now, and have more direct access to stakeholders.

___

## Definition of Done
The main point to this reevaluation of our process is really so we have definition. Like I said, it's much easier to follow a process that has been defined. Part of what our team, like many others I assume, is that we don't have a real definition of "done". This doesn't mean we don't finish things, or produce products, but it does mean that we don't always produce the highest quality product we could. We don't have processes in place for acceptance testing, unit testing, or code review. The result is often poor quality code rushed out to meet a seemingly arbitrary deadline.

The definition of done is a checklist of everything that needs to be done to ensure a standard of quality is met. It's the primary reporting tool that team members have. Saying "this is done" means nothing if no one knows what "done" means.

In Scrum, teams are expected to deliver "potentially shippable software" at the end of each sprint. To me, in the case of my team, "software" means a feature or any code that can be released with minimum notice to end users. Ideally "potentially shippable" is equal to the *Definition of Done*. This definition can possibly change over time, but it needs to exist.

___

## The Team

Programmers are a special breed. We are typically both left-brained (analytical, logical, and objective) and right-brained (intuitive, thoughtful, and subjective). We are very technical and mathematical. Yet, we are very expressive and creative. This makes it hard to manage us, because on any given day, you never know which side of our brains you're going to get. Basically, we all suffer from multiple personality disorders.

>The team needs tangible group goals.<br />
>- *Me, again*

This is a very true statement. The team does need that focus. Those goals need to be clear, and rewarded upon completion. Developers, having that split personality, need both a large amount of guidance, and a large amount of freedom. The way I see it, they need to be told *what* to do, and then be allowed to decide for themselves *how*, and if possible, *when*. In being told *what* the project is, they typically need that very clearly defined (see above).

Developers need a certain amount of freedom in their process. Not the work flow laid out by the team, but their own steps in their day-to-day work. Good thinking and creativity can't be mandated, they must be *enabled*.

___

## The Environment
The area in which a developer works is very important to their success. Successful developers, ultimately means a successful product, which means a successful company. Obviously there is much more to a businesses success than the development environment, but keeping employees happy and *comfortable* is key.

The more I look into it, reading blogs, cruising various development websites, the more I realize how atypical my teams development environment really is. We have cubicles. Not like, nice, half height walls, or anything like that. Like, each person has their own like hole to with 8 foot walls around them. The exception is myself and one of my co-workers, who I happen to have also gone to college with. We tore down the wall between. And to be honest, it felt great. Yes, there are times when we annoy each other, and maybe distract each other, but we sit back to back and can ignore each other simply by putting our headphones on. We've done this for about a year now, and no one is dead yet.

Beyond our personal workspaces, there seems to be a common theme among many companies regarding a relaxing place to sit. I would love some days to get away from my stuffy office chair and sit down on a couch with a laptop ***on my lap*** working away. This is how I work at home, and it's quite comfortable. Why can't we have that here? Being comfortable and relaxed at work in no way means you are unprofessional. Open offices, and relaxed employees most frequently results in more open collaboration between team members.

___
As I have stated many times, I am not an expert. I don't claim to be. However, I do know that what my team is doing now is quite working. I also know that we aren't alone in this, which is why am sharing my experiences. Lastly, I am confident there *is* a method that will work for us, we *can* and *will* produce better code, and we *must* eliminate our team dysfunctions if we want to maximize our effectiveness.
