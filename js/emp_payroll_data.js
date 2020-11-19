class EmployeePayrollData{
    name;


   constructor(...params){
        this.name = params[0];
        this.picture = params[1];
        this.gender = params[2];
        this.department = params[3];
        this.salary = params[4];
        this.startDate = params[5];
        this.note = params[6];
    }

  /*  get id(){return this._id;}
    set id(id){
        if(id > 0) this._id = id;
        else throw "Invalid id";
    }*/

    get name(){return this._name;}
    set name(name){
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(nameRegex.test(name))this._name = name;
        else throw "Name is Incorrect";
    }

    get picture(){return this._picture;}
    set picture(picture){this._picture = picture;}

    get salary(){return this._salary;}
    set salary(salary){ this._salary = salary;}

    get gender(){return this._gender;}
    set gender(gender){this._gender = gender;}

    get department(){return this._department;}
    set department(department){this._department = department;}

    get startDate(){return this._startDate;}
    set startDate(startDate){
       // if(startDate <= new Date())this._startDate = startDate;
       // else throw "Enter valid date";
       this._startDate = startDate;
    }

    get note(){return this._note;}
    set note(note){this._note = note;}

    toString(){
        const options ={ year : "numeric", month : "long", day : "numeric"};
        const empDate = this.startDate === undefined ? "undefined" :
                       this.startDate.toLocaleDateString("en-US", options);
       return "name = "+ this.name + " gender = "+ this.gender +" department = "+ this.department + " salary = "+ this.salary;
    }
}