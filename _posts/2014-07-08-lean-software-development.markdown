---
layout: post
title: Lean Software Development
date: 2014-07-08 09:48:08.000000000 -04:00
comments: true
tags: management, people, scrum, agile, team
---
Back in May, I wrote a post called *[The Process and the Team](/blog/2014/05/07/the-process-and-the-team/)*. It was kind of an extension of an even earlier post, *[Recognizing Team Dysfunctions](/blog/2014/04/21/recognizing-team-dysfunctions/)*. In that I mentioned a few methodologies we could possibly use instead of Scrum, which I still firmly believe won't work for our currently team. In writing that post, I read a lot about Lean Software Development. Now, a few months later, with much consideration, I still think it's a great option to consider.

As always, my ideas are based on the "team" I currently work on, so the issues I'm faced with may be very different from those of others. As well, I am not trained in Agile Development (Scrum, Lean, or any other method). I'm just a guy with both ideas and frustrations. So, without all the other 'stuff' from those other posts, here is Lean Software Development, in a nutshell...I think.

___

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
___
Using *Lean*, would give developers a sense of ownership and control over projects, while allowing managers to set reasonable deadlines. It would also increase the visibility of projects. Developers would be more a part of the process than they are when using other methods, and have more direct access to stakeholders.
