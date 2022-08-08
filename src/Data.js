let students = [
    {
        name: "Beni",
        city: "Ashkelon",
        number: 1,
        age: 12,
        img: "HD.jpeg",
        Duedate: "30/06/2024",
    },
    {
        name: "Yishai",
        city: "yoqneam",
        number: 2,
        age: 15,
        img: "HD.jpeg",
        Duedate: "30/06/2024",
    },
    {
        name: "aviel",
        city: "petah tikva",
        number: 3,
        age: 22,
        img: "HD.jpeg",
        Duedate: "30/06/2024",
    },

    {
        name: "daniel",
        city: "catville",
        number: 4,
        age: 3,
        img: "HD.jpeg",
        Duedate: "never"
    }
]

export function getStudents() {
    return students;
}

export function getStudent(name) {
    return students.find((stu) => stu.name === name);
}

export function deleteStudent(name) {
    students = students.filter((stu) => stu.name !== name);
}
