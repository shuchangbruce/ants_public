# Ants vs. Some-Bees

This module is a simple turn-based tower-defense game played on the command-line, completed as part of a [course](http://arch-joelross.rhcloud.com/) at the UW ISchool. 

The below questions should be answered (in detail!) regarding your submission!


##### 1. Spend some time reading through the provided code _carefully_ to make sure you understand it. After you've read the code, in the space below list any _design patterns_ we discussed in class that you can find (note that you may need to revisit the code after each lecture). Be clear about which pattern is used, where, and _why it is being employed_.
> There are singleton patterns here in the game. In hive and antcolony, there are static methods that are globally variable. Thus index.js can use them. Those static method ensures there is only one scene comes out. 
> 
> There are also some state patterns here. Because the game plays by turns and each turn represents a new state played by the Antgame().
> 
> There are some factory method paterrns also. While all ants categories are defined by abstract ant. Then the game play only depends on ant. 

##### 2. After you've read the code, is there anywhere that it could be re-architected (e.g., using design patterns) to be more changeable or reusable? 
> The act() seem to be used a lot. So it should be added to the ant. Also I think we can use simply factory pattern to produce insects when we deploy it. Thus the code will be more easier to understand and easier for future update and change. 


##### 3. The tunnels in the `AntColony` are structured as a ___Linked List___ (where each element is a `Place`, and the `exit` and `entrance` variables are the traditional `next` and `prev`). Why is this data structure appropriate (as opposed to, say, an array). _You may need to revisit your notes from CSE 143._
> I think the linked list structure is a very birlliant design. First, it is convinient for coders to use. I think the linked list structure is a very birlliant design. First, tunnel are sequential elements. The linked design is easier to track the sequence. Second, it's easier to have multiple rows of tunnels because each is a individual linked list. Third, it can be added infinitely.


##### 4. Describe the overall architecture you used to implement the different components of this assignment. Did you use inheritance? A particular design pattern?
> I definitely used inheritance for insects to share common functions. Because each insect shares a lot common qualities and methods. I also used a lot of private variables to keep the modularity and low coupling. 

##### 5. Specifically, discuss your use of object-oriented design patterns in your program. What patterns did you use in your implementation (be specific)? Why? Is there anywhere you explicitly decided _not_ to use a pattern (e.g., because doing so would have made it more difficult to change the code later, etc)? Be detailed---you should reflect carefully on your own design and architecture work!
> I've used factory method pattern in this assignment. I decide to use this method because of the massive categories of ants. In this kind of situation, if the game play specifies and implements each ant category, any changes to ant categories will have impacts on game play. The play is dependent on each category and the modification of ants will require modification in gameplay methods. Thus we need to give a super class for ants which they depent on. That is the ant class. Then we make game play dependent on ant class. Ant is an abstract class that has no real meaning. It just defines various ants. Concrete ants category like Fire depends on ant abstraction because they implement ant interface in the ant abstract class. 
> 
> 
##### 6. Approximately how many hours did it take you to complete this assignment? #####
> 20


##### 7. Did you receive help from any other sources (classmates, etc)? If so, please list who (be specific!). #####
> Joel


##### 8. Did you encounter any problems in this assignment we should warn students about in the future? How can we make the assignment better? #####
>no

