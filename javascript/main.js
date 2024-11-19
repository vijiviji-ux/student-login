function submitForm() {
    
    const studentLogin = {
        firstname: document.getElementById('name').value,
        student_id: document.getElementById('student_id').value,
        age: document.getElementById('age').value,
        number:document.getElementById('number').value,
        
        fullDetails: function () {
            return ` Name: ${this.firstname} 
            Student id:${this.student_id} 
            Age: ${this.age} 
            Number:${this.number}`;
        }
    };

    
    console.log(studentLogin.firstname);
    console.log(studentLogin.fullDetails());

    
    document.getElementById('output').textContent = studentLogin.fullDetails();
}
