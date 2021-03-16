    /*FUNCTIONS

    TYPES OF FUNCTIONS

    1. Named Functions: They are executed when called by name

    2. Anonymous Functions: They are runned once triggered by specific events

    3. Immediately Invoked functions: They run the moment the browser enconters them.

    */

    //Named functions

    //Multiplication Function: This named function takes in two numbers (firstDigit, secondDigit) and multiplies firstDigit and secondDigit as in ((firstDigit * secondDigit)
    function Multiply(firstDigit, secondDigit) {
      let multiplication = firstDigit * secondDigit;
      return multiplication;
    }

    console.log(
      Multiply(89, 106) + " : was calculated with the Multiply function"
    );
    console.log(
      Multiply(10, 70) + " : was calculated with the Multiply function"
    );

    //Division Function: This named function takes in two numbers (firstDigit, secondDigit) and divides firstDigit by secondDigit as in ((firstDigit / secondDigit)
    function Division(firstDigit, secondDigit) {
      let result = firstDigit / secondDigit;
      return result;
    }

    console.log(
      Division(0, 9) + " : was calculated with the Division function"
    );
    console.log(
      Division(90, 0) + " : was calculated with the Division function"
    );
    console.log(
      Division(0.000001, 0.9) + " : was calculated with the Division function"
    );

    //Addition Function: This named function takes in two numbers (firstDigit, secondDigit) and sums firstDigit and secondDigit as in ((firstDigit + secondDigit)
    function Addition(firstDigit, secondDigit) {
      let result = firstDigit + secondDigit;
      return result;
    }

    console.log(
      Addition(65, 3445) + " : was calculated with the Addition function"
    );
    console.log(
      Addition(90, 97) + " : was calculated with the Addition function"
    );

    console.log(
      Addition(706, 574854) + " : was calculated with the Multiply function"
    );

    //Subtraction Function: This named function takes in two numbers (firstDigit, secondDigit) and subtracts firstDigit from secondDigit as in ((firstDigit - secondDigit)
    function Subtraction(firstDigit, secondDigit) {
      let result = firstDigit - secondDigit;
      return result;
    }

    console.log(
      Subtraction(890, 4665) + " : was calculated with the Subtraction function"
    );

    console.log(
      Subtraction(7988, 7470) +
        " : was calculated with the Subtraction function"
    );

    //findBiggestFraction Function: This named function takes in two numbers (firstDigit, secondDigit) and checks to see which of them is bigger. It returns the biggest fraction as result.
    function findBiggestFraction(firstFraction, secondFraction) {
      firstFraction > secondFraction
        ? console.log(
            firstFraction,
            " : Your first fraction is the biggest fraction"
          )
        : console.log(
            secondFraction,
            " : Your second fraction is the biggest fraction"
          );
    }

    findBiggestFraction(7 / 8, 9 / 8);
    findBiggestFraction(9, 1 / 2);

    //Anonymous Function
    //Annonymous Functions dont have names, so they mut be tied to a variable, or an event, etc

    //This anonymous function tied to variable modulus calculates the modulus of two numbers.
    let modulus = function (firstDigit, secondDigit) {
      //so a wrong value isnt gotten, Modulus should come in this format biggestNmber % smallerNumber
      firstDigit > secondDigit
        ? console.log(firstDigit % secondDigit)
        : console.log(secondDigit % firstDigit);
    };

    modulus(78, 90), "is the remainder of the two digits";

    modulus(20, 2), "is the remainder of the two digits";

    modulus(2, 91), "is the remainder of the two digits";

    //This anonymous function tied to variable Algebra, gets the multiplication between the first & second argument and subtracts the addition of the first & second argument from it.
    let Algebra = function (firstDigit, secondDigit) {
      let result = firstDigit * secondDigit - (firstDigit + secondDigit);
      return result;
    };

    console.log(Algebra(7, 3), "Algebra anonymous function rusult");

    console.log(Algebra(675, 9778), "Algebra anonymous function rusult");

    //Immediately Invoked Function

    //This immediately invoked function calculates the sum of the two arguments passed to it immediately the browser encounters it
    let FirstDigit = 105;
    let SecondDigit = 10001;
    (function (FirstDigit, SecondDigit) {
      console.log(
        FirstDigit + SecondDigit,
        "This is an immediately invoked function"
      );
    })(FirstDigit, SecondDigit);

    //This immediately invoked function calculates the sum of the two arguments passed to it immediately the browser encounters it
    let firstDigit = 56;
    let secondDigit = 97;
    (function (firstDigit, secondDigit) {
      console.log(
        firstDigit * secondDigit,
        "This is also an immediately invoked function"
      );
    })(firstDigit, secondDigit);

    /*OBJECTS*/
    const course = {
      title: "C++ for dummies",
      instructor: "Oluwasegun Ajayi",
      level: "Beginner",
      published: 2010,
      views: 293430,
      updateViews: function () {
        return ++course.views;
      },
    };

    console.log(course);
    console.log(course.title);
    console.log(course.instructor);
    console.log(course.level);
    console.log(course.published);
    console.log(course.views, "views before calling updateViews method");
    course.updateViews();
    console.log(course.views, "views after calling update views method");

    //Object Constructors: Are templates for creating objects

    function Course(title, instructor, level, published, views) {
      this.title = title;
      this.instructor = instructor;
      this.level = level;
      this.published = published;
      this.views = views;
      this.updateViews = function () {
        return ++this.views;
      };
    }

    const Csharp = new Course(
      "C# for dummies",
      "Oluwasegun Ajayi",
      "Beginner",
      2013,
      345
    );

    console.log(Csharp);
    console.log(Csharp.title);
    console.log(Csharp.instructor);
    console.log(Csharp.level);
    console.log(Csharp.published);
    console.log(Csharp.views, "before calling updateView method");
    Csharp.updateViews();
    console.log((Csharp.views), "after calling updateView method");

    //This function takes in 3 arguments, the first two arguments must be intergers and the 3rd either "multiply", "divide", or "sum"
    function Assignment(firstNumber, secondNumber, String) {
      if (String == "multiply") {
        let result = firstNumber * secondNumber;
        return result;
      } else if (String == "divide") {
        return firstNumber / secondNumber;
      } else if (String == "sum") {
        return firstNumber + secondNumber;
      } else {
        return "Please follow the rules. Make sure your first two arguments are numbers and the third argument is either 'multiply', 'divide' or 'multiply'";
      }
    }

    console.log(Assignment(5, 6, "multiply")); //This returns 30

    console.log(Assignment(7, 3, "multiply")); // This returns 21

    console.log(Assignment(40, 10, "sum")); // This return 50

    console.log(Assignment(100, 25, "divide"));// This returns 4

    console.log(Assignment(8, 9, 150)); // This returns "Please follow the rules. Make sure your first two arguments are numbers and the third argument is either 'multiply', 'divide' or 'multiply'"

    console.log