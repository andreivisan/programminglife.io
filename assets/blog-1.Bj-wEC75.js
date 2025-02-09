const e=`---
title: "From Coding to Craft: The Real Divide Between Coders and Professional Enterprise Software Engineers"
excerpt: "Let’s dive together into a realm where not all code is created equal..."
date: "2024-03-16"
readTime: "7 min read"
---

Let’s dive together into a realm where not all code is created equal, and discover what truly sets apart the real Enterprise Software Engineers from those who merely ‘make things work’.

## Reason

A good place to start is by understanding the reasoning behind this article.

I’ve been in the Enterprise Software industry for 18 years, initially starting as a Backend Engineer. However, I quickly shifted to Full-Stack Engineering due to my eagerness to fully grasp and independently tackle all aspects of complex applications. This transition was fuelled by a desire to not just understand, but to personally resolve the multifaceted layers that come with such systems.

Over these years, the number of true Senior Developers in Enterprise Software Engineering I’ve had the pleasure to work with and learn from is notably small.

## Context

The software industry, being among the youngest sectors, is still in its infancy compared to well-established fields. This immaturity leads to blurred distinctions between terms like Software Engineering, Development, Coding, and Programming — some of which overlap, while others signify entirely different concepts. Since the software sector matured into a distinct industry, the term ‘Enterprise Software Engineer’ has been coined. Despite this, we still encounter unclear distinctions when evaluating the differences between a skilled programmer and a proficient Enterprise Software Engineer. This ambiguity mainly concerns those with considerable programming skills, as less competent individuals can typically be identified more straightforwardly.

## What is an Enterprise Software Engineer

Firstly, we need to understand that software engineering is defined by its scope. Significant differences exist between working solo on small to medium projects and collaborating within large teams on complex systems that must endure and evolve over time. Enterprise Software, as you might guess, falls into the latter category. This article won’t delve into the necessary soft skills like communication, teamwork, and creativity, despite their importance. Instead, our focus will be on the technical competencies related to code craftsmanship.

As mentioned above, enterprise software involves managing large, complex systems that must not only endure over time but also adapt seamlessly. These systems evolve with contributions from various engineers and teams. Over years, the workforce developing and maintaining an enterprise system may change significantly from the original team. And that applies to every stage in the development and evolution of a large enterprise software system. This cycle is typical for large-scale systems, underscoring the necessity for well-thought-out architectural and development decisions from the start and throughout the system’s life, especially as new features are integrated.

Given all the above we can more clearly see that just being a good programmer is a very very small piece of the big puzzle that constitutes what an enterprise software engineer is.

What are the other pieces? Those we will cover in the paragraph below but for now let’s try and formulate a definition for an enterprise software engineer.

> An Enterprise Software Engineer possesses all the skills of a proficient programmer, including a deep understanding of software performance fundamentals. They excel in teams of any size, working collaboratively with peers. Beyond technical skills, they understand the importance of applying design patterns and principles to build robust, maintainable, and extendable software, ensuring easy integration with other systems without the need for modifications.

## Principles that an Enterprise Software Engineer should apply

Not everyone has to become an Enterprise Software Engineer. However, if you aspire to work in a large enterprise, develop complex systems, experience working with large databases, and integrate complex systems with each other, as well as scaling large software systems, then please continue reading.

We defined what an Enterprise Software Engineer is. Now let’s unpack that definition and understand what each point means.

### Robust Software

> When discussing robust software, the first aspect to keep in mind is testing.

Testing is a vast topic in itself; however, in this context, I’ll highlight the crucial elements indispensable in enterprise software engineering. Before delving further, it’s important to address Test-Driven Development (TDD). Personally, I believe that TDD is not always the best fit for large enterprise systems, and in my view, it can be impractical. Nevertheless, if one is accustomed to developing in the TDD manner, continue with this approach as it offers a reliable and robust coding methodology.

The three most important types of testing in Enterprise Software are: unit testing, integration testing, and functional testing. While I won’t delve into the specifics of each, it’s critical to understand that testing acts as a safety net for your software system. It ensures that each unit operates as intended, integration with other systems is seamless, and, from end to end, the system functions flawlessly. Furthermore, testing guarantees that new features added do not break existing functionalities at the unit, system, and full end-to-end levels.

### Maintainable Software

> The most crucial aspect of maintainable software systems is the implementation of SOLID principles.

Adhering to these guidelines ensures that future development — whether adding new features or modifying existing ones — will be efficient and seamless. Additionally, when new developers or teams begin working on the existing code, it will be straightforward for them to comprehend the code and advance in the correct direction.

A brief review of the solid principles.

1. **The Single Responsibility Principle (SRP)** — SRP suggests that a piece of software should focus on a single functionality or responsibility. By adhering to this principle, code becomes more robust, easier to understand, and simpler to update or modify without affecting other parts of the system.
2. **The Open Closed Principle (OCP)** — OCP promotes designing modules that don’t require changes when adding new features. Instead, the system is developed in a way that allows it to be extended without altering existing code, enhancing maintainability and reducing the risk of bugs.
3. **The Liskov Substitution Principle (LSP)** — LSP ensures that subclasses can stand in for their parent classes without disrupting the application. This principle reinforces the importance of having a properly designed hierarchy where subclasses maintain the expected behavior of their base class.
4. **The Interface Segregation Principle (ISP)** — ISP encourages splitting large interfaces into smaller, more specific ones so that clients only need to know about the methods that are of interest to them, leading to a cleaner, decoupled codebase.
5. **The Dependency Inversion Principle (DIP)** — — DIP advocates for a system’s design where high-level modules are not dependent on low-level modules, but both are dependent on abstractions. This means that rather than having business logic depend on database or other lower-level components, both should rely on interfaces or abstract classes.

Besides the principles outlined above, code should be reusable and as decoupled as possible. For a better and more comprehensive understanding of these principles, please refer to “Clean Code” by Robert C. Martin.

### Extendable Software

> When considering extendable software, one of the most crucial aspects is the correct application of Design Patterns.

With extendability in mind, the goal is to ensure that new functionality can be easily added without altering existing code.

Regardless of the programming language one is using, relevant and correct implementation of design patterns is mandatory in order to keep complex features simple, modular, and easy to extend.

On my [YouTube channel](https://www.youtube.com/@programminglifeio), I have created easy-to-understand videos explaining the most important design patterns. If these do not meet your preferences, there are numerous other resources available on YouTube, as well as various blogs and websites, should you favour reading over video content.

## The unavoidable Interview Process discussion

Before we delve into the interview process, let’s discuss how you can become a better Enterprise Software Engineer. There are two key aspects:

1. **Code every day** — Regardless of your job, the likelihood that you write a lot of code during your regular 9-to-5 is slim. If you do, consider yourself fortunate and apply the following principles over the weekend. If you don’t, seek opportunities to tackle challenging projects and solve difficult problems. For this, resources such as Manning’s LiveCoding and CodeCrafters’ “Build Your Own X” GitHub repository can offer numerous topics and projects to refine your skills. If you find yourself struggling to commit, reassess your priorities and passion for software development. If it’s not there, it might be worth exploring what you truly love.
2. **Solve very hard problems** — Similar to progressive overload in the gym, the key to developing new skills in software is to tackle increasingly challenging problems and projects. With each problem solved or project completed, ensure the application of the aforementioned principles, making them a routine part of your software development practice.

Regarding the interview, the central question is: Are interviews focusing solely on algorithms, data structures, or system design sufficient? The answer is no. Neither approach can accurately assess whether someone is a good Enterprise Software Engineer. Are they necessary? Yes, but only in the initial stage of the interview process, to distinguish poor programmers from competent ones. Following this, home assignments or any form of coding sessions, where Enterprise Software Development principles are applied, offer a much more effective method to evaluate if someone is a suitable candidate for an enterprise software engineer role.

## Conclusion

During this article, I revisited concepts previously covered to emphasize their critical importance in developing large enterprise systems. Throughout my career, I’ve witnessed these concepts being sacrificed for speed, which ultimately compromised the software system and burdened future development teams. This is a primary reason why ‘legacy system’ or ‘legacy code’ often carries a negative connotation.

If sufficient thought, effort, and time are invested in designing and architecting a complex system, future development can be expedited tenfold, if not more. While initial features may take longer to deploy in production, subsequent ones will be developed significantly faster, saving immense amounts of time, effort, and headaches. Moreover, even vast systems can be maintained and extended by just a few skilled enterprise engineers, enhancing their job satisfaction by sparing them from dealing with unwieldy legacy code. In the long run, enterprises will benefit financially and operationally.

> The key takeaway for engineers is to hone the skills outlined above using the techniques discussed in this article. Additionally, this piece, along with the resources mentioned, should support your arguments for the necessity of proper design and development of enterprise systems over immediate speed gains.

> For enterprises, the investment in such skilled engineers will mitigate future issues and save money over time.

Thank you for reading.`;export{e as default};
