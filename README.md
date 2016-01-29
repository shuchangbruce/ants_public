# Ants vs. Some-Bees

This module is a simple turn-based tower-defense game played on the command-line, completed as part of a [course](http://arch-joelross.rhcloud.com/) at the UW ISchool. 

The below questions should be answered (in detail!) regarding your submission!


##### 1. Spend some time reading through the provided code _carefully_ to make sure you understand it. After you've read the code, in the space below list any _design patterns_ we discussed in class that you can find (note that you may need to revisit the code after each lecture). Be clear about which pattern is used, where, and _why it is being employed_.
> While this problem first seem tempting to be done in Strategy and Composite Pattern. The codes use decorator pattern to attach additional responsibilities to an object dynamically. Such pattern offers possbilites to add more components. In this case, categories of ants and places. Decorators provide a flexible alternative to subclassing for extending functionality.  

##### 2. After you've read the code, is there anywhere that it could be re-architected (e.g., using design patterns) to be more changeable or reusable? 
> The act() seem to be used a lot. So it should be added to the ant.


##### 3. The tunnels in the `AntColony` are structured as a ___Linked List___ (where each element is a `Place`, and the `exit` and `entrance` variables are the traditional `next` and `prev`). Why is this data structure appropriate (as opposed to, say, an array). _You may need to revisit your notes from CSE 143._
> I think the linked list structure is a very birlliant design. First, it is convinient for coders to use. I think the linked list structure is a very birlliant design. First, tunnel are sequential elements. The linked design is easier to track the sequence. Second, it's easier to have multiple rows of tunnels because each is a individual linked list. Third, it can be added infinitely.


##### 4. Describe the overall architecture you used to implement the different components of this assignment. Did you use inheritance? A particular design pattern?
> I used inheritance for ants to share common functions. I also used decorator pattern because it is easier to supplement various ants. 


##### 5. Specifically, discuss your use of object-oriented design patterns in your program. What patterns did you use in your implementation (be specific)? Why? Is there anywhere you explicitly decided _not_ to use a pattern (e.g., because doing so would have made it more difficult to change the code later, etc)? Be detailed---you should reflect carefully on your own design and architecture work!
> I use decorator pattern in my implementation. This pattern makes that multiple decorators can be stacked on top of each other, each time adding a new functionality to the overridden method.


##### 6. Approximately how many hours did it take you to complete this assignment? #####
> 20


##### 7. Did you receive help from any other sources (classmates, etc)? If so, please list who (be specific!). #####
> Joel


##### 8. Did you encounter any problems in this assignment we should warn students about in the future? How can we make the assignment better? #####
>no

