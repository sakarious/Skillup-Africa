    class Book {
        constructor(
            name,
            author,
            field,
        ){
            this.name = name;
            this.author = author;
            this.field = field;
        }

        addAuthor = function(name){
            this.author = name;
        }
    }

    const Maths = new Book(
        "New General Mathematics",
        "Oluwasegun",
        "Science"
    );

    const English = new Book (
    "Essential English",
    "Oluwatobi",
    "Art");

    const Lit = new Book(
        "Women of Owu",
        "Olajumoke",
        "Art"
    );

    console.log("List of Book for Mathematics", Maths);
    console.log("List of Book for English Language", English);
    console.log("List of Book for Literature in English:", Lit);

    class Users{
        constructor(
            name,
            yearOfBirth,
            sex,
            status,
            dateRegistered,
        ){
            this.name = name;
            this.yearOfBirth = yearOfBirth;
            this.sex = sex;
            this.status = status;
            this.dateRegistered = Date();
        }

        age = function () {
            let now = new Date();
            let dob = new Date(this.yearOfBirth);
            let SSA = now - dob //Milliseconds Spent Alive
            let DSA = SSA / (1000 * 3600 * 24)
            let YSA = Math.floor(DSA / 365);
            return YSA;
        }
    }

    const Segun = new Users( 
        "Oluwasegun Ajayi",
        "1999",
        "Male",
        "Active User"
    );

    console.log(Segun);

    const content = `
    <main>
        <h1>List of Classes & Objects Created</h1>
        <article>
            <h2>Class Name: Book</h2> <hr>
            <h3>Book 1</h3>
            <h4>Name: ${Maths.name}</h4>
            <h4>Author: ${Maths.author}</h4>
            <h4>Field: ${Maths.field}</h4>
            <hr>
            <h3>Book 2</h3>
            <h4>Name: ${English.name}</h4>
            <h4>Author: ${English.author}</h4>
            <h4>Field: ${English.field}</h4>
            <hr>
            <h3>Book 3</h3>
            <h4>Name: ${Lit.name}</h4>
            <h4>Author: ${Lit.author}</h4>
            <h4>Field: ${Lit.field}</h4>
            <hr>

            <h2>Class Name: Users</h2>
            <h3>User 1</h3>
            <h4>Name: ${Segun.name}</h4>
            <h4>Year of Birth: ${Segun.yearOfBirth}</h4>
            <h4>Age: ${Segun.age()}</h4>
            <h4>Sex: ${Segun.sex}</h4>
            <h4>Status: ${Segun.status}</h4>
            <h4>Date Registered: ${Segun.dateRegistered}</h4>
        </article>
    </main>
`;

    document.body.innerHTML = content;
