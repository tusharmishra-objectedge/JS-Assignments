const poll = {
    question: 'What is your favourite programming language?',
    options: ['JavaScript', 'Python', 'Rust', 'C++'],
    replies: [0, 0, 0, 0],
    registerNewAnswer: function() {
        const input = prompt(`${this.question}\n0: ${this.options[0]}\n1: ${this.options[1]}\n2: ${this.options[2]}\n3: ${this.options[3]}\nInput the option number - `);
        if (!isNaN(input) && input >= 0 && input < this.options.length) {
            this.replies[input]++;
        } else {
            console.log('Invalid input. Please try again.');
        }
        let type = prompt(`Enter type of output (array/string) - `)
        this.displayResults(type.toLowerCase())
        this.registerNewAnswer()
    },
    displayResults: function(type = 'array') {
        if (type === 'string') {
            console.log(`Poll results are ${this.replies.join(', ')}`);
        } else {
            console.log(this.replies);
        }
    }
};

poll.registerNewAnswer();
