# JavaScript and classes

Yes, JavaScript has classes, but with a twist.  JavaScript is fundamentally a prototype-based language, meaning objects inherit properties and methods from a prototype object.  However, since ECMAScript 2015 (ES6), JavaScript introduced a class syntax that mimics class-based languages like Java.

These classes are essentially syntactic sugar on top of the existing prototype-based inheritance.  They provide a familiar way to structure code and create objects, but under the hood they still rely on prototypes.  This can be helpful for developers coming from class-based languages, but it's important to understand the underlying mechanism.
 
So, while JavaScript doesn't have classes in the same way as Java, it provides a class-like syntax that makes it easier to write object-oriented code.

# OOP

OOP is a programming paradigm for structuring code around objects.  An object encapsulates data (properties) and actions (methods) that operate on that data. This approach promotes modularity, reusability, and easier maintenance of complex applications.

# Objects

In JavaScript, it's actually prototypes => objects. Classes are introduced as a syntactic layer on top of prototypes to provide a more familiar structure for those coming from class-based languages.

## why use OOP

## parts of OOP
object literal 

- constructor function
- prototypes
- classes
- instances (new, this)

## 4 Pillars
- Abstraction => in object and function we will able use it (also with different use cases) and dont have to understand the logic behind it and how it computes, They bundle data (properties) and the actions (methods) that operate on that data means Abstraction in JS.

- Inheritance => Inheritance allows you to create new objects (subclasses) that inherit properties and methods from existing objects (superclasses). Subclasses reuse the functionalities of the superclass and can add their own specialized features. Subclass can overwrite the superclasses and also,  

You define a subclass using the "class" keyword, the subclass name, and the "extends" keyword to specify the superclass it inherits from. The subclass constructor can call the superclass constructor using "super()" to inherit properties from the superclass.


- Encapsulation => in some objects we have some variable which is in object but cannot be access by outer enviroment (object.keys) and that hiding the key/variable/element is called encapsulation.

- polymorphism =>  it refers to the ability of objects to respond differently to the same method call.like Inheritance a block of code can be reused based on use case and also overwrite it as per need



JavaScript has prototypal behaviour- because of Prototype we have access to "new", "classes", "this" => this is Javascript behaviour (read it)
